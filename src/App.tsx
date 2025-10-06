import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { GitHubLanding } from './pages/GitHubLanding'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Routes>
          <Route path="/" element={<GitHubLanding />} />
        </Routes>
        <Toaster
          position='top-right'
          toastOptions={{
            style: {
              background: "#1e293B",
              color: "#f1f5f9",
              border: '1px solid #475569'
            }
          }}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
