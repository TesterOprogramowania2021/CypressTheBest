/// <reference types="cypress" />

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbnail");
        cy.get("@productThumbnail").its("length").should("be.gt", 5);
        cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
    });
    it("Validate product thumbnail", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });
    it("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('itemPriceNow')

        let itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            //zmienna do której zostanie przypisana już jako numer nie jako string 
            let itemPriceTotal = 0;
            //usunięcie znaku $ z wszystkich cen
            let itemPrice = $linkText.split('$');
            let i;
            //penta startuje od indexu 0 aż do konca listy a później wypisuje w konsoli wszystkie ceny
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i]);
                //konwertowanie stringa do liczby, metoda Number;
                itemPriceTotal += Number(itemPrice[i]);
            }
            itemsTotal += itemPriceTotal;
            cy.log("Cena wszystkich niesprzedanych produktów to: " + itemPriceTotal);
        })
        cy.get('@itemPriceNow').then($linkText => {

            let itemPriceNow = $linkText.split('$');
            let i;
            let saleItemsPrices = 0;
            for (i = 0; i < itemPriceNow.length; i++) {
                cy.log(itemPriceNow[i]);
                saleItemsPrices = saleItemsPrices + Number(itemPriceNow[i]);
            }
            itemsTotal += saleItemsPrices;
            cy.log("Sale price items total : " + saleItemsPrices);


        })
        .then(()=>{
            cy.log("Total tal prices of all produckt: " + itemsTotal)
            expect(itemsTotal).to.equal(663.1);
        })
    });
});
