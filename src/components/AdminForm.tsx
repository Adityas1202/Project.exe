'use client';
import { useState } from 'react';
import { Loader2, CheckCircle, Plus } from 'lucide-react';

export default function AdminForm() {
  const [status, setStatus] = useState<'idle' | 'syncing' | 'success'>('idle');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('syncing');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get('title'),
      description: formData.get('description'),
      techStack: (formData.get('tech') as string).split(','),
      liveLink: formData.get('live'),
      repoLink: formData.get('repo'),
    };

    const res = await fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
      <input name="title" placeholder="Project Title" required className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-white focus:ring-2 focus:ring-blue-500 outline-none" />
      <textarea name="description" placeholder="Markdown Description" className="w-full bg-slate-950 border border-slate-800 p-3 rounded h-32 text-white" />
      <input name="tech" placeholder="Tech Stack (comma separated)" className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-white" />
      
      <div className="flex gap-4">
        <input name="live" placeholder="Live Link" className="flex-1 bg-slate-950 border border-slate-800 p-3 rounded text-white" />
        <input name="repo" placeholder="Repo Link" className="flex-1 bg-slate-950 border border-slate-800 p-3 rounded text-white" />
      </div>

      <button 
        disabled={status === 'syncing'}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded flex items-center justify-center gap-2 transition-all"
      >
        {status === 'syncing' ? <><Loader2 className="animate-spin" /> Syncing to Database...</> : <><Plus size={18}/> Add Project</>}
      </button>

      {status === 'success' && (
        <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded border border-green-400/20">
          <CheckCircle size={18} /> Build Successful: Project Live.
        </div>
      )}
    </form>
  );
}