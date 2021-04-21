/// <reference  types="Cypress" />

describe("Verify radiobuttons via webdriveruni", () => {
    before(()=>{
        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });
    })
    it("Check specyfic radio buttons", () => {
        cy.get("#radio-buttons").find("input[type='radio']").first().check();
        cy.get("#radio-buttons").find("input[type='radio']").eq(1).check();
    })
    it("Validate the state of specyfic radio button", () => {
        cy.get("[value='lettuce']").should("not.be.checked");
        cy.get("[value='cabbage']").should("be.disabled");
        cy.get("[value='pumpkin']").should("be.checked");

    })
})
