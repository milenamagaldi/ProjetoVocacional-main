// import { Link } from 'react-router-dom'
// import '../styles/Style.css'  

// function Menu() {
//   return (
//     <nav className="menu">
//       <ul>
//         <li><Link to="/">Início</Link></li>
//         <li><Link to="/produtos">Vocações</Link></li>
//         <li><Link to="/empresa">Seminário</Link></li>
//         <li><Link to="/contato">Fale conosco</Link></li>
//       </ul>
//     </nav>
//   )
// }

// export default Menu
import { Link } from 'react-router-dom'
import '../styles/Style.css'  

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/vocacoes">Vocações</Link></li>
        <li><Link to="/sav">SAV</Link></li>
        <li><Link to="/contato">Fale Conosco</Link></li>
      </ul>
    </nav>
  )
}

export default Menu