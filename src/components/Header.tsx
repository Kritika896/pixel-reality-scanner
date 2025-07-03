
import React from 'react';
import { Shield, Cpu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="relative z-10 bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-8 w-8 text-cyan-400" />
              <div className="absolute inset-0 h-8 w-8 text-cyan-400 animate-pulse opacity-50">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                DeepGuard AI
              </h1>
              <p className="text-xs text-gray-400">Advanced Deepfake Detection</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#detect" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Detect
            </a>
            <a href="#analysis" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Analysis
            </a>
            <a href="#reports" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Reports
            </a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Cpu className="h-5 w-5 text-cyan-400 animate-pulse" />
            <span className="text-sm text-green-400 font-mono">ONLINE</span>
          </div>
        </div>
      </div>
    </header>
  );
};
