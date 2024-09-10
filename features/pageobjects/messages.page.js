const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('//android.widget.TextView[@text="Username and password do not match any user in this service."]');
    }

    get flashAlertForEmptyUsername () {
        return $('//android.widget.TextView[@text="Username is required"]');
    }

    get flashAlertForEmptyPassword () {
        return $('//android.widget.TextView[@text="Password is required"]');
    }

    get flashAlertForLockedUser () {
        return $('//android.widget.TextView[@text="Sorry, this user has been locked out."]');
    }
}

module.exports = new SecurePage();
