class CreatePage {
    getSection() {
        return cy.get('section.gh-nav-body');
    }

    getMain() {
        return cy.get('main.gh-main');
    }

    getEditorPane() {
        return cy.get('div.gh-koenig-editor-pane');
    }

    getArticleEditor() {
        return cy.get('article.koenig-editor');
    }

    getTextareaPageTitle() {
        return cy.get('textarea[placeholder="Page Title"]');
    }

    getButtonPublish() {
        return cy.get('div.gh-publishmenu-trigger')   
    }

    getPublishButtonInsideModal(){
       return cy.get('button.gh-publishmenu-button')
    }
    
    getArticleAlert() {
        return cy.get('article.gh-alert-red');
    }

    getSettingsContainer() {
        return cy.get('div.gh-publish-settings-container');
    }

    getBookMark() {
        return cy.get('div.gh-post-bookmark-image');
    }

    getDivError() {
        return cy.get('div.gh-setting-error');
    }

    getButtonPlusToAddImage(){
        return cy.get('button.koenig-plus-menu-button')
    }

    getMenuToAdd(){
        return cy.get('div.koenig-cardmenu')       
    }

    getSpanError(){
        return cy.get('span.sans-serif') 
    }
}

export default CreatePage;
