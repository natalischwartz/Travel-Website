import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";



 const ScrollUpButton = () =>{
        const [isVisible, setIsVisible] = useState(false);

// 1. Función para mostrar/ocultar el botón
  const toggleVisibility = () => {


    if (typeof window === 'undefined') return;

    if (window.scrollY > 350) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  // 2. Función para hacer scroll hacia arriba
  const scrollToTop = () => {

    if (typeof window === 'undefined') return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 3. useEffect para agregar/remover el event listener
  useEffect(() => {

    if (typeof window === 'undefined') return;
    window.addEventListener('scroll', toggleVisibility);
    
    // Limpiar el event listener al desmontar
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return(
    <ArrowUp size={30} className={`show-scroll text-title-color fixed right-4   bg-body-color shadow-md inline-flex p-2 rounded z-10 hover:translate-y-[-.5rem] transition duration-300 cursor-pointer  ${isVisible ? "bottom-4 opacity-100 visible" : "bottom-[-50%] opacity-0 invisible"}`} id="scroll-up" onClick={scrollToTop} aria-label="Volver arriba"/>
  )


 }


const Footer =() =>{

    const footerItems = [
    {
      id: 1,
      title: "About",
      links:[ "About Us","Features","News & Blogs"],
    },
    {
      id: 2,
      title: "Contact",
      links: ["Call Center","Support","Contact Us" ],
    },
    {
      id: 3,
      title: "Support",
      links: ["Privacy Policy","Terms & Services","Payments" ],
    },
  ];

   const socialLinks = [   {
      id: 4,
      title: "Social",
      links: [
         { 
          icon: <Facebook className="w-5 h-5" />, 
          url: "https://facebook.com/tupagina", 
          label: "Facebook",
          ariaLabel: "Visítanos en Facebook"
        },
        { 
          icon: <Instagram className="w-5 h-5" />, 
          url: "https://instagram.com/tupagina", 
          label: "Instagram",
          ariaLabel: "Síguenos en Instagram"
        },
        { 
          icon: <Twitter className="w-5 h-5" />, 
          url: "https://twitter.com/tupagina", 
          label: "Twitter",
          ariaLabel: "Síguenos en Twitter"
        },
        { 
          icon: <Linkedin className="w-5 h-5" />, 
          url: "https://linkedin.com/company/tupagina", 
          label: "LinkedIn",
          ariaLabel: "Conéctate con nosotros en LinkedIn"
        },
      ],
    }
    ]


    return(
        <footer className="footer bg-black-color [padding-block:4rem 2rem] ">
            <div className="footer__container gap-y-12 container grid">
                <a href="#" className="footer__logo inline-flex items-center gap-x-1 justify-self-start text-white-color text-h3-font-size font-font-semi-bold">
                    <img src="/logo.svg" alt="Logo" />
                    <span>GoTravel</span>
                </a>

                <div className="footer__content  grid grid-cols-2 gap-12" >
                    {footerItems.map((item) =>(
                        <div key={item.id}>
                            <h3 className="footer__title text-white-color text-h3-font-size mb-4 font-font-bold">{item.title}</h3>
                            <ul className="footer__links grid gap-y-3 ">
                            {item.links.map((link,index)=>(
                                <li key={`${item.id}-${index}`} className="footer__link text-white-color cursor-pointer">
                                    <a>
                                        {link}
                                    </a>
                                </li>
                            ))}
                            </ul>
                        </div>
                    ))}
                    <div className="footer__social flex gap-x-4">
                        {socialLinks[0].links.map((social)=>(
                            <a  key={social.label} href={social.url} target="_blank" className="footer__social-link text-white-color text-2xl transition-transform duration-300 hover:translate-y-[-.25rem] "  rel="noopener noreferrer" aria-label={social.ariaLabel}  >
                                {social.icon}
                            </a>

                        ))}
                    </div>
                </div>
            </div>

            <span className="footer_copy block mt-24 text-white-color text-center text-small-font-size">
        {/* Texto del copyright */}
        © {new Date().getFullYear()} GoTravel. All rights reserved.

            </span>
            <span className="text-text-color text-small-font-size">Desarrollado por Natali Schwartz</span>
         {/* Scroll up */}
         <ScrollUpButton/>
        
        </footer>
       
    )
}


export default Footer;