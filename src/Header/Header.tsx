
import './Header.css'
import IMG from '../assets/logo1.png'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <>
            <div className='header'>
                <div className="container">
                    <div className="logo"><img src={IMG} /></div>
                    <div className="menu">
                        <nav>
                            <Link to={"/"}> Início </Link>
                            <Link to={"/time"}> Nosso Time </Link>
                            <Link to={"/sobre"}> Sobre </Link>
                        </nav>
                    </div>
                    <div className="cadastre">
                        <a href="/Controle">Teste gratuitamente</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header