/// <reference types="cypress" />
import { Character } from "@/interfaces/api-characters";

declare global {
  namespace Cypress {
    interface Chainable {
      // Global
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
      // Home page
      checkCardAndModalCharacter(character: typeof eBombComic): Chainable<void>;
      nextPagination(): Chainable<void>;
      openMenu(): Chainable<void>;
      // Characters Page
    }
  }
}

