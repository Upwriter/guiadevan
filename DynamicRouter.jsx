import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import StatePage from './StatePage'
import CityPage from './CityPage'
import Services from '../pages/Services'
import estadosInfo from '../assets/estados_info.json'
import municipiosPorEstado from '../assets/municipios_por_estado.json'

// Função para normalizar strings para URLs
const normalizeForUrl = (str) => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .trim()
}

// Função para encontrar estado por URL
const findEstadoByUrl = (urlEstado) => {
  for (const [uf, info] of Object.entries(estadosInfo)) {
    if (info.url === urlEstado) {
      return { uf, ...info }
    }
  }
  return null
}

// Função para encontrar município por nome normalizado
const findMunicipioByUrl = (uf, urlMunicipio) => {
  if (!municipiosPorEstado[uf]) return null
  
  const municipios = municipiosPorEstado[uf]
  return municipios.find(municipio => 
    normalizeForUrl(municipio) === urlMunicipio
  )
}

const StateRouter = () => {
  const { estado } = useParams()
  const [estadoInfo, setEstadoInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const info = findEstadoByUrl(estado)
    setEstadoInfo(info)
    setLoading(false)
  }, [estado])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  }

  if (!estadoInfo) {
    return <div className="min-h-screen flex items-center justify-center">Estado não encontrado</div>
  }

  return <StatePage estado={estadoInfo.uf} nomeEstado={estadoInfo.nome} />
}

const CityRouter = () => {
  const { estado, municipio } = useParams()
  const [estadoInfo, setEstadoInfo] = useState(null)
  const [municipioInfo, setMunicipioInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const infoEstado = findEstadoByUrl(estado)
    if (infoEstado) {
      const infoMunicipio = findMunicipioByUrl(infoEstado.uf, municipio)
      setEstadoInfo(infoEstado)
      setMunicipioInfo(infoMunicipio)
    }
    setLoading(false)
  }, [estado, municipio])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  }

  if (!estadoInfo || !municipioInfo) {
    return <div className="min-h-screen flex items-center justify-center">Município não encontrado</div>
  }

  return (
    <CityPage 
      cidade={municipioInfo} 
      estado={estadoInfo.uf} 
      nomeEstado={estadoInfo.nome} 
    />
  )
}

const ServiceStateRouter = () => {
  const { estado } = useParams()
  const [estadoInfo, setEstadoInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const info = findEstadoByUrl(estado)
    setEstadoInfo(info)
    setLoading(false)
  }, [estado])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  }

  if (!estadoInfo) {
    return <div className="min-h-screen flex items-center justify-center">Estado não encontrado</div>
  }

  // Renderiza a página de serviços com contexto do estado
  return (
    <div>
      <Services estadoContext={estadoInfo} />
    </div>
  )
}

const ServiceCityRouter = () => {
  const { estado, municipio } = useParams()
  const [estadoInfo, setEstadoInfo] = useState(null)
  const [municipioInfo, setMunicipioInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const infoEstado = findEstadoByUrl(estado)
    if (infoEstado) {
      const infoMunicipio = findMunicipioByUrl(infoEstado.uf, municipio)
      setEstadoInfo(infoEstado)
      setMunicipioInfo(infoMunicipio)
    }
    setLoading(false)
  }, [estado, municipio])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  }

  if (!estadoInfo || !municipioInfo) {
    return <div className="min-h-screen flex items-center justify-center">Município não encontrado</div>
  }

  // Renderiza a página de serviços com contexto da cidade
  return (
    <div>
      <Services cidadeContext={{ cidade: municipioInfo, estado: estadoInfo }} />
    </div>
  )
}

export { StateRouter, CityRouter, ServiceStateRouter, ServiceCityRouter }
