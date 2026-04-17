import { useState } from 'react'

function SementeDeLuz() {
  const messages = [
    "Não tenhas medo, pois eu te resgatei; chamei-te pelo teu nome, tu és meu. (Isaías 43, 1)",
    "O Senhor é a minha luz e a minha salvação; de quem terei medo? (Salmo 27, 1)",
    "Coragem! Eu venci o mundo. (João 16, 33)",
    "Antes que no seio fosses formado, eu já te conhecia. (Jeremias 1, 5)",
    "Tudo posso naquele que me fortalece. (Filipenses 4, 13)",
    "Buscai primeiro o Reino de Deus e a sua justiça, e tudo o mais vos será acrescentado. (Mateus 6, 33)",
    "Deus não escolhe os capacitados, Ele capacita os escolhidos.",
    "A paz que você procura está no chamado que Deus tem para você hoje."
  ]

  const [mensagem] = useState(() => {
    const indice = Math.floor(Math.random() * messages.length)
    return messages[indice]
  })

  return (
    <div className="semente-luz-container">
      <div className="semente-icone">✨</div>
      <h3 className="semente-titulo">Semente de Luz</h3>
      <p className="semente-texto">"{mensagem}"</p>
    </div>
  )
}

export default SementeDeLuz