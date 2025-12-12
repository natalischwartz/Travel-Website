import { useState, useEffect } from "react";
import { X, Moon, Sun, LayoutGrid, Menu } from "lucide-react";


const Header = () =>{


     const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [bgHeader, setBgHeader] = useState(false);

  // ✅ useEffect SIMPLIFICADO y CORRECTO
    useEffect(() => {
        const handleScroll = () => {
            setBgHeader(window.scrollY >= 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Verificar posición inicial
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Array vacío

     const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleTheme = () =>{
        setDarkMode(!darkMode);
        if(!darkMode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    };

    const navItems = [
    {href:"#home", text:"Home"},
    {href:"#destination", text:"Destination"}, 
    {href:"#testimonials",  text:"Testimonials"}, 
    {href:"#gallery",  text:"Gallery"}, 
    {href:"#contact",  text:"Contact"}, 
    ]


    return(
        <header className={`header h-14 fixed w-full top-0 left-0 z-[1000] transition-all duration-400 ${
        bgHeader 
          ? 'bg-body-color shadow-[0_8px_16px_hsla(0,0%,0%,0.1)]' 
          : 'bg-transparent'
      }`}  id="header">
            <nav className="nav container relative flex justify-between items-center">
                <a href="#" className="nav__logo flex items-center gap-x-1 text-white-color font-semi-bold transition-colors duration-400">
                    <img className="transition-filter duration-400" src="/logo.svg" alt="image"/>
                    <span>GoTravel</span>

                </a>

                {/* Menu desplegable  */}
                <div className={`nav__menu flex flex-col items-center gap-y-8 fixed top-0 left-0 w-full h-screen bg-body-color pt-20 shadow-lg transition-transform duration-400 ${
                    isMenuOpen 
                        ? "translate-y-0 opacity-100 visible" 
                        : "-translate-y-full opacity-0 invisible"
                } md:static md:flex-row md:bg-transparent md:shadow-none md:h-auto md:w-auto md:pt-0 md:translate-y-0 md:opacity-100 md:visible`} id="nav-menu">
                            {navItems.map((item,index)=>{

                        return(
                            <a key={index} href={item.href} className="nav__link relative font-semibold text-title-color"
                            onClick={()=>setIsMenuOpen(false)}>
                                <span>{item.text}</span>    
                            </a>
                        )
                    })}
                    {/* Close button- solo en movil */}
                    <button className="nav__close md:hidden inline-flex text-2xl cursor-pointer text-title-color transition-colors duration-400 absolute top-4 right-6"
                     onClick={() => setIsMenuOpen(false)}
                        aria-label="Cerrar menú"
                    id="nav-close">
                        <X size={20}/>
                    </button>
                </div>
                <div className="nav__buttons flex items-center gap-x-4 border ">
                    {/* Boton tema */}
                    <button
                    onClick={toggleTheme}
                     className="nav__theme inline-flex text-2xl cursor-pointer transition-colors duration-400"
                     aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                    >
                        {/* el boton que puede aparecer puede ser la luna o el sol dependiendo el tema en el que estemos */}
                        {darkMode ?(
                            <Sun className={bgHeader ? "text-title-color" : "text-gray-900"}/>
                        ) : (
                            <Moon className={bgHeader ? "text-title-color" : "text-gray-900"}/>

                        )}
                    </button>
                    
                    {/* Toggle button */}
                    <button className="nav__toggle inline-flex text-2xl cursor-pointer text-white-color transition-colors duration-400" aria-label="Abrir menu" id="nav-toggle"
                     onClick={toggleMenu}>
                        <LayoutGrid className={bgHeader? "text-title-color" : "text-white-color"}/>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;