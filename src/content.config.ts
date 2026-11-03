import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { topicIds } from "./data/topics";

// Blog posts: src/content/writing/my-post.md
// Files starting with "_" (like _template.md) are ignored.
const writing = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

// Projects: one file per entry on /projects.
// The frontmatter fills the entry; the body is its short description.
const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    context: z.string(),          // eyebrow line, e.g. "Web app · Team of four"
    when: z.string().optional(),  // shown in the margin, e.g. "2025"
    status: z.string().optional(), // e.g. "in progress", noted in red pencil
    order: z.number(),            // lower comes first
    featured: z.boolean().default(false),
    skim: z.string(),             // one line, shown in "Skim"
    role: z.string().optional(),  // "My part:" line for team projects
    deep: z.array(z.string()).default([]), // how it works, shown in "Deep dive"
    // a figure: .svg files are drawn on the page as diagrams, photos/plots are taped-in prints
    figure: z.object({ src: z.string(), alt: z.string(), caption: z.string() }).optional(),
    topics: z.array(z.enum(topicIds)).default([]),  // which filter topics this belongs to
    tags: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { writing, projects };
