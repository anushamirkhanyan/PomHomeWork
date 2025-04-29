class BaseClass {
elements = {
}
constants = {
url: 'https://demoblaze.com/',
urlSecond: 'https://demoblaze.com/index.html'

}
openPage(url){
    cy.visit(this.constants.url)
}
typeText(locator,text) {
    cy.get(locator).type(text)
}
clickButton(locator) {
    cy.get(locator).click()
}
assertElementShouldContain(locator,text){
   cy.get(locator).should('contain',text)
}

assertElementIsVisible(locator){
    cy.get(locator).should('exist').and('be.visible')
}
}
export default BaseClass