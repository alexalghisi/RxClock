import { expect, test } from "@playwright/test";

test("the second sibling cannot double-dose 08:00", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "RxClock" })).toBeVisible();
  await expect(page.getByTestId("author-credit")).toContainText("Alessandro Alghisi");
  await page.getByTestId("claim-am").click();
  await page.getByTestId("actor-alessandro").click();
  await expect(page.getByTestId("claim-am")).toBeDisabled();
});
