import { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';
import SearchBar from './components/SearchBar';
import ProfileModal from './components/ProfileModal';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
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
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">

      <DarkModeToggle />

      <header className="container mx-auto mb-8">
        <img
          // 2. CAMINHO DA LOGO CORRIGIDO
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {profissionaisFiltrados.map(perfil => (
            <ProfileCard
              key={perfil.Id}
              perfil={perfil}
              onCardClick={abrirModal}
            />
          ))}
        </div>
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

export default App;