import './Header.css'

const Header = ({titulo}) => {
    return (
        <header className="headerContainer">
            <h1 className="content">{titulo}</h1>
        </header>
    );
}

export default Header;