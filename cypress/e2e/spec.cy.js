import createAcc from "../POM/createaccountpage";
import signIn from "../POM/signin";
describe('To Automate Magento App',()=>{
    let createSignin= new signIn()
    let createAccount= new createAcc()
    let usercredi;
    beforeEach(()=>{
       cy.visit('https://magento.softwaretestingboard.com/')
    })
    before(()=>{
    cy.fixture('example').then((data)=>{
        usercredi=data;
    })
})
     it('To Automate CreateAccount Functiion',()=>{
         createAccount.toClickcreateButton();
         createAccount.toEnterFName(usercredi.firstname);
         createAccount.toEnterLName(usercredi.lastname);
         createAccount.toEnterEmail(usercredi.email);
         createAccount.toEnterPassword(usercredi.password);
         createAccount.toEnterConPassword(usercredi.password);
         createAccount.toClickCreateAccountButton();
     })
     it('automate signin process',()=>{
      createSignin.clickButtonSignIn();
      createSignin.toEntermail(usercredi.email);
      createSignin.toPassWord(usercredi.password);
      createSignin.toClickSignInButton();
      createSignin.conformAssert()
     })
})