 class LinkMenus {

     constructor () {
         this.menuABTest     = element(by.css('#content > ul > li > a'))
         this.menuAddRemove  = element(by.css('#content > ul > li:nth-child(2) > a')) 
         this.menuBasicAuth  = element(by.css('#content > ul > li:nth-child(3) > a')) 
         this.menuCheckboxes = element(by.css('#content > ul > li:nth-child(6) > a'))
         this.menuDropdown   = element(by.css('#content > ul > li:nth-child(11) > a'))
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
     async clicarNoMenuCheckboxes() {
      await this.menuCheckboxes.click()
   }    
      async clicarNoMenuDropdown() {
      await this.menuDropdown.click()
      }   
 }
 module.exports = LinkMenus