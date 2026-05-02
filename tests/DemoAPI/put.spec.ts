import { test, expect } from '@playwright/test';

test("Put api", async ({ request }) => {
    const response = await request.put("https://dummyjson.com/products/1", {
        data: {
            title: "abcd"
        }
    })

    expect(response.status()).toBe(200);

    const resText = await response.text();
    expect(resText).toContain('abcd');
})