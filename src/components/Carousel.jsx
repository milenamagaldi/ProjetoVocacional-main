// import { Carousel } from 'react-responsive-carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import '../styles/Style.css'

// function CarouselHome() {
//     return (
//         <Carousel autoPlay infiniteLoop showThumbs={false}>
//             <div>
//                 <img src="https://picsum.photos/1200/400?1" />
//             </div>
//             <div>
//                 <img src="https://picsum.photos/1200/400?2" />
//             </div>
//             <div>
//                 <img src="https://picsum.photos/1200/400?3" />
//             </div>
//         </Carousel>
//     )
// }

// export default CarouselHome
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../styles/Style.css'

function CarouselHome() {
    return (
        <div className="carousel-wrapper">
            <Carousel 
                autoPlay 
                infiniteLoop 
                showThumbs={false} 
                showStatus={false}
                showArrows={true}
                interval={5000}
                className="vocational-carousel"
            >
                <div className="carousel-slide">
                    <img src="/Imagens/sav.png" alt="Diocese de Nova Iguaçu" />
                    <p className="legend">Diocese de Nova Iguaçu - SAV</p>
                </div>
                <div className="carousel-slide">
                    <img src="/Imagens/sacerdotes.jpg" alt="Vocação Sacerdotal" />
                    <p className="legend">Chamados ao Serviço Sacerdotal</p>
                </div>
                <div className="carousel-slide">
                    <img src="/Imagens/religiosa.jpg" alt="Vida Religiosa" />
                    <p className="legend">Vida Consagrada: Entrega Total a Deus</p>
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselHome