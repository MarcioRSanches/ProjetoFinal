const LinkMenus  = require('../page-objects/LinkMenus')
//const Dropdown   = require('../page-objects/DropdownPage')

var EC = protractor.ExpectedConditions

describe('Funcionalidade - 5', () => {

    var red   = '\u001b[31m'
    var blue  = '\u001b[34m'
    var reset = '\u001b[0m'

    var menus    = new LinkMenus()
    //var dropdown = new Dropdown()
    
    beforeEach (async () =>  {
        await browser.get('https://the-internet.herokuapp.com')
    })

    it('Clicar no link Forgot Password', async () => {

        await menus.clicarNoMenuForgotPassword()
        await console.log(red+"[OK] "+blue+" - Clicou no menu Forgot Password "+reset)
    })

    it('Clicar no botão Retrieve e validar a mensagem de erro', async () => {

        await menus.clicarNoMenuForgotPassword()
        await console.log(red+"[OK] "+blue+" - Clicou no menu Forgot Password "+reset)
        var btnRetrieve = await element(by.id('form_submit'))
        await btnRetrieve.click()
        await browser.sleep(4000)
        var mensagem = await element(by.css('#h1')).getText()

        await expect(mensagem).toEqual('Internal Server Error')

        
    })
    it('Informar o email e Clicar e validar a mensagem de sucesso', async () => {

        await menus.clicarNoMenuForgotPassword()
        await console.log(red+"[OK] "+blue+" - Clicou no menu Forgot Password "+reset)
        var email = await element(by.id('email'))
        await email.sendKeys('marciosanches@outlook.com')
        var btnRetrieve = await element(by.id('form_submit'))
        await btnRetrieve.click()
        await browser.sleep(4000)
        var mensagem = await element(by.id('content')).getText()
        await expect(mensagem).toEqual("Your e-mail's been sent!")
      

        
    })

})