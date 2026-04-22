import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Home from './pages/Home'
import Vocacoes from './pages/Vocacoes'
import Sav from './pages/Sav'
import Contato from './pages/Contato'
import Discernimento from './pages/Discernimento' /* 1. Importe a nova página aqui */
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Menu />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vocacoes" element={<Vocacoes />} />
            <Route path="/sav" element={<Sav />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/discernimento" element={<Discernimento />} /> {/* 2. Adicione a rota aqui */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App