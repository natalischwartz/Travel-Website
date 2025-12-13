import {useState} from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () =>{

    return(
        <section className="join section" id="join">
            <div className="join__container container grid gap-y-12 pb-12">
                <div className="join__data text-center">
                    <h2 className="section__title mb-4 text-big-font-size text-title-color text-center ">Your Journey <br /> Starts Here</h2>
                    <p className="join__description mb-8">
                        Get up to date with the latest travel 
                        and information from us.
                    </p>

                    <form action="" className="join__form grid gap-y-4">
                        <input type="email" placeholder='Enter your email' className="join__input w-full bg-container-color text-text-color py-6 px-4 rounded-lg transition-colors" />
                        <button type='submit' className="join__button button inline-flex justify-center items-center bg-black-color text-white-color py-4 px-8 font-font-semi-bold rounded-lg transition-colors duration-300 [padding-block:1.25rem] cursor-pointer ">
                            Join our newsletter
                            <ArrowRight className='w-6 h-6 transition-transform duration-300 hover:translate-x-2'/>

                        </button>
                    </form>

                </div>

                <img src="/join-img.png" alt="image join" className="join__img  w-[300px] rounded-3xl justify-self-center" />





            </div>


        </section>
    )






}

export default Contact;