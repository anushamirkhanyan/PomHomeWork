import BaseClass from "../../pageObjecta/baseCLass"
import HomePage from "../../pageObjecta/homePage"


describe('Add To Cart', () => {
    //beforeEach(() => {
    //})
  
    it('Add To Cart and assert is added', () => {
        const baseClass = new BaseClass()
        const homePage = new HomePage
       //cy.visit('https://demoblaze.com/index.html');
       baseClass.openPage(baseClass.constants.urlSecond)
       //cy.get('#cat.list-group-item').should('exist').and('be.visible');
       baseClass.assertElementIsVisible(homePage.elements.categoriesSection)
       //cy.get(`a#itemc[onclick="byCat('notebook')"]`).click();
       baseClass.clickButton(homePage.elements.laptopButton)
       cy.get('.hrefch').contains('MacBook air').click();
       //cy.get('a.btn.btn-success.btn-lg').click();
       baseClass.clickButton(homePage.elements.addToCartButton)
       cy.on('window:alert', (text) => {
        expect(text).to.equal('Product added');
        return true;
      });
      //cy.get('#cartur').click();
      baseClass.clickButton(homePage.elements.cartButton)
      //cy.get('#tbodyid').should('exist').and('be.visible');
      baseClass.assertElementIsVisible(homePage.elements.productInCart)
    })

})
