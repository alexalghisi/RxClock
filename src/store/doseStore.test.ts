import { TODAY } from "@/lib/dose";
import { useDoseStore } from "./doseStore";

test("Ioana claiming 08:00 then Alessandro is a no-op on the slot", () => {
  useDoseStore.setState({ slots: TODAY, actor: "ioana" });
  useDoseStore.getState().claimSlot("am");
  expect(useDoseStore.getState().slots[0]?.claimedBy).toBe("ioana");
  useDoseStore.getState().setActor("alessandro");
  useDoseStore.getState().claimSlot("am");
  expect(useDoseStore.getState().slots[0]?.claimedBy).toBe("ioana");
  useDoseStore.getState().reset();
});
