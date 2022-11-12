describe('Create a pages', () => {
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
    it('Create a post and display a message cause title exceed 255 characters', () => {

        cy.get('section.gh-nav-body').should('be.visible').within(() => {
            //click en la opción pages
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        cy.get('div.gh-koenig-editor-pane').should('be.visible').within((element) => {
            cy.get('article.koenig-editor').click();
            cy.get('article.koenig-editor').type('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
            cy.wait(2000)
            // escribir en el textarea    
            cy.get('textarea[placeholder="Page title"]').click();
            cy.get('textarea[placeholder="Page title"]').type('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
            cy.wait(2000)
            cy.window().then((win) => {
                let d = win.document
                let curPageMaxY = Math.max(d.body.scrollHeight, d.body.offsetHeight, d.documentElement.clientHeight, d.documentElement.scrollHeight, d.documentElement.offsetHeight) - win.innerHeight
                let curPageMaxX = Math.max(d.body.scrollWidth, d.body.offsetWidth, d.documentElement.clientWidth, d.documentElement.scrollWidth, d.documentElement.offsetWidth) - win.innerWidth
                // cy.get(d).scrollTo(curPageMaxX, curPageMaxY);
            })
        })

        //publicar la pagina
        cy.get('button.gh-publish-trigger').click();
        cy.wait(1000);
        cy.get('article.gh-alert-red').should((element) => {
            const text = element.text()
            expect(text).to.include('Validation failed: Title cannot be longer than 255 characters')
        })
    })

    it('Create a page successful with the title and body correctly', () => {
        cy.get('section.gh-nav-body').should('be.visible').within(() => {
            //click en la opción pages
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        cy.get('div.gh-koenig-editor-pane').should('be.visible').within((element) => {
            cy.get('article.koenig-editor').click();
            cy.get('article.koenig-editor').type('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
            cy.wait(2000)
            // escribir en el textarea    
            cy.get('textarea[placeholder="Page title"]').click();
            cy.get('textarea[placeholder="Page title"]').type('title pruebas')
            cy.wait(2000)
            cy.window().then((win) => {
                let d = win.document
                let curPageMaxY = Math.max(d.body.scrollHeight, d.body.offsetHeight, d.documentElement.clientHeight, d.documentElement.scrollHeight, d.documentElement.offsetHeight) - win.innerHeight
                let curPageMaxX = Math.max(d.body.scrollWidth, d.body.offsetWidth, d.documentElement.clientWidth, d.documentElement.scrollWidth, d.documentElement.offsetWidth) - win.innerWidth
                // cy.get(d).scrollTo(curPageMaxX, curPageMaxY);
            })
        })

        //publicar la pagina
        cy.get('button.gh-publish-trigger').click();
        cy.wait(1000);
        cy.get('div.gh-publish-settings-container').should('be.visible').within(() => {
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
        cy.get('section.gh-nav-body').should('be.visible').within(() => {
            //click en la opción pages
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        cy.get('input[type=file]')
            .selectFile('cypress/fixtures/piramide-imagen.PNG', { force: true })
        cy.wait(1000)
        cy.get('div.gh-editor-feature-image').find('img').should('have.attr', 'src').should('include', 'piramide-imagen')

        cy.get('div.gh-koenig-editor-pane').should('be.visible').within((element) => {
            cy.get('article.koenig-editor').click();
            cy.get('article.koenig-editor').type('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
            cy.wait(2000)
            // escribir en el textarea    
            cy.get('textarea[placeholder="Page title"]').click();
            cy.get('textarea[placeholder="Page title"]').type('title pruebas')
            cy.wait(2000)
        })

        cy.wait(1000)

        cy.get('button.gh-publish-trigger').click();
        cy.wait(1000);
        cy.get('div.gh-publish-settings-container').should('be.visible').within(() => {
            cy.contains('Continue, final review →').click();
            cy.wait(1000);
            cy.contains('Publish page, right now').click();

        })

        cy.get('div.gh-post-bookmark-image').find('img').should('have.attr', 'src').should('include', 'piramide-imagen')


    })

    it('Create a new page and upload a image with wrong extension a display a error message', () => {
        cy.get('section.gh-nav-body').should('be.visible').within(() => {
            //click en la opción pages
            cy.contains('Pages').click();
            cy.wait(1000);
        })

        cy.get('main.gh-main').should('be.visible').within(() => {
            cy.contains('New page').click()
            cy.wait(1000)
        })

        cy.get('input[type=file]')
            .selectFile('cypress/fixtures/Archivo prueba.docx', { force: true })
        cy.wait(1000)

        cy.get('div.gh-setting-error').should((element) => {
            const text = element.text()
            expect(text).to.include('Please select a valid image.')
        })
    })
})