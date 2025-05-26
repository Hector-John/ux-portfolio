import { client } from './client';

export async function getProjectSlugs(): Promise<string[]> {
  const query = `*[_type == "project"]{ "slug": slug.current }`;
  const result = await client.fetch(query);
  return result.map((item: { slug: string }) => item.slug);
}

export async function getProjectBySlug(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    title,
    // other fields
  }`;
  return await client.fetch(query, { slug });
}

// Similar functions for blog posts
export async function getPostSlugs(): Promise<string[]> {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const result = await client.fetch(query);
  return result.map((item: { slug: string }) => item.slug);
}

export async function getPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    // other fields
  }`;
  return await client.fetch(query, { slug });
}