import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Car, Shield, Clock, Star, MapPin, Building } from 'lucide-react';

const MunicipioPage = () => {
  const { estado, municipio } = useParams();
  
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
  
  // Capitalizar nome do município
  const nomeMunicipio = municipio?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ') || 'Município';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Building size={24} className="mr-2" />
              <span className="text-lg font-medium">{nomeMunicipio}</span>
              <span className="mx-2">•</span>
              <MapPin size={24} className="mr-2" />
              <span className="text-lg font-medium">{nomeEstado}</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Venda de Vans em {nomeMunicipio}
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Encontre a van perfeita em {nomeMunicipio}, {nomeEstado}. Oferecemos veículos 
              executivos, motorhomes e ambulâncias com entrega local.
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
              Venda de Vans em {nomeMunicipio}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Atendemos {nomeMunicipio} e região com vans de alta qualidade, 
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
                Transporte executivo premium para empresas em {nomeMunicipio}.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Motorhomes</h3>
              <p className="text-gray-600">
                Casas sobre rodas para explorar {nomeMunicipio} e região.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ambulâncias</h3>
              <p className="text-gray-600">
                Veículos médicos equipados para atender {nomeMunicipio}.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Local</h3>
              <p className="text-gray-600">
                Entregamos diretamente em {nomeMunicipio}.
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
              Vans Disponíveis em {nomeMunicipio}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de vans para atender as necessidades específicas 
              de clientes em {nomeMunicipio}, {nomeEstado}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vans Executivas</h3>
                <p className="text-gray-600 mb-4">
                  Perfeitas para transporte corporativo em {nomeMunicipio}, com acabamento 
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
                  Ideais para explorar {nomeMunicipio} e região com conforto, equipadas com 
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
                  Ambulâncias completas para atender emergências médicas em {nomeMunicipio}.
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
              Vantagens de Comprar em {nomeMunicipio}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Atendimento Local
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe oferece atendimento personalizado para clientes em {nomeMunicipio}, 
                entendendo as necessidades específicas da região.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Entrega Direta
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Entregamos seu veículo diretamente em {nomeMunicipio}, garantindo 
                comodidade e agilidade no processo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Suporte Regional
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Oferecemos suporte técnico e atendimento pós-venda para 
                clientes em {nomeMunicipio} e cidades vizinhas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Conhecimento da Região
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Conhecemos as particularidades de {nomeMunicipio} e oferecemos 
                soluções adaptadas às condições locais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Atendimento em {nomeMunicipio}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos preparados para atender clientes em {nomeMunicipio} com a mesma 
              qualidade e eficiência que oferecemos em todo o Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consulta</h3>
              <p className="text-gray-600">
                Atendimento personalizado para entender suas necessidades em {nomeMunicipio}.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Seleção</h3>
              <p className="text-gray-600">
                Apresentamos as melhores opções disponíveis para entrega em {nomeMunicipio}.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega</h3>
              <p className="text-gray-600">
                Entregamos seu veículo diretamente em {nomeMunicipio} com toda segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Encontre sua van ideal em {nomeMunicipio}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e descubra as melhores opções disponíveis para {nomeMunicipio}, {nomeEstado}.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Falar com Especialista
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MunicipioPage;
