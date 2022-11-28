import CreateTag from './pageObject/CreateTag';
import LoginPage from './pageObject/LoginPage';
import data_a_priori from '../../../data_pool_a_priori/MOCK_DATA_PAGE.json';
import { faker } from '@faker-js/faker';
import CreatePage from "./pageObject/CreatePage";

describe('Create tags', () => {
    const createTag = new CreateTag();
    const loginPage = new LoginPage();
    const createPage = new CreatePage();

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

    it('#31: Create tag with title and description', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getSaveButton().click();

    })
    it('#32: Create tag without name', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormSlug().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getSaveButton().click();

    })

    it('#33: Create tag with invalid color format', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormColor().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getSaveButton().click();

    })

    it('#34: Create tag with valid color format', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormColor().type(faker.color.rgb({ format: 'binary' }))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getSaveButton().click();

    })
    
    it('#35: Create tag with name with more than 191 characters', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(60))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getSaveButton().click();

    })

    it('#36: Create tag with slug with more than 191 characters', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormSlug().clear()
            cy.wait(1000);
            createTag.getFormSlug().type(faker.random.words(60))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getSaveButton().click();

    })

     it('#37: Create tag with title and description and upload image successfully', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
            cy.get('input[type=file]').selectFile('cypress/fixtures/piramide-imagen.PNG', { force: true })
        })
        createTag.getSaveButton().click();
        cy.wait(1000);  
        createTag.getConfirmTag().should('be.visible').within(() => {
            createTag.getCloseButton().click()            
        })
        createTag.getSaveButton().click();

    })

    it('#38: Create tag with title and description and upload image with incorrect extension', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
            cy.get('input[type=file]').selectFile('cypress/fixtures/Archivo prueba.docx', { force: true })
        })        

    })

    it('#39: Create tag with description with more than 500 characters', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(120));
            cy.wait(1000);
        })
        createTag.getSaveButton().click();

    })

    it('#40: Create tag with title and description and edit the default slug ', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
            createTag.getFormSlug().clear()
            createTag.getFormSlug().type(faker.random.words(3))
        })
        createTag.getSaveButton().click();

    })

    it('#41: Create tag with title and description and upload image and then delete this image', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
            cy.get('input[type=file]').selectFile('cypress/fixtures/piramide-imagen.PNG', { force: true })
            cy.get('a.image-delete').click()
        })

        createTag.getSaveButton().click();
       
    })

    it('#42: Create tag and modify metadata succesfully', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListMetada().click()
        createTag.getMetaForm().should('be.visible').within(() => {
            createTag.getMetaTitle().type(faker.random.words(3))
            cy.wait(1000);
        })        
        createTag.getSaveButton().click();

    })

    it('#43: Create tag and modify metadata with meta title with more than 300 characters', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListMetada().click()
        createTag.getMetaForm().should('be.visible').within(() => {
            createTag.getMetaTitle().type(faker.random.words(75))
            cy.wait(1000);
        })        
        createTag.getSaveButton().click();
    })

    it('#44: Create tag and modify metadata with meta description with more than 500 characters', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListMetada().click()
        createTag.getMetaForm().should('be.visible').within(() => {
            createTag.getMetaTitle().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getMetaDescription().type(faker.random.words(110))
            cy.wait(1000);
        })        
        createTag.getSaveButton().click();
    })

    it('#45: Create tag and modify metadata with a canonical URL successfully', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListMetada().click()
        createTag.getMetaForm().should('be.visible').within(() => {
            createTag.getMetaTitle().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getMetaDescription().type(faker.random.words(5))
            cy.wait(1000);
            createTag.getMetaCanonicalUrl().type(faker.internet.url())
            cy.wait(1000);
        })  
        createTag.getSaveButton().click();  
        createTag.getConfirmTag().should('be.visible').within(() => {
            createTag.getCloseButton().click()            
        })            
        createTag.getSaveButton().click();
    })

    it('#46: Create tag and modify metadata with an invalid canonical URL ', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListMetada().click()
        createTag.getMetaForm().should('be.visible').within(() => {
            createTag.getMetaTitle().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getMetaDescription().type(faker.random.words(5))
            cy.wait(1000);
            createTag.getMetaCanonicalUrl().type(faker.random.words(3))
            cy.wait(1000);
        })       
        createTag.getSaveButton().click();
    })

    it('#47: Create tag and modify Twitter Card succesfully', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListTwittercard().click()
        createTag.getTwitterForm().should('be.visible').within(() => {
            createTag.getTwitterTitle().type(faker.random.words(3))
            cy.wait(1000);
        })        
        createTag.getSaveButton().click();

    })

    it('#48: Create tag and modify Twitter Card and upload an image successfully', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListTwittercard().click()
        createTag.getTwitterForm().should('be.visible').within(() => {
            createTag.getTwitterTitle().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getTwitterDescription().type(faker.random.words(5))
            cy.wait(1000);
            cy.get('input[type=file]').selectFile('cypress/fixtures/piramide-imagen.PNG', { force: true })            
        })        
        createTag.getSaveButton().click();
        cy.wait(1000);  
        createTag.getConfirmTag().should('be.visible').within(() => {
            createTag.getCloseButton().click()            
        })
        createTag.getSaveButton().click();

    })

    it('#49: Create tag and modify Twitter Card and upload an image with incorrect extension', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListTwittercard().click()
        createTag.getTwitterForm().should('be.visible').within(() => {
            createTag.getTwitterTitle().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getTwitterDescription().type(faker.random.words(5))
            cy.wait(1000);
            cy.get('input[type=file]').selectFile('cypress/fixtures/Archivo prueba.docx', { force: true })            
        })    

    })

    it('#50: Create tag and modify Twitter Card with Twitter title with more than 300 characters', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListTwittercard().click()
        createTag.getTwitterForm().should('be.visible').within(() => {
            createTag.getTwitterTitle().type(faker.random.words(75))
            cy.wait(1000);
            createTag.getTwitterDescription().type(faker.random.words(5))
            cy.wait(1000);
        })        
        createTag.getSaveButton().click();

    })

    it('#51: Create tag and modify Twitter Card with Twitter description with more than 500 characters', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListTwittercard().click()
        createTag.getTwitterForm().should('be.visible').within(() => {
            createTag.getTwitterTitle().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getTwitterDescription().type(faker.random.words(110))
            cy.wait(1000);
        })        
        createTag.getSaveButton().click();

    })

    it('#52: Create tag and modify Facebook Card succesfully', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListFacebookCard().click()
        createTag.getFacebookForm().should('be.visible').within(() => {
            createTag.getFacebookTitle().type(faker.random.words(3))
            cy.wait(1000);
        })        
        createTag.getSaveButton().click();

    })

    it('#53: Create tag and modify Facebook Card and upload an image successfully', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListFacebookCard().click()
        createTag.getFacebookForm().should('be.visible').within(() => {
            createTag.getFacebookTitle().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFacebookDescription().type(faker.random.words(5))
            cy.wait(1000);
            cy.get('input[type=file]').selectFile('cypress/fixtures/piramide-imagen.PNG', { force: true })            
        })        
        createTag.getSaveButton().click();
        cy.wait(1000);  
        createTag.getConfirmTag().should('be.visible').within(() => {
            createTag.getCloseButton().click()            
        })
        createTag.getSaveButton().click();

    })

    it('#54: Create tag and modify Facebook Card and upload an image with incorrect extension', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListFacebookCard().click()
        createTag.getFacebookForm().should('be.visible').within(() => {
            createTag.getFacebookTitle().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFacebookDescription().type(faker.random.words(5))
            cy.wait(1000);
            cy.get('input[type=file]').selectFile('cypress/fixtures/Archivo prueba.docx', { force: true })            
        })    

    })

    it('#55: Create tag and modify Facebook Card with Facebook title with more than 300 characters', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListFacebookCard().click()
        createTag.getFacebookForm().should('be.visible').within(() => {
            createTag.getFacebookTitle().type(faker.random.words(75))
            cy.wait(1000);
            createTag.getFacebookDescription().type(faker.random.words(5))
            cy.wait(1000);
        })        
        createTag.getSaveButton().click();

    })

    it('#56: Create tag and modify Facebook Card with Facebook description with more than 500 characters', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListFacebookCard().click()
        createTag.getFacebookForm().should('be.visible').within(() => {
            createTag.getFacebookTitle().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFacebookDescription().type(faker.random.words(110))
            cy.wait(1000);
        })        
        createTag.getSaveButton().click();

    })

    it('#57: Create tag and modify it', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        var randomSlug=faker.random.numeric(3)
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormSlug().clear()            
            createTag.getFormSlug().type(randomSlug)
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getSaveButton().click();
        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        cy.visit('http://localhost:2368/ghost/#/tags/'+randomSlug)
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().clear()
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().clear()
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getSaveButton().click();

    })

    it('#58: Create tag and delete it', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        var randomSlug=faker.random.numeric(3)
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormSlug().clear()            
            createTag.getFormSlug().type(randomSlug)
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getSaveButton().click();
        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        cy.visit('http://localhost:2368/ghost/#/tags/'+randomSlug)
        createTag.getDeleteTagButton().click()       
        cy.wait(1000);  
        createTag.getConfirmTag().should('be.visible').within(() => {
            createTag.getDeleteTagFinalButton().click();                      
        })
    

    })


    it('#59: Create tag and modify Code injection successfully', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getListCodeInjection().click()
        createTag.getCodeInjectionForm().should('be.visible').within(() => {
            createTag.getTagHeader().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getTagFooter().type(faker.random.words(5))
            cy.wait(1000);
        })        
        createTag.getSaveButton().click();

    })

    it('#60: Create page with tag', () => {

        createTag.getSection().should('be.visible').within(() => {
            cy.contains('Tags').click();
            cy.wait(1000);
        })
        createTag.getMain().should('be.visible').within(() => {
            cy.contains('New tag').click()
            cy.wait(1000)
        })        
        createTag.getTagForm().should('be.visible').within(() => {
            createTag.getFormName().type(faker.random.words(3))
            cy.wait(1000);
            createTag.getFormDescription().type(faker.random.words(5));
            cy.wait(1000);
        })
        createTag.getSaveButton().click();
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
            createPage.getTextareaPageTitle().type(faker.random.words(3))
            cy.wait(2000);
            createPage.getTextareaPageTitle().click();
            createPage.getArticleEditor().type(faker.random.words(5))
            cy.wait(2000)
        })
        cy.get('button.settings-menu-toggle').click();

        cy.get('div.settings-menu-pane').should('be.visible').within(() => {
            cy.get('#tag-input').click();              
            cy.get('li.ember-power-select-option').eq(0).click();       
        })
        cy.get('button.settings-menu-toggle').click();
        createPage.getButtonPublish().click();
        cy.wait(2000)
        createPage.getSettingsContainer().should('be.visible').within(() => {
            cy.contains('Continue, final review →').click();
            cy.wait(1000);
            cy.contains('Publish page, right now').click();
        })      

    })


})

