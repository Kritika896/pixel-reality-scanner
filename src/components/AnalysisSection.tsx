
import React, { useState } from 'react';
import { AnalysisDashboard } from './AnalysisDashboard';
import { FrameAnalysis } from './FrameAnalysis';
import { ReportGenerator } from './ReportGenerator';

export const AnalysisSection = () => {
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // Mock analysis data - in real app this would come from your backend
  const mockAnalysisData = {
    overall_confidence: 0.87,
    verdict: "DEEPFAKE DETECTED",
    frames_analyzed: 247,
    suspicious_frames: 23,
    processing_time: 2.3,
    model_version: "XceptionNet v2.1"
  };

  return (
    <section id="analysis" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Analysis Results
          </h3>
          <p className="text-gray-400 text-lg">
            Real-time deepfake detection with advanced AI algorithms
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <AnalysisDashboard data={mockAnalysisData} />
          <FrameAnalysis />
        </div>
        
        <ReportGenerator />
      </div>
    </section>
  );
};
