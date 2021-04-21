/// <reference  types="Cypress" />

describe("Test mause actions", () => {
    it("Scroll element into view", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({ force: true });
    })
    it("Should be able drag nand drop", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({ force: true });
        cy.get("#draggable").trigger("mousedown",{which:1});
        cy.get("#droppable").trigger("mousemove").trigger("mouseup",{force:true});
    })
    it("Double click on element", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({ force: true });
        cy.get("#double-click").dblclick();

    })
    it("Double click on element", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({ force: true });
        cy.get("#double-click").dblclick();

    })
    it("Click and hold element", () => {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({ force: true });
        cy.get("#click-box").trigger("mousedown",{which:1}).then(($el)=>{
            expect($el).to.have.css("background-color","rgb(0, 255, 0)");
        })

    })
})
