class signIn{
    constructor(){
        this.clicksign='[class="page-header"] [class="authorization-link"] a',
        this.semail='[title="Email"]',
        this.spassword='[name="login[password]"]',
        this.signinbutton='[class="action login primary"]',
        this.messagetext='[class="logged-in"]'
    }
    clickButtonSignIn(){
        cy.get(this.clicksign).click();
    }
    toEntermail(entermail){
        cy.get(this.semail).type(entermail)
    }
    toPassWord(enterpass){
        cy.get(this.spassword).type(enterpass)
    }
    toClickSignInButton(){
        cy.get(this.signinbutton).click()
    }
    conformAssert(){
        cy.get(this.messagetext).should('contain.text','Welcome, Deenan S!')
    }
}
export default signIn;