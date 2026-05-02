import {test} from '@playwright/test';

test("test 1", async({page})=>{
    console.log("running test 1");
    await page.goto("https://www.saucedemo.com/");
})

test("test 2", async({page})=>{
    console.log("running test 2");
    await page.goto("https://kitchen.applitools.com/");
})


// page, browser, context, browserName, request


