
import{test as base} from "playwright-bdd"
import { LoginObject } from "../loginObject.js"



export const test = base.extend({
login : async ({page}, use) =>{

  let loginPage = new LoginObject(page)
  await use(loginPage)

}

})
    





