var EC = protractor.ExpectedConditions

class CheckboxesPage {

    constructor () {   


    }   

    async desmarcaCheckbox1() {
        await browser.wait(await EC.isClickable(), 3000)
        await expect(checkbox1.isSelected()).toBe(false)
        await checkbox1.click()   
    }

    async marcaCheckbox1() {
        await browser.wait(await EC.isClickable(), 3000)
        await checkbox1.click()   
    }

    async marcaCheckbox2() {
        await browser.wait(await EC.isClickable(), 3000)
        await expect(checkbox2.isSelected()).toBe(true)
        await checkbox2.click()   
    }

}
module.exports = CheckboxesPage