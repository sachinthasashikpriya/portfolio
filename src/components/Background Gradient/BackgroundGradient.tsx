import React from "react";

const GlassBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Colorful gradient blobs that move slowly */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-40 w-96 h-96 bg-yellow-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-20 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-40 right-20 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-6000"></div>
    </div>
  );
};

export default GlassBackground;
