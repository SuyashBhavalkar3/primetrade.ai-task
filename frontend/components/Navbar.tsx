'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { LogOut, User, LayoutDashboard, CheckSquare } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <CheckSquare className="w-5 h-5" />
          </div>
          <span>Prime<span className="text-indigo-400">Trade</span></span>
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link href="/dashboard" className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Link>
              <div className="h-4 w-px bg-white/10 mx-2" />
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">{user.name}</span>
                <span className="bg-indigo-500/10 text-indigo-400 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border border-indigo-500/20">
                  {user.role}
                </span>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-1.5 text-sm font-medium text-rose-400 hover:text-rose-300 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-indigo-500/20"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
