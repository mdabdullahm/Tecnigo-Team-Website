const PageLoadSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[99999]">
      <div className="text-3xl font-bold text-blue-700 mb-4">NexCore</div>
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};

export default PageLoadSpinner;