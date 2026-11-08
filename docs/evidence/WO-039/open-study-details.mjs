// Use element handles while opening disclosures: lazy children change locator indices.
export async function openStudyDetails(page, study) {
  const closed = study.locator("details:not([open]) > summary");
  for (let opened = 0; opened < 40; opened++) {
    if ((await closed.count()) === 0) {
      await page.waitForLoadState("networkidle");
      if ((await closed.count()) === 0) return opened;
      continue;
    }
    const summary = await closed.first().elementHandle();
    await summary.click();
    await page.waitForFunction(
      (element) => element.parentElement.hasAttribute("open"),
      summary,
    );
    await summary.dispose();
  }
  throw new Error(
    "The study did not reach a stable all-disclosures-open state",
  );
}
