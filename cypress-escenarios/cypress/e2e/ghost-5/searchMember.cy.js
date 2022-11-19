import LoginPage from '../pageObjects/LoginPage';
import HomePage from '../pageObjects/HomePage';
import ProfilePage from '../pageObjects/ProfilePage';
import MemberPage from '../pageObjects/MemberPage';

describe('Testing basic Angular registration', () => {
    const homePage = new HomePage();
    const profilePage = new ProfilePage();
    const memberPage = new MemberPage();
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/')
        cy.wait(3000)
        const loginPage = new LoginPage();
        loginPage.getEmail().type('m.guapacha@uniandes.edu.co')
        loginPage.getPassword().type('cristinauniandes2022!')
        loginPage.getLoginButton().click();
        cy.wait(500)
    })
    
    it('Test search non member by name', ()=>{
        homePage.getMemberMenu().click()
        cy.wait(1000)
        memberPage.getSearchBarMember().type("Pepe");
        cy.wait(1000)
        memberPage.getTableSearch().contains('Pepe').then(($value) =>{
            console.log($value);
            expect($value).to.exist
        })
    })

    it('Test search member by email', ()=>{
        homePage.getMemberMenu().click()
        cy.wait(1000)
        memberPage.getSearchBarMember().type("lala@gmail.com");
        cy.wait(1000)
        memberPage.getTableSearch().contains('lala@gmail.com').then(($value) =>{
            console.log($value);
            expect($value).to.exist
        })
    })

    it('Test search non member by email', ()=>{
        homePage.getMemberMenu().click()
        cy.wait(1000)
        memberPage.getSearchBarMember().type("pepe@gmail.com");
        cy.wait(1000)
        memberPage.getTableSearch().contains('pepe@gmail.com').then(($value) =>{
            console.log($value);
            expect($value).to.exist
        })
    })
  })