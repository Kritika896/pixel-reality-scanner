
import React from 'react';
import { AlertTriangle, CheckCircle, Clock, Cpu } from 'lucide-react';

interface AnalysisData {
  overall_confidence: number;
  verdict: string;
  frames_analyzed: number;
  suspicious_frames: number;
  processing_time: number;
  model_version: string;
}

interface AnalysisDashboardProps {
  data: AnalysisData;
}

export const AnalysisDashboard = ({ data }: AnalysisDashboardProps) => {
  const isDeepfake = data.verdict.includes('DEEPFAKE');
  const confidencePercentage = Math.round(data.overall_confidence * 100);

  return (
    <div className="space-y-6">
      {/* Main Result Card */}
      <div className={`p-8 rounded-2xl border-2 ${
        isDeepfake 
          ? 'border-red-500/50 bg-gradient-to-br from-red-900/20 to-red-800/10' 
          : 'border-green-500/50 bg-gradient-to-br from-green-900/20 to-green-800/10'
      } shadow-lg`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            {isDeepfake ? (
              <AlertTriangle className="h-8 w-8 text-red-400" />
            ) : (
              <CheckCircle className="h-8 w-8 text-green-400" />
            )}
            <div>
              <h4 className="text-2xl font-bold text-white">{data.verdict}</h4>
              <p className="text-gray-400">AI Detection Result</p>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-4xl font-bold ${isDeepfake ? 'text-red-400' : 'text-green-400'}`}>
              {confidencePercentage}%
            </div>
            <p className="text-gray-400 text-sm">Confidence</p>
          </div>
        </div>
        
        {/* Confidence Bar */}
        <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
          <div 
            className={`h-3 rounded-full transition-all duration-1000 ${
              isDeepfake ? 'bg-gradient-to-r from-red-500 to-red-400' : 'bg-gradient-to-r from-green-500 to-green-400'
            }`}
            style={{ width: `${confidencePercentage}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <div className="w-4 h-4 bg-blue-400 rounded" />
            </div>
            <span className="text-gray-400 text-sm">Frames Analyzed</span>
          </div>
          <div className="text-2xl font-bold text-white">{data.frames_analyzed}</div>
        </div>
        
        <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-orange-500/20">
          <div className="flex items-center space-x-3 mb-2">
            <AlertTriangle className="h-5 w-5 text-orange-400" />
            <span className="text-gray-400 text-sm">Suspicious</span>
          </div>
          <div className="text-2xl font-bold text-white">{data.suspicious_frames}</div>
        </div>
        
        <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-green-500/20">
          <div className="flex items-center space-x-3 mb-2">
            <Clock className="h-5 w-5 text-green-400" />
            <span className="text-gray-400 text-sm">Process Time</span>
          </div>
          <div className="text-2xl font-bold text-white">{data.processing_time}s</div>
        </div>
        
        <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20">
          <div className="flex items-center space-x-3 mb-2">
            <Cpu className="h-5 w-5 text-purple-400" />
            <span className="text-gray-400 text-sm">Model</span>
          </div>
          <div className="text-sm font-bold text-white">{data.model_version}</div>
        </div>
      </div>
    </div>
  );
};
