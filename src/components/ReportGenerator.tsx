
import React from 'react';
import { Download, FileText, Share } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ReportGenerator = () => {
  const { toast } = useToast();

  const handleDownloadReport = () => {
    toast({
      title: "Report Generated",
      description: "Detailed analysis report is being prepared for download",
    });
  };

  return (
    <div id="reports" className="text-center">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 max-w-2xl mx-auto">
        <FileText className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
        <h4 className="text-2xl font-bold text-white mb-4">Generate Detailed Report</h4>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Create a comprehensive PDF report including analysis summary, confidence scores, 
          frame analysis visuals, and timestamped suspicious segments.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-lg bg-gray-700/30 border border-gray-600">
            <h5 className="text-white font-semibold mb-2">Report Includes:</h5>
            <ul className="text-gray-400 text-sm space-y-1 text-left">
              <li>• Executive Summary</li>
              <li>• Confidence Scores</li>
              <li>• Frame Analysis</li>
              <li>• Technical Details</li>
            </ul>
          </div>
          
          <div className="p-4 rounded-lg bg-gray-700/30 border border-gray-600">
            <h5 className="text-white font-semibold mb-2">Export Options:</h5>
            <ul className="text-gray-400 text-sm space-y-1 text-left">
              <li>• PDF Format</li>
              <li>• High-res Thumbnails</li>
              <li>• Timestamp Data</li>
              <li>• Technical Metadata</li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleDownloadReport}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105"
          >
            <Download className="h-5 w-5" />
            <span>Download Report</span>
          </button>
          
          <button
            onClick={() => toast({ title: "Share feature coming soon!" })}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all duration-300 border border-gray-600 hover:border-gray-500"
          >
            <Share className="h-5 w-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};
