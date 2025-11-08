import { Link, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <div className="app">
      <Header />

      <nav style={{ display: 'flex', gap: 12, padding: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* rota 404 */}
          <Route path="*" element={<h2>Página não encontrada</h2>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
