class SettingsNavigationPage {
    getTextLabelPrimary(){
        return cy.get('input[type="text"]').eq(4);
    }

    getTextUrlPrimary(){
        return cy.get('input[type="text"]').eq(5);
    }

    getTextLabelSecondary(){
        return cy.get('input[type="text"]').eq(10);
    }

    getTextUrlSecondary(){
        return cy.get('input[type="text"]').eq(11);
    }

    getSaveButton(){
        return cy.contains("Save");
    }

    getDeleteButtonPrimary(){
        return cy.get(".gh-blognav-delete").eq(2);
    }

    getDeleteButtonSecondary(){
        return cy.get(".gh-blognav-delete").eq(4);
    }

}

export default SettingsNavigationPage;