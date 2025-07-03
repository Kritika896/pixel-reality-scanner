
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { UploadZone } from '@/components/UploadZone';
import { AnalysisSection } from '@/components/AnalysisSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20">
        <Header />
        <Hero />
        <UploadZone />
        <AnalysisSection />
      </div>
    </div>
  );
};

export default Index;
