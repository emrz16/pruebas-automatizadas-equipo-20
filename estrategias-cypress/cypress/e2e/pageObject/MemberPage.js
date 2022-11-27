class MemberPage{
    getSearchBarMember(){
        return cy.get('.gh-input.gh-members-list-searchfield')
    }

    getMemberMenu(){
        return cy.get('.gh-nav-list.gh-nav-manage > li:nth-child(4)');
    }

    getNewMember(){
        return cy.get('.ember-view.gh-btn.gh-btn-primary')
    }

    getMembersName(){
        return cy.get('.ember-text-field.gh-input.ember-view')
    }

    getMembersEmail(){
        return cy.get('.ember-text-field.gh-input.ember-view')
    }

    getMembersNote(){
        return cy.get('.gh-member-details-textarea.ember-text-area.gh-input.ember-view')
    }

    getMembersSave(){
        return cy.get('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view')
    }

    getMembersLabels(){
        return cy.get('.ember-power-select-trigger-multiple-input')
    }

    getAllMembers(){
        return cy.get('.ember-view.gh-list-data.middarkgrey.f8')
    }

    getMemberSettings(){
        return cy.get('.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view')
    }

    getMemberDelete(){
        return cy.get('.mr2')
    }

    getMemberImpersonate(){
        return cy.get('.mr2')
    }

    getMemberDeleteMember(){
        return cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view')
    }

    getCancel(){
        return cy.get('.gh-btn')
    }

    getMemberLeave(){
        return cy.get('gh-btn gh-btn-red')
    }

    getCopyLink(){
        return cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view')
    }           
}

export default MemberPage;