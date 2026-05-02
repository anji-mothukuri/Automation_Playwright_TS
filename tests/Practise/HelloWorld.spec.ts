import {test, expect} from '@playwright/test';

test("sample test", async ({page}) => {
    console.log(f1());
    console.log(f2());
});


function f1(){
    return "hello";
};

function f2(){
    return "hello world!!";
};