class HomePage_PO{

    selectors = {
        slectorContactUs: "#contact-us"
    }

    visitHomepage(){
        cy.visit(Cypress.env("webdriver-homepage"));
    }
    clickOn_ContactUs_Button(){
        cy.get(this.selectors.slectorContactUs).invoke("removeAttr","target").click({force:true});
        cy.screenshot()
        cy.screenshot("Nazwa zrzutu ekranu")
    }






}
export default HomePage_PO;