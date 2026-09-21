// Generated from: features\login.feature
import { test } from "../../hooks/fixtures.js";

test.describe('Verify Login Functionality', () => {

  test('user login with valid details', async ({ Given, When, Then, And, login }) => { 
    await Given('I am open the browser', null, { login }); 
    await When('I am clicking on Login link text', null, { login }); 
    await When('I am enter username and password', null, { login }); 
    await And('I am click on Login Button', null, { login }); 
    await Then('I should see the dashboard', null, { login }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am open the browser","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I am clicking on Login link text","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I am enter username and password","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I am click on Login Button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the dashboard","stepMatchArguments":[]}]},
]; // bdd-data-end