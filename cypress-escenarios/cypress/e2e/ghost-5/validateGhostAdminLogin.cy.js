describe('Validate Ghost Admin Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);        
    })

    it('Login without writing an email', () => {
        cy.get('form').within(() => {
            cy.get('input[id="identification"]').type('')           
            cy.get('input[id="password"]').type('cristinauniandes2022!')
            cy.get('button[id="ember7"]').click()
            cy.wait(1000)
        })
     
    }) 

    it('Login with incorrect password', () => {
        cy.get('form').within(() => {
            cy.get('input[id="identification"]').type('m.guapacha@uniandes.edu.co')           
            cy.get('input[id="password"]').type('445566')
            cy.get('button[id="ember7"]').click()
            cy.wait(1000)
        })
     
    }) 

    it('Login without an email domain', () => {
        cy.get('form').within(() => {
            cy.get('input[id="identification"]').type('d.bustosr@uniandes')           
            cy.get('input[id="password"]').type('daniel.andes2022')
            cy.get('button[id="ember7"]').click()
            cy.wait(1000)
        })     
    })
       
    it('Login without and email @', () => {
        cy.get('form').within(() => {
            cy.get('input[id="identification"]').type('d.bustosruniandes.edu.co')
            cy.get('input[id="password"]').type('daniel.andes2022')
            cy.get('button[id="ember7"]').click()
            cy.wait(1000)
        })     
    })      
})