const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const MessagePage = require('../pageobjects/messages.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the login page$/, async () => {
    await LoginPage.verifyLoginPage();
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I login with empty username (.*)$/, async (password) => {
    await LoginPage.loginWithOnlyPassword(password)
});

When(/^I login with empty password (.*)$/, async (username) => {
    await LoginPage.loginWithOnlyUsername(username)
});

When(/^I login with locked user$/, async () => {
    await LoginPage.loginWithLockedUser()
});

When(/^I login with standard user$/, async () => {
    await LoginPage.loginWithStandardUser();
});

Then(/^I should see an error message saying (.*)$/, async (message) => {
    await expect(MessagePage.flashAlert).toBeExisting();
    await expect(MessagePage.flashAlert).toHaveText(expect.stringContaining(message));
});

Then(/^I should see an error message for empty username (.*)$/, async (message) => {
    await expect(MessagePage.flashAlertForEmptyUsername).toBeExisting();
    await expect(MessagePage.flashAlertForEmptyUsername).toHaveText(expect.stringContaining(message));
});

Then(/^I should see an error message for empty password (.*)$/, async (message) => {
    await expect(MessagePage.flashAlertForEmptyPassword).toBeExisting();
    await expect(MessagePage.flashAlertForEmptyPassword).toHaveText(expect.stringContaining(message));
});

Then(/^I should see an error message for locked user (.*)$/, async (message) => {
    await expect(MessagePage.flashAlertForLockedUser).toBeExisting();
    await expect(MessagePage.flashAlertForLockedUser).toHaveText(expect.stringContaining(message));
});

Then(/^I should see a product page$/, async () => {
    await LoginPage.verifyProductPage();
});

Then(/^I should be logged out$/, async () => {
    await LoginPage.logout();
    await LoginPage.verifyLoginPage();
});

