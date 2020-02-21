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
        await console.log("* OK ** Clicou no menu Basic Authcomm")

        await auth.fazerLogin()l

            //browser.manage().timeouts().implicitlyWait(30000)
            //browser.get("https://selenium:webdriver@chercher.tech/auth");
            //browser.getTitle().then(function(title){
            //    if(title == "Authentication Successful"){
            //        console.log("Login successful")
            //    }else{
            //        console.log("Login Falied")

    })

  })