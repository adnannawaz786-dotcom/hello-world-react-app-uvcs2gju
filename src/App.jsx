```jsx
import React from 'react'
import { Button } from '../components/ui/button'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Hello, World! 👋
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto">
            Welcome to your React + Vite + Tailwind CSS application
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            onClick={() => alert('Hello from React!')}
          >
            Click me!
          </Button>
          
          <Button 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg transition-colors"
            onClick={() => window.open('https://vitejs.dev', '_blank')}
          >
            Learn Vite
          </Button>
        </div>
        
        <div className="pt-8 text-sm text-gray-500">
          <p>Built with ⚡ Vite + ⚛️ React + 🎨 Tailwind CSS</p>
        </div>
      </div>
    </div>
  )
}

export default App
```