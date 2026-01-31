'use client';

import Link from 'next/link';
import { GithubLogo, XLogo } from '@phosphor-icons/react';

export default function Navbar() {
  return (
    <nav className="bg-[#f5f1ea] border-b border-gray-300/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-base font-bold text-gray-900 tracking-wide">
              PROOF OF CHANDLER
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/chandlergims" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <GithubLogo size={18} weight="regular" />
            </Link>
            <Link 
              href="https://x.com/spiralofcdlr" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <XLogo size={18} weight="regular" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
