/// <reference  types="Cypress" />

describe("Validate webdriveruni homepage links", () => {
    it("Confirm links ", () => {
        
        cy.visit("http://webdriveruniversity.com");
        cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
        cy.url().should('include',"contactus");
        cy.go('back');
        cy.reload();
        cy.url().should('include',"http://webdriveruniversity.com");
    
        // cy.reload(true);//odświeżenie strony z użyciem cache
        cy.go("forward");
        cy.url().should("include","contactus");
        cy.go("back");
        cy.get("#login-portal").invoke("removeAttr","target").click({force:true});
        cy.url().should("include","Login-Portal");
        cy.go("back")
        cy.get("#to-do-list").invoke("removeAttr","target").click({force:true});
        cy.url().should("include","To-Do-List");
        cy.go("back");
    })
 

})