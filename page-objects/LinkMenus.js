 class LinkMenus {

     constructor () {
         this.menuABTest    = element(by.css('#content > ul > li > a'))
         this.menuAddRemove = element(by.css('#content > ul > li:nth-child(2) > a')) 
         this.menuBasicAuth = element(by.css('#content > ul > li:nth-child(3) > a')) 
     }

     async clicarNoMenuABTest() {
        await this.menuABTest.click()    
     }
     
     async clicarNoMenuAddRemove() {
        await this.menuAddRemove.click()
     }
     async clicarNoMenuBasicAuth() {
        await this.menuBasicAuth.click()
     }
 }
 module.exports = LinkMenus