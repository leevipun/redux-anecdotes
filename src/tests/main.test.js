import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page.locator('#root')).toContainText('If it hurts, do it more often');
    await page.getByText('Adding manpower to a late').click();
    await page.getByText('The first 90 percent of the').click();
    await page.getByText('Any fool can write code that').click();
    await page.getByText('Premature optimization is the').click();
    await page.getByText('Debugging is twice as hard as').click();
    await expect(page.getByText('Adding manpower to a late')).toBeVisible();
    await expect(page.getByText('The first 90 percent of the')).toBeVisible();
    await page.locator('div').filter({ hasText: /^has 4vote$/ }).getByRole('button').click();
    await expect(page.getByText('Adding manpower to a late software project makes it later! was voted')).toBeVisible();
    await page.getByRole('textbox', { name: 'New anecdote' }).click();
    await page.getByRole('textbox', { name: 'New anecdote' }).fill('Uusi yritys');
    await page.getByRole('button', { name: 'create' }).click();
    await expect(page.getByText('Uusi yritys was added')).toBeVisible();
    await page.goto('http://localhost:5173/');
    await expect(page.locator('#root')).toContainText('Uusi yritys');
    await page.locator('input[name="filter"]').click();
    await page.locator('input[name="filter"]').fill('uusi');
    await expect(page.locator('#root')).toContainText('Uusi yritys');
});