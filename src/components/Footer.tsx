import React from 'react';

const Footer: React.FC = () => {
    const quickLinks = [
        { name: "Início", href: "/" },
        { name: "Serviços", href: "/#services" },
        { name: "Instagram", href: "" },
        { name: "Facebook", href: "" }
    ];

    const contacts = [
        {
            icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z",
            text: "Rua das Artes Gráficas, 123 - São Paulo/SP"
        },
        {
            icon: "M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-1 19h-6v-1h6v1zm1.5-3h-9V4h9v13z",
            text: "(11) 9999-9999"
        },
        {
            icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z",
            text: "contato@grafica.com.br"
        }
    ];

    return (
        <footer className="bg-[#ffe400] text-[#1e1e1e] py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Logo */}
                    <div className="space-y-4">
                        <a href="/" className="text-2xl font-bold" style={{ color: '#1e1e1e' }}>
                            XP<span className="text-[#ffffff] italic">T</span>O
                        </a>
                        <p className="text-sm">Desde 2010 criando soluções visuais</p>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Navegação</h3>
                        <div className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.href} 
                                    className="block hover:text-black/70 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contatos */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contato</h3>
                        <div className="space-y-3">
                            {contacts.map((contact, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <svg 
                                        className="w-5 h-5 flex-shrink-0 mt-1" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path fill="currentColor" d={contact.icon} />
                                    </svg>
                                    <p className="text-sm">{contact.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mini Mapa */}
                    <div className="h-48">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754267452926!2d-46.65342658538329!3d-23.565734367638686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1624476367582!5m2!1spt-BR!2sbr"
                            className="w-full h-full rounded-lg border-2 border-[#1e1e1e]"
                            loading="lazy"
                            title="Mapa da localização"
                        />
                    </div>
                </div>

                {/* Direitos Autorais */}
                <div className="border-t border-[#1e1e1e]/20 pt-8 text-center">
                    <p className="text-sm">
                        © 2024 Gráfica Express. Todos os direitos reservados
                    </p>
                    <a href="">Made by Edy Nogueira ♡</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;