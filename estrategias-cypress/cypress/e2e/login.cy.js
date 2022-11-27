import LoginPage from './pageObject/LoginPage';
import data_a_priori from '../../../data_pool_a_priori/MOCK_DATA_LOGIN.json';

describe('Validate Ghost Admin Login', () => {
    const loginPage = new LoginPage();
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);              
    })

    it('#61: Login with email without its domain', () => {       
        cy.get('form').within(() => {
            loginPage.getEmail().type('iexton0@ebay')           
            loginPage.getPassword().type(data_a_priori[0].password)
            loginPage.getLoginButton().click()            
            cy.wait(1000)
        })
    }) 

    it('#62: Login without writing an email', () => {       
        cy.get('form').within(() => {
            loginPage.getEmail().type(' ')           
            loginPage.getPassword().type(data_a_priori[1].password)
            loginPage.getLoginButton().click()            
            cy.wait(1000)
        })
    }) 

    it('#63: Login without writing a password', () => {       
        cy.get('form').within(() => {
            loginPage.getEmail().type(data_a_priori[3].email)           
            loginPage.getLoginButton().click()            
            cy.wait(1000)
        })
    }) 

    it('#64: Login without writing a password and an email', () => {       
        cy.get('form').within(() => {
            loginPage.getLoginButton().click()            
            cy.wait(1000)
        })
    }) 

    it('#65: Login with email and password', () => {       
        cy.get('form').within(() => {
            loginPage.getEmail().type(data_a_priori[6].email)           
            loginPage.getPassword().type(data_a_priori[6].password)
            loginPage.getLoginButton().click()            
            cy.wait(1000)
        })
    })
    
    it('#66: Login with wrong email', () => {       
        cy.get('form').within(() => {
            loginPage.getEmail().type(data_a_priori[5].email)           
            loginPage.getPassword().type(data_a_priori[6].password)
            loginPage.getLoginButton().click()            
            cy.wait(1000)
        })
    })

    it('#67: Login with wrong password', () => {       
        cy.get('form').within(() => {
            loginPage.getEmail().type(data_a_priori[7].email)           
            loginPage.getPassword().type(data_a_priori[8].password)
            loginPage.getLoginButton().click()            
            cy.wait(1000)
        })
    })
    
    it('#68: Login with email without @', () => {       
        cy.get('form').within(() => {
            loginPage.getEmail().type('iexton0.ebay.com')           
            loginPage.getPassword().type(data_a_priori[0].password)
            loginPage.getLoginButton().click()            
            cy.wait(1000)
        })
    }) 


})