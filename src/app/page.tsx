import ProjectCard from '@/components/ProjectCard';

async function getProjects() {
  try {
    // We use the full URL for server-side fetching in Next.js
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/projects`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (err) {
    console.error("Fetch Error:", err);
    return [];
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen p-8 md:p-20">
      <header className="max-w-6xl mx-auto mb-16">
        <h1 className="text-5xl font-black tracking-tighter text-white">
          PROJECTS<span className="text-blue-500 text-3xl">.exe</span>
        </h1>
      </header>

      <main className="max-w-6xl mx-auto">
        {projects.length === 0 ? (
          <div className="border border-dashed border-slate-800 rounded-3xl p-20 text-center bg-slate-900/20">
            <p className="text-slate-500 font-mono italic">
              [System Error]: No projects found in database. 
              <br />
              <a href="/admin" className="text-blue-500 hover:underline mt-4 inline-block">Initialize CMS Dashboard →</a>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj: any) => (
              <ProjectCard key={proj._id} project={proj} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}