/// <reference  types="Cypress" />

describe("Test contact us form WebdriverUni", () => {
    before(()=>{
        cy.fixture("example").then(data=>{
            // this.data = data;
            globalThis.data = data;
        })
    })
    beforeEach(()=>{
        cy.navigateToHomepageAndContactUs();
    })
    it("Should be able to submit a saccesful submission via contact us form", () => {
        //    cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html"); 
        

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'Contact-Us');
        // cy.get('[name="first_name"]').type(data.name);
        // cy.get('[name="last_name"]').type(data.lestName);
        // cy.get('[name="email"]').type(data.email);
        // cy.get('textarea.feedback-input').type(data.opinion);
        cy.webdriverUni_contactForm_submision(data.name, data.lestName, data.email, data.opinion, "h1", "Thank You for your Message!");
        // cy.get('[type="submit"]').click();
        // cy.get('h1').should('have.text', 'Thank You for your Message!');
        // cy.visit("http://webdriveruniversity.com/");
        //{force: true} - jeśli nie może wykreyć elementu, bo jego wartość to 0,0 pixela to stisuje poniższe rozwiązanie
        // cy.get('#contact-us').click({force: true});

    })
    it("Should not be able to submit a succesful submision via contact us form ass all fields requaired", () => {
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html"); 
       
        cy.get('[name="first_name"]').type(Cypress.env("first_name"));
        cy.get('[name="last_name"]').type("Kowalski");
        cy.get('textarea.feedback-input').type("In my opinion this is the best Cypress curs");
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');

    })

})