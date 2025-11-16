// src/pages/ProfilesPage.jsx

import { useState, useEffect } from 'react';
// Caminhos corrigidos para ../
import ProfileCard from '../components/ProfileCard'; 
import SearchBar from '../components/SearchBar';   
import ProfileModal from '../components/ProfileModal';

// Nome da função está correto
function ProfilesPage() {
  const [todosProfissionais, setTodosProfissionais] = useState([]);
  const [profissionaisFiltrados, setProfissionaisFiltrados] = useState([]);
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);

  const [filtros, setFiltros] = useState({
    busca: '',
    area: '',
    localizacao: '',
  });

  const [areasUnicas, setAreasUnicas] = useState([]);
  const [localizacoesUnicas, setLocalizacoesUnicas] = useState([]);


  useEffect(() => {
    fetch('/profissionais.json')
      .then(response => response.json())
      .then(data => {
        setTodosProfissionais(data);
        setProfissionaisFiltrados(data);

        const areas = [...new Set(data.map(p => p.area))];
        const locs = [...new Set(data.map(p => p.localizacao))];

        setAreasUnicas(areas.sort());
        setLocalizacoesUnicas(locs.sort());
      })
      .catch(error => console.error("Erro ao carregar dados:", error));
  }, []);

  useEffect(() => {
    let filtrados = [...todosProfissionais];

    const buscaLower = filtros.busca.toLowerCase();

    if (filtros.busca) {
      filtrados = filtrados.filter(p =>
        p.nome.toLowerCase().includes(buscaLower) ||
        p.cargo.toLowerCase().includes(buscaLower) ||
        p.habilidadesTecnicas.some(skill => skill.toLowerCase().includes(buscaLower))
      );
    }

    if (filtros.area) {
      filtrados = filtrados.filter(p => p.area === filtros.area);
    }

    if (filtros.localizacao) {
      filtrados = filtrados.filter(p => p.localizacao === filtros.localizacao);
    }

    setProfissionaisFiltrados(filtrados);

  }, [filtros, todosProfissionais]);

  const handleFilterChange = (nomeFiltro, valor) => {
    setFiltros(prevFiltros => ({
      ...prevFiltros,
      [nomeFiltro]: valor,
    }));
  };

  const abrirModal = (perfil) => setPerfilSelecionado(perfil);
  const fecharModal = () => setPerfilSelecionado(null);

  return (
    // Removido 'relative' e 'min-h-screen' daqui (agora está no App.jsx)
    <div className="text-gray-900 dark:text-gray-100 p-8">

      {/* DarkModeToggle foi REMOVIDO daqui */}

      <header className="container mx-auto mb-8">
        <img
          src="/EmpreGo.svg"
          alt="Logo EmpreGo"
          className="h-12 w-auto mb-2"
        />
        <p className="text-xl">Conectando pessoas, competências e propósito.</p>
      </header>

      <SearchBar
        onFilterChange={handleFilterChange}
        areas={areasUnicas}
        localizacoes={localizacoesUnicas}
      />

      <main className="container mx-auto">

        {profissionaisFiltrados.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {profissionaisFiltrados.map(perfil => (
              <ProfileCard
                key={perfil.Id}
                perfil={perfil}
                onCardClick={abrirModal}
              />
            ))}
          </div>

        ) : (

          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold dark:text-white">Nenhum profissional encontrado</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Tente ajustar seus termos de busca ou filtros.
            </p>
          </div>
        )}

      </main>

      {perfilSelecionado && (
        <ProfileModal
          perfil={perfilSelecionado}
          onClose={fecharModal}
        />
      )}
    </div>
  );
}

// CORREÇÃO FINAL: O export default deve ser o nome da função
export default ProfilesPage;