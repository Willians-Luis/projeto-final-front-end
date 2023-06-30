import './Details.css'
import { useNavigate, useParams } from "react-router-dom";
import getCards from "../components/requests"
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from '../components/Loading';

const Details = () => {
    const [card, setCard] = useState(false)
    const [loading, setLoading] = useState(false)

    const parametros = useParams()
    const navigate = useNavigate()

    const voltarLista = () => {
        navigate('/listagem')
    }

    const fetchCard = async () => {
        try {
            const cardReq = await getCards.getCardsByName(parametros.name.substring(1))
            setCard(cardReq)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(true)
        }
    }

    useEffect(() => {
        fetchCard()
    },[])

    return (
        <>
            <Header titulo={card.name}/>
            {loading ? (
                
                <main className="main">
                    <section className="cardImagemContainer">
                        <img className='cardImagem' src={card.card_images[0].image_url} />
                    </section>
                    <section className="cardInfoContainer">
                        <div className="cardInfo">
                            <span>Name:</span> <span className='desc'>{card.name}</span>
                        </div>
                        <div className="cardInfo">
                        <span>Type:</span> <span className='desc'>{card.type}</span>
                        </div>
                        <div className="cardInfo">
                            <span>FrameType:</span> <span className='desc'>{card.frameType}</span>
                        </div>
                        <div className="cardInfo">
                            <span>Desc:</span> <span className='desc'>{card.desc}</span>
                        </div>
                        <div className="cardInfo">
                            <span>Atk:</span> <span className='desc'>{card.atk}</span>
                        </div>
                        <div className="cardInfo">
                            <span>Def:</span> <span className='desc'>{card.def}</span>
                        </div>
                        <div className="cardInfo">
                            <span>Level:</span> <span className='desc'>{card.level}</span>
                        </div>
                        <div className="cardInfo">
                            <span>Race:</span> <span className='desc'>{card.race}</span>
                        </div>
                        <div className="cardInfo">
                            <span>Attribute:</span> <span className='desc'>{card.attribute}</span>
                        </div>
                        <div className="cardInfo">
                            <span>Archetype:</span> <span className='desc'>{card.archetype}</span>
                        </div>
                    </section> 
                </main>    
            ) : (<Loading color={'#181835'} />)}
            <Footer />
        </>
    );
}

export default Details;