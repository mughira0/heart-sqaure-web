import React from "react";
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-4 border-t-transparent border-blue-400 rounded-full animate-spin [animation-duration:1.2s]"></div>
        <div className="absolute inset-8 border-4 border-t-transparent border-blue-300 rounded-full animate-spin [animation-duration:1.5s]"></div>
      </div>
    </div>
  );
};

export default Loader;
