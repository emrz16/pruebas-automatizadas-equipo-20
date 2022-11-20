class PostPage {
    getSection() {
        return cy.get('section.gh-nav-body');
    }

    getMain() {
        return cy.get('main.gh-main');
    }

    getEditorPane() {
        return cy.get('div.gh-koenig-editor-pane');
       
    }

    getSettingButton() {
        return cy.get('button.post-settings');
    }

    getMenuPanel() {
        return cy.get('div.settings-menu-pane');
    }
    getDivPicker() {
        return cy.get('div.gh-date-time-picker-time');
    }

    getInputSlug() {
        return cy.get('input[name="post-setting-slug"]');
    }

    getButtonPublish() {
        return cy.get('button.gh-publish-trigger');
    }

    getBlackPublishButton() {
        return cy.get('button.gh-btn-black');
    }
    
    getGreenPublishButton() {
        return cy.get('button.gh-btn-pulse');
    }

    getTextateaTitle(){
        return cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    }

    getBodyCreatePost(){
        return cy.get('div.koenig-editor__editor-wrapper');
    }

    getPublishButton(){
        return  cy.get('div.gh-publishmenu-trigger'); 
    }

    getPublishButtonInsideModal(){
        return   cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view'); 
  
    }

    getButtonCloseSettings(){
        return cy.get('button.close.settings-menu-header-action')
    }
}

export default PostPage;
