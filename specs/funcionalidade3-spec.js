const LinkMenus = require('../page-objects/LinkMenus')
const BasicAuth = require('../page-objects/BasicAuthPage')
var EC = protractor.ExpectedConditions
var menus = new LinkMenus()
var auth  = new BasicAuth()


describe('Funcionalidade - 3', () => {
    
    beforeEach (async () =>  {
        await browser.get('https://the-internet.herokuapp.com')
    })

    it('Fazer login sem informar o usuario e senha', async () => {

        await menus.clicarNoMenuBasicAuth()
        await console.log("* OK ** Clicou no menu Basic Auth")
        
        await auth.cancelarLogin()

    })

    it('Fazer login informando apenaso usuario e senha', async () => {

        await menus.clicarNoMenuBasicAuth()
        await console.log("* OK ** Clicou no menu Basic Auth")
        
        await auth.fazerLoginUser()

    })

    it('Fazer login informando apenaso usuario e senha', async () => {

        await menus.clicarNoMenuBasicAuth()
        await console.log("* OK ** Clicou no menu Basic Auth")
        
        await auth.fazerLoginUser()

    })

  })