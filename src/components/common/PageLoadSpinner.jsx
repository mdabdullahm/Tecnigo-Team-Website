// src/components/common/PageLoadSpinner.jsx
import React from 'react';

const PageLoadSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[99999]">
      {/* এখানে আপনি আপনার কোম্পানির লোগো যোগ করতে পারেন */}
      {/* <img src="/path/to/your/logo.svg" alt="Loading..." className="w-24 h-24 mb-4" /> */}
      <div className="text-3xl font-bold text-blue-700 mb-4">Tecnigo Team</div>
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};

export default PageLoadSpinner;