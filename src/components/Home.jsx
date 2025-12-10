import { useState } from "react";
import { ArrowRight } from "lucide-react";


const Home = () =>{
    return(
        <section id="home" className="home section relative">
            <img src="/home-bg.png" alt="image Hero" className="home__bg absolute top-0 left-0 w-full h-full object-cover object-center" />
            <div className="home__blur [position:absolute!important] top-0 left-0 w-full h-full bg-opacity-color-20 backdrop-blur-2xl transition-colors duration-300">




                <div className="home__container relative pt-8 pb-12 gap-y-12 container grid">
                    <div className="home__data text-center text-white-color">
                        <h1 className="home__title text-biggest-font-size font-font-bold leading-[110%]mb-4">Travel <br /> Around <br />The World</h1>


                        <p className="home__description mb-8">Explore the best beatiful tourist spots in the countries and see the world on all your amazing adventures.
                        </p>

                        <a href="#destination" className="button inline-flex justify-center items-center gap-x-2 bg-black-color text-white-color py-4 px-8 font-font-semi-bold rounded-lg transition-colors duration-300  button__opa-30">
                            Explore The World
                            <ArrowRight className="w-6 h-6 transition-transform duration-300 hover:scale-110"/>
                        </a>
                    </div>

                    <div className="home__swiper max-w-[320px] rounded-3xl">
                        <div>
                            <article className="home__article">
                                <img src="/home-img-1.png" alt="image" className="home__img" />
                            </article>

                             <article className="home__article">
                                <img src="/home-img-2.png" alt="image" className="home__img" />
                            </article>

                             <article className="home__article">
                                <img src="/home-img-3.png" alt="image" className="home__img" />
                            </article>

                             <article className="home__article">
                                <img src="/home-img-4.png" alt="image" className="home__img" />
                            </article>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Home;