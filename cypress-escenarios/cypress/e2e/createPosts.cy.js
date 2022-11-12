describe('Create a post', () => {
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
        cy.get('form').within(() => {
            cy.get('input[id="ember6"]').type('j.quinchia@uniandes.edu.co')
            cy.get('input[id="ember8"]').type('OrionQuinchia')
            cy.get('button[id="ember10"]').click()
        })
        cy.wait(1000)
    })


    it('Create a new post and modify the date, display a message if the date is greater than  today', () => {

        cy.get('section.gh-nav-body').should('be.visible').within(() => {
            //click en la opción pages
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
                let count = number + 25
                let textValue = val.split(':')[0] + ':' + count
                cy.log(textValue)
                cy.log(element)
                element.click()
                cy.wait(2000);
                element.val(textValue)
                cy.wait(5000)
            })

            cy.get('input[name="post-setting-slug"]').type("prueba")
        })
    })
})