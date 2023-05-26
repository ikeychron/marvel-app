describe("Test navbar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Successfully loads", () => {
    // Before each does this test
  });

  it("Check navbar and its elements", () => {
    // Check if it loads
    cy.dataCy("navbar").should("exist");

    /* Logo */
    cy.dataCy("nav-logo")
      .should("exist")
      .should("have.attr", "alt", "Marvel logo");

    /* Link home */
    cy.dataCy("nav-home")
      .should("exist")
      .should("have.attr", "href", "/")
      .should("contain.text", "Inicio");

    /* Link characters */
    cy.dataCy("nav-characters")
      .should("exist")
      .should("have.attr", "href", "/personajes")
      .should("contain.text", "Personajes");

    /* Link icon notificacion */
    cy.dataCy("nav-notification")
      .should("exist")
      .find("img")
      .should("have.attr", "alt", "Notification icon");

    /* Link icon notificacion */
    cy.dataCy("nav-setting")
      .should("exist")
      .find("img")
      .should("have.attr", "alt", "Setting icon");

    /* Menu */
    cy.dataCy("menu").should("not.exist");
  });

  it("Test elements", () => {
    /* Links */
    cy.dataCy("nav-characters").click();
    cy.url().should("include", "/personajes");

    cy.dataCy("nav-home").click();
    cy.url().should("include", "/");

    /* Icons */
    cy.dataCy("nav-notification").click();
    cy.dataCy("menu")
      .should("exist")
      .find("a")
      .should(
        "contain.text",
        "No olvides mandar un mensaje para contratar a Carlos Barrios. 📱"
      );

    cy.dataCy("nav-setting").click();
    cy.dataCy("menu").should("not.exist");
  });
});

