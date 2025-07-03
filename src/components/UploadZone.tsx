
import React, { useState, useCallback } from 'react';
import { Upload, File, Video, Image } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const UploadZone = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    const file = files[0];
    
    if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
      setUploadedFile(file);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} is ready for analysis`,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an image or video file",
        variant: "destructive",
      });
    }
  }, [toast]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} is ready for analysis`,
      });
    }
  };

  const getFileIcon = () => {
    if (!uploadedFile) return <Upload className="h-16 w-16" />;
    if (uploadedFile.type.startsWith('video/')) return <Video className="h-16 w-16" />;
    if (uploadedFile.type.startsWith('image/')) return <Image className="h-16 w-16" />;
    return <File className="h-16 w-16" />;
  };

  return (
    <section id="detect" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Upload Media for Analysis
          </h3>
          <p className="text-gray-400 text-lg">
            Drop your image or video file below to begin deepfake detection
          </p>
        </div>
        
        <div
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
            dragActive
              ? 'border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
              : uploadedFile
              ? 'border-green-400 bg-green-500/10'
              : 'border-gray-600 hover:border-cyan-500/50 hover:bg-gray-800/30'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="fileInput"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept="image/*,video/*"
            onChange={handleFileInput}
          />
          
          <div className={`text-cyan-400 mb-6 ${dragActive ? 'scale-110' : ''} transition-transform`}>
            {getFileIcon()}
          </div>
          
          {uploadedFile ? (
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-green-400">File Ready!</h4>
              <p className="text-gray-300 text-lg">{uploadedFile.name}</p>
              <p className="text-gray-400">
                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • {uploadedFile.type}
              </p>
              <button
                className="mt-6 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105"
                onClick={() => {
                  toast({
                    title: "Analysis Started",
                    description: "Processing your file with AI detection algorithms...",
                  });
                }}
              >
                Start Analysis
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-white">
                {dragActive ? 'Drop your file here' : 'Drag & drop your file'}
              </h4>
              <p className="text-gray-400 text-lg">
                or click to browse your device
              </p>
              <p className="text-sm text-gray-500">
                Supported formats: MP4, AVI, MOV, JPG, PNG, GIF
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
