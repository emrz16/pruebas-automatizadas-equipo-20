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
        const loginPage = new LoginPage();
        loginPage.getEmail().type('e.rodriguezz@uniandes.edu.co')
        loginPage.getPassword().type('ezamora16101998')
        loginPage.getLoginButton().click();
        cy.wait(500)
    })
    it('Testing editar nombre', () => {
        homePage.getAvatarProfile().click()
        cy.wait(500)
        homePage.getYourProfileOption().click()
        cy.wait(1000)
        profilePage.getUsernameProfile().type("Prueba")
        profilePage.getSaveButton().click()
        cy.wait(500)
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Saved")).to.be.true
        })
    })
    it('Test dejar vacio campo nombre en perfil', () => {
        homePage.getAvatarProfile().click()
        cy.wait(500)
        homePage.getYourProfileOption().click()
        cy.wait(1000)
        profilePage.getUsernameProfile().clear()
        profilePage.getSaveButton().click()
        cy.wait(500)
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Retry")).to.be.true
        })
        cy.wait(1000)
    })
    it('Test guarda email con formato correcto', ()=>{
        homePage.getAvatarProfile().click()
        homePage.getYourProfileOption().click()
        cy.wait(1000)
        profilePage.getEmailProfile().clear()
        profilePage.getEmailProfile().type("e.rodriguezz@uniandes.edu.co")
        profilePage.getSaveButton().click()
        cy.wait(500)
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Saved")).to.be.true
        })
    })

    it('Test no guarda email con formato incorrecto', ()=>{
        homePage.getAvatarProfile().click()
        homePage.getYourProfileOption().click()
        cy.wait(1000)
        profilePage.getEmailProfile().clear()
        profilePage.getEmailProfile().type("e.rodriguezzasdfasd")
        profilePage.getSaveButton().click()
        cy.wait(500)
        profilePage.getEmailProfileError().then(($value) =>{
            console.log($value)
            expect($value[0].innerText.includes("Please supply a valid email address")).to.be.true
        })
    })

    it('Test busqueda de miembro', ()=>{
        homePage.getMemberMenu().click()
        cy.wait(1000)
        memberPage.getSearchBarMember().type("Emmanuel");
        cy.wait(1000)
        memberPage.getTableSearch().contains('Emmanuel').then(($value) =>{
            console.log($value);
            expect($value).to.exist
        })
    })
  })