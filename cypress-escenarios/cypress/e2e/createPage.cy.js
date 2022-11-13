import CreatePage from "./pageObjects/CreatePage";
import LoginPage from './pageObjects/LoginPage';

describe('Create a pages', () => {
    const createPage = new CreatePage();
    const loginPage = new LoginPage();
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
        cy.get('form').within(() => {
            loginPage.getEmail().type('j.quinchia@uniandes.edu.co')
            loginPage.getPassword().type('OrionQuinchia')
            loginPage.getLoginButton().click()
        })
        cy.wait(1000)
    })
    it('Create a post and display a message cause title exceed 255 characters', () => {

        createPage.getSection().should('be.visible').within(() => {    
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage.getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

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
        createPage.getArticleAlert().should((element) => {
            const text = element.text()
            expect(text).to.include('Validation failed: Title cannot be longer than 255 characters')
        })
    })

    it('Create a page successful with the title and body correctly', () => {
        createPage.getSection().should('be.visible').within(() => {        
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage. getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

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
        createPage. getSettingsContainer().should('be.visible').within(() => {
            cy.contains('Continue, final review →').click();
            cy.wait(1000);
            cy.contains('Publish page, right now').click();

        })
        cy.get('div.gh-post-bookmark').should('be.visible').within(() => {
            cy.get('div.gh-post-bookmark-title').should((element) => {
                const text = element.text()
                expect(text).to.include('title pruebas')
            })
        })
    })

    it('Create new page and uploading a image', () => {
        createPage.getSection().should('be.visible').within(() => {
            //click en la opción pages
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage. getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        cy.get('input[type=file]')
            .selectFile('cypress/fixtures/piramide-imagen.PNG', { force: true })
        cy.wait(1000)
        cy.get('div.gh-editor-feature-image').find('img').should('have.attr', 'src').should('include', 'piramide-imagen')

        createPage.getEditorPane().should('be.visible').within((element) => {
            createPage.getArticleEditor().click();
            createPage.getArticleEditor().type('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
            cy.wait(2000)
            // escribir en el textarea    
            createPage.getTextareaPageTitle().click();
            createPage.getTextareaPageTitle().type('title pruebas')
            cy.wait(2000)
        })

        cy.wait(1000)

        createPage.getButtonPublish().click();
        cy.wait(1000);
        createPage. getSettingsContainer().should('be.visible').within(() => {
            cy.contains('Continue, final review →').click();
            cy.wait(1000);
            cy.contains('Publish page, right now').click();

        })

       createPage.getBookMark().find('img').should('have.attr', 'src').should('include', 'piramide-imagen')


    })

    it('Create a new page and upload a image with wrong extension a display a error message', () => {
        createPage.getSection().should('be.visible').within(() => { 
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        createPage. getMain().should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        cy.get('input[type=file]').selectFile('cypress/fixtures/Archivo prueba.docx', { force: true })
        cy.wait(1000)

        createPage.getDivError().should((element) => {
            const text = element.text()
            expect(text).to.include('Please select a valid image.')
        })
    })
})