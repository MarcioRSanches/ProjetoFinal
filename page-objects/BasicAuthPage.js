var EC = protractor.ExpectedConditions
class BasicAuthPage {

    constructor () {         
        this.alert    = element(by.css('#content > ul > li:nth-child(3) > a'))
        //this.cancelar = element(by.css('#content > ul > li:nth-child(3) > a > imput[type=button]'))
        //this.user     = element(by.css('#content > ul > li:nth-child(3) > a > imput[type=text]'))
        //this.pass     = element(by.css('#content > ul > li:nth-child(3) > a > imput[type=text]'))
    }

    async fazerLogin() {
        await this.alert.click()
        await browser.wait(await EC.alertIsPresent(), 5000)
        await driver.get("protocol://{}:{}@https://the-internet.herokuapp.com/basic_auth")
    }

    //await alert.dismiss()
    //await alert.sendKeys('Rafael')

}
module.exports = BasicAuthPage
