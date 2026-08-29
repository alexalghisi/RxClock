export type SiblingId = "alessandro" | "ioana";

export type Slot = {
  id: string;
  time: string;
  drug: string;
  claimedBy: SiblingId | null;
};

export const SIBLINGS: { id: SiblingId; name: string }[] = [
  { id: "alessandro", name: "Alessandro" },
  { id: "ioana", name: "Ioana" },
];

export const TODAY: Slot[] = [
  { id: "am", time: "08:00", drug: "Enalapril 10 mg", claimedBy: null },
  { id: "noon", time: "14:00", drug: "Metformin 500 mg", claimedBy: null },
  { id: "pm", time: "20:00", drug: "Enalapril 10 mg", claimedBy: null },
];

export type ClaimResult = { ok: true; slots: Slot[] } | { ok: false; reason: "already" };

export function claim(slots: Slot[], slotId: string, sibling: SiblingId): ClaimResult {
  const slot = slots.find((item) => item.id === slotId);
  if (slot === undefined) return { ok: false, reason: "already" };
  if (slot.claimedBy !== null) return { ok: false, reason: "already" };
  return {
    ok: true,
    slots: slots.map((item) => (item.id === slotId ? { ...item, claimedBy: sibling } : item)),
  };
}
