// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Menu from './components/Menu'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// import Produtos from './pages/Produtos'
// import Empresa from './pages/Empresa'
// import Contato from './pages/Contato'
// import './App.css'

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app">
//         <Menu />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/produtos" element={<Produtos />} />
//             <Route path="/empresa" element={<Empresa />} />
//             <Route path="/contato" element={<Contato />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Home from './pages/Home'
import Vocacoes from './pages/Vocacoes'
import Sav from './pages/Sav'
import Contato from './pages/Contato'
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App