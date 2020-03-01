var EC = protractor.ExpectedConditions

class BasicAuthPage {

    constructor () {   

    }

    async cancelarLogin() {
        //await browser.wait(await EC.alertIsPresent(), 10000)
        await browser.sleep(3000)
        await console.log("* OK ** Alerta presente")
        var alert = await browser.switchTo().alert()
        await console.log("* OK ** Validou o alert")
        await alert.dismiss()
    }

    async fazerLogin() {
        await browser.wait(await EC.alertIsPresent(), 3000)
        var alert = await browser.switchTo().alert()
        await alert.accept()
    }

}
module.exports = BasicAuthPage
