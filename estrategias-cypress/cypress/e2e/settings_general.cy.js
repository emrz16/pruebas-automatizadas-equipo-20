import LoginPage from './pageObject/LoginPage';
import HomePage from './pageObject/HomePage';
import ProfilePage from './pageObject/ProfilePage';
import SettingsPage from './pageObject/SettingsPage';
import {faker} from '@faker-js/faker';

describe('Settings general test', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const profilePage = new ProfilePage();
    const settingsPage = new SettingsPage();

    const user = "j.quinchia@uniandes.edu.co";
    const password = "OrionQuinchia";
    // const user = "e.rodriguezz@uniandes.edu.co";
    // const password = "ezamora16101998";
    const url = 'http://localhost:2368/ghost/';
    beforeEach(() => {
        cy.visit(url);
        cy.wait(1000);
        cy.get('form').within(() => {
        
            loginPage.getEmail().type(user);
            loginPage.getPassword().type(password);
            loginPage.getLoginButton().click();
        })
        cy.wait(1000);
    })

    it('Change title main page', () => {
        homePage.getSettingsButton().click();
        cy.wait(500);
        settingsPage.getGeneralButton().click();
        cy.wait(1000);
        settingsPage.getButtonExpandTitle().click();
        cy.wait(1000)
        settingsPage.getTextNameSite().clear();
        settingsPage.getTextNameSite().type(faker.word.adjective({length:{min:5, max:7}}));
        cy.wait(1000)   
        settingsPage.getSaveButton().click();
        cy.wait(1000)

    })

    it('Change facebook link', () => {
        homePage.getSettingsButton().click();
        cy.wait(500);
        settingsPage.getGeneralButton().click();
        cy.wait(1000);
        settingsPage.getButtonExpandSocialAccount().click();
        cy.wait(1000);
        settingsPage.getTextFacebookLink().clear();
        settingsPage.getTextFacebookLink().type("https://www.facebook.com/Cristiano");
        cy.wait(1000);
        settingsPage.getSaveButton().click();
        cy.wait(1000);   
        settingsPage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Saved")).to.be.true
        })
    })

    it('Change twitter link', () => {
        homePage.getSettingsButton().click();
        cy.wait(500);
        settingsPage.getGeneralButton().click();
        cy.wait(1000);
        settingsPage.getButtonExpandSocialAccount().click();
        cy.wait(1000);
        settingsPage.getTextTwitterLink().clear();
        settingsPage.getTextTwitterLink().type("https://twitter.com/Cristiano");
        cy.wait(1000);
        settingsPage.getSaveButton().click();
        cy.wait(1000);
        settingsPage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Saved")).to.be.true
        })

    })

    it('Add metadata title too many characters', () => {
        homePage.getSettingsButton().click();
        cy.wait(1000);
        settingsPage.getGeneralButton().click();
        cy.wait(1000);
        settingsPage.getButtonExpandMetadata().click();
        cy.wait(1000);
        settingsPage.getTextMetadataTitle().clear();
        settingsPage.getTextMetadataTitle().type(faker.lorem.words(30));
        cy.wait(500);
        settingsPage.getCounterTextMetadataTitle()
        .should('have.css', 'color')
        .and('eq', 'rgb(226, 84, 64)')
        cy.wait(2000);
    })

    it('Add metadata title correct amount characters', () => {
        homePage.getSettingsButton().click();
        cy.wait(500);
        settingsPage.getGeneralButton().click();
        cy.wait(1000);
        settingsPage.getButtonExpandMetadata().click();
        cy.wait(1000);
        settingsPage.getTextMetadataTitle().clear();
        settingsPage.getTextMetadataTitle().type(faker.lorem.words(2));
        cy.wait(500);
        settingsPage.getCounterTextMetadataTitle()
        .should('have.css', 'color')
        .and('eq', 'rgb(48, 207, 67)')
        cy.wait(2000);
    })

        it('Add metadata title correct amount characters and incorrect amount characters in meta description', () => {
            homePage.getSettingsButton().click();
            cy.wait(500);
            settingsPage.getGeneralButton().click();
            cy.wait(1000);
            settingsPage.getButtonExpandMetadata().click();
            cy.wait(1000);
            settingsPage.getTextMetadataTitle().clear();
            settingsPage.getTextMetadataTitle().type(faker.lorem.words(2));

            settingsPage.getTextMetadataDescription().clear();
            settingsPage.getTextMetadataDescription().type(faker.lorem.words(50));
            cy.wait(500);
            settingsPage.getCounterTextMetadataDescription()
            .should('have.css', 'color')
            .and('eq', 'rgb(226, 84, 64)');

            settingsPage.getCounterTextMetadataTitle()
            .should('have.css', 'color')
            .and('eq', 'rgb(48, 207, 67)')
            cy.wait(1000);
            settingsPage.getSaveButton().click();
        })

    it('Add metadata title correct amount characters and correct amount characters in meta description', () => {
        homePage.getSettingsButton().click();
        cy.wait(500);
        settingsPage.getGeneralButton().click();
        cy.wait(1000);
        settingsPage.getButtonExpandMetadata().click();
        cy.wait(1000);
        settingsPage.getTextMetadataTitle().clear();
        settingsPage.getTextMetadataTitle().type(faker.lorem.words(2));

        settingsPage.getTextMetadataDescription().clear();
        settingsPage.getTextMetadataDescription().type(faker.lorem.words(10));
        cy.wait(500);
        settingsPage.getCounterTextMetadataDescription()
        .should('have.css', 'color')
        .and('eq', 'rgb(48, 207, 67)');

        settingsPage.getCounterTextMetadataTitle()
        .should('have.css', 'color')
        .and('eq', 'rgb(48, 207, 67)')
        cy.wait(1000);
        settingsPage.getSaveButton().click();

    })

    it('Add simple facebook card', () => {
        homePage.getSettingsButton().click();
        cy.wait(500);
        settingsPage.getGeneralButton().click();
        cy.wait(1000);
        settingsPage.getButtonExpandFacebookCard().click();
        cy.wait(1000)
        settingsPage.getTextFacebookCardTitle().clear();
        settingsPage.getTextFacebookCardTitle().type(faker.word.adjective({length:{min:5, max:7}}));
        cy.wait(1000)   
        settingsPage.getSaveButton().click();
        cy.wait(1000)
        settingsPage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Saved")).to.be.true
        })
    })

    it('Add simple twitter card', () => {
        homePage.getSettingsButton().click();
        cy.wait(500);
        settingsPage.getGeneralButton().click();
        cy.wait(1000);
        settingsPage.getButtonExpandTwitterCard().click();
        cy.wait(1000)
        settingsPage.getTextTwitterCardTitle().clear();
        settingsPage.getTextTwitterCardTitle().type(faker.word.adjective({length:{min:5, max:7}}));
        cy.wait(1000)   
        settingsPage.getSaveButton().click();
        cy.wait(1000)
        settingsPage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Saved")).to.be.true
        })
    })
})