import GetData from "../components/GetData";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import '../assets/css/index.scss'


const Home = () => {
    return (
        <>
        <section>
            <Header />
        </section>
        <section>
            <Navbar />
            <GetData />
        </section>
        </>
    )
}


export default Home;