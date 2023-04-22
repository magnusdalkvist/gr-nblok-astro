import { useSanityClient } from "astro-sanity";

export async function getBlog(slug) {
  const client = useSanityClient();
  const query = `*[_type == "blogs" && slug.current == "${slug}"][0] {
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
