import { useState } from "react";
import { MapPin } from "lucide-react";


const Destination = ()  =>{

return(
    <section className="destination section" id="destination">
        <h2 className="section__title text-big-font-size text-title-color text-center mb-8">Find Your Best <br /> Destination</h2>

        <div className="destination__container grid-cols-[300px] justify-center container grid">
            <article className="destination__card group  relative rounded-3xl overflow-hidden">
                <img src="/destination-img-1.png" alt="image" className="destination__img transition-transform duration-300 group-hover:scale-125" />
                <div className="destination__data absolute left-0 bottom-0 w-full p-6 bg-opacity-color-30 backdrop-blur-xl text-white-color grid gap-y-1 rounded-3xl transition-colors duration-300">
                    <h3 className="destination__subtitle text-h2-font-size font-second-font">Bali</h3>
                    <h2 className="destination__title text-h1-font-size">ISLAND</h2>
                    <p className="destination__country flex items-center gap-x-1">
                        <MapPin size={20}/>
                        <span className="text-small-font-size">Indonesia</span>
                    </p>
                </div>
            </article>

             <article className="destination__card group relative rounded-3xl overflow-hidden">
                <img src="/destination-img-2.png" alt="image" className="destination__img transition-transform duration-300 group-hover:scale-125" />
                <div className="destination__data  absolute left-0 bottom-0 w-full p-6 bg-opacity-color-30 backdrop-blur-xl text-white-color grid gap-y-1 rounded-3xl transition-colors duration-300">
                    <h3 className="destination__subtitle text-h2-font-size font-second-font">Banana</h3>
                    <h2 className="destination__title text-h1-font-size">BEACH</h2>
                    <p className="destination__country flex items-center gap-x-1">
                        <MapPin size={20}/>
                        <span className="text-small-font-size">Tailandia</span>
                    </p>
                </div>
            </article>

             <article className="destination__card group relative rounded-3xl overflow-hidden">
                <img src="/destination-img-3.png" alt="image" className="destination__img transition-transform duration-300 group-hover:scale-125" />
                <div className="destination__data  absolute left-0 bottom-0 w-full p-6 bg-opacity-color-30 backdrop-blur-xl text-white-color grid gap-y-1 rounded-3xl transition-colors duration-300">
                    <h3 className="destination__subtitle text-h2-font-size font-second-font">Santorini</h3>
                    <h2 className="destination__title text-h1-font-size">ISLAND</h2>
                    <p className="destination__country flex items-center gap-x-1">
                        <MapPin size={20}/>
                        <span className="text-small-font-size">Grecia</span>
                    </p>
                </div>
            </article>




        </div>






    </section>

    
)




}

export default Destination;