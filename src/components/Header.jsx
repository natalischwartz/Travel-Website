import { useState, useEffect, useRef } from "react";
import { X, Moon, Sun, LayoutGrid } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [bgHeader, setBgHeader] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef(null);

    // Manejo del scroll para fondo del header
    useEffect(() => {
        const handleScroll = () => {
            setBgHeader(window.scrollY >= 50);
            
            // Detectar sección activa
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;
            
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(`#${sectionId}`);
                        break;
                    }
                }
            }
            
            // Indicar que estamos haciendo scroll
            setIsScrolling(true);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
            
            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, 100);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Verificar posición inicial
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const handleNavClick = (href) => {
        setIsMenuOpen(false);
        setActiveSection(href);
        
        // Scroll suave a la sección
        const elementId = href.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    const navItems = [
        { href: "#home", text: "Home" },
        { href: "#destination", text: "Destination" },
        { href: "#testimonials", text: "Testimonials" },
        { href: "#gallery", text: "Gallery" },
        { href: "#join", text: "Contact" },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
                bgHeader 
                    ? 'bg-white dark:bg-gray-900 shadow-lg' 
                    : 'bg-transparent'
            } ${isScrolling ? 'shadow-md' : ''}`}
            id="header"
        >
            <nav className="container mx-auto px-4 h-16 flex justify-between items-center">
                {/* Logo */}
                <a 
                    href="#home" 
                    className="flex items-center gap-x-2 font-bold text-xl text-gray-800 dark:text-white transition-colors duration-300"
                    onClick={() => handleNavClick("#home")}
                >
                    <img 
                        className="h-8 w-8" 
                        src="/logo.svg" 
                        alt="GoTravel Logo" 
                    />
                    <span>GoTravel</span>
                </a>

                {/* Menú de navegación - Desktop */}
                <div className="hidden md:flex items-center gap-x-1">
                    {navItems.map((item) => (
                        <a
                            key={item.text}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.href);
                            }}
                            className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                activeSection === item.href
                                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                        >
                            {item.text}
                            {/* Indicador de sección activa */}
                            {activeSection === item.href && (
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                            )}
                        </a>
                    ))}
                </div>

                {/* Controles */}
                <div className="flex items-center gap-x-4">
                    {/* Botón tema */}
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-all duration-300 ${
                            bgHeader 
                                ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700' 
                                : 'bg-white/10 hover:bg-white/20'
                        }`}
                        aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                    >
                        {darkMode ? (
                            <Sun className="w-5 h-5 text-yellow-500" />
                        ) : (
                            <Moon className={`w-5 h-5 ${
                                bgHeader ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                            }`} />
                        )}
                    </button>

                    {/* Botón menú móvil */}
                    <button 
                        className="md:hidden p-2 rounded-lg transition-colors duration-300"
                        onClick={toggleMenu}
                        aria-label="Abrir menú"
                    >
                        <LayoutGrid className={`w-6 h-6 ${
                            bgHeader 
                                ? 'text-gray-700 dark:text-gray-300' 
                                : 'text-white'
                        }`} />
                    </button>
                </div>

                {/* Menú móvil */}
                <div className={`md:hidden fixed inset-0 z-[9999] transition-all duration-300 ${
                    isMenuOpen 
                        ? 'opacity-100 visible' 
                        : 'opacity-0 invisible'
                }`}>
                    {/* Overlay */}
                    <div 
                        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                            isMenuOpen ? 'opacity-50' : 'opacity-0'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                    />
                    
                    {/* Panel del menú */}
                    <div className={`absolute top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                        {/* Encabezado del menú móvil */}
                        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                            <span className="font-bold text-lg text-gray-800 dark:text-white">
                                Menú
                            </span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                aria-label="Cerrar menú"
                            >
                                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            </button>
                        </div>
                        
                        {/* Items del menú móvil */}
                        <div className="p-4 space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.text}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                        activeSection === item.href
                                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                                >
                                    {item.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;