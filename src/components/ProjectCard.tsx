'use client';

import { ExternalLink, Github, Code2, Layers } from 'lucide-react';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    techStack: string[];
    liveLink: string;
    repoLink: string;
    category?: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
      
      {/* Decorative Gradient Background (Behind the Icon) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Visual Placeholder (Top Section) */}
      <div className="h-44 bg-slate-950 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }}></div>
        </div>
        <Layers size={40} className="text-slate-700 group-hover:text-blue-500 transition-colors duration-500" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded">
            {project.category || 'System'}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mt-2 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="flex items-center gap-1 text-[11px] font-mono text-slate-300 bg-slate-800/50 border border-slate-700 px-2 py-1 rounded-md"
            >
              <Code2 size={10} className="text-blue-500" />
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 py-2.5 rounded-lg transition-all active:scale-95"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <a 
            href={project.repoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300 border border-slate-700 hover:bg-slate-800 py-2.5 rounded-lg transition-all active:scale-95"
          >
            <Github size={14} /> Source
          </a>
        </div>
      </div>
    </div>
  );
}