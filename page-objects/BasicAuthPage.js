var EC = protractor.ExpectedConditions

class BasicAuthPage {

    constructor () { 
        this.alert  = browser.switchTo().alert()     
        this.user   = browser.switchTo().alert().getText('Nome de usuário')
        this.pass   = browser.switchTo().alert().getText('Senha')
    }
   
    async iniciarSecao(user,pass) {
        await browser.wait(await EC.alertIsPresent(), 6000)
        await this.informarUser(user)
        await this.informarPass(pass)
    }

    async informarUser(user) { 
        await this.user.sendKeys(pass)
    }
    async informarPass(pass) { 
        await this.pass.sendKeys(pass)
    }

    async cancelarLogin() {
        return await alert.dismiss()
    }

    async fazerLogin() {
        return await alert.accept()
    }

 //await browser.get('https://marcio:abc123@the-internet.herokuapp.com/basic_auth')

}
module.exports = BasicAuthPage
