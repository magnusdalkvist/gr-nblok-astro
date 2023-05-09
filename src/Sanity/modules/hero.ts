import { groq } from "astro-sanity";

export const MODULE_HERO = groq`
  _key,
  _type,
  blocks[] {
    ...,
  },
  backgroundImage {
    "url": asset -> url
  }
`;
