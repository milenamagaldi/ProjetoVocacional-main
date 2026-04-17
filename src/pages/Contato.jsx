import { useState } from "react"
import '../styles/Style.css'

function Contato() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [mensagem, setMensagem] = useState("")
    
    function enviarFormulario(e) {
        e.preventDefault()
        alert("Mensagem enviada com sucesso! Em breve entraremos em contato.")
        setNome("")
        setEmail("")
        setTelefone("")
        setMensagem("")
    }
    
    return (
        <div className="container">
            <h1>Setor Vocacional</h1>
            <p style={{ textAlign: 'center', marginBottom: '30px' }}>
                Entre em contato conosco para mais informações sobre o discernimento vocacional.
            </p>
            
            <form onSubmit={enviarFormulario} className="form">
                <input
                    type="text"
                    placeholder="Nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Telefone/WhatsApp"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />
                <textarea
                    placeholder="Sua mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    rows="5"
                    required
                />
                <button type="submit">
                    Enviar Mensagem
                </button>
            </form>
            
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <h3>Informações de Contato</h3>
                <p>📞 (21) 1234-5678</p>
                <p>📧 vocacional@dioceseni.org.br</p>
                <p>📍 Av. Abílio Augusto Távora, 1234 - Nova Iguaçu, RJ</p>
            </div>
        </div>
    )
}

export default Contato