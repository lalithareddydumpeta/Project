export class Loginpage {
  loginPage_txtUsernname = ".login__email > .input__inner-wrapper > .input__input"
  loginPage_txtPassword = ".login__password > .input__inner-wrapper > .input__input"
  loginPage_btnLogin = "#loginForm > .button__primary"
  loginPage_imgProfile = ".header-component__button > .button > .icon"
  loginPage_btnAcceptcokies = ".button__primary"
  loginPage_Warningmessage = ".alert > .google-translate-fallback"
  loginPage_lnkResetpassword = ".login__link"
  loginPage_txtUseremail =
    "#forgotPasswordForm > .input__container > .input__inner-wrapper > .input__input"
  loginPage_btnClose = "Schliessen"
  loginPage_btnSendanEmail = "E-Mail absenden"
  loginPage_lblEmailsent = "E-Mail verschickt"
  loginPage_txtResetpassword = ".new-password__password > .input__inner-wrapper > .input__input"
  loginPage_btnReset = ".button__primary"
  loginPage_msgExpiredtoken = ".google-translate-fallback > :nth-child(1) > font"
  loginPage_usernameRequired = ".login__email > .input__error"
  loginPage_passwordrequired = ".login__password > .input__error"

  openURL(url) {
    cy.visit(url)
  }

  navigateLoginsection() {
    cy.get(this.loginPage_btnAcceptcokies).click()

    cy.get(this.loginPage_imgProfile).click()
  }

  enterUsername(username) {
    cy.get(this.loginPage_txtUsernname).type(username)
  }
  enterPassword(password) {
    cy.get(this.loginPage_txtPassword).type(password)
  }

  clickLogin() {
    cy.get(this.loginPage_btnLogin).click()
  }

  verifyWarningmessage(Error) {
    cy.get(this.loginPage_Warningmessage).should("contain", Error)
  }

  clickForgotpassword() {
    cy.get(this.loginPage_lnkResetpassword).click()
  }

  enterEmailtoResetpassword(username) {
    cy.get(this.loginPage_txtUseremail).type(username)
  }
  clickSendEmaiil() {
    cy.contains(this.loginPage_btnSendanEmail).click()
  }
  VerifyEmailsent() {
    cy.contains(this.loginPage_lblEmailsent).should("contain", "E-Mail verschickt")
  }

  enterNewpassword(Newpassword) {
    cy.get(this.loginPage_txtResetpassword).type(Newpassword)
  }
  clicReset() {
    cy.get(this.loginPage_btnReset).click()
  }
  VerifyTokenInvalid() {
    cy.get(this.loginPage_msgExpiredtoken).should("contain", "Token ist ungültig oder abgelaufen.")
  }

  VerifyUsernameRequired() {
    cy.get(this.loginPage_usernameRequired).should("contain", "* Pflichtfeld")
  }

  VerifypasswordRequired() {
    cy.get(this.loginPage_passwordrequired).should("contain", "* Pflichtfeld")
  }
}
