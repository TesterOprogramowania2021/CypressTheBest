/// <reference  types="Cypress" />

describe("Test data picker via webdriver uni", () => {
    it("Select data from the datepicker", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
        
        let date = new Date();
        date.setDate(date.getDate()); //get current date
        cy.log(date.getDate())
        let date2 = new Date();
        date2.setDate(date.getDate()+5); //get current date
        cy.log(date2.getDate());
    })
 

})