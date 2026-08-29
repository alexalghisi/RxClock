import { toast } from "sonner";
import { create } from "zustand";
import { SIBLINGS, TODAY, claim, type SiblingId, type Slot } from "@/lib/dose";

interface DoseState {
  actor: SiblingId;
  slots: Slot[];
  setActor: (actor: SiblingId) => void;
  claimSlot: (slotId: string) => void;
  reset: () => void;
}

export const useDoseStore = create<DoseState>((set, get) => ({
  actor: "ioana",
  slots: TODAY,
  setActor: (actor) => set({ actor }),
  claimSlot: (slotId) => {
    const result = claim(get().slots, slotId, get().actor);
    if (!result.ok) {
      toast.error("Already given — do not double-dose");
      return;
    }
    set({ slots: result.slots });
    toast.success("Logged");
  },
  reset: () => set({ slots: TODAY }),
}));

export { SIBLINGS };
