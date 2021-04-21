/// <reference  types="Cypress" />

describe("Verifying variables, cypress commands and jquerry commands", () => {
    it("Navigate to specific product pages ", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();
    })
    it("Navigate to specific product pages and checked headrer ", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        const header = cy.get("h1 span.maintext");
        //    cy.log(header);
        //    cy.log(header.text());
        cy.get("h1 span.maintext").then(function ($headreText) {
            const hederText = $headreText.text();
            cy.log(hederText);
            expect(hederText).is.eq("Makeup");
        })
    })
    it("Validate properties of the Contact Us", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        //Cypress chain theme
        cy.contains("#ContactUsFrm", "Contact Us Form").find("#field_11").should("contain", "First name:");

        //Cypress Jquerry
        cy.contains("#ContactUsFrm", "Contact Us Form").then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name');
            //Cypress command Closure
            cy.get("#field_11").then(fnText => {
                cy.log(fnText.text());
                cy.log(fnText);

            })
        })
    })

})