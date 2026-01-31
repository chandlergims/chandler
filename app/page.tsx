'use client';

import Navbar from './components/Navbar';
import { GithubLogo, XLogo } from '@phosphor-icons/react';

export default function Home() {
  const projects = [
    {
      title: "Astia Trading Arena",
      date: "Aster Dex 3rd Place",
      description: "Hackathon-winning DEX trading platform",
      tags: ["Hackathon Winner", "DEX", "EVM"],
      users: "200",
      ath: "$2.4M",
      contract: "0xf7c5e64833530b3cdee2ad30d80c81b725274444",
      status: "OPERATIONAL",
      website: "https://github.com/chandlergims/Astia",
      closedSource: false
    },
    {
      title: "Meme K Line",
      date: "2025",
      description: "Predict your future based on your EVM wallet activity",
      tags: ["ML", "EVM", "Memecoins"],
      users: "150",
      ath: "$200K",
      contract: "0x813dd863dfb66c2072ef3b8f36eaec2e5a714444",
      status: "OPERATIONAL",
      website: "https://github.com/chandlergims/memecoinkline",
      closedSource: false
    },
    {
      title: "incubate.gg",
      date: "2025",
      description: "Launchpad for AI agents using Meteora curves with custom fee config. First agent launched: Myla",
      tags: ["Launchpad", "AI Agents", "Solana"],
      users: "300",
      ath: "$600K",
      contract: "F6VrBRN6L2nDyJNJxK2Gcz4LTFr8gGjAxvpLujzuGAAf",
      status: "OPERATIONAL",
      website: "https://github.com/chandlergims/incubatedotgg",
      closedSource: false
    },
    {
      title: "ZChan",
      date: "2025",
      description: "Privacy protocol using Railgun for Solana, inspired by Monero chain",
      tags: ["Privacy", "Solana", "Closed Source"],
      users: "120",
      ath: "$300K",
      contract: "BHK7KBUdq9kRA4mwY15cvv7YdLy4wb8QWy3q3cWtpump",
      status: "OPERATIONAL",
      website: undefined,
      closedSource: true
    },
    {
      title: "Fart Pay",
      date: "2025",
      description: "Protocol to upload MP3 of farts and earn rewards from creator fees",
      tags: ["DeFi", "Creator Economy", "Meme"],
      users: "250",
      ath: "$800K",
      contract: "DPx1tXhmEv9mduoxUvqsmwk872UqdYAXccGmoYiMpump",
      status: "OPERATIONAL",
      website: "https://github.com/chandlergims/fart2earn/",
      closedSource: false
    },
    {
      title: "Kolfags",
      date: "2025",
      description: "A platform to roast your favorite KOLs by uploading MP3s, most voted earn prizes",
      tags: ["Community", "Voting", "Solana"],
      users: "180",
      ath: "$100K",
      contract: "HndtF84JZKSo2pWEN5GxgGfHG3GBTQd5kZyv2hpJbonk",
      status: "OPERATIONAL",
      website: "https://github.com/chandlergims/kolfags",
      closedSource: false
    },
    {
      title: "receipts.fun",
      date: "2025",
      description: "A launchpad built for creators utilizing Meteora SDK offering best fees across all launchpads",
      tags: ["Launchpad", "Meteora", "Creators"],
      users: "350",
      ath: "$200K",
      contract: "H88QzJneAN7PYyDPekcwqRJYgBb89VYXTJ6GdaP5dCmP",
      status: "OPERATIONAL",
      website: "https://github.com/chandlergims/receiptsdotfun",
      closedSource: false
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f1ea] relative">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100"></div>
      
      <Navbar />
      
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Chandler Projects
          </h1>
          <p className="text-base font-normal text-gray-700 mb-8">
            vibe coded open-source projects created by me!
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-800">
            <span>100+ projects</span>
            <span>|</span>
            <span>2 chains (Solana & BSC)</span>
            <span>|</span>
            <span>$22M+ volume</span>
          </div>
        </div>

        {/* Active Projects Section */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-800 mb-1">ACTIVE PROJECTS</h2>
        </div>

        {/* Active Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {/* moltchain card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-semibold text-gray-900">moltchain</h3>
              <span className="flex items-center gap-1.5 text-xs text-green-600">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                OPERATIONAL
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              an experiment into creating a blockchain entirely by molt agents, inspired by @austingriffith{' '}
              <a 
                href="https://x.com/clawdbotatg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                clawd.atg.eth
              </a>
              {' '}and steipete{' '}
              <a 
                href="https://x.com/openclaw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                openclaw
              </a>
              {' '}that took the internet by storm
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2 py-0.5 bg-amber-100/80 text-amber-900 text-xs rounded">
                AI
              </span>
              <span className="px-2 py-0.5 bg-amber-100/80 text-amber-900 text-xs rounded">
                AGI
              </span>
              <span className="px-2 py-0.5 bg-amber-100/80 text-amber-900 text-xs rounded">
                Automated
              </span>
            </div>
            <div className="flex gap-2 items-center pt-2 border-t border-gray-200 mt-auto">
              <a 
                href="https://github.com/chandlergims"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="View on GitHub"
              >
                <GithubLogo size={16} weight="regular" />
              </a>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-800 mb-1">BUILDS</h2>
          <p className="text-sm text-gray-600">projects built and tokenized by chandler</p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-lg p-4 transition-all outline-none flex flex-col"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
                <span className="flex items-center gap-1.5 text-xs text-green-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  {project.status}
                </span>
              </div>
              
              <p className="text-xs text-gray-500 mb-2">{project.date}</p>
              
              <p className="text-sm text-gray-700 mb-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-0.5 bg-amber-100/80 text-amber-900 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="space-y-1 mb-2 text-xs text-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-600">Users</span>
                  <span className="font-medium">{project.users}</span>
                </div>
                {project.ath && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">ATH MCAP</span>
                    <span className="font-medium">{project.ath}</span>
                  </div>
                )}
                {project.contract && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Contract</span>
                    <span className="font-mono font-medium text-right ml-4 text-[10px] break-all">{project.contract}</span>
                  </div>
                )}
              </div>
              
              <div className="flex gap-2 items-center pt-2 border-t border-gray-200">
                {project.closedSource ? (
                  <>
                    <GithubLogo size={16} weight="regular" className="text-gray-400" />
                    <span className="text-xs text-gray-500 italic">This project is closed source</span>
                  </>
                ) : project.website ? (
                  <a 
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    title="View on GitHub"
                  >
                    <GithubLogo size={16} weight="regular" />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
          
          {/* View more card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center min-h-[200px] text-center">
            <p className="text-base text-gray-700 mb-2">Check out my GitHub for more projects</p>
            <a 
              href="https://github.com/chandlergims"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 underline"
            >
              github.com/chandlergims
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
