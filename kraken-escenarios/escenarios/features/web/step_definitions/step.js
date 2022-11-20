const { Given, When, Then } = require('@cucumber/cucumber');
const path = require('path');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember6');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(password);
});

When('I click sign', async function () {
    let element = await this.driver.$('#ember10');
    return await element.click();
})

When('I click on Pages', async function () {
    let element = await this.driver.$('#ember26');
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
    let element = await this.driver.$('.__mobiledoc-editor');
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
    const fileUpload = await this.driver.$('.x-file--input');
    const filePath = path.join(__dirname, './files/piramide.png');
    return await fileUpload.setValue(filePath);
})

When('I upload the file docx extension', async function () {
    const fileUpload = await this.driver.$('.x-file--input');
    const filePath = path.join(__dirname, './files/Archivo-prueba.docx');
    return await fileUpload.setValue(filePath);
})

When('I got error message', async function () {
    const elem = await this.driver.$('.gh-setting-error');
    await elem.getText()
})

When('I click sign in', async function () {
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

When('I click subscribe', async function () {
    let element = await this.driver.$('.gh-head-button.gh-portal-close');
    return await element.click();
})


When('I enter spaced email {string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});


When('I click next', async function () {
    let element = await this.driver.$('#ember10');
    return await element.click();
})

When('I click on options user profile', async function () {
    let element = await this.driver.$('.gh-user-avatar');
    return await element.click();
});

When('I click on user profile', async function () {
    let element = await this.driver.$('.dropdown-menu > li:nth-child(4)');
    return await element.click();
});

When('I Focus on user name', async function () {
    let element = await this.driver.$('#user-name');
    return await element.click();
});

When('I delete a email profile', async function () {
    let element = await this.driver.$('#user-email');
    return await element.clearValue()
});


When('I write a email profile {string}', async function (search) {
    let element = await this.driver.$('#user-email');
    return await element.setValue(search);
});

When('I Click in save name', async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    return await element.click();
});


When('I remove text from id {string}', async function (id) {
    let element = await this.driver.$('#' + id);
    return await element.clearValue();
});

When('I click in members menu', async function () {
    let element = await this.driver.$('.gh-nav-list.gh-nav-manage > li:nth-child(4)');
    return await element.click();
});

When('I write a member name {string}', async function (search) {
    let element = await this.driver.$('.gh-input.gh-members-list-searchfield');
    return await element.setValue(search);
});

When('I set the time a old time', async function () {
    let element = await this.driver.$('.gh-date-time-picker-time > input').getValue();
    const hour = element.split(':')[0]
    const minute = (parseInt(element.split(':')[1]) - 1).toString().padStart(2, '0')
    const newValue = hour + ':' + minute
    return await this.driver.$('.gh-date-time-picker-time > input').setValue(newValue);
});

Then('I click to publish the post', async function () {
    let element = await this.driver.$('.gh-publish-trigger');
    return await element.click();
})

When('I continue publishig', async function () {
    let element = await this.driver.$('.gh-btn-black');
    return await element.click();
})

// Cristina
When('I click Filter', async function () {
    let element = await this.driver.$('.view-actions .gh-btn:not(.gh-btn-primary):not(.gh-btn-blue):not(.gh-btn-green):not(.gh-btn-link)');
    return await element.click();
})
When('I click on List Name', async function () {
    let element = await this.driver.$('.gh-filter-inputgroup > span:nth-child(1)');
    console.log(element);
    return await element.click();
})
When('I click on Name', async function () {
    let element = await this.driver.$('.gh-select select');
    return await element.click();
})
When('I select Name', async function () {
    let element = await this.driver.$('.gh-select select');
    return await element.click();
})
When('I select Email', async function () {
    let element = await this.driver.$('select[class="ember-view"]');
    return await element.setValue('email');
})
When('I click on Apply filters', async function () {
    let element = await this.driver.$('.gh-btn-black, .gh-btn-primary');
    return await element.click();
})
When('I type on the search bar a non member', async function () {
    let element = await this.driver.$('.members-header .view-actions input.gh-members-list-searchfield');
    return await element.setValue('Pepe');
})
When('I type on the search bar a non member email', async function () {
    let element = await this.driver.$('.members-header .view-actions input.gh-members-list-searchfield');
    return await element.setValue('pepe@gmail.com');
})
When('I type on the search bar a member email', async function () {
    let element = await this.driver.$('.members-header .view-actions input.gh-members-list-searchfield');
    return await element.setValue('lala@gmail.com');
})
When('I enter incorrect password', async function () {
    let element = await this.driver.$('#password');
    return await element.setValue('445566');
})

//GHOST VERSION 3

When('I enter email v3 {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(email);
});

When('I enter password v3 {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember10');
    return await element.setValue(password);
});

When('I click next v3', async function () {
    let element = await this.driver.$('#ember12');
    return await element.click();
})
When('I Click in save name v3', async function () {
    let element = await this.driver.$('.gh-btn-blue.gh-btn.gh-btn-icon.ember-view');
    return await element.click();
});


When('I write a title to body v3 {string}', async function (text) {
    let element = await this.driver.$('.__mobiledoc-editor.__has-no-content');
    return await element.setValue(text);
})

When('I click on post settings v3', async function () {
    let element = await this.driver.$('.gh-publishmenu.ember-view');
    return await element.click();
});
Then('I click to publish the post v3', async function () {
    let element = await this.driver.$('.gh-publishmenu-trigger');
    return await element.click();
})

When('I continue publishig v3', async function () {
    let element = await this.driver.$('.gh-publishmenu-button');
    return await element.click();
})


When('I click on Pages v3', async function () {
    let element = await this.driver.$('#ember1247');
    return await element.click();
})

When('I click on New Page v3', async function () {
    let element = await this.driver.$('.gh-btn-green')
    return await element.click();
})

When('I click add Image', async function () {
    let element = await this.driver.$('.koenig-plus-menu-button.br-100.anim-normal')
    return await element.click();


})

When('I select the option Image', async function () {
    const element = await this.driver.$('div[title="Image"]');
    return await element.click();

})


When('I got error message v3', async function () {
    const elem = await this.driver.$('.bg-red.white.sans-serif');
    console.log(await elem.getText());
})

When('I publish the page v3', async function () {
    const elem = await this.driver.$('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger');
    return await elem.click()
})
When('I publish in button again', async function () {
    const elem = await this.driver.$('.gh-publishmenu-button');
    return await elem.click()
})

Then('I got error message for title', async function () {
    const elem = await this.driver.$('gh-alerts.ember-view');
    console.log(elem.getText())
})




