import React from "react";

interface TeamMember {
    name: string;
    role: string;
    photo: string;
    bio: string;
}

const team: TeamMember[] = [
    {
        name: "Carlos Silva",
        role: "Diretor Criativo",
        photo: "https://placehold.co/300x300/1e1e1e/ffe400?text=CS",
        bio: "Especialista em design gráfico com 10 anos de experiência em projetos de grande escala."
    },
    {
        name: "Ana Souza",
        role: "Gerente de Produção",
        photo: "https://placehold.co/300x300/1e1e1e/ffe400?text=AS",
        bio: "Responsável pela execução impecável de todos os projetos da gráfica."
    }
];

const TeamSection: React.FC = () => {
    return (
        <section id="about" className="bg-[#1e1e1e] min-h-screen py-16 px-4">
        <div className="container mx-auto">
        <h2 className="text-[#ffe400] text-3xl font-bold text-center mb-12">
        Nossa Equipe
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {team.map((member, index) => (
            <div 
            key={member.name} 
            className="relative group cursor-pointer transition-transform duration-500 hover:z-10"
            >
            <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg transform transition-all duration-500 group-hover:translate-x-${index % 2 === 0 ? '-3' : '3'}`}>              
            <div className="relative overflow-hidden rounded-lg mb-4 w-48 h-48 mx-auto">
            <img 
            src={member.photo} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            </div>
            
            <div className="space-y-2 text-center">
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-[#ffe400] font-medium text-sm">{member.role}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
            </div>
            </div>
            
            <div className="absolute inset-0 rounded-xl bg-[#ffe400]/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
        ))}
        </div>
        </div>
        </section>
    );
};

export default TeamSection;
