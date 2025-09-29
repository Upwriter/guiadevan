import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Car, Shield, Clock, Star, MapPin } from 'lucide-react';

const EstadoPage = () => {
  const { estado } = useParams();
  
  // Mapeamento de siglas para nomes completos dos estados
  const estadosNomes = {
    'ac': 'Acre',
    'al': 'Alagoas', 
    'ap': 'Amapá',
    'am': 'Amazonas',
    'ba': 'Bahia',
    'ce': 'Ceará',
    'df': 'Distrito Federal',
    'es': 'Espírito Santo',
    'go': 'Goiás',
    'ma': 'Maranhão',
    'mt': 'Mato Grosso',
    'ms': 'Mato Grosso do Sul',
    'mg': 'Minas Gerais',
    'pa': 'Pará',
    'pb': 'Paraíba',
    'pr': 'Paraná',
    'pe': 'Pernambuco',
    'pi': 'Piauí',
    'rj': 'Rio de Janeiro',
    'rn': 'Rio Grande do Norte',
    'rs': 'Rio Grande do Sul',
    'ro': 'Rondônia',
    'rr': 'Roraima',
    'sc': 'Santa Catarina',
    'sp': 'São Paulo',
    'se': 'Sergipe',
    'to': 'Tocantins'
  };

  const nomeEstado = estadosNomes[estado?.toLowerCase()] || estado?.toUpperCase() || 'Estado';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin size={32} className="mr-3" />
              <span className="text-lg font-medium">{nomeEstado}</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Venda de Vans em {nomeEstado}
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Encontre a van perfeita em {nomeEstado}. Oferecemos veículos executivos, 
              motorhomes e ambulâncias com entrega em todo o estado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Ver Vans Disponíveis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Venda de Vans em {nomeEstado}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Atendemos todo o estado de {nomeEstado} com vans de alta qualidade, 
              entrega rápida e suporte especializado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vans Executivas</h3>
              <p className="text-gray-600">
                Transporte executivo premium para empresas em {nomeEstado}.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Motorhomes</h3>
              <p className="text-gray-600">
                Casas sobre rodas para explorar as belezas de {nomeEstado}.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ambulâncias</h3>
              <p className="text-gray-600">
                Veículos médicos equipados para atender {nomeEstado}.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Local</h3>
              <p className="text-gray-600">
                Entregamos em qualquer cidade de {nomeEstado}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Vans Disponíveis em {nomeEstado}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de vans para atender as necessidades específicas 
              de clientes em {nomeEstado}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vans Executivas</h3>
                <p className="text-gray-600 mb-4">
                  Perfeitas para transporte corporativo em {nomeEstado}, com acabamento 
                  premium e máximo conforto.
                </p>
                <Button className="w-full">Ver Modelos</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Motorhomes</h3>
                <p className="text-gray-600 mb-4">
                  Ideais para explorar {nomeEstado} com conforto, equipadas com 
                  tudo que você precisa.
                </p>
                <Button className="w-full">Ver Modelos</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-red-400 to-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ambulâncias</h3>
                <p className="text-gray-600 mb-4">
                  Ambulâncias completas para atender emergências médicas em {nomeEstado}.
                </p>
                <Button className="w-full">Ver Modelos</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Vantagens de Comprar em {nomeEstado}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Conhecimento Local
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe conhece as particularidades e necessidades específicas 
                do mercado em {nomeEstado}, oferecendo soluções personalizadas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Entrega Rápida
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Com nossa logística otimizada, garantimos entrega rápida e segura 
                em qualquer cidade de {nomeEstado}.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Suporte Regional
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Oferecemos suporte técnico e atendimento especializado para 
                clientes em todo o estado de {nomeEstado}.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Parcerias Locais
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mantemos parcerias com concessionárias e prestadores de serviços 
                em {nomeEstado} para melhor atendimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Encontre sua van ideal em {nomeEstado}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e descubra as melhores opções disponíveis em {nomeEstado}.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Falar com Especialista
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EstadoPage;
