// // import '../styles/Style.css'

// // function Empresa() {
// //   return (
// //     <div className="container">
// //       <h1>Sobre o SAV - Diocese de Nova Iguaçu.</h1>
// //       <img src="https://picsum.photos/800/300" />
// //       <p>
// //         O Serviço de Animação Vocacional tem como objetivo acompanhar jovens no seu processo de discernimento, ajudando-os a ouvir a voz de Deus.
// //       </p>
// //       <p>
// //         O SAV é um espaço de escuta, oração e formação, onde os jovens podem compartilhar suas dúvidas, medos e esperanças. Através de encontros, retiros e atividades, buscamos criar um ambiente acolhedor e inspirador para que os jovens possam crescer na fé e no amor a Deus.
// //       </p>
// //       <p>
// //         Se você sente um chamado para servir a Deus e à Igreja, o SAV está aqui para te ajudar a descobrir qual é a sua vocação. Venha fazer parte dessa jornada de fé e discernimento!
// //       </p>
// //     </div>
// //   )
// // }
// // export default Empresa

// import '../styles/Style.css'
// import { useNavigate } from 'react-router-dom'

// function Sav() {
//   const navigate = useNavigate()

//   return (
//     <div className="container">
//       <h1>Serviço de Animação Vocacional</h1>
//       <img src="/Imagens/sav.png" alt="SAV Banner" style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '30px' }} />
      
//       <h2>O que é o SAV?</h2>
//       <p>
//         O Serviço de Animação Vocacional (SAV) da Diocese de Nova Iguaçu tem como objetivo acompanhar 
//         jovens no seu processo de discernimento, ajudando-os a ouvir a voz de Deus e descobrir o chamado 
//         que Ele faz a cada um.
//       </p>
      
//       <h2>Nossa Missão</h2>
//       <p>
//         O SAV é um espaço de escuta, oração e formação, onde os jovens podem compartilhar suas dúvidas, 
//         medos e esperanças. Através de encontros, retiros e atividades, buscamos criar um ambiente acolhedor 
//         e inspirador para que os jovens possam crescer na fé e no amor a Deus.
//       </p>

//       <h2>Atividades Realizadas</h2>
//       <ul style={{ marginLeft: '30px', marginBottom: '20px' }}>
//         <li>Encontros mensais de formação vocacional</li>
//         <li>Retiros espirituais</li>
//         <li>Grupos de reflexão e partilha</li>
//         <li>Visitas às comunidades religiosas</li>
//         <li>Momentos de oração e adoração</li>
//         <li>Testemunhos vocacionais</li>
//       </ul>

//       <h2>Como Participar</h2>
//       <p>
//         Se você tem entre 16 e 35 anos e deseja iniciar seu processo de discernimento vocacional, 
//         entre em contato conosco. O SAV está aqui para te ajudar a descobrir qual é a sua vocação. 
//         Venha fazer parte dessa jornada de fé e discernimento!
//       </p>

//       <div style={{ background: '#f0f4f8', padding: '30px', borderRadius: '12px', margin: '40px 0', textAlign: 'center' }}>
//         <h3>Próximo Encontro Vocacional</h3>
//         <p><strong>Data:</strong> Todo primeiro sábado do mês</p>
//         <p><strong>Horário:</strong> 9h às 12h</p>
//         <p><strong>Local:</strong> Casa Diocesana de Formação</p>
//         <button onClick={() => navigate('/contato')} style={{ marginTop: '15px' }}>Inscreva-se</button>
//       </div>
//     </div>
//   )
// }

// export default Sav


import '../styles/Style.css'
import { useNavigate } from 'react-router-dom'
import AgendaEventos from '../components/AgendaEventos'  // ← mantém

function Sav() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <h1>Serviço de Animação Vocacional</h1>
      <img src="/Imagens/sav.png" alt="SAV Banner" style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '30px' }} />
      
      <h2>O que é o SAV?</h2>
      <p>
        O Serviço de Animação Vocacional (SAV) da Diocese de Nova Iguaçu tem como objetivo acompanhar 
        jovens no seu processo de discernimento, ajudando-os a ouvir a voz de Deus e descobrir o chamado 
        que Ele faz a cada um.
      </p>
      
      <h2>Nossa Missão</h2>
      <p>
        O SAV é um espaço de escuta, oração e formação, onde os jovens podem compartilhar suas dúvidas, 
        medos e esperanças. Através de encontros, retiros e atividades, buscamos criar um ambiente acolhedor 
        e inspirador para que os jovens possam crescer na fé e no amor a Deus.
      </p>

      <h2>Atividades Realizadas</h2>
      <ul style={{ marginLeft: '30px', marginBottom: '20px' }}>
        <li>Encontros mensais de formação vocacional</li>
        <li>Retiros espirituais</li>
        <li>Grupos de reflexão e partilha</li>
        <li>Visitas às comunidades religiosas</li>
        <li>Momentos de oração e adoração</li>
        <li>Testemunhos vocacionais</li>
      </ul>

      <h2>Como Participar</h2>
      <p>
        Se você tem entre 16 e 35 anos e deseja iniciar seu processo de discernimento vocacional, 
        entre em contato conosco. O SAV está aqui para te ajudar a descobrir qual é a sua vocação. 
        Venha fazer parte dessa jornada de fé e discernimento!
      </p>

      {/* Componente da agenda - substitui a seção fixa */}
      <AgendaEventos />

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button onClick={() => navigate('/contato')}>Inscreva-se</button>
      </div>
    </div>
  )
}

export default Sav