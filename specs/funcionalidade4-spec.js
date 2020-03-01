const LinkMenus  = require('../page-objects/LinkMenus')
//const Checkboxes = require('../page-objects/CheckboxesPage')
var EC = protractor.ExpectedConditions

describe('Funcionalidade - 4', () => {

    var red   = '\u001b[31m'
    var blue  = '\u001b[34m'
    var reset = '\u001b[0m'

    var menus  = new LinkMenus()
    //var checks = new Checkboxes()
    
    beforeEach (async () =>  {
        await browser.get('https://the-internet.herokuapp.com')
    })

    it('Clicar no link Checkboxes', async () => {

        await menus.clicarNoMenuCheckboxes()
        await console.log(red+"[OK] "+blue+" - Clicou no menu Checkboxes "+reset)

     })

     it('Clicar nos dois checkboxes e verificar se estão selecionados', async () => {

        await menus.clicarNoMenuCheckboxes()
        await browser.sleep(2000)
        await console.log(red+"[OK] "+blue+" - Clicou no menu Checkboxes "+reset)
        var checkbox1 = element(by.xpath('//*[@id="checkboxes"]/input[1]'))
        var checkbox2 = element(by.xpath('//*[@id="checkboxes"]/input[2]'))
     
        await expect(checkbox1.isSelected())
        await checkbox1.click()
       
        await expect(checkbox2.isSelected())
        await checkbox2.click()

        await expect(checkbox1.isSelected()).toBe(true)
        await expect(checkbox2.isSelected()).toBe(true)

    })

 })