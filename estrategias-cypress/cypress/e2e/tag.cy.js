import CreateTag from './pageObject/CreateTag';
import LoginPage from './pageObject/LoginPage';
import data_a_priori from '../../../data_pool_a_priori/MOCK_DATA_PAGE.json';
import { faker } from '@faker-js/faker';

describe('Create tags', () => {
    const createTag = new CreateTag();
    const loginPage = new LoginPage();

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 5) + 0
    }

    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
        cy.get('form').within(() => {
            loginPage.getEmail().type('j.quinchia@uniandes.edu.co')
            loginPage.getPassword().type('OrionQuinchia');
            loginPage.getLoginButton().click()
        })
    })

    it('#34: Create tag with title and description', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        cy.get('button.settings-menu-toggle').click();

    })
})