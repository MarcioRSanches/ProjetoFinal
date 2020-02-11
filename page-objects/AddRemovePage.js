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


    async retornaBtnDELVisivel() {

        browser.wait(EC.isElementPresent($('.added-manually')), 3000)
        return await this.btnDelete.click() 
        
    }

    
    async clickBtnDEL() {

        browser.wait(EC.elementToBeClickable(this.btnDelete, 3000))
        return await this.btnDelete.click()   

    }

}
module.exports = AddRemovePage
