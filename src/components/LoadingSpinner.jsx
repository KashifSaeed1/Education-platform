
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br
     from-blue-900 via-blue-900 to-blue-900">
      <div className="text-center">
        <div className="flex space-x-2 mb-4">
          <div className="w-6 h-6 bg-blue-400 rounded-full animate-bounce"></div>
          <div 
            className="w-6 h-6 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: '0.1s' }}
          ></div>
          <div 
            className="w-6 h-6 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: '0.2s' }}
          ></div>
          <div 
            className="w-6 h-6 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: '0.6s' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;