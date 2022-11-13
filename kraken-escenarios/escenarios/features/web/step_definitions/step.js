const { Given, When, Then } = require('@cucumber/cucumber');
const path = require('path');

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('#ember6');
    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(password);
});

When('I click sign', async function () {
    let element = await this.driver.$('#ember10');
    return await element.click();
})

When('I click on Pages', async function () {
    let element = await this.driver.$('#ember26');
    console.log('element----------->', element)
    return await element.click();
})

When('I click on New Page', async function () {
    let element = await this.driver.$('a.view-actions-top-row')
    return await element.click();
})

When('I write a title to page {string}', async function (text) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(text);
})

When('I write a title to body {string}', async function (text) {
    let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
    return await element.setValue(text);
})

When('I click to publish the page', async function () {
    let element = await this.driver.$('.gh-publish-trigger');
    return await element.click();
})

When('I click final review publishing', async function () {
    let element = await this.driver.$('.gh-btn-black');
    return await element.click();
})

When('I click publish page', async function () {
    let element = await this.driver.$('#ember305');
    return await element.click();
})

When('I upload the file', async function () {
    const fileUpload =  await this.driver.$('.x-file--input');
    const filePath = path.join(__dirname, './../piramide.png');
    return await fileUpload.setValue(filePath);
})

When('I upload the file docx extension', async function () {
    const fileUpload =  await this.driver.$('.x-file--input');
    const filePath = path.join(__dirname, './files/Archivo-prueba.docx');
    return await fileUpload.setValue(filePath);
})

When('I got error message', async function () {
    const elem =  await this.driver.$('.gh-setting-error');
    console.log(await elem.getText());
})







