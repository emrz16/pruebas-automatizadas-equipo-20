import MemberPage from "./pageObject/MemberPage";
import LoginPage from './pageObject/LoginPage';
import data_a_priori from '../../../data_pool_a_priori/MOCK_DATA_MEMBER.json';

describe('Members', () => {
    const memberPage = new MemberPage();
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/')
        cy.wait(3000)
	    const loginPage = new LoginPage();
        loginPage.getEmail().type('j.quinchia@uniandes.edu.co')
        loginPage.getPassword().type('OrionQuinchia')
        loginPage.getLoginButton().click();
        cy.wait(500)
    })
    
    it('#70: Test search non member by name', ()=>{
        memberPage.getMemberMenu().click()
        cy.wait(1000)
        memberPage.getSearchBarMember().type(data_a_priori[1].name);
        cy.wait(1000)
    })

    it('#72: Test search non member by email', ()=>{
        memberPage.getMemberMenu().click()
        cy.wait(1000)
        memberPage.getSearchBarMember().type(data_a_priori[3].email);
        cy.wait(1000)
    })

    it('#73: Add member with note', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getNewMember().click()
        cy.wait(1000)
        memberPage.getMembersName().first().type(data_a_priori[50].name);
        cy.wait(1000)
        memberPage.getMembersEmail().last().type(data_a_priori[50].email);
        cy.wait(1000)
        memberPage.getMembersNote().type(data_a_priori[50].note);
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#74: Add member without note', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getNewMember().click()
        cy.wait(1000)
        memberPage.getMembersName().first().type(data_a_priori[51].name);
        cy.wait(1000)
        memberPage.getMembersEmail().last().type(data_a_priori[51].email);
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#75: Add member with empty name', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getNewMember().click()
        cy.wait(1000)
        memberPage.getMembersEmail().last().type(data_a_priori[52].email);
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#76: Add member with empty email', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getNewMember().click()
        cy.wait(1000)
        memberPage.getMembersName().first().type(data_a_priori[53].name);
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#77: Add member with wrong email format', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getNewMember().click()
        cy.wait(1000)
        memberPage.getMembersName().first().type(data_a_priori[54].name);
        cy.wait(1000)
        memberPage.getMembersEmail().last().type('rcroppera@springer');
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#69: Test search member by name', ()=>{
        memberPage.getMemberMenu().click()
        cy.wait(1000)
        memberPage.getSearchBarMember().type(data_a_priori[50].name);
        cy.wait(1000)
    })

    it('#71: Test search member by email', ()=>{
        memberPage.getMemberMenu().click()
        cy.wait(1000)
        memberPage.getSearchBarMember().type(data_a_priori[50].email);
        cy.wait(1000)
    })

    it('#78: Add member with note greater than 500', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getNewMember().click()
        cy.wait(1000)
        memberPage.getMembersName().first().type(data_a_priori[55].name);
        cy.wait(1000)
        memberPage.getMembersEmail().last().type(data_a_priori[55].email);
        cy.wait(1000)
        memberPage.getMembersNote().type(data_a_priori[21].note, data_a_priori[21].note, data_a_priori[21].note, data_a_priori[21].note, data_a_priori[21].note, data_a_priori[21].note, data_a_priori[21].note, data_a_priori[21].note, data_a_priori[21].note, data_a_priori[22].note, data_a_priori[23].note, data_a_priori[24].note, data_a_priori[25].note, data_a_priori[26].note, data_a_priori[27].note, data_a_priori[11].note, data_a_priori[12].note, data_a_priori[13].note, data_a_priori[14].note, data_a_priori[15].note);
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#79: Add member with labels', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getNewMember().click()
        cy.wait(1000)
        memberPage.getMembersName().first().type(data_a_priori[56].name);
        cy.wait(1000)
        memberPage.getMembersEmail().last().type(data_a_priori[56].email);
        cy.wait(1000)
        memberPage.getMembersLabels().type(data_a_priori[56].tags);
        cy.wait(1000)
        memberPage.getMembersNote().type(data_a_priori[56].note);
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#80: Add member with labels and note, without email and name', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getNewMember().click()
        cy.wait(1000)
        memberPage.getMembersLabels().type(data_a_priori[57].tags);
        cy.wait(1000)
        memberPage.getMembersNote().type(data_a_priori[57].note);
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#81: Add member note, without email, labels and name', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getNewMember().click()
        cy.wait(1000)
        memberPage.getMembersNote().type(data_a_priori[58].note);
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#82: Add member with all empty inputs', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getNewMember().click()
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#83: Edit members name', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getAllMembers().first().click()
        memberPage.getMembersName().first().type(data_a_priori[55].name);
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#84: Edit members email', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getAllMembers().first().click()
        memberPage.getMembersEmail().last().type(data_a_priori[56].email);
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#85: Edit members note', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getAllMembers().first().click()
        memberPage.getMembersNote().type(data_a_priori[60].note);
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#86: Edit members labels', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getAllMembers().first().click()
        memberPage.getMembersLabels().type(data_a_priori[19].tags);
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#87: Edit members note and labels', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getAllMembers().first().click()
        memberPage.getMembersLabels().type(data_a_priori[31].tags);
        memberPage.getMembersNote().type(data_a_priori[31].note);
        cy.wait(1000)
        memberPage.getMembersSave().click();
        cy.wait(1000)
    })

    it('#88: Delete member', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getAllMembers().first().click()
        memberPage.getMemberSettings().click()
        cy.wait(1000)
        memberPage.getMemberDelete().last().click()
        memberPage.getMemberDeleteMember().click()
        memberPage.getMemberLeave().last().click()
        cy.wait(1000)
    })

    it('#89: Cancel Delete member', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getAllMembers().first().click()
        memberPage.getMemberSettings().click()
        cy.wait(1000)
        memberPage.getMemberDelete().last().click()
        memberPage.getCancel().first().click()
        cy.wait(1000)
    })

    it('#90: Impersonate Member', ()=>{
        memberPage.getMemberMenu().click()
        memberPage.getAllMembers().first().click()
        memberPage.getMemberSettings().click()
        cy.wait(1000)
        memberPage.getMemberImpersonate().first().click()
        memberPage.getCopyLink().click()
        cy.wait(1000)
    })    



        
})

