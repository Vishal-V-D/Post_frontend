import React from 'react';
import { Upload, Youtube, XCircle } from 'lucide-react';

const InputSection = ({ audioFile, handleFileChange, handleRemoveAudioFile, youtubeLink, handleYoutubeLinkChange, youtubeThumbnail, isDragging, handleDragOver, handleDragLeave, handleDrop }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* File Upload */}
      <div
        className={`p-6 rounded-xl shadow-md border animate-slide-up transition-all duration-300 flex flex-col justify-center items-center text-center relative
          ${youtubeThumbnail ? 'border-dashed border-blue-400 bg-blue-50 opacity-70 min-h-[200px]' : 'border-dashed border-blue-400 bg-blue-50 min-h-[200px]'}
          ${isDragging ? 'border-blue-600 bg-blue-100 scale-[1.02]' : ''}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label htmlFor="audio-upload" className="block text-xl font-semibold text-blue-700 mb-4 flex flex-col items-center cursor-pointer">
          <Upload className="text-blue-600 mb-2" size={32} />
          <span className="text-2xl font-bold text-blue-800">Drag & Drop your audio or video file</span>
          <span className="text-lg text-gray-600 mt-1">or click to browse</span>
        </label>
        <input
          type="file"
          id="audio-upload"
          accept="audio/*"
          onChange={handleFileChange}
          className="hidden" // Hide default input
        />
        {audioFile && (
          <div className="mt-3 text-sm text-gray-600 flex items-center">
            Selected: <span className="font-medium ml-1">{audioFile.name}</span>
            <button
              onClick={handleRemoveAudioFile}
              className="ml-2 p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition duration-200"
              title="Remove file"
            >
              <XCircle size={16} />
            </button>
          </div>
        )}
      </div>

      {/* YouTube Link Input with Preview */}
      <div className="bg-indigo-50 p-6 rounded-xl shadow-md border border-indigo-200 animate-slide-up delay-100">
        <label htmlFor="youtube-link" className="block text-xl font-semibold text-indigo-700 mb-8 flex items-center">
          <Youtube className="text-2xl font-bold text-blue-800 mr-2" size={24} />Enter YouTube Link
        </label>
        <input
          type="text"
          id="youtube-link"
          value={youtubeLink}
          onChange={handleYoutubeLinkChange}
          placeholder="Eg. https://www.youtube.com/watch?v=example"
          className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200 placeholder-gray-400"
        />
        {youtubeThumbnail && (
          <div className="mt-4 rounded-lg overflow-hidden shadow-md">
            <img
              src={youtubeThumbnail}
              alt="YouTube Video Preview"
              className="w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/480x360/CCCCCC/333333?text=Video+Preview'; }} // Fallback image
            />
            <p className="text-sm text-gray-600 text-center mt-2">YouTube Video Preview</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputSection;