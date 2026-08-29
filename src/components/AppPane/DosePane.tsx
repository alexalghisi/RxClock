import { Button } from "@/components/ui/button";
import { SIBLINGS } from "@/lib/dose";
import { useDoseStore } from "@/store/doseStore";

export function DosePane() {
  const actor = useDoseStore((state) => state.actor);
  const slots = useDoseStore((state) => state.slots);
  const setActor = useDoseStore((state) => state.setActor);
  const claimSlot = useDoseStore((state) => state.claimSlot);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex gap-1 border-b border-border px-4 py-2">
        {SIBLINGS.map((sibling) => (
          <Button
            key={sibling.id}
            variant={actor === sibling.id ? "default" : "outline"}
            size="sm"
            className="h-7 rounded-md px-2 text-[12px]"
            data-testid={`actor-${sibling.id}`}
            onClick={() => setActor(sibling.id)}
          >
            {sibling.name}
          </Button>
        ))}
      </div>
      <ul className="min-h-0 flex-1 overflow-auto p-3">
        {slots.map((slot) => (
          <li
            key={slot.id}
            data-testid={`slot-${slot.id}`}
            className="mb-3 flex items-center justify-between rounded-md border border-border px-4 py-4"
          >
            <div>
              <p className="text-[20px] font-semibold tabular-nums tracking-tight">{slot.time}</p>
              <p className="text-[13px] text-muted-foreground">{slot.drug}</p>
              <p className="text-[12px] text-muted-foreground">
                {slot.claimedBy === null ? "Not given" : `Given by ${slot.claimedBy}`}
              </p>
            </div>
            <Button
              size="lg"
              className="h-14 rounded-full px-5"
              data-testid={`claim-${slot.id}`}
              disabled={slot.claimedBy !== null}
              onClick={() => claimSlot(slot.id)}
            >
              I gave this
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
