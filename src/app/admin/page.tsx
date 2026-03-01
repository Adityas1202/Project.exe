import AdminForm from '@/components/AdminForm';
// 1. ADD THIS LINE (The Import)
import ProjectList from '@/components/ProjectList'; 

import { ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">System Admin</h1>
              <p className="text-xs text-slate-500 font-mono">Authenticated Session Active</p>
            </div>
          </div>
          <Link href="/" className="text-slate-400 hover:text-blue-400 flex items-center gap-2 text-sm transition-all border border-slate-800 px-4 py-2 rounded-full hover:bg-slate-900">
            <ArrowLeft size={16} /> Exit CMS
          </Link>
        </div>
        
        {/* THIS IS YOUR "ADD PROJECT" FORM */}
        <AdminForm />

        {/* 2. ADD THIS TAG HERE (The actual list with delete buttons) */}
        <ProjectList /> 
        
      </div>
    </div>
  );
}