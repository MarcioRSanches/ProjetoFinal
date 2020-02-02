 class LinkMenus {

     constructor () {
         this.menuABTest    = element(by.css('#content > ul > li > a'))
         this.menuAddRemove = element(by.css('#content > ul > li:nth-child(2) > a')) 
     }

     async clicarNoMenuABTest() {
        await this.menuABTest.click()    
     }
     
     async clicarNoMenuAddRemove() {
        await this.menuAddRemove.click()
     }

 }

 module.exports = LinkMenus