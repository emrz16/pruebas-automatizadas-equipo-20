import CreatePage from "../pageObjects/CreatePage";
import LoginPage from '../pageObjects/LoginPage';

describe('Create a pages', () => {
    const createPage = new CreatePage();
    const loginPage = new LoginPage();
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);  
        cy.wait(1000);
        cy.get('div.gh-flow').screenshot('loginV5'); 
        cy.get('form').within(() => {
            loginPage.getEmail().type('j.quinchia@uniandes.edu.co')
            loginPage.getPassword().type('OrionQuinchia');  
            loginPage.getLoginButton().click()
        })   
        cy.wait(1000);   
    })

    it('Create a post and display a message cause title exceed 255 characters', () => {
        cy.get('div.gh-viewport').screenshot('ghost-5/createPageErrorMessage/sectionV5'); 
        createPage.getSection().should('be.visible').within(() => { 
            cy.wait(1000);
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })    
        cy.get('div.gh-viewport').screenshot('ghost-5/createPageErrorMessage/newPageV5'); 
        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getArticleEditor().click();
            createPage.getArticleEditor().type('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
            cy.wait(2000);
            createPage.getTextareaPageTitle().click();
            createPage.getTextareaPageTitle().type('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
            cy.wait(2000)          
        })
                
        createPage.getButtonPublish().click();       
        cy.wait(1000);
        cy.get('div.gh-viewport').screenshot('ghost-5/createPageErrorMessage/titleV5');
        createPage.getArticleAlert().contains( 'Validation failed: Title cannot be longer than 255 characters')
        cy.wait(1000);
        cy.screenshot('ghost-5/createPageErrorMessage/messageV5');
        cy.wait(1000);        
    })

    it('Create a page successful with the title and body correctly', () => {
        cy.get('div.gh-viewport').screenshot('ghost-5/createPageCorrectly/sectionV5'); 
        createPage.getSection().should('be.visible').within(() => {        
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        cy.get('div.gh-viewport').screenshot('ghost-5/createPageCorrectly/newPageV5'); 
        createPage.getEditorPane().should('be.visible').within(() => {
            createPage.getArticleEditor().click();
            createPage.getArticleEditor().type('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
            cy.wait(2000);  
            createPage.getTextareaPageTitle().click();
            createPage.getTextareaPageTitle().type('title pruebas')
            cy.wait(2000)            
        })
     
        createPage.getButtonPublish().click();   
        cy.wait(1000);
        cy.get('div.gh-viewport').screenshot('ghost-5/createPageCorrectly/titleV5');
        createPage. getSettingsContainer().should('be.visible').within(() => {
            cy.contains('Continue, final review →').click();
            cy.wait(1000);
            cy.contains('Publish page, right now').click();

        })
        cy.get('div.epm-modal-container').screenshot('ghost-5/createPageCorrectly/createdV5');
        cy.get('div.gh-post-bookmark').should('be.visible').within(() => {
            cy.get('div.gh-post-bookmark-title').should((element) => {
                const text = element.text()
                expect(text).to.include('title pruebas')
            })
        })
    })

    it('Create new page and uploading a image', () => {
        cy.get('div.gh-viewport').screenshot('ghost-5/createPageWithImage/sectionV5'); 
        createPage.getSection().should('be.visible').within(() => {        
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        cy.get('div.gh-viewport').screenshot('ghost-5/createPageWithImage/newPageV5');
        cy.wait(1000);
        cy.get('input[type=file]').selectFile('cypress/fixtures/piramide-imagen.PNG', { force: true })
        cy.wait(1000)
        cy.get('div.gh-editor-feature-image').find('img').should('have.attr', 'src').should('include', 'piramide-imagen')
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/createPageWithImage/uploadImageV5');
        createPage.getEditorPane().should('be.visible').within((element) => {
            createPage.getArticleEditor().click();
            createPage.getArticleEditor().type('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
            cy.wait(2000);
            createPage.getTextareaPageTitle().click();
            createPage.getTextareaPageTitle().type('title pruebas')
            cy.wait(2000)
        })

        cy.wait(1000)

        createPage.getButtonPublish().click();
        cy.wait(1000);
        cy.get('div.gh-viewport').screenshot('ghost-5/createPageWithImage/titleV5');
        cy.wait(1000);
        cy.get('div.epm-modal-container').screenshot('ghost-5/createPageWithImage/finalReviewV5');      
        createPage.getSettingsContainer().should('be.visible').within(() => {            
            cy.wait(1000);
            cy.contains('Continue, final review →').click();         
            cy.wait(1000);
            cy.contains('Publish page, right now').click();          
            cy.wait(1000);
        })
        cy.get('div.epm-modal-container').screenshot('ghost-5/createPageWithImage/publishV5');
        createPage.getBookMark().find('img').should('have.attr', 'src').should('include', 'piramide-imagen');
    })

    it('Create a new page and upload a image with wrong extension a display a error message', () => {
        cy.get('div.gh-viewport').screenshot('ghost-5/createPageWithImageWrong/sectionV5'); 
        
        createPage.getSection().should('be.visible').within(() => { 
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })
        cy.get('div.gh-viewport').screenshot('ghost-5/createPageWithImageWrong/newPageV5');
        cy.get('input[type=file]').selectFile('cypress/fixtures/Archivo prueba.docx', { force: true })
        cy.wait(1000)
        cy.get('div.gh-viewport').screenshot('ghost-5/createPageWithImageWrong/message');
        createPage.getDivError().should((element) => {
            const text = element.text()
            expect(text).to.include('Please select a valid image.')
        })
    })
})