import { groq } from "astro-sanity";

export const MODULE_SLIDING_INFO_CARDS = groq`
  _key,
  _type,
  title,
  cards[] {
    _key,
    _type,
    title,
    subtitle,
    description,
    image {
      "url": asset -> url
    }
  },
  backgroundImage {
    "url": asset -> url
  }
`;
