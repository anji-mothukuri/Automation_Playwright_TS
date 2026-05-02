import {test, expect} from '@playwright/test';

test.skip("skip test", async()=>{
    console.log("skip test");
})

// test.only("only test", async()=>{
//     console.log("only test");
// })

test.fixme("fixme test", async()=>{
    console.log("fixme test");
})

test("slow test", async()=>{
    console.log("slow test");
    test.slow();
})

test("fail test", async()=>{
    console.log("slow test");
    test.fail();
})

test("test with tag @smoke", async()=>{
    console.log("smoke test");
})

test("test with tag @regression", async()=>{
    console.log("regression test");
})