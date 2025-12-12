import { useState } from "react";

const Gallery = () => {
  const gallery = [
    {
      id: 1,
      title: "Indonesia",
      subtitle: "Nusa",
      image: "/gallery-img-1.png",
      alt: "Imagen Nusa, Indonesia ",
    },
    {
      id: 2,
      title: "Nueva Zelanda",
      subtitle: "Cook",
      image: "/gallery-img-2.png",
      alt: "Imagen Cook, Nueva Zelanda ",
    },
    {
      id: 3,
      title: "Polinesia",
      subtitle: "Bora Bora",
      image: "/gallery-img-3.png",
      alt: "Imagen Bora Bora, Polinesia",
    },
    {
      id: 4,
      title: "Grecia",
      subtitle: "Santorini",
      image: "/gallery-img-4.png",
      alt: "Imagen Santorini, Grecia",
    },
  ];

  return (
    <section className="gallery section" id="gallery">
      <h2 className="section__title  text-big-font-size text-title-color text-center mb-8">
        Gallery
      </h2>

      <div className="gallery__container container grid grid-cols-[300px] justify-center">
        {gallery.map((imagen)=>(
            <article className="gallery__card relative rounded-3xl overflow-hidden group">
                <img src={imagen.image} alt={imagen.alt} className="gallery__img transition-transform duration-300 group-hover:scale-125 " />
                <div className="gallery__shadow absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,hsla(0,0%,0%,0)_70%,hsla(0,0%,0%,0.7)_100%)]"></div>


                <div className="gallery__data absolute left-5 bottom-4 text-white-color">
                    <h3 className="gallery__subtitle text-h1-font-size font-second-font">{imagen.subtitle}</h3>
                    <h2 className="gallery__title text-h2-font-size">{imagen.title}</h2>
                </div>
            </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
