
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const FrameAnalysis = () => {
  // Mock frame confidence data
  const frameData = [
    { frame: 0, confidence: 0.15 },
    { frame: 25, confidence: 0.23 },
    { frame: 50, confidence: 0.67 },
    { frame: 75, confidence: 0.89 },
    { frame: 100, confidence: 0.92 },
    { frame: 125, confidence: 0.78 },
    { frame: 150, confidence: 0.45 },
    { frame: 175, confidence: 0.34 },
    { frame: 200, confidence: 0.67 },
    { frame: 225, confidence: 0.87 }
  ];

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20">
        <h4 className="text-xl font-bold text-white mb-4">Frame-by-Frame Analysis</h4>
        <p className="text-gray-400 mb-6">Deepfake confidence across video timeline</p>
        
        <div style={{ width: '100%', height: 200 }}>
          <ResponsiveContainer>
            <BarChart data={frameData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="frame" 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
                domain={[0, 1]}
                tickFormatter={(value) => `${Math.round(value * 100)}%`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #06B6D4',
                  borderRadius: '8px',
                  color: '#FFFFFF'
                }}
                formatter={(value: number) => [`${Math.round(value * 100)}%`, 'Confidence']}
                labelFormatter={(label) => `Frame ${label}`}
              />
              <Bar 
                dataKey="confidence" 
                fill="url(#confidenceGradient)"
                radius={[2, 2, 0, 0]}
              />
              <defs>
                <linearGradient id="confidenceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={1}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.8}/>
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Suspicious Frames */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-red-500/20">
        <h4 className="text-xl font-bold text-white mb-4">High-Risk Frames</h4>
        <div className="grid grid-cols-3 gap-4">
          {[75, 100, 225].map((frame) => (
            <div key={frame} className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-lg border-2 border-red-500/30 hover:border-red-400 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-red-400 font-mono text-lg">Frame {frame}</div>
                  <div className="text-red-300 text-sm">
                    {frame === 75 ? '89%' : frame === 100 ? '92%' : '87%'} Risk
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-2 text-center">
                {frame === 75 ? '3.1s' : frame === 100 ? '4.2s' : '9.4s'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
