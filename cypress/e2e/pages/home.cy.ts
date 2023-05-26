const firstMovie = {
  name: "Avengers: Secret Wars",
  date: "28 de Abril, 2026",
};

describe("Test home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Successfully loads", () => {
    // Before each does this test
  });

  it("Check page and its elements", () => {
    // Check if it loads
    cy.dataCy("title")
      .should("exist")
      .should("contain.text", "Últimas producciones de Marvel");

    cy.dataCy("card-movie").should("have.length", "20");
    cy.dataCy("card-movie-img").should("have.length", "20");
    cy.dataCy("card-movie-img")
      .first()
      .should("have.attr", "alt", `${firstMovie.name} poster`);

    cy.dataCy("card-movie-is-premiered").first().should("exist");
    cy.dataCy("card-movie-is-premiered")
      .first()
      .should("contain.text", "Por estrenar");

    cy.dataCy("card-movie-name").first().should("exist");
    cy.dataCy("card-movie-name")
      .first()
      .should("contain.text", firstMovie.name);
    cy.dataCy("card-movie-date")
      .first()
      .should("contain.text", firstMovie.date);
  });
});

