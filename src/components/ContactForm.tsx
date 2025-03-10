import React from 'react';

const ContactForm: React.FC = () => {
    const socialLinks = [
        { 
            name: 'WhatsApp',
            icon: 'M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.1-.23-.16-.48-.27z',
            link: '#'
        },
        {
            name: 'Instagram',
            icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
            link: '#'
        }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Mensagem enviada! Entraremos em contato em breve.');
    };

    return (
        <section id="contact" className="bg-[#111111] py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="grid gap-12 md:grid-cols-2">
                    {/* Informações de Contato */}
                    <div className="space-y-8 text-[#ffe400]">
                        <h2 className="text-4xl font-bold">Fale Conosco</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <svg className="h-6 w-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <div>
                                    <p className="font-semibold">Nosso Endereço</p>
                                    <p>Rua das Artes Gráficas, 123</p>
                                    <p>São Paulo - SP</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <svg className="h-6 w-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <div>
                                    <p className="font-semibold">Telefone</p>
                                    <p>(11) 9999-9999</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <svg className="h-6 w-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <div>
                                    <p className="font-semibold">E-mail</p>
                                    <p>contato@grafica.com.br</p>
                                </div>
                            </div>
                        </div>

                        {/* Redes Sociais */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.link} 
                                    className="rounded-full bg-[#ffe400] p-3 text-[#1e1e1e] transition hover:scale-110"
                                    title={social.name}
                                >
                                    <svg className="h-6 w-6" viewBox="0 0 24 24">
                                        <path fill="currentColor" d={social.icon}/>
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Formulário Estético */}
                    <div className="space-y-8">
                        <div className="rounded-2xl bg-[#ffe400] p-8 shadow-xl">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="mb-2 block font-bold text-[#1e1e1e]">Nome</label>
                                    <input 
                                        type="text" 
                                        className="w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-[#1e1e1e]" 
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="mb-2 block font-bold text-[#1e1e1e]">E-mail</label>
                                    <input 
                                        type="email" 
                                        className="w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-[#1e1e1e]" 
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="mb-2 block font-bold text-[#1e1e1e]">Mensagem</label>
                                    <textarea 
                                        rows={4}
                                        className="w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-[#1e1e1e]" 
                                        required
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="w-full rounded-lg bg-[#1e1e1e] px-6 py-3 font-semibold text-[#ffda05] transition hover:bg-[#070707] cursor-pointer"
                                >
                                    Enviar Mensagem
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;