import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    const links = [
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/#services" },
        { name: "Quem Somos", href: "/#about" },
        { name: "Contato", href: "/#contact" },
    ];

    const handleNavigation = (href: string) => {
        setActiveLink(href);
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-[#1e1e1e]/90 backdrop-blur-md fixed w-full z-50 shadow-xl">
            <nav className="container mx-auto px-4 py-3">
                {/* Desktop */}
                <div className="hidden md:flex justify-between items-center">
                    <a 
                        href="/" 
                        className="group relative text-2xl font-bold tracking-tighter"
                        style={{ color: '#ffe400' }}
                    >
                        <span className="relative z-10">XP<span className="text-white italic">T</span>O</span>
                        <span className="absolute inset-0 bg-[#ffe400] h-full w-0 group-hover:w-full transition-all duration-300 mix-blend-overlay"></span>
                    </a>
                    
                    <div className="flex gap-6 items-center">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => handleNavigation(link.href)}
                                className="relative px-4 py-2 text-white/90 hover:text-[#ffe400] transition-all group"
                            >
                                <span className="relative z-10">{link.name}</span>
                                <div className="absolute bottom-0 left-0 w-full h-px bg-[#ffe400] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                {activeLink === link.href && (
                                    <div className="absolute bottom-0 left-0 w-full h-px bg-[#ffe400]"></div>
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile */}
                <div className="md:hidden flex flex-col">
                    <div className="flex justify-between items-center">
                        <a 
                            href="/" 
                            className="text-2xl font-bold tracking-tighter"
                            style={{ color: '#ffe400' }}
                        >
                            XP<span className="text-white italic">T</span>O
                        </a>
                        
                        <button
                            className="cursor-pointer p-2 rounded-lg border border-[#ffe400]/30 hover:border-[#ffe400]/60 transition-all"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Menu de navegação"
                        >
                            <svg
                                className={`w-8 h-8 text-[#ffe400] transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div 
                            className="mt-4 py-4 px-6 bg-[#1e1e1e]/95 backdrop-blur-lg rounded-xl border border-[#ffffff]/10 animate-fade-in"
                        >
                            <div className="space-y-3">
                                {links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        onClick={() => handleNavigation(link.href)}
                                        className="block py-3 px-4 rounded-lg text-white/90 hover:bg-[#ffffff]/5 hover:text-[#ffe400] transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;