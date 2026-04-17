// import vocoes from "../data/vocacoes.json"
// import Card from "../components/Card"
// import '../styles/Style.css'

// function Vocacoes() {
//   return (
//     <div className="container">
//       <h1>Caminhos de Discernimento</h1>
//       <p style={{textAlign: 'center'}}>Conheça as diversas formas de responder ao chamado de Deus na nossa Diocese.</p>
      
//       <div className="grid">
//         {vocoes.map(vocacao => (
//           <Card
//             key={vocacao.id}
//             titulo={vocacao.nome}
//             texto={vocacao.descricao}
//             imagem={vocacao.imagem}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Vocacoes
import vocacoes from "../data/vocacoes.json"
import Card from "../components/Card"
import { useNavigate } from 'react-router-dom'
import '../styles/Style.css'

function Vocacoes() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <h1>Caminhos de Discernimento</h1>
      <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
        Conheça as diversas formas de responder ao chamado de Deus na Diocese de Nova Iguaçu.
      </p>
      
      <div className="grid">
        {vocacoes.map(vocacao => (
          <Card
            key={vocacao.id}
            titulo={vocacao.nome}
            texto={vocacao.descricao}
            imagem={vocacao.imagem}
            caracteristicas={vocacao.caracteristicas}
            onClick={() => navigate('/sav')}
          />
        ))}
      </div>
    </div>
  )
}

export default Vocacoes