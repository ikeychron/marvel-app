const eBombComic = {
  name: "A-Bomb (HAS)",
  description:
    "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!",
  comics: 4,
  series: 2,
  stories: 7,
  events: 0,
};
const absorbingMan = {
  name: "Absorbing Man",
  description: "",
  comics: 97,
  series: 48,
  stories: 109,
  events: 4,
};

Cypress.Commands.add("checkCardAndModalCharacter", (character) => {
  cy.dataCy("card-character").should("have.length", 5);

  // Check E-Bomb Card
  cy.dataCy("card-character-name").eq(1).should("contain.text", character.name);

  cy.dataCy("card-character-image")
    .eq(1)
    .should("have.attr", "alt", `${character.name} image`);

  cy.dataCy("card-character-comics")
    .eq(1)
    .should("contain.text", character.comics);

  cy.dataCy("card-character-movies")
    .eq(1)
    .should("contain.text", character.series);

  cy.dataCy("card-character-movies")
    .eq(1)
    .should("contain.text", character.series);

  cy.dataCy("modal-character").should("not.exist");

  // Open modal
  cy.dataCy("card-character").eq(1).click();

  cy.dataCy("modal-character").should("exist");

  cy.dataCy("modal-character-name")
    .should("exist")
    .should("contain.text", character.name);

  cy.dataCy("modal-character-description")
    .should("exist")
    .should("contain.text", character.description);

  cy.dataCy("modal-character-series")
    .should("exist")
    .should("contain.text", character.series);
  cy.dataCy("modal-character-comics")
    .should("exist")
    .should("contain.text", character.comics);
  cy.dataCy("modal-character-stories")
    .should("exist")
    .should("contain.text", character.stories);
  cy.dataCy("modal-character-events")
    .should("exist")
    .should("contain.text", character.events);

  cy.dataCy("modal-character-btn-close").should("exist").click();
});

describe("Test home page", () => {
  beforeEach(() => {
    cy.visit("/personajes");
  });

  it("Successfully loads", () => {
    // Before each does this test
  });

  it("Check info cards", () => {
    /* Card progress */
    cy.dataCy("card-title-progress")
      .should("exist")
      .should("contain.text", "Progreso de películas producidas");

    cy.dataCy("progress-text-goals").should("exist");
    cy.dataCy("progress-text-produceds").should("exist");

    // Check produceds movies are less than the movies goal
    cy.dataCy("progress-text-produceds")
      .invoke("text")
      .then(parseFloat)
      .then((valor1) => {
        cy.dataCy("progress-text-goals")
          .invoke("text")
          .then(parseFloat)
          .then((valor2) => {
            expect(valor1).to.be.lessThan(valor2);
          });
      });

    /* Card video */
    cy.dataCy("card-video")
      .should("exist")
      .should("have.attr", "src", "https://www.youtube.com/embed/NaWIBRvSWE8");
    cy.dataCy("card-video").should(
      "have.attr",
      "title",
      "YouTube video player"
    );

    /* Card image */
    cy.dataCy("card-image")
      .should("exist")
      .should("have.attr", "alt", "Tobey, Andrew and Tom as Spidermans image");
  });

  it("Check card character, modal and pagination", () => {
    // Check first page
    cy.dataCy("pagination-text")
      .should("exist")
      .should("contain.text", "1 / 313");

    cy.dataCy("pagination-btn-next")
      .should("exist")
      .should("not.have.attr", "disabled");

    cy.dataCy("pagination-btn-previous")
      .should("exist")
      .should("have.attr", "disabled");

    cy.checkCardAndModalCharacter(eBombComic);

    // Second page
    cy.dataCy("pagination-btn-next").click();

    cy.dataCy("pagination-btn-previous").should("not.have.attr", "disabled");

    cy.checkCardAndModalCharacter(absorbingMan);

    // Come back to first page
    cy.dataCy("pagination-btn-previous").click();
  });
});

