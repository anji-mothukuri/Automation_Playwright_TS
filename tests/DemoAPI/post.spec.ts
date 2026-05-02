import {test, expect} from '@playwright/test';

test("POST api", async ({ request }) => {
    const response = await request.post("https://dummyjson.com/products/add", {
        data: {
            title: 'BMW Pencil'
        }
    });

    expect(response.status()).toBe(201);

    const resText = await response.text();
    expect(resText).toContain('BMW Pencil');
})