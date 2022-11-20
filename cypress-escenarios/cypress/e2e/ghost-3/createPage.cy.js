import CreatePage from "./pageObjects/CreatePage";
import LoginPage from './pageObjects/LoginPage';

describe('Create a pages', () => {
    const createPage = new CreatePage();
    const loginPage = new LoginPage();
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
        cy.wait(1000);
        cy.get('div.gh-flow').screenshot('loginV5');
        cy.get('form').within(() => {
            loginPage.getEmail().type('pruebas@gmail.com');
            loginPage.getPassword().type('pruebas1234');
            loginPage.getLoginButton().click();
        })
        cy.wait(1000);
    })

    it('Create a page and display a message cause title exceed 255 characters', () => {
        cy.get('div.gh-viewport').screenshot('ghost-3/createPageErrorMessage/sectionV5'); 
        createPage.getSection().should('be.visible').within(() => { 
            cy.wait(1000);
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })    
        cy.get('div.gh-viewport').screenshot('ghost-3/createPageErrorMessage/newPageV5'); 
        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getArticleEditor().click();
            createPage.getArticleEditor().type('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
            cy.wait(2000);
            createPage.getTextareaPageTitle().click();
            createPage.getTextareaPageTitle().type('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
            cy.wait(2000)          
        })

        createPage.getButtonPublish().click();       
        cy.wait(5000);
        createPage.getPublishButtonInsideModal().click()
        cy.get('div.gh-viewport').screenshot('ghost-3/createPageErrorMessage/titleV5');

        createPage.getArticleAlert().contains('Saving failed: Title cannot be longer than 255 characters.')
        cy.wait(1000);
        cy.screenshot('ghost-3/createPageErrorMessage/messageV5');
        cy.wait(1000);        
    })

    it('Create a page successful with the title and body correctly', () => {
        cy.get('div.gh-viewport').screenshot('ghost-3/createPageCorrectly/sectionV5'); 
        createPage.getSection().should('be.visible').within(() => {        
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        cy.get('div.gh-viewport').screenshot('ghost-3/createPageCorrectly/newPageV5'); 
        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getArticleEditor().click();
            createPage.getArticleEditor().type('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
            cy.wait(2000);  
            createPage.getTextareaPageTitle().click();
            createPage.getTextareaPageTitle().type('title pruebas')
            cy.wait(2000)            
        })
        cy.get('div.gh-viewport').screenshot('ghost-5/createPageCorrectly/titleV5');
        cy.wait(2000);
        createPage.getButtonPublish().click();   
        cy.wait(5000);
        createPage.getPublishButtonInsideModal().click();
        cy.wait(2000);
        cy.get('div.epm-modal-container').screenshot('ghost-5/createPageCorrectly/createdV5');

    })

    it('Create new page and uploading a image', () => {
        cy.get('div.gh-viewport').screenshot('ghost-3/createPageWithImage/sectionV5');
        createPage.getSection().should('be.visible').within(() => {
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        cy.get('div.gh-viewport').screenshot('ghost-3/createPageWithImage/newPageV5');

        createPage.getEditorPane().should('be.visible').within(() => {
            cy.wait(2000);

            cy.wait(2000)
            createPage.getButtonPlusToAddImage().click()
            cy.wait(1000)
            createPage.getMenuToAdd().should('be.visible').within(() => {
                cy.get('div[title="Image"]').click()
            })
            cy.get('input[type=file]').selectFile('cypress/fixtures/piramide-imagen.PNG', { force: true })
        })
        cy.wait(2000)
        createPage.getTextareaPageTitle().click();
        createPage.getTextareaPageTitle().type('bdy')
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-3/createPageWithImage/uploadImageV5');
        cy.wait(1000)

        createPage.getButtonPublish().click();
        cy.wait(5000);
        createPage.getPublishButtonInsideModal().click()
        cy.get('div.gh-viewport').screenshot('ghost-3/createPageWithImage/titleV5');
        cy.wait(1000);
    })

    it('Create a new page and upload a image with wrong extension a display a error message', () => { 

        cy.get('div.gh-viewport').screenshot('ghost-3/createPageWithImageWrong/sectionV5');
        createPage.getSection().should('be.visible').within(() => {
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        cy.get('div.gh-viewport').screenshot('ghost-3/createPageWithImageWrong/newPageV5');
        createPage.getEditorPane().should('be.visible').within(() => {  
            cy.wait(2000)
            createPage.getButtonPlusToAddImage().click()
            cy.wait(1000)
            createPage.getMenuToAdd().should('be.visible').within(() => {
                cy.get('div[title="Image"]').click()
            })
            cy.get('input[type=file]').selectFile('cypress/fixtures/Archivo prueba.docx', { force: true })
        })
        cy.get('div.gh-viewport').screenshot('ghost-3/createPageWithImageWrong/message');
        cy.wait(1000)
       
    })
})