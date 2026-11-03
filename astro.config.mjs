import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://anushehchaudry.com",
  trailingSlash: "never", // /work, not /work/ (matches nav links and canonicals)
  // the 404 page and the (empty) writing index stay out of the sitemap
  integrations: [sitemap({ filter: (page) => !page.includes("/404") && !page.includes("/writing") })],
});
