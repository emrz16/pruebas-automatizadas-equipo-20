class LoginPage {
    getEmail(){
        return cy.get('#ember8');
    }

    getPassword(){
        return cy.get('#ember10');
    }

    getLoginButton(){
        return cy.get('#ember12');
    }
    
}

export default LoginPage;
