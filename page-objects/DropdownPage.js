const helpers    = require('protractor-helpers')
var EC = protractor.ExpectedConditions
class DropdownPage {

    constructor () {
        this.opcoes = element(by.id('dropdown'))
    }

    async selecionaOpcao2() {
       await helpers.selectOptionByText(this.opcoes,'Option 2')
    }
}

module.exports = DropdownPage
