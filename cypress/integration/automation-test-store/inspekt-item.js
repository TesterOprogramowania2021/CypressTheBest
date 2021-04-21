/// <reference  types="Cypress" />



describe("Checked some feauter in test shop, with adding something to card and much more",() => {
    it("Clikc on a first item", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();

    })
    it("Clikc on a first item text", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(takenText){
            console.log("Name of item " + takenText.text());
        })
        
    })
    it("Clikc on a first item using index", () => {
        cy.visit("https://automationteststore.com/");
        cy.get(".fixed_wrapper").find(".fixed").eq(0).click();
        
    })


})