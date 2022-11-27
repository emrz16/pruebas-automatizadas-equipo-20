class HomePage {
    getAvatarProfile(){
        return cy.get('.gh-user-avatar');
    }

    getYourProfileOption(){
        return cy.get('.dropdown-menu > li:nth-child(4)');
    }

    getLoginButton(){
        return cy.get('#ember10');
    }

    getMemberMenu(){
        return cy.get('.gh-nav-list.gh-nav-manage > li:nth-child(4)');
    }

    getSettingsButton(){
        return cy.get('a[href="#/settings/"]');
    }
    
}

export default HomePage;
