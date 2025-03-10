import React, { useState, useEffect, useRef } from 'react';

interface HeroCarouselProps {
    images?: string[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images = [
    "https://placehold.co/1600x600/EEE/31343C",
    "https://placehold.co/1600x600/EEE/31343C",
    "https://placehold.co/1600x600/EEE/31343C",
] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const startInterval = () => {
        clearInterval(intervalRef.current!);
        intervalRef.current = setInterval(nextSlide, 5000);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        resetInterval();
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        resetInterval();
    };

    const resetInterval = () => {
        clearInterval(intervalRef.current!);
        startInterval();
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        resetInterval();
    };

    useEffect(() => {
        startInterval();
        return () => clearInterval(intervalRef.current!);
    }, []);

    return (
        <div className="relative w-full h-[500px] overflow-hidden bg-[#1e1e1e]">
            {/* Slides */}
            <div
                ref={sliderRef}
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${images.length * 100}%`,
                }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Botões de navegação (visíveis apenas em desktop) */}
            <div className="hidden md:block">
                <button
                    className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#1e1e1e]/80 backdrop-blur-sm border-2 border-[#ffe400]/30 hover:border-[#ffe400]/60 text-[#ffe400] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                    onClick={prevSlide}
                    aria-label="Slide anterior"
                >
                    <svg
                        className="w-6 h-6 transform -scale-x-100 group-hover:-translate-x-1 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                    </svg>
                </button>

                <button
                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#1e1e1e]/80 backdrop-blur-sm border-2 border-[#ffe400]/30 hover:border-[#ffe400]/60 text-[#ffe400] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                    onClick={nextSlide}
                    aria-label="Próximo slide"
                >
                    <svg
                        className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            i === currentIndex ? 'bg-[#ffe400]' : 'bg-gray-500/50'
                        }`}
                        onClick={() => goToSlide(i)}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;