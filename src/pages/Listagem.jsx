import './Listagem.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

const Listagem = () => {

    return (
        <div className='pageContainer'>
            <Header titulo="Yu Gi Oh!"/>
            <Main />
            <Footer />
        </div>
    );
}

export default Listagem;