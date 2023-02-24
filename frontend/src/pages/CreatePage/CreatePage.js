import Layout from "../../components/Layout/Layout"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Create from "../../components/Create/Create";

const CreatePage = () => {
    return (
        <Layout>
            <Header page="create" />
            <Create />
            <Footer />
        </Layout>
    )
}

export default CreatePage;