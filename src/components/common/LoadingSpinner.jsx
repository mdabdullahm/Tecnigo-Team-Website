const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="w-16 h-16 border-4 border-t-blue-600 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;