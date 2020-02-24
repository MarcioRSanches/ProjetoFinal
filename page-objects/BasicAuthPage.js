var EC = protractor.ExpectedConditions

class BasicAuthPage {

    constructor () { 

    }
    async cancelarLogin() {
        await browser.wait(await EC.alertIsPresent(), 7000)
        var alert = await browser.switchTo().alert()
        await alert.dismiss()
    }
    async fazerLogin() {
        await browser.wait(await EC.alertIsPresent(), 7000)
        var alert = await browser.switchTo().alert()
        await alert.accept()
    }
}
module.exports = BasicAuthPage
