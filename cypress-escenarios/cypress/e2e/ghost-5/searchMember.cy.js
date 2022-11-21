import LoginPage from './pageObjects/LoginPage';
import HomePage from './pageObjects/HomePage';
import ProfilePage from './pageObjects/ProfilePage';
import MemberPage from './pageObjects/MemberPage';

describe('Testing basic Angular registration', () => {
    const homePage = new HomePage();
    const profilePage = new ProfilePage();
    const memberPage = new MemberPage();
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/')
        cy.wait(3000)
	cy.get('div.gh-flow').screenshot('loginV5');
        const loginPage = new LoginPage();
        loginPage.getEmail().type('j.quinchia@uniandes.edu.co')
        loginPage.getPassword().type('OrionQuinchia')
        loginPage.getLoginButton().click();
        cy.wait(500)
    })
    
    it('Test search non member by name', ()=>{
        cy.get('div.gh-viewport').screenshot('ghost-5/searcnonhmemberbyname/1');
        homePage.getMemberMenu().click()
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/searcnonhmemberbyname/2');
        memberPage.getSearchBarMember().type("Pepe");
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/searcnonhmemberbyname/3');
        memberPage.getTableSearch().contains('Pepe').then(($value) =>{
            console.log($value);
            expect($value).to.exist
        })
    })

    it('Test search member by email', ()=>{
        cy.get('div.gh-viewport').screenshot('ghost-5/searchmemberbyemail/1');
        homePage.getMemberMenu().click()
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/searchmemberbyemail/2');
        memberPage.getSearchBarMember().type("lala@gmail.com");
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/searchmemberbyemail/3');
        memberPage.getTableSearch().contains('lala@gmail.com').then(($value) =>{
            console.log($value);
            expect($value).to.exist
        })
    })

    it('Test search non member by email', ()=>{
        cy.get('div.gh-viewport').screenshot('ghost-5/searchnonmemberbyemail/1');
        homePage.getMemberMenu().click()
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/searchnonmemberbyemail/2');
        memberPage.getSearchBarMember().type("pepe@gmail.com");
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/searchnonmemberbyemail/3');
        memberPage.getTableSearch().contains('pepe@gmail.com').then(($value) =>{
            console.log($value);
            expect($value).to.exist
        })
    })
  })