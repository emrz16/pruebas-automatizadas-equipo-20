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
        return cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    }

    getButtonPublish() {
        return cy.get('button.gh-publish-trigger');
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

    getButtonToUpload() {
        return cy.get('button.gh-editor-feature-image-add-button')
    }

    getButtonBackToEditor(){
        return cy.get('button.gh-back-to-editor')
    }

    getUpdatePageButton(){
        return cy.get('button.gh-editor-save-trigger.greenember-view')
    }

    // getTextareaPageTitle() {
    //     return cy.get('textarea[id="Page title"]');
    // }
    getElementByText(){
        return cy.contains('Update');
    }

    getListOfPages(){
        return cy.get('ol li a').first()
    }

    getMenuAndSelectPublishedPages(){
        return cy.contains('All pages')
    }

    getOptionPublish(){
       return cy.get('#ember-power-select-options-ember569')
    }
    getUpdateButton(){
        return cy.get('button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view')
    }

    getSettingButton(){       
       return cy.get('section.flex.items-center.pe-auto.h-100').find('div')
      
    }

    getInputTimePiker(){
        return cy.get('div.gh-date-time-picker-time')
    }
   getListMetada(){
    return cy.contains('Meta data')
   }

   getListTwittercard(){
    return cy.contains('Twitter card')
   }
}

export default CreatePage;