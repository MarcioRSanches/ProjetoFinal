const LinkMenus     = require('../page-objects/LinkMenus')
var EC = protractor.ExpectedConditions
var menus   =  new LinkMenus()


describe('Funcionalidade - 3', () => {
    
    beforeEach (async () =>  {
        await browser.get('https://the-internet.herokuapp.com')
    })

    it('Abrir a janela, clicando fazer login sem usuario e senha informado e verificar mensagem', async () => {

        await menus.clicarNoMenuBasicAuth()
        await console.log("* OK ** Clicou no menu Basic Authcomm")

    })

  })