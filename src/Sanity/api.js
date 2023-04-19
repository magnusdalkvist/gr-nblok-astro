import { useSanityClient } from "astro-sanity";

export async function getAllPets() {
  const client = useSanityClient();
  const query = `*[_type == "pet"]`;
  const params = {};
  const pets = await client.fetch(query, params);
  return pets;
}

export async function getAllCats() {
  const client = useSanityClient();
  const query = `*[_type == "pet" && species == "cat"]`;
  const params = {};
  const cats = await client.fetch(query, params);
  return cats;
}
