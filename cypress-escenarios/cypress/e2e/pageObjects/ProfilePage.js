class ProfilePage {
    getUsernameProfile(){
        return cy.get('#user-name');
    }

    getSaveButton(){
        return cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    }

    getEmailProfile(){
        return cy.get('#user-email');
    }

    getEmailProfileError(){
        return cy.get('.user-details-bottom > div:nth-child(3) > .response');
    }
    
}

export default ProfilePage;
