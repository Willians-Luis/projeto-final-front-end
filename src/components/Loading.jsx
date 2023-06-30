import './Loading.css'

const Loading = ({color}) => {
    return (
        <div className='loadingContainer' style={{backgroundColor: color}}>
            <h1>CARREGANDO...</h1>
        </div>
    );
}

export default Loading;