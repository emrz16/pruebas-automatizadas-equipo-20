import LoginPage from './pageObjects/LoginPage';
import HomePage from './pageObjects/HomePage';
import ProfilePage from './pageObjects/ProfilePage';
import {faker} from '@faker-js/faker'
import data_a_priority from '../../../data_pool_a_priori/MOCK_DATA_SETTINGS.json';
describe('Profile tests', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const profilePage = new ProfilePage();
    const user = "pruebas@gmail.com"; //e.rodriguezz@uniandes.edu.co
    const password = "pruebas1234"; // pruebas1234
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
        cy.get('div.gh-flow').screenshot('loginV5');
        cy.get('form').within(() => {
            // loginPage.getEmail().type('pruebas@gmail.com');
            // loginPage.getPassword().type('pruebas1234');
            loginPage.getEmail().type(user);
            loginPage.getPassword().type(password);
            loginPage.getLoginButton().click();
        })
        cy.wait(1000);
    })

    it('Add image cover in profile', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getButtonUserCover().click();
        cy.wait(1000);
        profilePage.getButtonUploadCover().selectFile('cypress/e2e/resources/imagen-prueba.jpg',{force: true});
        cy.wait(1000);
        profilePage.getButtonSaveUploadCover().click();    
    })

    it('Delete image cover in profile', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getButtonUserCover().click();
        cy.wait(1000);
        profilePage.getButtonDeleteUploadCover().click();
        cy.wait(1000);
        profilePage.getButtonSaveUploadCover().click();
    })


    it('Add main picture in profile', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getButtonUploadPictureProfile().click();
        cy.wait(1000);
        profilePage.getButtonUploadCover().selectFile('cypress/e2e/resources/imagen-prueba.jpg',{force: true});
        cy.wait(1000);
        profilePage.getButtonSaveUploadCover().click();
    })

    it('Delete image cover in profile', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getButtonUploadPictureProfile().click();
        cy.wait(1000);
        profilePage.getButtonDeleteUploadCover().click();
        cy.wait(1000);
        profilePage.getButtonSaveUploadCover().click();
    })

    it('Fill form of profile with new email', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getEmailProfile().clear();
        profilePage.getEmailProfile().type(user);
        profilePage.getSaveButton().click();
        cy.wait(500);
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Saved")).to.be.true
        })
    })

    it('Fill form of profile with wrong format email', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getEmailProfile().clear();
        profilePage.getEmailProfile().type(data_a_priority[0]["first_name"])
        profilePage.getSaveButton().click();
        cy.wait(500);
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Retry")).to.be.true
        })
    })

    it('Fill form with name in blank', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getUsernameProfile().clear();
        profilePage.getSaveButton().click();
        cy.wait(500);
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Retry")).to.be.true
        })
    })

    it('Fill form url facebook profile', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getUserFacebook().clear();
        profilePage.getUserFacebook().type(data_a_priority[0]["webpage"]);//emmanuel.rodriguezzamora
        profilePage.getSaveButton().click();
        cy.wait(500);
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Saved")).to.be.true
        })
    })

// noveno 9 
    it('Fill form Bio too many characters', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getBioText().clear();
        profilePage.getBioText().type(faker.lorem.words(100));
        profilePage.getSaveButton().click();
        cy.wait(500);
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Retry")).to.be.true
        })
    })
// // decimo
    it('Fill form Bio correct amount of characters', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getBioText().clear();
        profilePage.getBioText().type(faker.lorem.words(10));
        profilePage.getSaveButton().click();
        cy.wait(500);
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Saved")).to.be.true
        })
    })

    it('Fill form Webside Incorrect', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getWebSide().clear();
        profilePage.getWebSide().type(data_a_priority[4]["first_name"]);
        cy.wait(1000);
        profilePage.getSaveButton().click();
        cy.wait(500);
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Retry")).to.be.true
        })
    })

    it('Fill form Webside Correct', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getWebSide().clear();
        profilePage.getWebSide().type(data_a_priority[10]["webpage"]);
        profilePage.getSaveButton().click();
        cy.wait(500);
        profilePage.getSaveButton().then(($value) =>{
            expect($value[0].innerText.includes("Saved")).to.be.true
        })
    })


    it('Correct Change password', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getTextOldPassword().clear();
        profilePage.getTextOldPassword().type(password);
        profilePage.getTextNewPassword().clear();
        profilePage.getTextNewPassword().type(password);
        profilePage.getTextVerifyPassword().clear();
        profilePage.getTextVerifyPassword().type(password);
        profilePage.getButtonChangePassword().click();
        cy.contains("");
    })

    it('Incorrect verify password', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getTextOldPassword().clear();
        profilePage.getTextOldPassword().type(password);
        profilePage.getTextNewPassword().clear();
        profilePage.getTextNewPassword().type(password);
        profilePage.getTextVerifyPassword().clear();
        profilePage.getTextVerifyPassword().type("a");
        profilePage.getButtonChangePassword().click();
        
    })

    it('Incorrect old password', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getTextOldPassword().clear();
        profilePage.getTextOldPassword().type(password + "aaa");
        profilePage.getTextNewPassword().clear();
        profilePage.getTextNewPassword().type(password);
        profilePage.getTextVerifyPassword().clear();
        profilePage.getTextVerifyPassword().type(password);
        profilePage.getButtonChangePassword().click();
        cy.wait(500);
        expect(cy.contains("Your password is incorrect")).to.exist;
    })

    it('New password blank', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getTextOldPassword().clear();
        profilePage.getTextOldPassword().type(password);
        profilePage.getTextNewPassword().clear();
        profilePage.getButtonChangePassword().click();
        cy.wait(500);
        expect(cy.contains("Sorry, passwords can't be blank")).to.exist;
    })

    it('password less than 10 characters', () => {
        homePage.getAvatarProfile().click();
        cy.wait(1000);
        homePage.getYourProfileOption().click();
        cy.wait(1000);
        profilePage.getTextOldPassword().clear();
        profilePage.getTextOldPassword().type(password);
        profilePage.getTextNewPassword().clear();
        profilePage.getTextNewPassword().type("123");
        profilePage.getTextVerifyPassword().clear();
        profilePage.getTextVerifyPassword().type("123");
        profilePage.getButtonChangePassword().click();
        cy.wait(500);
        expect(cy.contains("Password must be at least 10 characters long.")).to.exist;
    })
    }
//17
    
);