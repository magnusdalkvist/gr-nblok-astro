import { groq } from "astro-sanity";

export const MODULE_SHOP_SECTION = groq`
  _key,
  _type,
  title,
  imageButtons[] {
    _key,
    _type,
    image {
      "url": asset -> url
    },
    title,
    link,
  },
  backgroundImage {
    "url": asset -> url
  },
  `;
