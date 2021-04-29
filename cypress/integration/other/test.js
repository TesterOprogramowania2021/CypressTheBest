/// <reference  types="Cypress" />

describe("Test", function(){
    it("Validate e two different domains in one test case",function(){
        cy.visit("https://www.plushbezlimitu.pl/telefony/przenies-numer");
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.get('#rodo-accept-all').click({force:true})
        
        cy.get("#phone-lg-k42-green",{timeout:5000}).should("have.css", "background-image", "linear-gradient(rgb(255, 218, 93), rgb(250, 193, 0))",{timeout:3000}).click({force:true})
        



    })
 

})