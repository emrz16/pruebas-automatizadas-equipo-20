class ProfilePage {
    getUsernameProfile(){
        return cy.get('#user-name');
    }

    getSlug(){
        return cy.get('#user-slug');
    }

    getUserLocation(){
        return cy.get('#user-location');
    }

    getUserWebside(){
        return cy.get('#user-website');
    }

    getUserTwitter(){
        return cy.get('#user-twitter');
    }

    getUserFacebook(){
        return cy.get('#user-facebook');
    }

    getUserBio(){
        return cy.get('#user-bio');
    }

    getEmailNotificationComments(){
        return cy.get('#comment-notifications');
    }

    getEmailNotificationNewSignups(){
        return cy.get('#free-signup-notifications');
    }

    getButtonUserCover(){
        return cy.get('.user-cover-edit')
    }

    getButtonUploadCover(){
        return cy.get('input[type=file]');
    }

    getButtonSaveUploadCover(){
        return cy.get('.modal-footer > .ember-view');
    }

    getButtonDeleteUploadCover(){
        return cy.get('.image-delete');
    }

    getButtonUploadPictureProfile(){
        return cy.get('.edit-user-image')
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

    getBioText(){
        return cy.get('#user-bio');
    }

    getWebSide(){
        return cy.get('#user-website');
    }

    getTextOldPassword(){
        return cy.get('#user-password-old');
    }

    getTextNewPassword(){
        return cy.get('#user-password-new');
    }

    getTextVerifyPassword(){
        return cy.get('#user-new-password-verification');
    }

    getButtonChangePassword(){
        return cy.get('.button-change-password');
    }

    getMessagePasswordUpdated(){
        return cy.contains('Password updated')
    }
    
}

export default ProfilePage;
