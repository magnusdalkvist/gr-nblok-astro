import { groq } from "astro-sanity";

export const MODULE_EVENTS = groq`
  _key,
  _type,
  title,
  show,
  events[] {
    _key,
    _type,
    name,
    date,
    tags[],
    date,
    image,
  },
`;
