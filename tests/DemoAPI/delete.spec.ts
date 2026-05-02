import {test,expect} from '@playwright/test';

test("Delete api", async({request})=>{
    const response = await request.delete("https://dummyjson.com/products/1");

    expect(response.status()).toBe(200);
})