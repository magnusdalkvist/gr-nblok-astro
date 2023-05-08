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

export const MODULE_NUMBERED_INFO_LIST = groq`
  _key,
  _type,
  infoList[] {
    blocks[] {
      ...,
    },
  },
`;

export const MODULES_DEFINITION = groq`
  _key,
  _type,
  (_type == "module.hero") => {
    ${MODULE_HERO}
  },
  (_type == "module.numberedInfoList") => {
    ${MODULE_NUMBERED_INFO_LIST}
  },
`;

export const MODULES = groq`
  "modules": template->modules[] {
    ${MODULES_DEFINITION}
  }
`;

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
