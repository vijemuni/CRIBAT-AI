import { Chat } from './components/Chat'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="flex-1 w-full max-w-[95%] md:max-w-[90%] lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6">
        <div className="h-[calc(100vh-6rem)] sm:h-[calc(100vh-7rem)]">
          <Chat />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-[95%] md:max-w-[90%] lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3">
          <div className="text-center text-xs sm:text-sm text-gray-600">
            <p>© {new Date().getFullYear()} CRIBAT. Technology Excellence & Community Enhancement</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 