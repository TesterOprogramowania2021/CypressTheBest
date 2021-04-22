class HomePage_PO{

    selectors = {
        slectorContactUs: "#contact-us"
    }

    visitHomepage(){
        cy.visit(Cypress.env("webdriver-homepage"));
    }
    clickOn_ContactUs_Button(){
        cy.get(this.selectors.slectorContactUs).invoke("removeAttr","target").click({force:true});
      
    }






}
export default HomePage_PO;