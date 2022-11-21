import LoginPage from './pageObjects/LoginPage';

describe('Validate Ghost Admin Login', () => {
    const loginPage = new LoginPage();
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);              
    })

    it('Login without writing an email', () => {       
        cy.get('div.gh-viewport').screenshot('ghost-5/validateLoginNoEmail/login'); 
        cy.get('form').within(() => {
            loginPage.getEmail().type(' ')           
            loginPage.getPassword().type('OrionQuinchia')
            loginPage.getLoginButton().click()            
            cy.wait(1000)
        })
        cy.get('div.gh-viewport').screenshot('ghost-5/validateLoginNoEmail/end'); 
     
    }) 

    it('Login with incorrect password', () => {
        cy.get('div.gh-viewport').screenshot('ghost-5/validateLoginIncorrectPassword/login');
        cy.get('form').within(() => {
            loginPage.getEmail().type('j.quinchia@uniandes.edu.co')           
            loginPage.getPassword().type('445566')
            loginPage.getLoginButton().click()           
            cy.wait(1000)
        })
        cy.get('div.gh-viewport').screenshot('ghost-5/validateLoginIncorrectPassword/end');     
    }) 

    it('Login without an email domain', () => {
        cy.get('div.gh-viewport').screenshot('ghost-5/validateLoginNoEmailDomain/login');
        cy.get('form').within(() => {
            loginPage.getEmail().type('j.quinchia@uniandes')           
            loginPage.getPassword().type('OrionQuinchia')
            loginPage.getLoginButton().click()           
            cy.wait(1000)
        })  
        cy.get('div.gh-viewport').screenshot('ghost-5/validateLoginNoEmailDomain/end');   
    })
       
    it('Login without and email @', () => {
        cy.get('div.gh-viewport').screenshot('ghost-5/validateLoginNo@/login');
        cy.get('form').within(() => {
            loginPage.getEmail().type('j.quinchiauniandes.edu.co')
            loginPage.getPassword().type('OrionQuinchia')
            loginPage.getLoginButton().click()            
            cy.wait(1000)
        })  
        cy.get('div.gh-viewport').screenshot('ghost-5/validateLoginNo@/end');   
    })      
})