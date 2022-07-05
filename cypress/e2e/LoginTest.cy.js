/// <reference types = "cypress"/>

import { Loginpage } from "../Pages/login_page"
import { Homepage } from "../Pages/Home_page"
const loginpage = new Loginpage()
const homepage = new Homepage()

// defining object for testdata file
beforeEach(function () {
  cy.fixture("LoginTestdata").then(function (data) {
    this.data = data
  })
})
describe("Login functionality", () => {
  it("Login with valid username and password", function () {
    loginpage.openURL(this.data.Website)
    loginpage.navigateLoginsection()
    loginpage.enterUsername(this.data.UserEmail)
    loginpage.enterPassword(this.data.UserPassword)
    loginpage.clickLogin()
    homepage.clickProfile()
    homepage.verifyloginname(this.data.UserFirstname)
  })

  it("Login  with invalid credentials", function () {
    loginpage.openURL(this.data.Website)
    loginpage.navigateLoginsection()
    loginpage.enterUsername(this.data.UserEmail)
    loginpage.enterPassword(this.data.Inavalidpassword)
    loginpage.clickLogin()
    loginpage.verifyWarningmessage(this.data.Errormessage)
  })

  it("veriify email sent to reset Password", function () {
    loginpage.openURL(this.data.Website)
    loginpage.navigateLoginsection()
    loginpage.clickForgotpassword()
    loginpage.enterEmailtoResetpassword(this.data.ResetEmail)
    loginpage.clickSendEmaiil()
    loginpage.VerifyEmailsent()
  })
  it("Reset password Email Expired", function () {
    loginpage.openURL(this.data.Website)
    loginpage.navigateLoginsection()
    loginpage.clickForgotpassword()
    loginpage.enterEmailtoResetpassword(this.data.ResetEmail)
    loginpage.clickSendEmaiil()
    loginpage.VerifyEmailsent()
    loginpage.openURL(this.data.resetpasswordURL)
    loginpage.enterNewpassword(this.data.ResetPassword)
    loginpage.clicReset()
    loginpage.verifyWarningmessage(this.data.Warningmeassage)
  })

  it("Verify password required field", function () {
    loginpage.openURL(this.data.Website)
    loginpage.navigateLoginsection()
    loginpage.enterUsername(this.data.UserEmail)
    loginpage.clickLogin()
    loginpage.verifyWarningmessage(this.data.Checkdetails)
    loginpage.VerifypasswordRequired()
  })

  it("Verify useremail required field", function () {
    loginpage.openURL(this.data.Website)
    loginpage.navigateLoginsection()
    loginpage.enterPassword(this.data.UserPassword)

    loginpage.clickLogin()
    loginpage.verifyWarningmessage(this.data.Checkdetails)
    loginpage.VerifyUsernameRequired()
  })
})
