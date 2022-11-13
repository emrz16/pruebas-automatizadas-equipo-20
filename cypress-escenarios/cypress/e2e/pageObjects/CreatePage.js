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
        return cy.get('textarea[placeholder="Page title"]');
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
}

export default CreatePage;