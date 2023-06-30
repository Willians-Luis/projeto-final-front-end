import axios from "axios";

const getCards = async () => {
    try {
        const {data} = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
        return data.data
    } catch (error) {
        return error
    }
}

const getCardsByName = async (name) => {
    try {
        const {data} = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`)
        return data.data[0]
    } catch (error) {
        return error
    }
}


export default {getCards, getCardsByName};