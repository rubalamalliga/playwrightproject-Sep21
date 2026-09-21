
class Common {
    static async click(locator){
        await locator.click()
    }
   static async fill(locator, value){
        await locator.fill(value)

   } 
static async getText(locator){
await locator.textContent()

}
static async isVisible(locator){
    await locator.isVisible()
}


}




