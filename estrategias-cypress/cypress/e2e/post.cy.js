import LoginPage from './pageObject/LoginPage';
import PostPage from "./pageObject/PostPage";
import { faker } from '@faker-js/faker';

describe('Create a post', () => {
    const loginPage = new LoginPage();
    const postPage = new PostPage();

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

    it('#23: Crear un post correctamente, ingresar title y description correctamente', () => {
        postPage.getSection().should('be.visible').within(() => {
            cy.contains('Post').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New post').click()
            cy.wait(1000)
        })

        postPage.getEditorPane().should('be.visible').within((element) => {
            cy.get('textarea[placeholder="Post title"]').type(faker.random.words(5))
            cy.get('div.koenig-editor__editor-wrapper').type(faker.random.words(5))
            cy.wait(2000)
        })     
        cy.wait(2000);
        postPage.getButtonPublish().click(); 
        cy.wait(2000)
        postPage.getBlackPublishButton().click()
        cy.wait(2000);
        postPage.getGreenPublishButton().click()
        cy.wait(2000);    
    })

    it('#24: Crear un post con titulo mayor a 255 caracteres:', () => {
        postPage.getSection().should('be.visible').within(() => {
            cy.contains('Post').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New post').click()
            cy.wait(1000)
        })

        postPage.getEditorPane().should('be.visible').within(() => {
            cy.get('div.koenig-editor__editor-wrapper').type(faker.random.words(5))
            cy.get('textarea[placeholder="Post title"]').type(faker.random.words(100))

            cy.wait(2000)
        })     
        cy.wait(2000);
        postPage.getButtonPublish().click(); 

    })


    it('#25: Crear un post con titulo mayor a 255 caracteres:', () => {
        postPage.getSection().should('be.visible').within(() => {
            cy.contains('Post').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New post').click()
            cy.wait(1000)
        })

        postPage.getEditorPane().should('be.visible').within(() => {
            cy.get('div.koenig-editor__editor-wrapper').type(faker.random.words(5))
            cy.get('textarea[placeholder="Post title"]').type(faker.random.words(5))
            cy.wait(2000)
            cy.get('div> span > input[type="file"]').selectFile('cypress/fixtures/piramide-imagen.PNG', { force: true })
        })
        cy.wait(2000);
        postPage.getButtonPublish().click();
        cy.wait(2000)
        postPage.getBlackPublishButton().click()
        cy.wait(2000);
        postPage.getGreenPublishButton().click()
        cy.wait(2000);
    })

    it('#26: Crear un post con titulo menor a 255 caracteres y adjuntar imagen con extensión incorrecta:', () => {
        postPage.getSection().should('be.visible').within(() => {
            cy.contains('Post').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New post').click()
            cy.wait(1000)
        })

        postPage.getEditorPane().should('be.visible').within(() => {
            cy.get('div.koenig-editor__editor-wrapper').type(faker.random.words(5))
            cy.get('textarea[placeholder="Post title"]').type(faker.random.words(5))
            cy.wait(2000)
            cy.get('div> span > input[type="file"]').selectFile('cypress/fixtures/Archivo prueba.docx', { force: true })
        })
        cy.wait(2000);
        postPage.getButtonPublish().click(); 
    })


    it('#27: Editar un post después de crear y dar clic en update', () => {
        postPage.getSection().should('be.visible').within(() => {
            cy.contains('Post').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New post').click()
            cy.wait(1000)
        })

        postPage.getEditorPane().should('be.visible').within(() => {
            cy.get('div.koenig-editor__editor-wrapper').type(faker.random.words(5))
            cy.get('textarea[placeholder="Post title"]').type(faker.random.words(5))
            cy.wait(2000)            
        })
        cy.wait(2000);
        postPage.getButtonPublish().click(); 
        cy.wait(2000)
        postPage.getBlackPublishButton().click()
        cy.wait(2000);
        postPage.getGreenPublishButton().click()
        cy.wait(2000);
        cy.get('button.gh-back-to-editor').click();
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').clear();
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.random.words(5));
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view').click() 

    })

    it('#28: Editar un post creado dando clic al botón de estadísticas:', () => {
        postPage.getSection().should('be.visible').within(() => {
            cy.contains('Post').click();
            cy.wait(1000);
        })
        postPage.getMenuAndSelectPublishedPages().click();
        cy.wait(1000)

        cy.get('ul.ember-power-select-options').should('be.visible').within(() => {
            cy.get('li.ember-power-select-option').contains('Published posts').click()
            cy.wait(1000)
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            postPage.getListOfPages().click();
            cy.wait(1000)
        })

        postPage.getEditPost().click();
        cy.wait(1000)

        postPage.getEditorPane().should('be.visible').within(() => {
            cy.get('textarea[placeholder="Post title"]').clear();
            cy.wait(1000)
            cy.get('textarea[placeholder="Post title"]').type(faker.random.words(5))
            cy.wait(2000)
        })
        cy.wait(2000);
        cy.contains('Update').click();
    })

    it('#29: Crear post y modificar el contenido de Excerpt con mas de 300 caracteres ', () => {
        postPage.getSection().should('be.visible').within(() => {
            cy.contains('Post').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New post').click()
            cy.wait(1000)
        })

        postPage.getEditorPane().should('be.visible').within(() => {
            cy.get('div.koenig-editor__editor-wrapper').type(faker.random.words(5))
            cy.get('textarea[placeholder="Post title"]').type(faker.random.words(5))
            cy.wait(2000);

        })
        cy.get('button.settings-menu-toggle').click();
        cy.get('div.settings-menu-pane').should('be.visible').within(() => {
            cy.get('textarea.post-setting-custom-excerpt.ember-text-area.gh-input.ember-view')
            .type(faker.random.words(300))
        })
        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);
        postPage.getButtonPublish().click();
    })

    it('#30: Crear post y modificar el contenido de Excerpt con menos de 300 caracteres', () => {
        postPage.getSection().should('be.visible').within(() => {
            cy.contains('Post').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New post').click()
            cy.wait(1000)
        })

        postPage.getEditorPane().should('be.visible').within(() => {
            cy.get('div.koenig-editor__editor-wrapper').type(faker.random.words(5))
            cy.get('textarea[placeholder="Post title"]').type(faker.random.words(5))
            cy.wait(2000);

        })
        cy.get('button.settings-menu-toggle').click();
        cy.get('div.settings-menu-pane').should('be.visible').within(() => {
            cy.get('textarea.post-setting-custom-excerpt.ember-text-area.gh-input.ember-view')
            .type(faker.random.words(50))
        })
        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);
        postPage.getButtonPublish().click();
        cy.wait(2000);
        postPage.getBlackPublishButton().click()
        cy.wait(2000);
        postPage.getGreenPublishButton().click()
        cy.wait(2000);
        cy.get('button.gh-back-to-editor').click();
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').clear();
        cy.wait(2000);
        cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view').type(faker.random.words(5));
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view').click()
    })
})

