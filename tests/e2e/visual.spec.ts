import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Load test fixtures
const mailEmails = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../test-fixtures/mail/emails.json'), 'utf-8')
);
const calendarCalendars = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../test-fixtures/calendar/calendars.json'), 'utf-8')
);
const calendarEvents = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../test-fixtures/calendar/events.json'), 'utf-8')
);
const feedbackItems = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../test-fixtures/feedback/items.json'), 'utf-8')
);

test.describe('Visual regression tests', () => {
  test.describe('Desktop viewport', () => {
    test.use({ viewport: { width: 1920, height: 1080 } });

    test('Mail list - inbox', async ({ page }) => {
      await page.goto('/');
      await page.waitForSelector('[data-testid="mail-list"]');
      await expect(page).toHaveScreenshot('desktop-mail-list-inbox.png', { fullPage: true });
    });

    test('Mail reader - selected email', async ({ page }) => {
      await page.goto('/');
      await page.waitForSelector('[data-testid="mail-list"]');
      // Click first email
      await page.locator('[data-testid="mail-item"]').first().click();
      await page.waitForSelector('[data-testid="mail-reader"]');
      await expect(page).toHaveScreenshot('desktop-mail-reader-selected.png', { fullPage: true });
    });

    test('Compose modal open', async ({ page }) => {
      await page.goto('/');
      await page.locator('[data-testid="compose-button"]').click();
      await page.waitForSelector('[data-testid="compose-modal"]');
      await expect(page).toHaveScreenshot('desktop-compose-modal-open.png', { fullPage: true });
    });

    test('Calendar workspace', async ({ page }) => {
      await page.goto('/');
      await page.locator('[data-testid="open-calendar-button"]').click();
      await page.waitForSelector('[data-testid="calendar-workspace"]');
      await expect(page).toHaveScreenshot('desktop-calendar-workspace.png', { fullPage: true });
    });

    test('Settings modal', async ({ page }) => {
      await page.goto('/');
      await page.locator('[data-testid="settings-button"]').click();
      await page.waitForSelector('[data-testid="settings-modal"]');
      await expect(page).toHaveScreenshot('desktop-settings-modal.png', { fullPage: true });
    });
  });

  test.describe('Tablet viewport', () => {
    test.use({ viewport: { width: 768, height: 1024 } });

    test('Mail list - inbox', async ({ page }) => {
      await page.goto('/');
      await page.waitForSelector('[data-testid="mail-list"]');
      await expect(page).toHaveScreenshot('tablet-mail-list-inbox.png', { fullPage: true });
    });

    test('Mail reader - selected email', async ({ page }) => {
      await page.goto('/');
      await page.waitForSelector('[data-testid="mail-list"]');
      // Click first email
      await page.locator('[data-testid="mail-item"]').first().click();
      await page.waitForSelector('[data-testid="mail-reader"]');
      await expect(page).toHaveScreenshot('tablet-mail-reader-selected.png', { fullPage: true });
    });

    test('Compose modal open', async ({ page }) => {
      await page.goto('/');
      await page.locator('[data-testid="compose-button"]').click();
      await page.waitForSelector('[data-testid="compose-modal"]');
      await expect(page).toHaveScreenshot('tablet-compose-modal-open.png', { fullPage: true });
    });

    test('Calendar workspace', async ({ page }) => {
      await page.goto('/');
      await page.locator('[data-testid="open-calendar-button"]').click();
      await page.waitForSelector('[data-testid="calendar-workspace"]');
      await expect(page).toHaveScreenshot('tablet-calendar-workspace.png', { fullPage: true });
    });

    test('Settings modal', async ({ page }) => {
      await page.goto('/');
      await page.locator('[data-testid="settings-button"]').click();
      await page.waitForSelector('[data-testid="settings-modal"]');
      await expect(page).toHaveScreenshot('tablet-settings-modal.png', { fullPage: true });
    });
  });

  test.describe('Mobile viewport', () => {
    test.use({ viewport: { width: 375, height: 812 } });

    test('Mail list - inbox', async ({ page }) => {
      await page.goto('/');
      await page.waitForSelector('[data-testid="mail-list"]');
      await expect(page).toHaveScreenshot('mobile-mail-list-inbox.png', { fullPage: true });
    });

    test('Mail reader - selected email', async ({ page }) => {
      await page.goto('/');
      await page.waitForSelector('[data-testid="mail-list"]');
      // Click first email
      await page.locator('[data-testid="mail-item"]').first().click();
      await page.waitForSelector('[data-testid="mail-reader"]');
      await expect(page).toHaveScreenshot('mobile-mail-reader-selected.png', { fullPage: true });
    });

    test('Compose modal open', async ({ page }) => {
      await page.goto('/');
      await page.locator('[data-testid="compose-button"]').click();
      await page.waitForSelector('[data-testid="compose-modal"]');
      await expect(page).toHaveScreenshot('mobile-compose-modal-open.png', { fullPage: true });
    });

    test('Calendar workspace', async ({ page }) => {
      await page.goto('/');
      await page.locator('[data-testid="open-calendar-button"]').click();
      await page.waitForSelector('[data-testid="calendar-workspace"]');
      await expect(page).toHaveScreenshot('mobile-calendar-workspace.png', { fullPage: true });
    });

    test('Settings modal', async ({ page }) => {
      await page.goto('/');
      await page.locator('[data-testid="settings-button"]').click();
      await page.waitForSelector('[data-testid="settings-modal"]');
      await expect(page).toHaveScreenshot('mobile-settings-modal.png', { fullPage: true });
    });
  });
});
