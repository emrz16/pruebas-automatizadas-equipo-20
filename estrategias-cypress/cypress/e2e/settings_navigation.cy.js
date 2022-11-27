import LoginPage from './pageObject/LoginPage';
import HomePage from './pageObject/HomePage';
import ProfilePage from './pageObject/ProfilePage';
import SettingsPage from './pageObject/SettingsPage';
import {faker} from '@faker-js/faker';
import SettingsNavigationPage from './pageObject/SettingsNavigationPage';

describe('Settings navigation test', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const profilePage = new ProfilePage();
    const settingsPage = new SettingsPage();
    const settingsNavigationPage = new SettingsNavigationPage();
    const user = "j.quinchia@uniandes.edu.co";
    const password = "OrionQuinchia";
    // const user = "e.rodriguezz@uniandes.edu.co";
    // const password = "ezamora16101998";
    const url = 'http://localhost:2368/ghost/';
    beforeEach(() => {
        cy.visit(url);
        cy.wait(1000);
        cy.get('div.gh-flow').screenshot('loginV5');
        cy.get('form').within(() => {
            // loginPage.getEmail().type('pruebas@gmail.com');
            // loginPage.getPassword().type('pruebas1234');
            loginPage.getEmail().type(user);
            loginPage.getPassword().type(password);
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