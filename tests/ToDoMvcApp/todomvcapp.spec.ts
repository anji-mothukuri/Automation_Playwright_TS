import { test, expect } from '@playwright/test';

test('to do mvc app', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await expect(page.getByTestId('header').getByRole('heading')).toContainText('todos');
  await expect(page.getByTestId('text-input')).toBeVisible();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('grocery');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('sports');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('reading');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('sleeping');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'grocery' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'sports' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByTestId('todo-list')).toContainText('readingsleeping');
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByTestId('todo-list')).toContainText('grocery');
  await page.getByText('sports').click();
  await expect(page.getByTestId('todo-list')).toContainText('sports');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.getByTestId('todo-list')).toContainText('reading');

  // set wrong text for assertion
  await expect(page.getByTestId('todo-list')).toContainText('sleeping-test');
});