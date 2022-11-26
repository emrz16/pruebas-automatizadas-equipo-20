class LoginPage {
    getEmail(){
        return cy.get('#ember6');
    }

    getPassword(){
        return cy.get('#ember8');
    }

    getLoginButton(){
        return cy.get('#ember10');
    }
    
}

export default LoginPage;
