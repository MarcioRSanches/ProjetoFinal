const helpers    = require('protractor-helpers')
const LinkMenus  = require('../page-objects/LinkMenus')
var EC = protractor.ExpectedConditions

describe('Funcionalidade - 5', () => {

    var red   = '\u001b[31m'
    var blue  = '\u001b[34m'
    var reset = '\u001b[0m'

    var menus  = new LinkMenus()
    
    beforeEach (async () =>  {
        await browser.get('https://the-internet.herokuapp.com')
    })

    it('Clicar no link Dropdown', async () => {

        await menus.clicarNoMenuDropdown()
        await console.log(red+"[OK] "+blue+" - Clicou no menu Dropdown "+reset)
    })

    it('Clicar no link Dropdown', async () => {

        await menus.clicarNoMenuDropdown()
        await console.log(red+"[OK] "+blue+" - Clicou no menu Dropdown "+reset)
        var opcoes = await element(by.id('dropdown'))
        await console.log(red+"[OK] "+blue+" - Identificou o elemento Combobox "+reset)
        await helpers.selectOptionByText(opcoes,'Option 2')
        await browser.sleep(2000)
        await console.log(red+"[OK] "+blue+" - Selecionou a Option 2 "+reset)
        
    })

})