const LABELS: Record<string, string> = {
  "under-review": "Under review",
  accepted: "Accepted",
  published: "Published",
  preprint: "Preprint",
};

export const paperStatusLabel = (status: string) =>
  LABELS[status] ?? "Preprint";

/** A preprint is just a state of being; the rest are milestones worth colour. */
export const paperStatusClass = (status: string) =>
  status === "preprint" ? "text-muted-foreground" : "text-accent";
