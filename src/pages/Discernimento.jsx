import { useNavigate } from 'react-router-dom'
import '../styles/Style.css'

function Discernimento() {
    const navigate = useNavigate()

    const passos = [
        {
            numero: "1",
            titulo: "Oração e Escuta",
            texto: "Um passo essencial é a oração e a leitura da palavra (quando rezamos falamos com Deus, quando lemos a bíblia, Deus fala conosco). Exercite isso diariamente e cultive sua intimidade com o Senhor. Somente Ele irá te dar clareza das decisões."
        },
        {
            numero: "2",
            titulo: "Autoconhecimento",
            texto: "Muitas vezes, queremos entender a nossa vocação com base em coisas extraordinárias, mas basta olhar para dentro de si mesmo. Quais são os seus dons? O que te faz vibrar? O que te entristece? Deus se revela também através dos nossos talentos e paixões. A  nossa vocação está intimamente ligada a quem somos, e não apenas ao que fazemos. O autoconhecimento é um passo fundamental para o discernimento, pois nos ajuda a entender melhor os nossos desejos, medos e limitações, e a perceber onde Deus pode estar nos chamando a servir."
        },
        {
            numero: "3",
            titulo: "Acompanhamento Espiritual",
            texto: "Ninguém discerne sozinho. Buscar um diretor espiritual, um padre, ou um(a) religioso(a) experiente é essencial para ajudar a clarear a mente e organizar os pensamentos. O que sozinho pode parecer confuso, com um bom acompanhamento se torna mais claro. Procure alguém que possa orientá-lo, converse com o seu Padre sobre seu desejo e também peça ao Senhor que ilumine a escolher alguém que pode te ajudar."
        },
        {
            numero: "4",
            titulo: "Ação e Experiência",
            texto: "Vocação exige movimento. Participe de encontros do SAV, faça visitas a seminários ou conventos, e engaje-se na sua paróquia. O discernimento se dá na prática."
        }
    ]

    return (
        <div className="container">
            <div className="hero">
                <h1>Caminho do Discernimento</h1>
                <p>Descobrir a vontade de Deus não é decifrar um enigma, mas abrir o coração para um convite de amor.</p>
            </div>

            <div style={{ padding: '20px 0' }}>
                <h2 style={{ color: '#1a4a8e' }}>Por onde começar?</h2>
                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
                    Ouvir o chamado de Deus em um mundo cheio de barulho pode parecer difícil, mas existem passos concretos que podem te ajudar a organizar os pensamentos e o coração.
                </p>

                <div className="grid">
                    {passos.map((passo, index) => (
                        <div key={index} className="card" style={{ textAlign: 'center', padding: '30px 20px' }}>
                            <div style={{ 
                                background: '#1a4a8e', 
                                color: 'white', 
                                width: '50px', 
                                height: '50px', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                fontSize: '24px', 
                                fontWeight: 'bold',
                                margin: '0 auto 15px'
                            }}>
                                {passo.numero}
                            </div>
                            <h3>{passo.titulo}</h3>
                            <p style={{ fontSize: '15px' }}>{passo.texto}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="info-box" style={{ marginTop: '50px' }}>
                <h2>Pronto para dar o primeiro passo?</h2>
                <p>
                    Não tenha medo! O Serviço de Animação Vocacional (SAV) está de portas abertas para caminhar com você nesse processo.
                </p>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button onClick={() => navigate('/sav')}>Conhecer o SAV</button>
                    <button 
                        onClick={() => navigate('/contato')} 
                        style={{ background: 'transparent', color: '#1a4a8e', border: '2px solid #1a4a8e' }}
                    >
                        Falar com um Orientador
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Discernimento