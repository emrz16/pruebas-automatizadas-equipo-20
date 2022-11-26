import CreatePage from "./pageObject/CreatePage";
import LoginPage from './pageObject/LoginPage';
import data_a_priori from '../../../data_pool_a_priori/MOCK_DATA_PAGE.json';
import { faker } from '@faker-js/faker';

describe('Create a pages', () => {
    const createPage = new CreatePage();
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

    it('#1: Create page with title and body successfully', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.wait(1000);
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getArticleEditor().click();
            createPage.getTextareaPageTitle().type(data_a_priori[1].title)
            cy.wait(2000);
            createPage.getTextareaPageTitle().click();
            createPage.getArticleEditor().type(data_a_priori[0].body)
            cy.wait(2000)
        })
        createPage.getButtonPublish().click();
        cy.wait(2000)
        createPage.getSettingsContainer().should('be.visible').within(() => {
            cy.contains('Continue, final review →').click();
            cy.wait(1000);
            cy.contains('Publish page, right now').click();
        })
    })

    it('#2: Create page with title, body and upload image successfully', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.wait(1000);
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        cy.wait(1000)
        cy.get('div> span > input[type="file"]').selectFile('cypress/fixtures/piramide-imagen.PNG', { force: true })

        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getArticleEditor().click();
            createPage.getTextareaPageTitle().type(data_a_priori[1].title)
            cy.wait(2000);
            createPage.getTextareaPageTitle().click();
            createPage.getArticleEditor().type(data_a_priori[0].body)

            cy.wait(2000)
        })

        cy.wait(2000)
        createPage.getButtonPublish().click();
        cy.wait(2000)
        createPage.getSettingsContainer().should('be.visible').within(() => {
            cy.contains('Continue, final review →').click();
            cy.wait(1000);
            cy.contains('Publish page, right now').click();
        })
    })
    it('#3: Create page with title, body and upload image with incorrect extension', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.wait(1000);
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        cy.wait(1000)
        cy.get('div> span > input[type="file"]').selectFile('cypress/fixtures/Archivo prueba.docx', { force: true })

        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getArticleEditor().click();
            createPage.getTextareaPageTitle().type(data_a_priori[1].title)
            cy.wait(2000);
            createPage.getTextareaPageTitle().click();
            createPage.getArticleEditor().type(data_a_priori[0].body)         
            cy.wait(2000)
        })

        cy.wait(2000)
        createPage.getButtonPublish().click();
        cy.wait(2000)      
    })

    it('#4: Create a page and display a message cause title exceed 255 characters', () => {     
        createPage.getSection().should('be.visible').within(() => {
            cy.wait(1000);
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getArticleEditor().click();
            createPage.getArticleEditor().type(data_a_priori[1].title)
            cy.wait(2000);
            createPage.getTextareaPageTitle().click();
            createPage.getTextareaPageTitle().type(data_a_priori[1].body)
            cy.wait(2000)
        })

        createPage.getButtonPublish().click();
        cy.wait(1000);     
        createPage.getArticleAlert().contains('Validation failed: Title cannot be longer than 255 characters')
        cy.wait(1000);
    })

    it('#5: Edited a created page', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.wait(1000);
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getArticleEditor().click();
            createPage.getTextareaPageTitle().type(data_a_priori[1].title)
            cy.wait(2000);
            createPage.getTextareaPageTitle().click();
            createPage.getArticleEditor().type(data_a_priori[1].title)
            cy.wait(2000)
        })
        createPage.getButtonPublish().click();
        cy.wait(2000)
        createPage.getSettingsContainer().should('be.visible').within(() => {
            cy.contains('Continue, final review →').click();
            cy.wait(1000);
            cy.contains('Publish page, right now').click();           
        })

        cy.get('.gh-publish-settings-container').should('be.visible').within(() => {
            createPage.getButtonBackToEditor().click();
            cy.wait(2000);   


        })
        createPage.getEditorPane().should('be.visible').within(() => {            
            createPage.getTextareaPageTitle().clear()
            cy.wait(1000);  
            createPage.getTextareaPageTitle().type(data_a_priori[2].title);
            cy.wait(1000);         
        })
        cy.wait(1000);
        createPage.getElementByText().click();

    })

    it('#6 : Edit a page in the initial panel', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.wait(1000);
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMenuAndSelectPublishedPages().click();      
        cy.wait(1000) 

        cy.get('ul.ember-power-select-options').should('be.visible').within(() => {
            cy.get('li.ember-power-select-option').contains('Published pages').click()
            cy.wait(1000)
        })

        createPage.getMain().should('be.visible').within(() => {
            createPage.getListOfPages().click();
            cy.wait(1000)
        })

        createPage.getEditorPane().should('be.visible').within(() => {         

            cy.wait(1000);
            createPage.getTextareaPageTitle().clear();
            cy.wait(1000)
            createPage.getTextareaPageTitle().type(data_a_priori[getRandomNumber()].title)
            cy.wait(1000)      
            createPage. getElementByText().click();     
        })   

    })

    it('#7: Create a new page and modify the time of publishing', () => {

        createPage.getSection().should('be.visible').within(() => {
            cy.contains('Pages').click();
            cy.wait(1000);
        })
        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        cy.get('button.settings-menu-toggle').click();

        cy.get('div.settings-menu-pane').should('be.visible').within(() => {
            cy.get('div.gh-date-time-picker-time').find('input').within((element) => {
                let textValue = data_a_priori[getRandomNumber()].time;               
                cy.wait(2000);
                element.val(textValue)
                cy.wait(5000)
            })

        })
        cy.get('button.settings-menu-toggle').click();
        createPage.getTextareaPageTitle().type(data_a_priori[1].title)
        cy.wait(2000);
        createPage.getTextareaPageTitle().click();
        createPage.getArticleEditor().type(data_a_priori[1].title)
        createPage.getButtonPublish().click();
    })

    it('#8: Cretae a page and modify Excerpt', () => {

        createPage.getSection().should('be.visible').within(() => {
            cy.contains('Pages').click();
            cy.wait(1000);
        })
        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        cy.get('button.settings-menu-toggle').click();

        cy.get('div.settings-menu-pane').should('be.visible').within(() => {
            cy.get('textarea.post-setting-custom-excerpt.ember-text-area.gh-input.ember-view').within((element) => {
                let textValue = faker.random.words(5);
                cy.wait(2000);
                element.val(textValue)
                cy.wait(5000)
            })
        })
        cy.get('button.settings-menu-toggle').click();
        createPage.getTextareaPageTitle().type(faker.random.words(5))
        cy.wait(2000);
        createPage.getTextareaPageTitle().click();
        createPage.getArticleEditor().type(faker.random.words(5))
        cy.wait(2000);
        createPage.getButtonPublish().click();
        cy.wait(2000)
        createPage.getSettingsContainer().should('be.visible').within(() => {
            cy.contains('Continue, final review →').click();
            cy.wait(1000);
            cy.contains('Publish page, right now').click();
        })
    })

    it('#9: Cretae a page and modify Excerpt with more 255 characters', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.contains('Pages').click();
            cy.wait(1000);
        })
        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getTextareaPageTitle().clear()
            cy.wait(1000);
            createPage.getTextareaPageTitle().type(data_a_priori[2].title);
            cy.wait(1000);
        })
        cy.get('button.settings-menu-toggle').click();

        cy.get('div.settings-menu-pane').should('be.visible').within(() => {
            cy.get('textarea.post-setting-custom-excerpt.ember-text-area.gh-input.ember-view').type(faker.random.words(100))          
        })
        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);
        createPage.getButtonPublish().click();
    })

    it('#10: Cretae a page and modify URL setting with more 255 characters', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.contains('Pages').click();
            cy.wait(1000);
        })
        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getTextareaPageTitle().clear()
            cy.wait(1000);
            createPage.getTextareaPageTitle().type(data_a_priori[2].title);
            cy.wait(1000);
        })
        cy.get('button.settings-menu-toggle').click();

        cy.get('div.settings-menu-pane').should('be.visible').within(() => {
            cy.get('input.post-setting-slug.ember-text-field.gh-input.ember-view').type(faker.random.words(100))          
        })
        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);
        createPage.getButtonPublish().click();
    })

    it('#11: Cretae a page and modify URL setting with less 255 characters', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.contains('Pages').click();
            cy.wait(1000);
        })
        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getTextareaPageTitle().clear()
            cy.wait(1000);
            createPage.getTextareaPageTitle().type(data_a_priori[2].title);
            cy.wait(1000);
        })
        cy.get('button.settings-menu-toggle').click();

        cy.get('div.settings-menu-pane').should('be.visible').within(() => {
            cy.get('input.post-setting-slug.ember-text-field.gh-input.ember-view').type(faker.random.words(10))          
        })
        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);
        createPage.getButtonPublish().click();
    })

    it('#12: Cretae a page and modify metada valid url canonica', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.contains('Pages').click();
            cy.wait(1000);
        })
        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getTextareaPageTitle().clear()
            cy.wait(1000);
            createPage.getTextareaPageTitle().type(data_a_priori[2].title);
            cy.wait(1000);
        })
        cy.get('button.settings-menu-toggle').click();
        cy.get('div.settings-menu-pane').scrollTo('bottom')
        cy.wait(1000);       
        createPage.getListMetada().click();

        cy.get('div.settings-menu-content').should('be.visible').within(() => {
            cy.request({
                url: 'https://my.api.mockaroo.com/pages.json?key=a7166340',

            }).then((res) => {
                console.log(res)
                cy.get('input.post-setting-canonicalUrl.ember-text-field.gh-input.ember-view').type(res.body[1].canonicalURL)
            })
        })
        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);
        createPage.getButtonPublish().click();
        createPage.getSettingsContainer().should('be.visible').within(() => {
            cy.contains('Continue, final review →').click();
            cy.wait(1000);
            cy.contains('Publish page, right now').click();
        })

    })

    it('#13: Cretae a page and modify metada invalid url canonica', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.contains('Pages').click();
            cy.wait(1000);
        })
        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getTextareaPageTitle().clear()
            cy.wait(1000);
            createPage.getTextareaPageTitle().type(data_a_priori[2].title);
            cy.wait(1000);
        })
        cy.get('button.settings-menu-toggle').click();
        cy.get('div.settings-menu-pane').scrollTo('bottom')
        cy.wait(1000);       
        createPage.getListMetada().click();

        cy.get('div.settings-menu-content').should('be.visible').within(() => {
            cy.request({
                url: 'https://my.api.mockaroo.com/pages.json?key=a7166340',

            }).then((res) => {
                console.log(res)
                cy.get('input.post-setting-canonicalUrl.ember-text-field.gh-input.ember-view').type(res.body[1].notCanonicalURL)
            })
        })
        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);
        createPage.getButtonPublish().click(); 
    })

      it('#14:Crear una página y modificar la metada de la página con un title mayor a 255 caracteres', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.contains('Pages').click();
            cy.wait(1000);
        })
        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getTextareaPageTitle().clear()
            cy.wait(1000);
            createPage.getTextareaPageTitle().type(data_a_priori[2].title);
            cy.wait(1000);
        })
        cy.get('button.settings-menu-toggle').click();
        cy.get('div.settings-menu-pane').scrollTo('bottom')
        cy.wait(1000);       
        createPage.getListMetada().click();

        cy.get('div.settings-menu-content').should('be.visible').within(() => {
            cy.request({
                url: 'https://my.api.mockaroo.com/pages.json?key=a7166340',

            }).then((res) => {
                console.log(res)
                cy.get('input.post-setting-meta-title.ember-text-field.gh-input.ember-view').type(res.body[1].body)
            })
        })
        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);
        createPage.getButtonPublish().click(); 
    })

      it('#14: Cretae a page and modify metada invalid url canonica', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.contains('Pages').click();
            cy.wait(1000);
        })
        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getTextareaPageTitle().clear()
            cy.wait(1000);
            createPage.getTextareaPageTitle().type(data_a_priori[2].title);
            cy.wait(1000);
        })
        cy.get('button.settings-menu-toggle').click();
        cy.get('div.settings-menu-pane').scrollTo('bottom')
        cy.wait(1000);       
        createPage.getListMetada().click();

        cy.get('div.settings-menu-content').should('be.visible').within(() => {
            cy.request({
                url: 'https://my.api.mockaroo.com/pages.json?key=a7166340',

            }).then((res) => {
                console.log(res)
                cy.get('input.post-setting-canonicalUrl.ember-text-field.gh-input.ember-view').type(res.body[1].notCanonicalURL)
            })
        })
        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);
        createPage.getButtonPublish().click(); 
    })

    it('#15: Crear una página y modificar la metada de la página con un meta description mayor a 255 caracteres:', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.contains('Pages').click();
            cy.wait(1000);
        })
        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getTextareaPageTitle().clear()
            cy.wait(1000);
            createPage.getTextareaPageTitle().type(data_a_priori[2].title);
            cy.wait(1000);
        })
        cy.get('button.settings-menu-toggle').click();
        cy.get('div.settings-menu-pane').scrollTo('bottom')
        cy.wait(1000);
        createPage.getListMetada().click();

        cy.get('div.settings-menu-content').should('be.visible').within(() => {
            cy.request({
                url: 'https://my.api.mockaroo.com/pages.json?key=a7166340',

            }).then((res) => {
                console.log(res)
                cy.get('textarea.post-setting-meta-description.ember-text-area.gh-input.ember-view').type(res.body[1].body)
            })
        })
        cy.get('button.settings-menu-toggle').click();
        cy.wait(1000);
        createPage.getButtonPublish().click();
        cy.wait(1000);
        createPage.getSettingsContainer().should('be.visible').within(() => {
            cy.contains('Continue, final review →').click();
            cy.wait(1000);
            cy.contains('Publish page, right now').click();
        })
    })

    it('#16: Crear una página y modificar Twitter card title y description con menos de 300 caracteres::', () => {
        createPage.getSection().should('be.visible').within(() => {
            cy.contains('Pages').click();
            cy.wait(1000);
        })
        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getTextareaPageTitle().clear()
            cy.wait(1000);
            createPage.getTextareaPageTitle().type(data_a_priori[2].title);
            cy.wait(1000);
        })
        cy.get('button.settings-menu-toggle').click();
        cy.get('div.settings-menu-pane').scrollTo('bottom')
        cy.wait(1000);
        createPage.getListTwittercard().click();

        cy.get('div.settings-menu-content').should('be.visible').within(() => {
            cy.request({
                url: 'https://my.api.mockaroo.com/pages.json?key=a7166340',

            }).then((res) => {
                console.log(res)
                cy.get('input.post-setting-twitter-title.ember-text-field.gh-input ember-view').type(res.body[1].body)
                cy.wait(1000);
                cy.get('textarea.post-setting-twitter-description.ember-text-area.gh-input.ember-view').type(res.body[2].body)
            })
        })
        cy.get('button.settings-menu-toggle').click();
        cy.wait(1000);
        createPage.getButtonPublish().click();
        cy.wait(1000);
        createPage.getSettingsContainer().should('be.visible').within(() => {
            cy.contains('Continue, final review →').click();
            cy.wait(1000);
            cy.contains('Publish page, right now').click();
        })
    })


})