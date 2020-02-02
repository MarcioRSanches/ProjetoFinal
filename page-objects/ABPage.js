var EC = protractor.ExpectedConditions
class ABPage {

    constructor () {

        this.tituloAB = element(by.css('h3'))
    
    }

    async retornaTitulo() {

        browser.wait(EC.elementToBeClickable(this.tituloAB, 3000))
        return await this.tituloAB.getText()
    }

}
module.exports = ABPage
