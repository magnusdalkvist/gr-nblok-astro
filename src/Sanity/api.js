import { groq, useSanityClient } from "astro-sanity";
import { HOME_QUERY_SANITY } from "./queries";

export async function getBlog(slug) {
  const client = useSanityClient();
  const query = groq`*[_type == "blog" && slug.current == "${slug}"][0] {
    ...,
    content[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    }
  }`;
  const params = {};
  const blog = await client.fetch(query, params);
  if (!blog) {
    return null;
  }
  return blog;
}

export async function getHome() {
  const client = useSanityClient();
  const query = HOME_QUERY_SANITY;
  const params = {};
  const home = await client.fetch(query, params);
  if (!home) {
    return null;
  }
  return home;
}
