import logo from "../../public/img/logo.svg"
import Image from 'next/image'

const Header = () => {

    return (<>
        <header className="c-header">
            <div className="c-section c-section--bg c-section--body c-section--bg--image-1"></div>
            <div className="container">
                <div className="c-header__logo">
                    <Image src={logo}
                           alt="Логотип"/>
                </div>
            </div>
        </header>
    </>);
};

export default Header;
