import { TODAY, claim } from "./dose";

test("the first sibling owns the 08:00 dose", () => {
  const first = claim(TODAY, "am", "ioana");
  expect(first.ok).toBe(true);
  if (!first.ok) return;
  expect(first.slots[0]?.claimedBy).toBe("ioana");
});

test("the second sibling is blocked so Elena is not double-dosed", () => {
  const first = claim(TODAY, "am", "ioana");
  if (!first.ok) throw new Error("expected first claim to land");
  const second = claim(first.slots, "am", "alessandro");
  expect(second).toEqual({ ok: false, reason: "already" });
});
