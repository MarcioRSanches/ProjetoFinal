const LinkMenus     = require('../page-objects/LinkMenus')
const AddRemovePage = require('../page-objects/AddRemovePage')
var EC = protractor.ExpectedConditions
var menus   =  new LinkMenus()
var addDel  =  new AddRemovePage()

describe('Funcionalidade - 2', () => {
    
    beforeEach (async () =>  {
        await browser.get('https://the-internet.herokuapp.com')
    })

    it('Abrir a janela, clicando no link Add/Remove e clicar no botão Add e verificar se o botão Delete existe', async () => {

        await menus.clicarNoMenuAddRemove()
        await console.log("* OK ** Clicou no menu")

        await addDel.clickBtnADD()
        await console.log("* OK ** Clicou no botão ADD")

        var verificaSeBtnDeleteExiste = await addDel.retornaTextBtnDEL()
        
        expect(verificaSeBtnDeleteExiste).toEqual('Delete')
        await console.log("* OK ** Verificou se o Delete existe")

    })

    it('Abrir a janela, clicando no link Add/Remove e clicar no botão Add, clicar no Delete e ver se ele some', async () => {

        //var menus   =  new LinkMenus()
        //var addDel  =  new AddRemovePage()

        await menus.clicarNoMenuAddRemove()
        await console.log("* OK ** Clicou no menu")

        await addDel.clickBtnADD()
        await console.log("* OK ** Clicou no botão ADD")

        await addDel.clickBtnDEL()
        await console.log("* OK ** Clicou no botão Delete")

        var verificaSeBtnDeleteExiste = await addDel.aguardaBtnDELNaoExistir()

        expect(verificaSeBtnDeleteExiste).toBe(true)
        await console.log("* OK ** Verificou se o botão Delete apagou")

    })

    it('Abrir a janela, clicando no link Add/Remove 3 x e verificar se existem 3 botões delete', async () => {
         
        //var menus   =  new LinkMenus()
        //var addDel  =  new AddRemovePage()

        await menus.clicarNoMenuAddRemove()
        await console.log("* OK ** Clicou no menu")

        await addDel.clickBtnADD()
        await addDel.clickBtnADD()
        await addDel.clickBtnADD()
        await console.log("* OK ** Clicou no botão ADD 3x")

        let qtdeBtnDel = await addDel.getQtdeBtnDelete()
        expect(qtdeBtnDel).toBe(3)
     
    })

  })