import Layout from "../../components/Layout/Layout"
import Overview from "../../components/Overview/Overview";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const OverviewPage = () => {
    return (
        <Layout>
            <Header page="overview" />
            <Overview />
            <Footer />
        </Layout>
    )
}

export default OverviewPage;