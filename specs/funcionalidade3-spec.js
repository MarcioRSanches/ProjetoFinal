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
        
        await auth.iniciarSecao('','')
        await auth.informarUser('')
        await auth.informarPass('')
        await auth.cancelarLogin()

    })

    xit('Fazer login informando apenas o usuario', async () => {

        await menus.clicarNoMenuBasicAuth()
        await console.log("* OK ** Clicou no menu Basic Auth")
        
        await auth.fazerLoginUser()

    })

    xit('Fazer login informando apenas a senha', async () => {

        await menus.clicarNoMenuBasicAuth()
        await console.log("* OK ** Clicou no menu Basic Auth")
        
        await auth.user.fazerLogin('')
        await auth.pass.fazerLogin('')
        await auth.fazerLoginPass()

    })
    xit('Fazer login informando usuario a senha corretos', async () => {

        await menus.clicarNoMenuBasicAuth()
        await console.log("* OK ** Clicou no menu Basic Auth")
        
        await auth.fazerLoginUserPass()
        expect

    })

  })