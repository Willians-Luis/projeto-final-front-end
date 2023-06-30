import './Main.css'
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getCards from './requests';
import Loading from './Loading';

const Main = () => {

    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false)
    const [pagina, setPagina] = useState(1)

    const navigate = useNavigate()

    const detalhar = (name) => {
        navigate(`/Details/:${name}`)
    }

    const cardsArray = useCallback(async () => {
        try {
            setCards(await getCards.getCards())
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(true)
        }
    })

    const mudarPagina = (pagina) => {
        const finalPagina = pagina * 20
        const inicioPagina = finalPagina - 20
        let arrayPagina = []
        let cont = 0
        for (let i = inicioPagina; i < finalPagina; i++) {
            if (!cards[i]) {
                return arrayPagina
            }
            cont ++
            arrayPagina[cont] = cards[i]
        }
        return arrayPagina
    }

    const anterior = () => {
        if (pagina > 1) {
            setPagina(pagina -1)
        }
    }

    const proximo = () => {
        if (pagina < (cards.length / 20)) {
            setPagina(pagina + 1)
        }
    }
    
    useEffect(() => {
        cardsArray()
    }, [])


    return (
        <div>
            <div className="cardsContainer">
            {loading ? mudarPagina(pagina).map(card => (
                <img 
                    className='imagem'
                    onClick={() => detalhar(card.name)}
                    src={card.card_images[0].image_url}
                />
            )) : <Loading color={'#486083'}/>}
            </div>
            <div className='paginacaoContainer'>
                <button onClick={anterior}>Anterior</button>
                <p>{`Pagina: ${pagina} de 633`}</p>
                <button onClick={proximo}>Proximo</button>
            </div>
        </div>
    );
}

export default Main;