import { useParams, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import estadosInfo from '../assets/estados_info.json'

// Mapeamento de siglas para URLs amigáveis
const siglaParaUrl = {
  'AC': 'acre',
  'AL': 'alagoas', 
  'AP': 'amapa',
  'AM': 'amazonas',
  'BA': 'bahia',
  'CE': 'ceara',
  'DF': 'distrito-federal',
  'ES': 'espirito-santo',
  'GO': 'goias',
  'MA': 'maranhao',
  'MT': 'mato-grosso',
  'MS': 'mato-grosso-do-sul',
  'MG': 'minas-gerais',
  'PA': 'para',
  'PB': 'paraiba',
  'PR': 'parana',
  'PE': 'pernambuco',
  'PI': 'piaui',
  'RJ': 'rio-de-janeiro',
  'RN': 'rio-grande-do-norte',
  'RS': 'rio-grande-do-sul',
  'RO': 'rondonia',
  'RR': 'roraima',
  'SC': 'santa-catarina',
  'SP': 'sao-paulo',
  'SE': 'sergipe',
  'TO': 'tocantins'
}

const StateRedirect = () => {
  const { estado, municipio } = useParams()
  const [redirectUrl, setRedirectUrl] = useState(null)

  useEffect(() => {
    // Se é uma sigla de estado (2 caracteres)
    if (estado && estado.length === 2) {
      const siglaUpper = estado.toUpperCase()
      const urlAmigavel = siglaParaUrl[siglaUpper]
      
      if (urlAmigavel) {
        // Se tem município, inclui na URL
        if (municipio) {
          setRedirectUrl(`/${urlAmigavel}/${municipio}`)
        } else {
          setRedirectUrl(`/${urlAmigavel}`)
        }
      } else {
        // Sigla não encontrada, redireciona para home
        setRedirectUrl('/inicio')
      }
    } else {
      // Não é uma sigla, deixa o roteamento normal funcionar
      setRedirectUrl(null)
    }
  }, [estado, municipio])

  // Se deve redirecionar
  if (redirectUrl) {
    return <Navigate to={redirectUrl} replace />
  }

  // Se não é uma sigla, não faz nada (deixa o roteamento normal)
  return null
}

export default StateRedirect
