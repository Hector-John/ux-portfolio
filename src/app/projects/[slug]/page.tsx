import { getProjectBySlug, getProjectSlugs } from '@/lib/sanity/queries';

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  
  if (!project) return <div>Project not found</div>;

  return (
    <div>
      <h1>{project.title}</h1>
      {/* Render project details */}
    </div>
  );
}