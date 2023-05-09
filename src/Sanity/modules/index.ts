import { groq } from "astro-sanity";
import { MODULE_HERO } from "./hero";
import { MODULE_SLIDING_INFO_CARDS } from "./slidingInfoCards";
import { MODULE_SHOP_SECTION } from "./shopSection";
import { MODULE_NUMBERED_INFO_LIST } from "./numberedInfoList";

export const MODULES_DEFINITION = groq`
  _key,
  _type,
  (_type == "module.hero") => {
    ${MODULE_HERO}
  },
  (_type == "module.slidingInfoCards") => {
    ${MODULE_SLIDING_INFO_CARDS}
  },
  (_type == "module.shopSection") => {
    ${MODULE_SHOP_SECTION}
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
