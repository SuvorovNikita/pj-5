import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({children}) => {
    return (
        <>
            <main className="main">
                <Header/>
                {children}
                <Footer/>
            </main>
        </>
    );
};

export default Layout;
