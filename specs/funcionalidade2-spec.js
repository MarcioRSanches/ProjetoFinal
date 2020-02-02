const LinkMenus     = require('../page-objects/LinkMenus')
const AddRemovePage = require('../page-objects/AddRemovePage')
var EC = protractor.ExpectedConditions

describe('Funcionalidade - 2', () => {
    
    
    it('Abrir a janela, clicando no link Add/Remove e clicar no botão Add e verificar se o botão Delete existe', async () => {

        await browser.get('https://the-internet.herokuapp.com')

        var menus    = new LinkMenus()
        var addDell  = new AddRemovePage()

        await menus.clicarNoMenuAddRemove()

        await addDell.clickBtnADD()

        var verificaSeBtnDeleteExiste = addDell.retornaBtnDELVisivel()

        expect(verificaSeBtnDeleteExiste).toContain('Delete')

    })

    it('Abrir a janela, clicando no link Add/Remove e clicar no botão Add, clicar no Delete e ver se ele some', async () => {

        await browser.get('https://the-internet.herokuapp.com')

        var menus    = new LinkMenus()
        var addDell  = new AddRemovePage()

        await menus.clicarNoMenuAddRemove()

        await addDell.clickBtnADD()

        await addDell.clickBtnDEL()

        var verificaSeBtnDeleteExiste = addDell.retornaBtnDELInvisivel()

        expect(verificaSeBtnDeleteExiste).toContain('Delete') 

    })

    it('Abrir a janela, clicando no link Add/Remove 3 x e verificar se existem 3 botões delete', async () => {

        await browser.get('https://the-internet.herokuapp.com')
        
        var menus  = new LinkMenus()
        var addDell  = new AddRemovePage()

        await menus.clicarNoMenuAddRemove()
         
        await addDell.clickBtnADD()
        await addDell.clickBtnADD()
        await addDell.clickBtnADD()
        
        let qtdeBtnDel = await element.all(by.css('.added-manually')).count()
        expect(qtdeBtnDel).toBe(3)

    })

  })