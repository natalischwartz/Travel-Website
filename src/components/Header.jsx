import { useState } from "react";
import { X, Moon, Sun, LayoutGrid, Menu } from "lucide-react";


const Header = () =>{


     const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);


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
        <header className="header h-14 fixed w-full top-0 left-0 bg-transparent z-100 transition-colors duration-400" id="header">
            <nav className="nav container relative flex justify-between items-center">
                <a href="#" className="nav__logo flex items-center gap-x-1 text-white-color font-semi-bold transition-colors duration-400">
                    <img className="transition-filter duration-400" src="/logo.svg" alt="image"/>
                    <span>GoTravel</span>

                </a>
                <div className="nav__menu flex flex-col items-center gap-y-8 max-[1150px]:fixed max-[1150px]:-top-full max-[1150px]:left-0 max-[1150px]:bg-body-color max-[1150px]:w-full max-[1150px]:[padding-block:4rem] max-[1150px]:shadow-lg" id="nav-menu">
                    {navItems.map((item,index)=>{

                        return(
                            <a key={index} href={item.href} className="nav__link relative font-semibold text-title-color"
                            onClick={()=>setIsMenuOpen(false)}>
                                <span>{item.text}</span>    
                            </a>
                        )
                    })}
                    {/* Close button */}
                    <div className="nav__close inline-flex text-2xl cursor-pointer text-title-color transition-colors duration-400 absolute top-4 right-6" id="nav-close">
                        <X size={20}/>
                    </div>
                </div>
                <div className="nav__buttons flex items-center gap-x-4">
                    {/* Theme button */}
                    <Moon className="nav__theme inline-flex text-2xl cursor-pointer text-white-color transition-colors duration-400" id="theme-button"/>

                    {/* Toggle button */}
                    <button className="nav__toggle inline-flex text-2xl cursor-pointer text-white-color transition-colors duration-400" aria-label="Abrir menu" id="nav-toggle"
                     onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                        <LayoutGrid/>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;