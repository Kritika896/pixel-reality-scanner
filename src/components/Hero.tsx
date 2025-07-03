
import React from 'react';
import { Zap, Eye, Shield } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            DEEPFAKE
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            DETECTION SYSTEM
          </h3>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Advanced AI-powered analysis to identify manipulated media with precision and confidence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="group p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <Zap className="h-12 w-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-2 text-white">Real-time Analysis</h4>
            <p className="text-gray-400">Lightning-fast detection powered by advanced neural networks</p>
          </div>
          
          <div className="group p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <Eye className="h-12 w-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-2 text-white">Frame Analysis</h4>
            <p className="text-gray-400">Detailed frame-by-frame examination for video content</p>
          </div>
          
          <div className="group p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="text-xl font-semibold mb-2 text-white">Detailed Reports</h4>
            <p className="text-gray-400">Comprehensive analysis reports with confidence scores</p>
          </div>
        </div>
      </div>
    </section>
  );
};
