import { groq, useSanityClient } from "astro-sanity";
import { ARTICLE_QUERY_SANITY, HOME_QUERY_SANITY, PAGE_QUERY_SANITY } from "./queries";

export async function getArticle(slug) {
  const client = useSanityClient();
  const query = ARTICLE_QUERY_SANITY;
  const params = {
    slug,
  };
  const article = await client.fetch(query, params);
  if (!article) {
    return null;
  }
  return article;
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

export async function getPage(slug) {
  const client = useSanityClient();
  const query = PAGE_QUERY_SANITY;
  const params = {
    slug,
  };
  const page = await client.fetch(query, params);
  if (!page) {
    return null;
  }
  return page;
}
