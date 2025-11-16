import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function ProfileModal({ perfil, onClose }) {

  const handleRecommend = () => alert(`Você recomendou ${perfil.nome}!`);
  const handleSendMessage = () => alert(`Abrindo chat com ${perfil.nome}...`);
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex 
                 justify-center items-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl 
                   max-w-4xl w-full max-h-[90vh] overflow-y-auto
                   
                   /* --- ADICIONE ESTAS CLASSES PARA A SCROLLBAR --- */
                   scrollbar-thin 
                   scrollbar-thumb-brand-orange/80 
                   scrollbar-track-gray-100 dark:scrollbar-track-gray-700
                   hover:scrollbar-thumb-brand-orange"
      >
        
        <header className="relative">
          
          <div 
            className="h-48 bg-cover bg-center blur-md opacity-80"
            style={{ backgroundImage: `url(${perfil.foto})` }}
          >
          </div>
          <div className="absolute inset-0 h-48 bg-black opacity-20"></div>

          <div className="absolute left-1/2 -translate-x-1/2 -bottom-16">
            <img 
              src={perfil.foto} 
              alt={perfil.nome} 
              className="w-60 h-60 rounded-full object-cover 
                         border-4 border-white dark:border-gray-800 shadow-lg" 
            />
          </div>

          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 z-10 text-3xl text-white 
                       drop-shadow-lg hover:text-gray-200"
          >
            &times;
          </button>
        </header>
        
        <div className="pt-20 pb-6 px-6 text-center border-b border-gray-200 dark:border-gray-700">
          
          <div className="flex items-center justify-center mb-1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mr-2">
              {perfil.nome}
            </h2>
            <FaCheckCircle className="text-brand-orange text-2xl" />
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">{perfil.cargo}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{perfil.localizacao}</p>
          
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={handleSendMessage}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                         font-semibold px-5 py-2 rounded-full
                         hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              Enviar Mensagem
            </button>
            <button 
              onClick={handleRecommend}
              className="bg-brand-orange text-white font-semibold px-5 py-2 rounded-full 
                         hover:bg-opacity-90 transition-colors"
            >
              Recomendar Profissional
            </button>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 dark:bg-gray-900">
          <Section title="Resumo">
            <p className="text-gray-700 dark:text-gray-300">{perfil.resumo}</p>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Section title="Experiência Profissional">
                {perfil.experiencias.map((exp, index) => (
                  <div key={index} className="mb-4 relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                    <span className="absolute -left-[3px] top-1 w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
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
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-orange hover:underline">
                      {proj.titulo}
                    </a>
                    <p className="text-sm dark:text-gray-300">{proj.descricao}</p>
                  </div>
                ))}
              </Section>
            </div>
            
            <div>
              <Section title="Habilidades Técnicas (Hard Skills)">
                <SkillList skills={perfil.habilidadesTecnicas} type="hard" />
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

      </div>
    </div>
  );
}

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

function SkillList({ skills, type = 'default' }) {
  const baseStyle = "text-sm font-medium px-3 py-1 rounded-full";
  const styles = {
    hard: "bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200",
    interest: "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200",
    default: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
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