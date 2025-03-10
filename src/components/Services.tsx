import React from 'react';
import ServiceCard from './ServiceCard'; // Importe o componente ServiceCard

interface Service {
    title: string;
    image: string;
    features: string[];
}

const ServicesSection: React.FC = () => {
    const services: Service[] = [
        {
            title: "Impressão Digital",
            image: "/images/digital-printing.jpg",
            features: [
                "Cartões de visita premium",
                "Flyers e folhetos",
                "Convites personalizados",
                "Adesivos de alta qualidade"
            ]
        },
        {
            title: "Personalização de Brindes",
            image: "/images/custom-gifts.jpg",
            features: [
                "Canecas e copos personalizados",
                "Chaveiros promocionais",
                "Camisetas estampadas",
                "Mousepads exclusivos"
            ]
        },
        {
            title: "Acabamento e Encadernação",
            image: "/images/finishing-binding.jpg",
            features: [
                "Laminação fosca e brilhante",
                "Encadernação wire-o e espiral",
                "Refile e vinco de alta precisão",
                "Corte especial para papéis"
            ]
        },
        {
            title: "Impressão Offset",
            image: "/images/offset-printing.jpg",
            features: [
                "Produção de grandes quantidades",
                "Revistas e jornais",
                "Pastas e catálogos",
                "Etiquetas e rótulos adesivos"
            ]
        },
        {
            title: "Sinalização e Comunicação Visual",
            image: "/images/signage.jpg",
            features: [
                "Placas de sinalização interna e externa",
                "Totens e letreiros iluminados",
                "Paineis informativos",
                "Displays para lojas"
            ]
        },
        {
            title: "Embalagens Personalizadas",
            image: "/images/custom-packaging.jpg",
            features: [
                "Caixas personalizadas para produtos",
                "Sacos de papel com logo",
                "Etiquetas adesivas para embalagens",
                "Rótulos resistentes à umidade"
            ]
        },
    ];

    return (
        <section id="services" className="bg-[#111111] py-20 px-4">
            <div className="container mx-auto">
                <h2 className="mb-16 text-center text-4xl font-bold text-[#ffe400]">
                    Nossos Serviços
                </h2>
                
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;