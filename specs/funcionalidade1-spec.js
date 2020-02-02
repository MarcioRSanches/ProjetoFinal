var LinkMenus = require('../page-objects/LinkMenus')
var ABPage    = require('../page-objects/ABPage')
var EC = protractor.ExpectedConditions

describe('Funcionalidade - 1', () => {
    it('Abrir a janela, clicando no link A/B Testing', async () => {
 
        await browser.get('https://the-internet.herokuapp.com')   

        var menus  = new LinkMenus()
        var abPage = new ABPage()

        await menus.clicarNoMenuABTest() 

        var titulo = abPage.retornaTitulo()       
        expect(titulo).toEqual('A/B Test Control')

    })
})