class CreateTag{

    getSection() {
        return cy.get('section.gh-nav-body');
    }

    getMain() {
        return cy.get('main.gh-main');
    }

    getTagForm() {
        return cy.get('section.gh-main-section-block');
    }
    getFormName() {
        return cy.get('input[name="name"]');
    }
    getFormDescription() {
        return cy.get('textarea.gh-input.gh-tag-details-textarea');
    }
    getSaveButton() {
        return cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    }
    getFormSlug() {
        return cy.get('input[name="slug"]');
    }
    getFormColor() {
        return cy.get('input[placeholder="15171A"]');
    }
    getConfirmTag() {
        return cy.get('div.modal-content');
    }
    getCloseButton() {
        return cy.get('button.close');
    }
    getListMetada(){
        return cy.get('button.gh-btn.gh-btn-expand').eq(0)
    }    
    getMetaForm() {
        return cy.get('div.gh-expandable-block');
    }
    getMetaTitle() {
        return cy.get('input[name="metaTitle"]');
    }
    getMetaDescription() {
        return cy.get('textarea.gh-input.gh-tag-details-textarea');
    }
    getMetaCanonicalUrl(){
        return cy.get('input[name="canonicalUrl"]');
    }
    getListTwittercard(){
        return cy.get('button.gh-btn.gh-btn-expand').eq(1)
    }    
    getTwitterForm() {
        return cy.get('div.gh-expandable-block');
    }
    getTwitterTitle() {
        return cy.get('input[name="twitterTitle"]');
    }
    getTwitterDescription() {
        return cy.get('textarea.gh-input.gh-tag-details-textarea');
    }
    getListFacebookCard(){
        return cy.get('button.gh-btn.gh-btn-expand').eq(2)
    }
    getFacebookForm() {
        return cy.get('div.gh-expandable-block');
    }
    getFacebookTitle() {
        return cy.get('input[name="ogTitle"]');
    }
    getFacebookDescription() {
        return cy.get('textarea.gh-input.gh-tag-details-textarea');
    }
    getListCodeInjection(){
        return cy.get('button.gh-btn.gh-btn-expand').eq(3)
    }
    getCodeInjectionForm() {
        return cy.get('div.gh-expandable-block');
    }
    getTagHeader() {
        return cy.get('div.CodeMirror-scroll').eq(0);
    }
    getTagFooter() {
        return cy.get('div.CodeMirror-scroll').eq(1);
    }
    getDeleteTagButton() {
        return cy.get('button.gh-btn.gh-btn-red.gh-btn-icon')
    }
    getDeleteTagFinalButton() {
        return cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view')
    }


}

export default CreateTag;