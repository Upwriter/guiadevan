import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import Inicio from './Inicio';
import Servicos from './Servicos';
import SobreNos from './SobreNos';
import Contato from './Contato';
import EstadoPage from './EstadoPage';
import ServicosEstadoPage from './ServicosEstadoPage';
import MunicipioPage from './MunicipioPage';
import ServicosMunicipioPage from './ServicosMunicipioPage';
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
