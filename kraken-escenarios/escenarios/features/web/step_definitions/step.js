const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click sign in', async function() {
    let element = await this.driver.$('#ember7');
    return await element.click();
})

When('I enter title {kraken-string}', async function (title) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(title);
});

When('I enter content {kraken-string}', async function (content) {
    let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
    return await element.setValue(content);
});

When('I click on post settings', async function () {
    let element = await this.driver.$('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon');
    return await element.click();
});

When('I click on hour field', async function () {
    let element = await this.driver.$('.gh-date-time-picker-time');
    return await element.click();
});



When('I enter hour {string}', async function (hour) {
    let element = await this.driver.$('.gh-date-time-picker-time');
    return await element.setValue(hour);
});

When('I click on date field', async function () {
    let element = await this.driver.$('.gh-date-time-picker-date');
    return await element.click();
});


When('I click on publish', async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    return await element.click();
});

When('I click on final review', async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-black.gh-btn-large');
    return await element.click();
});

When('I click on publish right now', async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
    return await element.click();
});

When('I clear time content', async function () {
    let element = await this.driver.$('.gh-date-time-picker-time > input');
    return await element.clearValue();
});

When('I click subscribe', async function() {
    let element = await this.driver.$('.gh-head-button.gh-portal-close');
    return await element.click();
})


When('I enter spaced email {string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});



