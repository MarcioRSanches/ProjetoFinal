var EC = protractor.ExpectedConditions

class BasicAuthPage {

    constructor () {         
        this.alert = browser.switchTo().alert()
        //this.user  = browser.switchTo().alert().getText('Nome de usuário')
        //this.pass  = browser.switchTo().alert().getText('Senha')
    }
    
    async fazerLogin() {
        await browser.wait(await EC.alertIsPresent(), 6000)
        //await alert.sendKeys()
        return await alert.accept()
    }

    async cancelarLogin() {
        await browser.wait(await EC.alertIsPresent(), 5000)
        return await alert.dismiss()
    }

    async fazerLoginUser() {
        await browser.wait(await EC.alertIsPresent(), 6000)
        //await user.sendKeys('Marcio')
        await browser.get('https://marcio:abc123@the-internet.herokuapp.com/basic_auth')
        return await alert.accept()
    }   

    async fazerLoginPass() {
        await browser.wait(await EC.alertIsPresent(), 6000)
        //await user.sendKeys('pwd123')
        return await alert.accept()
    }  



}
module.exports = BasicAuthPage
