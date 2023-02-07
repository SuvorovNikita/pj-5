import Layout from '../components/Layout/Layout';
import '../styles/index.scss';


const MyApp = ({Component, pageProps}) => {
    return (<Layout>
        <Component {...pageProps} />
    </Layout>);
};

export default MyApp;
