class SettingsPage {

    getGeneralButton(){
        return cy.get('a[href="#/settings/general/"]')
    }

    getNavigationButton(){
        return cy.get('a[href="#/settings/navigation/"]')
    }

    getButtonExpandTitle(){
        return cy.get('.gh-btn').eq(1);
    }
    
    getTextNameSite(){
        return cy.get('.ember-text-field').first();
    }

    getTexThemeSite(){
        return cy.get('.ember-text-field').eq(1);
    }

    getSaveButton(){
        return cy.get('.gh-btn').first();
    }

    getButtonExpandSocialAccount(){
        return cy.get('.gh-btn').eq(7);
    }
    getButtonExpandMetadata(){
        return cy.get('.gh-btn').eq(4);
    }

    getButtonExpandTwitterCard(){
        return cy.get('.gh-btn').eq(5);
    }

    getButtonExpandFacebookCard(){
        return cy.get('.gh-btn').eq(6);
    }

    getTextFacebookCardTitle(){
        return cy.get('#ogTitle');
    }

    getTextFacebookCardDescription(){
        return cy.get('#ogDescription');
    }

    getTextTwitterCardTitle(){
        return cy.get('#twitterTitle');
    }

    getTextMetadataTitle(){
        return cy.get('#metaTitle');
    }

    getTextMetadataDescription(){
        return cy.get('#metaDescription');
    }

    getTextTwitterLink(){
        return cy.get('.gh-input').eq(1);
    }

    getTextFacebookLink(){
        return cy.get('.gh-input').eq(0);
    }

    getCounterTextMetadataTitle(){
        return cy.get('.word-count').eq(0);
    }

    getCounterTextMetadataDescription(){
        return cy.get('.word-count').eq(1);
    }


}

export default SettingsPage;