import LoginPage from './pageObjects/LoginPage';
import HomePage from './pageObjects/HomePage';
import ProfilePage from './pageObjects/ProfilePage';
import SettingsPage from './pageObjects/SettingsPage';
import {faker} from '@faker-js/faker';
import SettingsNavigationPage from './pageObjects/SettingsNavigationPage';

describe('Profile tests', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const profilePage = new ProfilePage();
    const settingsPage = new SettingsPage();
    const settingsNavigationPage = new SettingsNavigationPage();

    const url = 'http://localhost:2368/ghost/';
    beforeEach(() => {
        cy.visit(url);
        cy.wait(1000);
        cy.get('div.gh-flow').screenshot('loginV5');
        cy.get('form').within(() => {
            // loginPage.getEmail().type('pruebas@gmail.com');
            // loginPage.getPassword().type('pruebas1234');
            loginPage.getEmail().type('pruebas@gmail.com');
            loginPage.getPassword().type('pruebas1234');
            loginPage.getLoginButton().click();
        })
        cy.wait(1000);
    })

    it('Add url in primary navigation', () => {
        homePage.getSettingsButton().click();
        cy.wait(500);
        settingsPage.getNavigationButton().click();
        cy.wait(1000);
        settingsNavigationPage.getTextLabelPrimary().clear();
        cy.wait(1000)
        settingsNavigationPage.getTextLabelPrimary().type(faker.word.adjective({length:{min:5, max:7}}));
        cy.wait(1000)   
        settingsNavigationPage.getSaveButton().click();
        cy.wait(1000)

    })

    it('delete url in primary navigation', () => {
        homePage.getSettingsButton().click();
        cy.wait(500);
        settingsPage.getNavigationButton().click();
        cy.wait(1000);
        settingsNavigationPage.getDeleteButtonPrimary().click();
        cy.wait(1000)
        settingsNavigationPage.getSaveButton().click();
        cy.wait(1000)
    })

    it('Add url in secondary navigation', () => {
        homePage.getSettingsButton().click();
        cy.wait(500);
        settingsPage.getNavigationButton().click();
        cy.wait(1000);
        settingsNavigationPage.getTextLabelSecondary().clear();
        cy.wait(1000)
        settingsNavigationPage.getTextLabelSecondary().type(faker.word.adjective({length:{min:5, max:7}}));
        cy.wait(1000)   
        settingsNavigationPage.getSaveButton().click();
        cy.wait(1000)
    })

    it('delete url in secondary navigation', () => {
        homePage.getSettingsButton().click();
        cy.wait(500);
        settingsPage.getNavigationButton().click();
        cy.wait(1000);
        settingsNavigationPage.getDeleteButtonSecondary().click();
        cy.wait(1000) 
        settingsNavigationPage.getSaveButton().click();
        cy.wait(1000)
    })
})  