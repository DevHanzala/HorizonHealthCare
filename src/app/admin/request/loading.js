import React from "react";

const Loading = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
    
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-solid border-blue-300"></div>
      {/* Loading Text */}
      <p className="mt-4 text-xlg mx-8 font-semibold text-gray-700">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
