class createAcc{
    constructor(){
        this.firstname='[id="firstname"]',
        this.lastname='[id="lastname"]',
        this.email='[title="Email"]',
        this.password='[title="Password"]',
        this.conpassword='[title="Confirm Password"]'
        this.sub='[title="Create an Account"]'
    }

    toClickcreateButton(){
        cy.contains('Create an Account').click()
    }
    toEnterFName(typen){
        cy.get(this.firstname).type(typen)
    }
    toEnterLName(typel){
        cy.get(this.lastname).type(typel)
    }
    toEnterEmail(typeemail){
        cy.get(this.email).type(typeemail)
    }
    toEnterPassword(enterpass){
        cy.get(this.password).type(enterpass)
    }
    toEnterConPassword(enterc){
        cy.get(this.conpassword).type(enterc)
    }
    toClickCreateAccountButton(){
        cy.get(this.sub,{timeout:5000}).click()
    }
}
export default createAcc;