// src/components/ProfileModal.jsx

import React from 'react';
// Importa os ícones que vamos usar
import { FaUserFriends, FaRegEye, FaCheckCircle } from 'react-icons/fa';

export default function ProfileModal({ perfil, onClose }) {

  // Funções de clique dos botões (sem mudança)
  const handleRecommend = () => {
    alert(`Você recomendou ${perfil.nome}!`);
  };

  const handleSendMessage = () => {
    alert(`Abrindo chat com ${perfil.nome}...`);
  };

  // Fecha o modal ao clicar fora dele
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // Overlay
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex 
                 justify-center items-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      {/* Container do Modal (estilo mais limpo) */}
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl 
                   max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        
        {/* Header (com as informações principais e botão de fechar) */}
        <header className="flex items-start p-6 border-b border-gray-200 dark:border-gray-700 
                           sticky top-0 bg-white dark:bg-gray-800 z-10">
          <img 
            src={perfil.foto} 
            alt={perfil.nome} 
            className="w-24 h-24 rounded-full mr-6" 
          />
          <div className="flex-grow">
            {/* Nome + Check */}
            <div className="flex items-center mb-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mr-2">
                {perfil.nome}
              </h2>
              <FaCheckCircle className="text-green-500 text-2xl" />
            </div>
            
            {/* Cargo e Localização */}
            <p className="text-lg text-gray-700 dark:text-gray-300">{perfil.cargo}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{perfil.localizacao}</p>
            
            {/* Stats (para consistência) */}
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-4 mt-3">
              <span className="flex items-center">
                <FaUserFriends className="mr-1.5" /> 
                {Math.floor(Math.random() * 500) + 100} Seguidores
              </span>
              <span className="flex items-center">
                <FaRegEye className="mr-1.5" /> 
                {Math.floor(Math.random() * 1000) + 200} Visualizações
              </span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-3xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            &times;
          </button>
        </header>
        
        {/* Corpo (com as novas seções de sub-card) */}
        <div className="p-6 bg-gray-50 dark:bg-gray-900">
          <Section title="Resumo">
            <p className="text-gray-700 dark:text-gray-300">{perfil.resumo}</p>
          </Section>

          {/* Grid de 2 Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Coluna da Esquerda */}
            <div>
              <Section title="Experiência Profissional">
                {perfil.experiencias.map((exp, index) => (
                  <div key={index} className="mb-4 relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                    <span className="absolute -left-[3px] top-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <h4 className="font-semibold dark:text-white">{exp.cargo} @ {exp.empresa}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.inicio} – {exp.fim || 'Atual'}</p>
                    <p className="text-sm mt-1 dark:text-gray-300">{exp.descricao}</p>
                  </div>
                ))}
              </Section>

              <Section title="Formação Acadêmica">
                {perfil.formacao.map((form, index) => (
                  <div key={index} className="mb-3 dark:text-gray-300">
                    <h4 className="font-semibold dark:text-white">{form.curso}</h4>
                    <p>{form.instituicao} ({form.ano})</p>
                  </div>
                ))}
              </Section>
              
              <Section title="Projetos">
                {perfil.projetos.map((proj, index) => (
                  <div key={index} className="mb-3">
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                      {proj.titulo}
                    </a>
                    <p className="text-sm dark:text-gray-300">{proj.descricao}</p>
                  </div>
                ))}
              </Section>
            </div>
            
            {/* Coluna da Direita */}
            <div>
              <Section title="Habilidades Técnicas (Hard Skills)">
                <SkillList skills={perfil.habilidadesTecnicas} />
              </Section>

              <Section title="Competências (Soft Skills)">
                <SkillList skills={perfil.softSkills} />
              </Section>

              <Section title="Certificações">
                <ul className="list-disc list-inside dark:text-gray-300">
                  {perfil.certificacoes.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </Section>
              
              <Section title="Idiomas">
                <ul className="list-disc list-inside dark:text-gray-300">
                  {perfil.idiomas.map((lang, index) => (
                    <li key={index}>{lang.idioma} - {lang.nivel}</li>
                  ))}
                </ul>
              </Section>
              
              <Section title="Áreas de Interesse">
                <SkillList skills={perfil.areaInteresses} type="interest" />
              </Section>
            </div>
          </div>
        </div>

        {/* Footer (com botões de ação) */}
        <footer className="flex justify-end gap-4 p-6 border-t border-gray-200 dark:border-gray-700 
                           sticky bottom-0 bg-white dark:bg-gray-800 z-10">
          <button 
            onClick={handleSendMessage}
            // Botão Secundário (igual ao "Follow" do card)
            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                       font-semibold px-5 py-2 rounded-full
                       hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            Enviar Mensagem
          </button>
          <button 
            onClick={handleRecommend}
            // Botão Primário (com a cor da marca)
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-full 
                       hover:bg-blue-700 transition-colors"
          >
            Recomendar Profissional
          </button>
        </footer>
      </div>
    </div>
  );
}

// Componente "Section" redesenhado para parecer um sub-card
function Section({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b 
                     border-gray-200 dark:border-gray-700 pb-2 mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

// Componente Helper para as "pills" de skills
function SkillList({ skills, type = 'default' }) {
  const baseStyle = "text-sm font-medium px-3 py-1 rounded-full";
  const styles = {
    default: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    interest: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  };

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className={`${baseStyle} ${styles[type]}`}>
          {skill}
        </span>
      ))}
    </div>
  );
}