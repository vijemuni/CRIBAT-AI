import React from 'react'
import { Chat } from './components/Chat'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CRIBAT Assistant</h1>
              <p className="text-sm text-gray-600">Innovation Meets Community Impact</p>
            </div>
            <div className="text-sm text-gray-600 text-right">
              <p>24/7 Support Available</p>
              <p className="font-medium">support@cribat.com</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="h-[calc(100vh-12rem)]">
          <Chat />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} CRIBAT. Technology Excellence & Community Enhancement</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 