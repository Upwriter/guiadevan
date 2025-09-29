import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import { StateRouter, CityRouter, ServiceStateRouter, ServiceCityRouter } from './components/DynamicRouter'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            {/* Rotas principais */}
            <Route path="/" element={<Navigate to="/inicio" replace />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/sobrenos" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            
            {/* Rotas dinâmicas para estados */}
            <Route path="/:estado" element={<StateRouter />} />
            
            {/* Rotas dinâmicas para municípios */}
            <Route path="/:estado/:municipio" element={<CityRouter />} />
            
            {/* Rotas de serviços por estado */}
            <Route path="/servicos/:estado" element={<ServiceStateRouter />} />
            
            {/* Rotas de serviços por município */}
            <Route path="/servicos/:estado/:municipio" element={<ServiceCityRouter />} />
          </Routes>
        </main>
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

export default App
