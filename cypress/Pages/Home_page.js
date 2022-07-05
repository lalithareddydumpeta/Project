export class Homepage {
  homePage_txtSearch = '[data-testid="default-input"]'
  profileimage =".header-component__button > .button > :nth-child(2) > path"
  Accountname =".account-overview-head > .headline-bold"
 
 
  clickProfile(){
    cy.wait(5000)
    cy.get(this.profileimage).click({ force: true })
 }
  verifyloginname(userFirstname){
    cy.get(this.Accountname)
  .should('contain',userFirstname)
  }
}
