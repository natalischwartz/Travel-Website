import Header from "@/components/Header"
import Home from "@/components/Home";
import Destination from "@/components/Destination";
import Testimonial from "@/components/Testimonial";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () =>{
    return(
        <div>
            <Header/>
            <main>
                <Home/>
                <Destination/>
                <Testimonial/>
                <Gallery/>
                <Contact/>
            </main>
            <Footer/>

        </div>


    )
}

export default Index;