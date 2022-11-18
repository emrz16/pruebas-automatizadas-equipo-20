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
        return cy.get('button.settings-menu-toggle');
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
}

export default PostPage;
