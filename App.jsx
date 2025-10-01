import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import { StateRouter, CityRouter, ServiceStateRouter, ServiceCityRouter } from './components/DynamicRouter'
import StateRedirect from './components/StateRedirect'
import './App.css'

// Componente para lidar com redirecionamentos de siglas
const StateRouterWithRedirect = () => {
  return (
    <>
      <StateRedirect />
      <StateRouter />
    </>
  )
}

const CityRouterWithRedirect = () => {
  return (
    <>
      <StateRedirect />
      <CityRouter />
    </>
  )
}

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* Rotas dinâmicas para estados (com redirecionamento de siglas) */}
            <Route path="/:estado" element={<StateRouterWithRedirect />} />
            
            {/* Rotas dinâmicas para municípios (com redirecionamento de siglas) */}
            <Route path="/:estado/:municipio" element={<CityRouterWithRedirect />} />
            
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
