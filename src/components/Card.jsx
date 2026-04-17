// import '../styles/Style.css'    

// function Card({ titulo, texto, imagem }) {
//     return (
//         <div className="card">
//             <img src={imagem} />
//             <h3>{titulo}</h3>
//             <p>{texto}</p>
//         </div>
//     )
// }
// export default Card
import '../styles/Style.css'    

function Card({ titulo, texto, imagem, caracteristicas, onClick }) {
    return (
        <div className="card" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            <img src={imagem} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{texto}</p>
            {caracteristicas && (
                <ul className="caracteristicas">
                    {caracteristicas.map((item, idx) => (
                        <li key={idx}> {item}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default Card