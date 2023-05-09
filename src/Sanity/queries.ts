import { groq } from "astro-sanity";
import { MODULES } from "./modules";

export const HOME_QUERY_SANITY = groq`
*[_type == 'home'][0] {
  title,
  ${MODULES},
}
`;

export const PAGE_QUERY_SANITY = groq`
*[_type == 'page' && slug.current == $slug ][0] {
  title,
  ${MODULES},
}
`;

export const ARTICLE_QUERY_SANITY = groq`
*[_type == "article" && slug.current == $slug][0] {
  ...,
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  }
}`;
