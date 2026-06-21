# Visual Regression Tests

This directory contains Playwright visual regression tests for the Stealth mail client.

## Running Tests

First, make sure you have the Playwright browsers installed:

```bash
npx playwright install
```

Then run the tests:

```bash
npx playwright test
```

## Updating Snapshots

When you make intentional changes to the UI that require updating the baseline screenshots:

1. **Run the tests** to see which snapshots fail:
   ```bash
   npx playwright test
   ```

2. **Review the changes** using the HTML report:
   ```bash
   npx playwright show-report
   ```

3. **Update the snapshots** if the changes are intentional:
   ```bash
   npx playwright test --update-snapshots
   ```

4. **Commit the new snapshots** to the repository.

## Guidelines for Updating Snapshots

- **Only update snapshots when the UI change is intentional**
- **Review all changes** in the report before updating
- **Test across all viewports**: desktop, tablet, mobile
- **Ensure no personal data** is included in snapshots (use test fixtures)
- **Add a clear commit message** describing the UI change

## Viewport Sizes

- **Desktop**: 1920x1080
- **Tablet**: 768x1024
- **Mobile**: 375x812

## Test Fixtures

Stable, deterministic test fixtures are located in `test-fixtures/`:
- `test-fixtures/mail/`: Email test data
- `test-fixtures/calendar/`: Calendar test data
- `test-fixtures/feedback/`: Feedback notification test data

These fixtures ensure consistent test results across runs.
