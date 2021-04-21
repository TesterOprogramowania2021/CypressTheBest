/// <reference  types="Cypress" />

describe("Verify autocomplete dropdown list", () => {
    it("Select specyfic product via autocomplit list", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click({ force: true });
        cy.get("#myInput").type("A");
        cy.get("#myInputautocomplete-list >*").each(($el, index,list)=>{
            const prodText = $el.text();
            const productToSelect = "Avacado";
            if(prodText === productToSelect){
                $el.click();
                cy.get("#submit-button").click();
                cy.url().should("include",productToSelect);
            }
        }).then(()=>{
            cy.get("#myInput").type("G");
            cy.get("#myInputautocomplete-list >*").each(($el, index,list)=>{
                const prodText = $el.text();
                const productToSelect = "Grapes";
                if(prodText === productToSelect){
                    $el.click();
                    cy.get("#submit-button").click();
                    cy.url().should("include",productToSelect);
                }
            })
        })
    })
    

})
