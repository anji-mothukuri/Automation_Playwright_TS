import {test, expect} from '@playwright/test';

test("GET api", async ({request})=>{
    const response = await request.get("https://dummyjson.com/products/1");
    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain("Essence Mascara Lash Princess");
})