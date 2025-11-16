// src/pages/LandingPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaLightbulb, FaConnectdevelop, FaArrowRight, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">

            {/* 1. Hero Section (COM A IMAGEM DE FUNDO) */}
            <header className="relative z-0 flex flex-col items-center justify-center min-h-screen text-center p-8 overflow-hidden">

                {/* Imagem de Fundo (Fica atrás) */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/fundo-div.jpg')" }}
                >
                </div>
                {/* Sobreposição Escura (para legibilidade) */}
                <div className="absolute inset-0 bg-black opacity-70"></div>

                {/* Conteúdo da Hero (Fica na frente) */}
                <div className="relative z-10 flex flex-col items-center">
                    <img
                        src="/EmpreGo.svg"
                        alt="Logo EmpreGo"
                        className="h-24 w-auto mb-6 drop-shadow-lg"
                    />

                    <h1 className="text-6xl font-extrabold text-white leading-tight mb-4 md:text-5xl">
                        Conecte-se ao Seu Próximo Grande Passo.
                    </h1>
                    <p className="text-xl text-gray-200 mt-4 max-w-2xl md:text-2xl drop-shadow-sm">
                        Encontre os melhores talentos para sua equipe ou descubra a oportunidade
                        ideal para sua carreira. O futuro profissional começa aqui.
                    </p>

                    <Link
                        to="/profiles"
                        className="mt-12 px-10 py-5 bg-brand-orange text-white text-xl 
                      font-bold rounded-full shadow-lg tracking-wide uppercase
                      hover:bg-opacity-90 transition-all transform hover:scale-105"
                    >
                        Explorar Perfis <FaArrowRight className="inline-block ml-3 -mt-1" />
                    </Link>
                </div>

            </header>

            {/* 2. Seções de Destaque (FUNDO SÓLIDO) */}
            <section className="w-full bg-white dark:bg-gray-900 py-24 px-8">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
                        Uma plataforma construída para o futuro
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<FaUsers />}
                            title="Rede Expandida"
                            description="Conecte-se com profissionais de diversas áreas e construa um networking valioso."
                        />
                        <FeatureCard
                            icon={<FaLightbulb />}
                            title="Oportunidades Únicas"
                            description="Descubra vagas e projetos que realmente impulsionam sua carreira e paixões."
                        />
                        <FeatureCard
                            icon={<FaConnectdevelop />}
                            title="Crescimento Contínuo"
                            description="Aprenda com especialistas e desenvolva novas habilidades em sua área de atuação."
                        />
                    </div>
                </div>
            </section>

            {/* 3. Seção "Veja a Plataforma" (FUNDO SÓLIDO) */}
            <section className="w-full bg-gray-50 dark:bg-gray-800 py-24 px-8">
                <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
                        <div className="flex space-x-2 mb-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <img
                            src="/images/app-mockup.png"
                            alt="Plataforma EmpreGo em ação"
                            className="w-full rounded-lg shadow-inner"
                        />
                    </div>

                    <div className="text-gray-900 dark:text-white">
                        <h2 className="text-4xl font-bold mb-6">
                            Veja a plataforma em ação.
                        </h2>
                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                            Nossa interface limpa e os filtros poderosos tornam a busca pelo profissional
                            ideal uma tarefa simples e eficiente.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center text-lg">
                                <FaCheckCircle className="text-brand-orange mr-3" />
                                Busca inteligente por skills, cargo e localização.
                            </li>
                            <li className="flex items-center text-lg">
                                <FaCheckCircle className="text-brand-orange mr-3" />
                                Perfis detalhados com histórico e portfólio.
                            </li>
                            <li className="flex items-center text-lg">
                                <FaCheckCircle className="text-brand-orange mr-3" />
                                Modo claro e escuro para sua preferência visual.
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* 4. Seção de Depoimentos (FUNDO SÓLIDO) */}
            <section className="w-full bg-white dark:bg-gray-900 py-24 px-8">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
                        O que nossos usuários dizem
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TestimonialCard
                            quote="A EmpreGo revolucionou meu processo de contratação. Encontrei um desenvolvedor sênior em 48 horas."
                            name="Carla Mendes"
                            title="Gerente de Produto, SaaSly"
                            imageUrl="https://randomuser.me/api/portraits/women/3.jpg"
                        />
                        <TestimonialCard
                            quote="Como designer, ter um lugar para mostrar meu portfólio de forma tão profissional foi um diferencial. Consegui dois novos projetos por aqui."
                            name="Eduarda Santos"
                            title="Designer UX/UI, PixelWorks"
                            imageUrl="https://randomuser.me/api/portraits/women/5.jpg"
                        />
                        <TestimonialCard
                            quote="Finalmente uma plataforma que entende de DevOps. Os filtros por tecnologia são incrivelmente precisos."
                            name="Daniel Oliveira"
                            title="DevOps Engineer, CloudStack"
                            imageUrl="https://randomuser.me/api/portraits/men/4.jpg"
                        />
                    </div>
                </div>
            </section>

            {/* 5. Seção Final de CTA (FUNDO LARANJA) */}
            <section className="w-full bg-brand-orange text-white py-20 px-8">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Pronto para começar?
                    </h2>
                    <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
                        Junte-se a milhares de profissionais que já estão moldando o futuro do trabalho.
                    </p>
                    <Link
                        to="/profiles"
                        className="px-10 py-5 bg-white text-brand-orange text-xl 
                       font-bold rounded-full shadow-lg tracking-wide uppercase
                       hover:bg-gray-100 transition-all transform hover:scale-105"
                    >
                        Explorar Perfis
                    </Link>
                </div>
            </section>

            {/* 6. Rodapé */}
            <footer className="w-full bg-gray-900 dark:bg-gray-950 text-gray-400 py-6 text-center">
                <p>&copy; {new Date().getFullYear()} EmpreGo. Todos os direitos reservados.</p>
                <p className="text-sm mt-2">Feito com <span className="text-red-500">&hearts;</span> para a Global Solution.</p>
            </footer>

        </div>
    );
}

// --- Componentes Auxiliares ---

function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg 
                    border border-gray-100 dark:border-gray-700
                    hover:shadow-xl transition-shadow duration-300">
            <div className="text-brand-orange text-5xl mb-5">{icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
    );
}

function TestimonialCard({ quote, name, title, imageUrl }) {
    return (
        <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
            <FaQuoteLeft className="text-brand-orange text-3xl mb-4" />
            <p className="text-gray-700 dark:text-gray-200 text-lg italic mb-6">
                "{quote}"
            </p>
            <div className="flex items-center">
                <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-orange" />
                <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
                </div>
            </div>
        </div>
    );
}