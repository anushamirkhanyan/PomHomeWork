import LoginPage from "../../pageObjecta/loginPage"
import BaseClass from "../../pageObjecta/baseCLass"
import ProfilePage from "../../pageObjecta/profilePage"

describe('example to-do app', () => {
  //beforeEach(() => {
  //})

  it('displays two todo items by default', () => {
    const loginPage = new LoginPage()
    const baseClass = new BaseClass()
    const profilePage = new ProfilePage()
    baseClass.openPage(baseClass.constants.url)
    cy.wait(6000)
    baseClass.assertElementShouldContain(loginPage.elements.mainPageArea,loginPage.constants.mainPageAreaText)
    baseClass.clickButton(loginPage.elements.loginSection)
    baseClass.assertElementIsVisible(loginPage.elements.loginModalLabel)
    cy.wait(4000)
    baseClass.typeText(loginPage.elements.usernameField,loginPage.constants.username)
    baseClass.typeText(loginPage.elements.passwordField,loginPage.constants.password)
    cy.wait(4000)
    baseClass.clickButton(loginPage.elements.loginButton)
    cy.wait(4000)
    baseClass.assertElementShouldContain(profilePage.elements.userarea,profilePage.constants.userAreaText)
    baseClass.assertElementIsVisible(profilePage.elements.logoutsection)
    cy.get('#login2').should('not.be.visible')
    
  })

})
  
