**Appium Project:**
- Appium project to run native app for android using cucumber with page object pattern.

**Based on:**
- WebdriverIO
- cucumber
- NodeJS
- Appium

**Supports:**
- Native Android apps
- Supports Page Object Model
- Contains sample test scenarios in cucumber
- Supports allure reports

**Running the project:**
Follow the below commands -

- Clone the project - https://github.com/JaydeepHansalia/AppiumTest.git
- Install dependencies using npm i in the terminal.
- Update the deviceName and platFormVersion in wdio.conf.js
- Now start the Appium server 
- Open the Android studio and start the respective emulator
- Execute _npx wdio_ command to run android native app
- Once the execution will be completed follow the below commands to generate allure report
- First run _allure generate ./allure-results --clean_
- Now run _allure open ./allure-report_
