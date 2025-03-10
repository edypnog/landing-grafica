import React from 'react';
import HeroCarousel from './HeroCarousel';

const HeroSection: React.FC = () => {
    const carouselImages = [
        "https://www.zuken.com/en/wp-content/uploads/sites/2/2023/09/ai-for-pcb-design-zuken-americas-2.jpg",
        "https://www.zuken.com/en/wp-content/uploads/sites/2/2023/09/ai-for-pcb-design-zuken-americas-2.jpg",
        "https://www.zuken.com/en/wp-content/uploads/sites/2/2023/09/ai-for-pcb-design-zuken-americas-2.jpg",
    ];

    return (
        <section className="relative w-full h-[500px] flex items-center justify-center text-center text-white bg-[#1e1e1e]">
            {/* Carrossel */}
            <HeroCarousel images={carouselImages} />

            {/* Conteúdo sobreposto */}
            <div className="absolute z-20 px-6 md:px-12 text-center">
                <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                    Bem-vindo à Gráfica XPTO!
                </h1>
                <p className="mt-4 text-lg md:text-xl drop-shadow-md">
                    Alta qualidade e rapidez na entrega.
                </p>
                <a 
                    href="/#contact" 
                    className="mt-6 inline-block bg-[#ffe400] hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition"
                >
                    Entre em contato
                </a>
            </div>
        </section>
    );
};

export default HeroSection;