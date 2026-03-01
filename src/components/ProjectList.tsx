"use client";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react"; // This is the trash icon

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  // Get the projects from your local database
  useEffect(() => {
    fetch("/api/projects").then(res => res.json()).then(data => setProjects(data));
  }, []);

  const deleteMe = async (id: string) => {
    if (confirm("Delete this project?")) {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (res.ok) {
        // This line removes it from the screen immediately
        setProjects(projects.filter((p: any) => p._id !== id));
      }
    }
  };

  return (
    <div className="mt-10 space-y-4">
      <h2 className="text-white text-xl font-bold">Your Projects</h2>
      {projects.map((p: any) => (
        <div key={p._id} className="bg-slate-900 p-4 rounded-lg flex justify-between border border-slate-800">
          <span className="text-blue-400">{p.title}</span>
          <button onClick={() => deleteMe(p._id)} className="text-red-500 hover:text-red-700">
            <Trash2 size={20} />
          </button>
        </div>
      ))}
    </div>
  );
}