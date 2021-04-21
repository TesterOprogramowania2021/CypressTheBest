/// <reference  types="Cypress" />


describe("Test Contact Us from automation test store", () => {

    before(()=>{
        cy.fixture("userDetails").as("user");
    })

    it("Should be able to submit a saccesful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function (buttonText) {
            cy.log("Get contact us button text: " + buttonText.text());
        })
        cy.get("@user").then((user)=>{
            cy.get('#ContactUsFrm_first_name').type(user.firstName);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
        // cy.xpath("//a[contains(@href, 'contact')]").click();
        
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("Some text message writing");
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        cy.log("Test has complited!");
    })



})