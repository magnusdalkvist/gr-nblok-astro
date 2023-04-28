import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sanity from "astro-sanity";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: "at6buhh6",
      dataset: "production",
      apiVersion: "2023-02-08",
      useCdn: true,
    }),
  ],
  output: "server",
  adapter: netlify(),
});
