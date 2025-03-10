import React from 'react';

interface Service {
    title: string;
    image: string;
    features: string[];
}

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className="group relative h-96 overflow-hidden  shadow-xl transition-all duration-500 hover:shadow-2xl">
            {/* Imagem de fundo com overlay */}
            <div 
                className="absolute inset-0 bg-gray-900 transition-transform duration-700 group-hover:scale-105"
                style={{ 
                    backgroundImage: `url('${service.image}')`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                }}
            >
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/70" />
            </div>

            {/* Conteúdo */}
            <div className="relative flex h-full flex-col justify-between p-8 text-white">
                {/* Cabeçalho */}
                <div>
                    <h3 className="mb-4 text-3xl font-bold text-[#ffe400]">{service.title}</h3>
                    <div className="h-1 w-16 bg-[#ffe400] transition-all duration-500 group-hover:w-24" />
                </div>

                {/* Lista de serviços */}
                <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 opacity-90 transition-opacity hover:opacity-100">
                            <svg 
                                className="h-6 w-6 flex-shrink-0 text-[#ffe400]" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M5 13l4 4L19 7" 
                                />
                            </svg>
                            <span className="text-lg">{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Efeito de borda hover */}
                <div className="absolute inset-0 border-2 border-[#ffe400]/0 transition-all duration-500 group-hover:border-[#ffe400]/30" />
            </div>
        </div>
    );
};

export default ServiceCard;