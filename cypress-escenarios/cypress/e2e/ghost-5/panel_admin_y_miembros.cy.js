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
    it('Testing editar nombre', () => {
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminedit/1');
        homePage.getAvatarProfile().click()
        cy.wait(500)
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminedit/2');
        homePage.getYourProfileOption().click()
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminedit/3');
        profilePage.getUsernameProfile().type("Prueba")
        profilePage.getSaveButton().click()
        cy.wait(500)
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminedit/4');
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Saved")).to.be.true
        })
    })
    it('Test dejar vacio campo nombre en perfil', () => {
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminemptyname/1');
        homePage.getAvatarProfile().click()
        cy.wait(500)
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminemptyname/2');
        homePage.getYourProfileOption().click()
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminemptyname/3');
        profilePage.getUsernameProfile().clear()
        profilePage.getSaveButton().click()
        cy.wait(500)
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminemptyname/4');
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Retry")).to.be.true
        })
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminemptyname/5');
    })
    it('Test guarda email con formato correcto', ()=>{
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminemail/1');
        homePage.getAvatarProfile().click()
        homePage.getYourProfileOption().click()
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminemail/2');
        profilePage.getEmailProfile().clear()
        profilePage.getEmailProfile().type("j.quinchia@uniandes.edu.co")
        profilePage.getSaveButton().click()
        cy.wait(500)
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminemail/3');
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Saved")).to.be.true
        })
    })

    it('Test no guarda email con formato incorrecto', ()=>{
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminwrongemail/1');
        homePage.getAvatarProfile().click()
        homePage.getYourProfileOption().click()
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminwrongemail/2');
        profilePage.getEmailProfile().clear()
        profilePage.getEmailProfile().type("e.rodriguezzasdfasd")
        profilePage.getSaveButton().click()
        cy.wait(500)
        cy.get('div.gh-viewport').screenshot('ghost-5/paneladminwrongemail/3');
        profilePage.getEmailProfileError().then(($value) =>{
            console.log($value)
            expect($value[0].innerText.includes("Please supply a valid email address")).to.be.true
        })
    })

    it('Test busqueda de miembro', ()=>{
        cy.get('div.gh-viewport').screenshot('ghost-5/searchmemberbyname/1');
        homePage.getMemberMenu().click()
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/searchmemberbyname/2');
        memberPage.getSearchBarMember().type("Emmanuel");
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/searchmemberbyname/3');
        memberPage.getTableSearch().contains('Emmanuel').then(($value) =>{
            console.log($value);
            expect($value).to.exist
        })
    })
  })