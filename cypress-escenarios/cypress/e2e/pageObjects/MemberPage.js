class MemberPage{
    getSearchBarMember(){
        return cy.get('.gh-input.gh-members-list-searchfield')
    }

    getTableSearch(){
        return cy.get('table > tbody > tr')
    }
}

export default MemberPage;