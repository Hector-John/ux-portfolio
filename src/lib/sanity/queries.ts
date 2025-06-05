import { client } from '../utils';

// Project Queries
export async function getProjects(): Promise<SanityProject[]> {
  return await client.fetch(`*[_type == "project"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    content,
    client,
    year,
    role,
    tags,
    projectLink,
    publishedAt,
    "slug": slug.current
  }`);
}

export async function getProjectSlugs(): Promise<{ slug: string }[]> {
  const slugs = await client.fetch(`*[_type == "project"].slug.current`);
  return slugs.map((slug: string) => ({ slug }));
}

export async function getProjectBySlug(slug: string): Promise<SanityProject> {
  return await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      content,
      client,
      year,
      role,
      tags,
      projectLink,
      publishedAt,
      "slug": slug.current
    }`,
    { slug }
  );
}

// Blog Queries
export async function getPosts(): Promise<SanityPost[]> {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    body,
    publishedAt,
    readingTime,
    "slug": slug.current
  }`);
}

export async function getPostSlugs(): Promise<{ slug: string }[]> {
  const slugs = await client.fetch(`*[_type == "post"].slug.current`);
  return slugs.map((slug: string) => ({ slug }));
}

export async function getPostBySlug(slug: string): Promise<SanityPost> {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      body,
      publishedAt,
      readingTime,
      "slug": slug.current
    }`,
    { slug }
  );
}