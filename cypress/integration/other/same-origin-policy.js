/// <reference  types="Cypress" />

describe("Cypress web security", function(){
    it("Validate e two different domains in one test case",function(){
        cy.visit("http://webdriveruniversity.com");
        cy.visit("https://automationteststore.com/");
    })
    it("Validate e two different domains in one test case via user actions",function(){
        cy.visit("http://webdriveruniversity.com");
        cy.get("#automation-test-store").invoke("removeAttr","target").click();

        
    })

})