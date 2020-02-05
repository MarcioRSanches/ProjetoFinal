var EC = protractor.ExpectedConditions
class AddRemovePage {

    constructor () {
         
        this.btnADD    = element(by.css('#content > div > button'))
        this.btnDelete = element(by.css('.added-manually'))        

    }


    async clickBtnADD() {

        browser.wait(EC.elementToBeClickable(this.btnADD, 3000))
        return await this.btnADD.click()                     

    }

    async clickBtnDEL() {

        browser.wait(EC.elementToBeClickable(this.btnDelete, 3000))
        return await this.btnDelete.click()    

    }

    async retornaBtnDELVisivel() {

        this.btnDelete = browser.wait(EC.presenceOf($('.added-manually')), 3000)
        return await this.btnDelete.click()

    }

    async retornaBtnDELInvisivel() {

        this.btnDelete = browser.wait(EC.presenceOf($('.added-manually')), 3000)
        return await this.btnDelete.getText()    

    }

}
module.exports = AddRemovePage
