// import { expect, test } from '@playwright/test'
import { expect, test } from './fixtures'

test('load extension', async ({ page }) => {
  await page.goto('https://extension.js.org/')

  await page.screenshot({ path: 'screenshot.png' })

  await expect(page.getByRole('heading', { name: ' Change the background-color ⬇' })).toBeVisible({ timeout: 10000 })
})

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/')

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/)
// })

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/')

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click()

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible()
// })
