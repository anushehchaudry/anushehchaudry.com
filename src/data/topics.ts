// Topics for the picker on Work and Projects. Picking one narrows the page
// to entries tagged with it (see TopicPicker.astro).

export const topics = [
  { id: "ml", label: "agents & ML" },
  { id: "health", label: "health" },
  { id: "infra", label: "infrastructure" },
  { id: "products", label: "products" },
  { id: "teaching", label: "teaching" },
] as const; // labels are written to sit mid-sentence

export type Topic = (typeof topics)[number]["id"];

export const topicIds = topics.map((t) => t.id) as [Topic, ...Topic[]];
