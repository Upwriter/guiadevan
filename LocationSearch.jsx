import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Search, MapPin, ChevronRight } from 'lucide-react'
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

const LocationSearch = ({ className = "" }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const navigate = useNavigate()

  // Criar lista de todas as localizações
  const allLocations = []

  // Adicionar estados
  Object.entries(estadosInfo).forEach(([uf, info]) => {
    if (uf !== 'EX') { // Excluir "Exterior"
      allLocations.push({
        type: 'estado',
        name: info.nome,
        uf: uf,
        url: `/${info.url}`,
        searchText: `${info.nome} ${uf}`.toLowerCase()
      })
    }
  })

  // Adicionar municípios
  Object.entries(municipiosPorEstado).forEach(([uf, municipios]) => {
    if (uf !== 'EX' && estadosInfo[uf]) {
      municipios.forEach(municipio => {
        const estadoInfo = estadosInfo[uf]
        allLocations.push({
          type: 'municipio',
          name: municipio,
          estado: estadoInfo.nome,
          uf: uf,
          url: `/${estadoInfo.url}/${normalizeForUrl(municipio)}`,
          searchText: `${municipio} ${estadoInfo.nome} ${uf}`.toLowerCase()
        })
      })
    }
  })

  useEffect(() => {
    if (searchTerm.length >= 2) {
      const filtered = allLocations
        .filter(location => 
          location.searchText.includes(searchTerm.toLowerCase())
        )
        .slice(0, 10) // Limitar a 10 resultados
      
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchTerm])

  const handleLocationSelect = (location) => {
    navigate(location.url)
    setSearchTerm('')
    setShowSuggestions(false)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (suggestions.length > 0) {
      handleLocationSelect(suggestions[0])
    }
  }

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Buscar por cidade ou estado..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSuggestions(suggestions.length > 0)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="pl-10 pr-4 py-3 text-base"
          />
        </div>
        <Button 
          type="submit" 
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700"
          size="sm"
        >
          Buscar
        </Button>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-80 overflow-y-auto">
          <CardContent className="p-0">
            {suggestions.map((location, index) => (
              <button
                key={index}
                onClick={() => handleLocationSelect(location)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 flex items-center justify-between group"
              >
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">
                      {location.name}
                    </div>
                    {location.type === 'municipio' && (
                      <div className="text-sm text-gray-500">
                        {location.estado} ({location.uf})
                      </div>
                    )}
                    {location.type === 'estado' && (
                      <div className="text-sm text-gray-500">
                        Estado ({location.uf})
                      </div>
                    )}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
              </button>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default LocationSearch
