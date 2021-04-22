/// <reference  types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(()=>{
        cy.visit("/",{timeout:60000});
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });
    })
    it("Check and validate checkbox", () => {
       
        // cy.get('#checkboxes > :nth-child(1) > input').check();
        // cy.get('#checkboxes > :nth-child(1) > input').check().should("not.be.checked");
        Cypress.config("defaultCommandTimeout",20000)
        cy.get('#checkboxes > :nth-child(1) > input').as("option-1");
        cy.get("@option-1").check(),{timeout:30000}
        cy.get("@option-1").check().should("be.checked");
    })
    it("Check and validate uncheck checkbox ", () => {
        
        cy.get(':nth-child(5) > input').as("option-3");
        cy.get("@option-3").uncheck().should("not.be.checked");
    })
    it("Check and validate and checking few checkboxes ", () => {
        
        //znajdujemy selektor wspólny dla wszystkich checkboxów, póćnież w check w nawiasie [] wpisujemy wartości parametru value
        cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should("be.checked");

    })


})