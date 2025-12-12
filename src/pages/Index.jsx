import Header from "../components/Header"
import Home from "../components/Home";
import Destination from "../components/Destination";
import Testimonial from "../components/Testimonial";
import Gallery from "../components/Gallery";

const Index = () =>{
    return(
        <div>
            <Header/>
            <main>
                <Home/>
                <Destination/>
                <Testimonial/>
                <Gallery/>

            </main>

        </div>


    )
}

export default Index;