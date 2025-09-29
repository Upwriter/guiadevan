import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Inicio from './pages/Inicio';
import Servicos from './pages/Servicos';
import SobreNos from './pages/SobreNos';
import Contato from './pages/Contato';
import EstadoPage from './pages/EstadoPage';
import ServicosEstadoPage from './pages/ServicosEstadoPage';
import MunicipioPage from './pages/MunicipioPage';
import ServicosMunicipioPage from './pages/ServicosMunicipioPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Redirecionar a raiz para /inicio */}
            <Route path="/" element={<Navigate to="/inicio" replace />} />
            
            {/* Páginas principais */}
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/servico" element={<Servicos />} />
            <Route path="/sobrenos" element={<SobreNos />} />
            <Route path="/contato" element={<Contato />} />
            
            {/* Páginas de serviços por estado */}
            <Route path="/servicos/:estado" element={<ServicosEstadoPage />} />
            
            {/* Páginas de serviços por município */}
            <Route path="/servicos/:estado/:municipio" element={<ServicosMunicipioPage />} />
            
            {/* Páginas de municípios */}
            <Route path="/:estado/:municipio" element={<MunicipioPage />} />
            
            {/* Páginas de estados (deve vir por último para não conflitar) */}
            <Route path="/:estado" element={<EstadoPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
