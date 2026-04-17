// // src/components/AgendaEventos.jsx
// import { useState, useEffect } from 'react'
// import ical from 'ical'

// function AgendaEventos() {
//   const [eventos, setEventos] = useState([])
//   const [carregando, setCarregando] = useState(true)
//   const [erro, setErro] = useState(false)

//   // Seu link iCal
//   const icalUrl = "https://calendar.google.com/calendar/ical/a4c8e385330a7d3518b475d067ade2f5cab022195867cc0214ea268d5c463b0b%40group.calendar.google.com/public/basic.ics"
  
//   // Proxy CORS gratuito (AllOrigins)
//   const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(icalUrl)}`

//   useEffect(() => {
//     const buscarEventos = async () => {
//       try {
//         setCarregando(true)
        
//         // Buscar via proxy para evitar CORS
//         const response = await fetch(proxyUrl)
        
//         if (!response.ok) {
//           throw new Error('Erro ao buscar calendário')
//         }
        
//         const icsText = await response.text()
        
//         // Usar a biblioteca ical para parsear
//         const parsedData = ical.parseICS(icsText)
        
//         const eventosTemp = []
        
//         for (const key in parsedData) {
//           const evento = parsedData[key]
//           if (evento.type === 'VEVENT') {
//             const dataInicio = evento.start
//             const agora = new Date()
            
//             // Só pegar eventos futuros
//             if (dataInicio && dataInicio >= agora) {
//               eventosTemp.push({
//                 id: evento.uid,
//                 titulo: evento.summary || "Evento sem título",
//                 data: dataInicio,
//                 local: evento.location || null,
//                 descricao: evento.description || null
//               })
//             }
//           }
//         }
        
//         // Ordenar por data
//         eventosTemp.sort((a, b) => a.data - b.data)
        
//         setEventos(eventosTemp.slice(0, 10)) // Pega os 10 próximos
//         setErro(false)
        
//       } catch (error) {
//         console.error('Erro:', error)
//         setErro(true)
//       } finally {
//         setCarregando(false)
//       }
//     }

//     buscarEventos()
    
//     // Atualizar a cada 10 minutos
//     const interval = setInterval(buscarEventos, 10 * 60 * 1000)
//     return () => clearInterval(interval)
//   }, [proxyUrl])

//   // Formatar data
//   const formatarData = (data) => {
//     return data.toLocaleDateString('pt-BR', {
//       weekday: 'long',
//       day: 'numeric',
//       month: 'long'
//     })
//   }

//   const formatarHorario = (data) => {
//     return data.toLocaleTimeString('pt-BR', {
//       hour: '2-digit',
//       minute: '2-digit'
//     })
//   }

//   const formatarDia = (data) => {
//     return data.toLocaleDateString('pt-BR', {
//       day: '2-digit'
//     })
//   }

//   const formatarMes = (data) => {
//     return data.toLocaleDateString('pt-BR', {
//       month: 'short'
//     }).replace('.', '')
//   }

//   // Calendário mensal (iframe - mantém o calendário visual)
//   const calendarId = "a4c8e385330a7d3518b475d067ade2f5cab022195867cc0214ea268d5c463b0b%40group.calendar.google.com"
//   const calendarMesUrl = `https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=America%2FSao_Paulo&mode=MONTH`

//   return (
//     <div style={{ 
//       background: '#f0f4f8', 
//       padding: '20px', 
//       borderRadius: '12px',
//       margin: '40px 0'
//     }}>
//       <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#2e7d32' }}>
//         📅 Calendário de Eventos
//       </h3>
      
//       {/* Calendário mensal em cima */}
//       <div style={{ 
//         background: 'white', 
//         borderRadius: '12px', 
//         overflow: 'hidden',
//         marginBottom: '30px',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//       }}>
//         <iframe 
//           src={calendarMesUrl}
//           style={{ 
//             border: 'none', 
//             width: '100%', 
//             height: '450px', 
//             display: 'block'
//           }}
//           frameBorder="0"
//           scrolling="no"
//           title="Calendário Mensal"
//         ></iframe>
//       </div>
      
//       <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#2e7d32' }}>
//         📝 Próximos Eventos
//       </h3>
      
//       {carregando ? (
//         <div style={{ textAlign: 'center', padding: '40px' }}>
//           <div style={{ 
//             display: 'inline-block', 
//             width: '40px', 
//             height: '40px', 
//             border: '4px solid #2e7d32', 
//             borderTop: '4px solid transparent', 
//             borderRadius: '50%', 
//             animation: 'spin 1s linear infinite' 
//           }}></div>
//           <p style={{ marginTop: '15px', color: '#666' }}>Carregando eventos...</p>
//         </div>
//       ) : erro ? (
//         <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '12px' }}>
//           <span style={{ fontSize: '48px' }}>⚠️</span>
//           <p style={{ marginTop: '10px', color: '#666' }}>Não foi possível carregar os eventos.</p>
//           <p style={{ fontSize: '12px', color: '#999' }}>Verifique se o calendário está público.</p>
//         </div>
//       ) : eventos.length === 0 ? (
//         <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '12px' }}>
//           <span style={{ fontSize: '48px' }}>📭</span>
//           <p style={{ marginTop: '10px', color: '#666' }}>Nenhum evento agendado no momento.</p>
//           <p style={{ fontSize: '12px', color: '#999' }}>Adicione eventos no Google Calendar!</p>
//         </div>
//       ) : (
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//           {eventos.map((evento) => (
//             <div key={evento.id} style={{ 
//               display: 'flex',
//               background: 'white', 
//               borderRadius: '12px',
//               overflow: 'hidden',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//               transition: 'transform 0.2s, box-shadow 0.2s',
//               cursor: 'pointer'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = 'translateX(5px)'
//               e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = 'translateX(0)'
//               e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
//             }}>
              
//               {/* Box da data */}
//               <div style={{ 
//                 background: '#2e7d32',
//                 color: 'white',
//                 minWidth: '80px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 textAlign: 'center',
//                 padding: '15px'
//               }}>
//                 <span style={{ fontSize: '32px', fontWeight: 'bold' }}>
//                   {formatarDia(evento.data)}
//                 </span>
//                 <span style={{ fontSize: '14px', textTransform: 'uppercase' }}>
//                   {formatarMes(evento.data)}
//                 </span>
//               </div>
              
//               {/* Conteúdo do evento */}
//               <div style={{ 
//                 flex: 1, 
//                 padding: '15px'
//               }}>
//                 <div style={{ 
//                   fontSize: '18px', 
//                   fontWeight: 'bold', 
//                   color: '#333',
//                   marginBottom: '5px'
//                 }}>
//                   {evento.titulo}
//                 </div>
//                 <div style={{ 
//                   fontSize: '14px', 
//                   color: '#666',
//                   marginBottom: '5px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '15px'
//                 }}>
//                   <span>🕒 {formatarHorario(evento.data)}</span>
//                   {evento.local && <span>📍 {evento.local}</span>}
//                 </div>
//                 {evento.descricao && (
//                   <div style={{ 
//                     fontSize: '13px', 
//                     color: '#888',
//                     marginTop: '8px',
//                     paddingTop: '8px',
//                     borderTop: '1px solid #eee'
//                   }}>
//                     {evento.descricao}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
      
//       <p style={{ textAlign: 'center', fontSize: '12px', marginTop: '20px', color: '#999' }}>
//         📌 Adicione eventos no Google Calendar que eles aparecerão aqui automaticamente!
//       </p>
      
//       <style>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   )
// }

// export default AgendaEventos



// src/components/AgendaEventos.jsx
function AgendaEventos() {
    // Seu ID do calendário
    const calendarId = "a4c8e385330a7d3518b475d067ade2f5cab022195867cc0214ea268d5c463b0b%40group.calendar.google.com"
    
    // Calendário mensal (modo mês)
    const calendarMesUrl = `https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=America%2FSao_Paulo&mode=MONTH`
    
    // Lista de eventos (modo AGENDA - mostra só a lista)
    const calendarListaUrl = `https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=America%2FSao_Paulo&mode=AGENDA`
  
    return (
      <div style={{ 
        background: '#f0f4f8', 
        padding: '20px', 
        borderRadius: '12px',
        margin: '40px 0'
      }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#000000' }}>
          📅 Calendário de Eventos
        </h3>
        
        {/* Calendário mensal em cima */}
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          overflow: 'hidden',
          marginBottom: '30px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <iframe 
            src={calendarMesUrl}
            style={{ 
              border: 'none', 
              width: '100%', 
              height: '450px', 
              display: 'block'
            }}
            frameBorder="0"
            scrolling="no"
            title="Calendário Mensal"
          ></iframe>
        </div>
        
        <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#000000' }}>
          📝 Próximos Eventos
        </h3>
        
        {/* Lista de eventos (iframe em modo AGENDA) */}
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <iframe 
            src={calendarListaUrl}
            style={{ 
              border: 'none', 
              width: '100%', 
              height: '350px', 
              display: 'block'
            }}
            frameBorder="0"
            scrolling="yes"
            title="Lista de Eventos"
          ></iframe>
        </div>
      </div>
    )
  }
  
  export default AgendaEventos