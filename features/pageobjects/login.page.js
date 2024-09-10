const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('~test-Username');
    }

    get inputPassword() {
        return $('~test-Password');
    }

    get btnSubmit() {
        return $('~test-LOGIN');
    }

    get standardUserBtn() {
        return $('//android.widget.TextView[@text="standard_user"]');
    }

    get lockedUserBtn() {
        return $('//android.widget.TextView[@text="locked_out_user"]');
    }

    get productPageTitle() {
        return $('//android.widget.TextView[@text="PRODUCTS"]');
    }

    get hamburgerMenu() {
        return $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView');
    }

    get logoutBtn() {
        return $('//android.view.ViewGroup[@content-desc="test-LOGOUT"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async verifyLoginPage() {
        await this.inputUsername.isDisplayed();
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async loginWithOnlyUsername(username) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.clearValue();
        await this.btnSubmit.click();
    }

    async loginWithOnlyPassword(password) {
        await this.inputUsername.clearValue();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async loginWithLockedUser() {
        await this.lockedUserBtn.click();
        await this.btnSubmit.click();
    }

    async loginWithStandardUser() {
        await this.standardUserBtn.click();
        await this.btnSubmit.click();
    }

    async verifyProductPage() {
        await this.productPageTitle.isDisplayed();
    }

    async logout() {
        await this.hamburgerMenu.click();
        await this.logoutBtn.click();
    }

}

module.exports = new LoginPage();
