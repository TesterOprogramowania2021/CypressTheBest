/// <reference  types="Cypress" />

describe("Interact with dropdown lists by atribiut value", () => {
    it("Check specyfic radio buttons", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });
        cy.get("#dropdowm-menu-1").select("c#");
        cy.get("#dropdowm-menu-2").select("testng");
        cy.get("#dropdowm-menu-3").select("jquery");
    })
    it("Check specyfic radio buttons by visible text", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });
        cy.get("#dropdowm-menu-1").select("Python").should("have.value","python");
        cy.get("#dropdowm-menu-2").select("Maven").contains("Maven");
        cy.get("#dropdowm-menu-3").select("JavaScript").should("have.value","javascript");
    })
    it("Check specyfic radio buttons by visible text", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });
        cy.get("#dropdowm-menu-2").select("Maven").contains("Maven");
        cy.get("#dropdowm-menu-3").select("JavaScript").should("have.value","javascript");
    })
})
