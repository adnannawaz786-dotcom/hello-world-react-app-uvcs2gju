```jsx
import React from 'react';
import { Button } from './ui/button';

const HelloWorld = () => {
  const handleClick = () => {
    alert('Hello from React!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hello, World! 🌍
        </h1>
        
        <p className="text-lg text-gray-600 mb-6">
          Welcome to your React + Vite + Tailwind CSS application!
        </p>
        
        <div className="space-y-4">
          <Button 
            onClick={handleClick}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            Say Hello
          </Button>
          
          <div className="text-sm text-gray-500">
            Built with ⚡ Vite and styled with 🎨 Tailwind CSS
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
```