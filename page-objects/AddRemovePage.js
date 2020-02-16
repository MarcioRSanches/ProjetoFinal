var EC = protractor.ExpectedConditions
class AddRemovePage {

    constructor () {
         
        this.btnADD    = element(by.css('#content > div > button'))
        this.btnDelete = element(by.css('.added-manually'))        

    }


    async clickBtnADD() {

        await browser.wait(EC.elementToBeClickable(this.btnADD, 3000))
        return await this.btnADD.click()                     

    }


    async retornaBtnDELVisivel() {

        await browser.wait(EC.textToBePresentInElement(this.btnDelete, 'Delete'), 3000)
        return await this.btnDelete.getText()
        
    }

    
    async clickBtnDEL() {

        await browser.wait(EC.elementToBeClickable(this.btnDelete, 3000))
        return await this.btnDelete.click()   

    }

}
module.exports = AddRemovePage
