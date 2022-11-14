import LoginPage from "./pageObjects/LoginPage";
import PostPage from "./pageObjects/PostPage";

describe('Create a post', () => {
    const loginPage = new LoginPage();
    const postPage=new PostPage();
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
    
    it('Create a new post with a wrong date format and display an error message', () => {

         cy.get('section.gh-nav-body').should('be.visible').within(() => {
            cy.contains('Post').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New post').click()
            cy.wait(1000)
        })

        cy.get('div.gh-koenig-editor-pane').should('be.visible').within((element) => {
            cy.get('textarea[placeholder="Post title"]').type('title post')
            cy.get('div.koenig-editor__editor-wrapper').type('body')
            cy.wait(2000)
        })

        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);
        cy.get('div.settings-menu-pane').should('be.visible').within((element) => {
            cy.get('div.gh-date-time-picker-time').find('input').within((element) => {
                const val = element.val()
                let number = parseInt(val.split(':')[1])
                let count = number + 60
                let textValue = val.split(':')[0] + ':' + count
                cy.log(textValue)
                cy.log(element)
                element.click()
                cy.wait(2000);
                element.val(textValue)
                cy.wait(5000)
                  
            })
            cy.get('input[name="post-setting-slug"]').click()
        })        
     
        
    })

    it('Create a new post with a right date', () => {   

        cy.get('section.gh-nav-body').should('be.visible').within(() => {
            cy.contains('Post').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New post').click()
            cy.wait(1000)
        })

        cy.get('div.gh-koenig-editor-pane').should('be.visible').within((element) => {
            cy.get('textarea[placeholder="Post title"]').type('title post')
            cy.get('div.koenig-editor__editor-wrapper').type('body')
            cy.wait(2000)
        })

        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);       
        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
        cy.wait(1000);
        cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click();
        cy.wait(1000);
        cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click();
        cy.wait(1000);          
    })

    it('Create a new post and modify the date, display a message if the date is greater than  today', () => {

        postPage.getSection().should('be.visible').within(() => {
            cy.contains('Post').click();
            cy.wait(1000);
        })

        postPage.getMain().should('be.visible').within(() => {
          cy.get('a.view-actions-top-row').click()
            cy.wait(1000)
        })

        postPage.getEditorPane().should('be.visible').within(() => {
            cy.get('textarea[placeholder="Post title"]').type('title post')
            cy.get('div.koenig-editor__editor-wrapper').type('body')
            cy.wait(2000)
        })

        postPage.getSettingButton().click();
        cy.wait(2000);
        postPage.getMenuPanel().should('be.visible').within(() => {
            postPage.getDivPicker().find('input').within((element) => {
                const val = element.val()
                const hour = val.split(':')[0]
                const minute = (parseInt(val.split(':')[1]) - 1).toString().padStart(2, '0')
                const newValue = hour + ':' + minute;            
                element.click()
                cy.wait(2000);
                element.val(newValue)
                cy.wait(5000)
            })

            postPage.getInputSlug().type("prueba")
        })
        postPage.getSettingButton().click()
        cy.wait(2000)
        postPage.getButtonPublish().click()
        cy.wait(2000)   
        postPage.getBlackPublishButton().click()
        cy.wait(2000)   
        postPage.getGreenPublishButton().click()  

    })
    
        it('Create a new post and modify the date with a past day', () => {

        cy.get('section.gh-nav-body').should('be.visible').within(() => {
            cy.contains('Post').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New post').click()
            cy.wait(1000)
        })

        cy.get('div.gh-koenig-editor-pane').should('be.visible').within((element) => {
            cy.get('textarea[placeholder="Post title"]').type('title post')
            cy.get('div.koenig-editor__editor-wrapper').type('body')
            cy.wait(2000)
        })

        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);
        cy.get('div.settings-menu-pane').should('be.visible').within((element) => {
            cy.get('div.gh-date-time-picker-time').find('input').within((element) => {
                const val = element.val()
                let number = parseInt(val.split(':')[1])
                let count = number - 1
                let textValue = val.split(':')[0] + ':' + count
                cy.log(textValue)
                cy.log(element)
                element.click()
                cy.wait(2000);
                element.val(textValue)
                cy.wait(5000)
                  
            })
            
        })
        cy.get('button.settings-menu-toggle').click();
        cy.wait(2000);
        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
        cy.wait(1000);
        cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click();
        cy.wait(1000);
        cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click();
        cy.wait(1000);       
    })    
    
})
