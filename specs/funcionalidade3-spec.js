const LinkMenus = require('../page-objects/LinkMenus')
const BasicAuth = require('../page-objects/BasicAuthPage')
var EC = protractor.ExpectedConditions

describe('Funcionalidade - 3', () => {

    var menus = new LinkMenus()
    var auth  = new BasicAuth()
    
    beforeEach (async () =>  {
        await browser.get('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    })

    xit('Fazer login sem informar o usuario e senha, clicando no botão fazer login', async () => {

        await menus.clicarNoMenuBasicAuth()
        await console.log("* OK ** Clicou no menu Basic Auth")

        await auth.fazerLogin()
        await console.log("* OK ** Clicou no botão Fazer Login")
     })

    it('Fazer login informando apenas o usuario, clicando no botão cancelar', async () => {

        //await menus.clicarNoMenuBasicAuth()
        // await console.log("* OK ** Clicou no menu Basic Auth")
        
        // await auth.cancelarLogin()
        // await console.log("* OK ** Clicou no botão Cancelar")

        var mensagem =  await element(by.css('body')).getText()
        await console.log(mensagem)
        await expect(mensagem).toEqual('Basic Auth\nCongratulations! You must have the proper credentials.\nPowered by Elemental Selenium')
    })

  })