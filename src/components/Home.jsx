import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Home = () =>{


    const articles =  [
    {
      id: 1,
      title: '',
      description: '',
      image: '/home-img-1.png',
      alt: '',
      demoLink: ''
    },
    {
      id: 2,
      title: '',
      description: '',
      image: '/home-img-2.png',
      alt: '',
      demoLink: ''
    },
    {
      id: 3,
      title: '',
      description: '',
      image:'/home-img-3.png',
      alt: '',
      demoLink: ''
    },
    {
      id: 4,
      title: '',
      description: '',
      image:'/home-img-4.png',
      alt: '',
      demoLink: ''
    },
  ];

    return(
        <section id="home" className="home section pt-16 relative">
            <img src="/home-bg.png" alt="image Hero" className="home__bg  absolute top-0 left-0  w-full h-full object-cover object-center" />
            <div className="home__blur absolute top-0 left-0 w-full h-full bg-opacity-color-20 backdrop-blur-2xl transition-colors duration-300"></div>

            <div className="home__container relative pt-8 pb-12 gap-y-12 container grid">
                <div className="home__data text-center text-white-color">
                    <h1 className="home__title text-big-font-size min-[1150px]:text-biggest-font-size font-font-bold leading-[110%]mb-4">Travel <br /> Around <br />The World</h1>
                    <p className="home__description mb-8">
                        Explore the best beatiful tourist spots in the countries and see the world on all your amazing adventures.
                    </p>
                    <a href="#destination" className="button inline-flex justify-center items-center gap-x-2 bg-black-color text-white-color py-4 px-8 font-font-semi-bold rounded-lg transition-colors duration-300  button__opa-30 bg-opacity-color-30 ">
                            Explore The World
                            <ArrowRight className="w-6 h-6 transition-transform duration-300 hover:translate-x-2"/>
                    </a>
                </div>

                <div className="home__swiper max-w-[320px] rounded-3xl">
                    <Swiper
                        modules={[Navigation,Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}

                        loop={true}

                        navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination={{ 
                        clickable: true,
                        dynamicBullets: true,
                        color:"red"
                        }}
                        autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        }}
                        breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 1,
                        },
                        }}
                        className="pb-12"
                    >
                        {articles.map((article) => (
                        <SwiperSlide key={article.id}>
                            <div className="home__article">
                            <div className="">
                                <img 
                                src={article.image} 
                                alt={article.alt}
                                className="rounded-lg  justify-self-center"
                                />
                            </div>
                            <div className="">
                                <h3 className="">
                                {article.title}
                                </h3>
                                <p className=" mb-3 text-title-color dark:text-dark-title-color">
                                {article.description}
                                </p>
                                {/* <a 
                                href={article.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" inline-flex  gap-2 bg-first-color text-container-color px-6 py-3 rounded-lg  hover:bg-first-color-alt transition-all duration-300 hover:gap-3 group"
                                >
                                Ver Demo
                                <ArrowRight className='group-hover:translate-x-1 transition-transform duration-300'/>
                                </a> */}
                            </div>
                            </div>
                        </SwiperSlide>
                        ))}

                        {/* Custom Navigation Buttons */}
                        <div className="swiper-button-prev-custom absolute top-[initial] bottom-5 left-[initial] right-16 z-10 w-8 h-8 text-white-color bg-opacity-color-30 backdrop-blur-xl rounded-md flex items-center justify-center cursor-pointer">
                        <ArrowLeft className='text-first-color text-2xl'/>
                        </div>
                        <div className="swiper-button-next-custom absolute top-[initial] bottom-5 right-5 z-10 w-8 h-8 text-white-color bg-opacity-color-30 backdrop-blur-xl rounded-md flex items-center justify-center">
                        <ArrowRight className='text-first-color text-2xl'/>
                        </div>
                    </Swiper>
                        {/* <article className="home__article">
                            <img src="/home-img-1.png" alt="image" className="home__img" />
                        </article> */}
                </div>
            </div>
        </section>
    )}

export default Home;