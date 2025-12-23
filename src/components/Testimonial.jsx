import { useState} from "react";
import { ArrowRight,ArrowLeft } from "lucide-react";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {


    const testimonials = [
    {
      id: 1,
      title: 'Ama Dablam',
      description: 'I was delighted to visit the country because the scenenery is beautiful. The residents also welcomed me happily and with smiles.',
      image: '/testimonial-profile-1.png',
      alt: 'Image Testimonial 1',
      informationH3: 'Will',
      informationP:'Photographer'
    },
    {
      id: 2,
      title: 'Mount Fuji',
      description: 'I was delighted to visit the country because the scenenery is beautiful. The residents also welcomed me happily and with smiles.',
      image: '/testimonial-profile-2.png',
      alt: 'Image Testimonial 2',
      informationH3: 'Rose',
      informationP:'Influencer'
    },
    {
      id: 3,
      title: 'Nanga Parbat',
      description: 'I was delighted to visit the country because the scenenery is beautiful. The residents also welcomed me happily and with smiles.',
      image:'/testimonial-profile-3.png',
      alt: 'Image Testimonial 3',
    informationH3: 'Gian',
    informationP:'Blogger'
    },
    // {
    //   id: 4,
    //   title: '',
    //   description: '',
    //   image:'',
    //   alt: '',
    //   demoLink: ''
    // },
  ];


return(
    <section className="testimonial section" id="testimonials">
        <h2 className="section__title text-big-font-size text-title-color text-center mb-8">What Are <br /> They Saying?</h2>

        <div className="testimonial__container justify-center gap-0 container grid">
            <img src="/testimonial-img.png" alt="image" className="testimonial__img w-[300px] rounded-t-[1.5rem]" />
            <div className="testimonial__swiper max-w-[300px] bg-container-color rounded-b-3xl mx-auto transition-colors duration-300">
                <Swiper
                 modules={[Navigation,Autoplay]}
                        spaceBetween={48}
                        grabCursor={true}
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
                        // autoplay={{
                        // delay: 3000,
                        // disableOnInteraction: false,
                        // }}
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
                      {testimonials.map((testimonial) => (
                    <SwiperSlide className="testimonial__card pt-10 pr-8 pb-12 pl-5" key={testimonial.id}>
                        <h2 className="testimonial__title text-h2-font-size text-title-color mb-3">{testimonial.title}</h2>
                        <p className="testimonial__description mb-6">
                            {testimonial.description}
                        </p>

                        <div className="testimonial__profile flex items-center gap-x-2">
                            <img className="w-[60px] rounded-[50%]" src={testimonial.image} alt={testimonial.alt} />

                            <div className="testimonial__info">
                                <h3 className="text-normal-font-size text-title-color mb-1">{testimonial.informationH3}</h3>
                                <p className="text-small-font-size">{testimonial.informationP}</p>
                            </div>
                        </div> 
                    </SwiperSlide>
                    ))}

                     {/* Custom Navigation Buttons */}
                        <div className="swiper-button-prev-custom after:content-['']  cursor-pointer text-title-color top-[initial] bottom-5 left-[initial] right-14 ">
                        <ArrowLeft className='text-first-color text-2xl'/>
                        </div>
                        <div className="swiper-button-next-custom  after:content-[''] cursor-pointer text-title-color top-[initial] bottom-5 right-5">
                        <ArrowRight className='text-first-color text-2xl'/>
                        </div>
                </Swiper>
                  
            </div>
        </div>
        
    </section>

)}

export default Testimonial