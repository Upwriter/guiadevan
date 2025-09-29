import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Car, Bed, Heart, CheckCircle, MapPin } from 'lucide-react';

const ServicosEstadoPage = () => {
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

  const services = [
    {
      icon: <Car size={48} />,
      title: "Vans Executivas",
      description: `Veículos de luxo para transporte corporativo em ${nomeEstado}`,
      features: [
        "Ar condicionado dual zone",
        "Bancos em couro premium",
        "Sistema de som premium",
        "Divisória com vidro privativo",
        "Wi-Fi e tomadas USB",
        "Iluminação LED ambiente"
      ],
      color: "blue"
    },
    {
      icon: <Bed size={48} />,
      title: "Motorhomes",
      description: `Casas sobre rodas para explorar ${nomeEstado} com conforto`,
      features: [
        "Cozinha completa equipada",
        "Banheiro com chuveiro",
        "Camas confortáveis",
        "Sistema elétrico 12V/220V",
        "Tanque de água limpa e servida",
        "Aquecimento e refrigeração"
      ],
      color: "green"
    },
    {
      icon: <Heart size={48} />,
      title: "Ambulâncias",
      description: `Veículos médicos para atender emergências em ${nomeEstado}`,
      features: [
        "Equipamentos médicos certificados",
        "Maca articulada",
        "Sistema de oxigênio",
        "Desfibrilador e monitor cardíaco",
        "Kit de primeiros socorros completo",
        "Comunicação via rádio"
      ],
      color: "red"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        button: "bg-green-600 hover:bg-green-700"
      },
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
        button: "bg-red-600 hover:bg-red-700"
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin size={32} className="mr-3" />
              <span className="text-lg font-medium">{nomeEstado}</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Serviços de Vans em {nomeEstado}
            </h1>
            <p className="text-xl text-gray-300">
              Oferecemos uma ampla gama de vans especializadas para atender as necessidades 
              específicas de clientes em {nomeEstado}. Cada veículo é cuidadosamente preparado 
              e equipado com os melhores recursos do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                  <div className="flex-1">
                    <div className={`w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center mb-6`}>
                      <div className={colors.text}>
                        {service.icon}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      {service.title} em {nomeEstado}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={`${colors.button} text-white`}>
                      Solicitar Orçamento em {nomeEstado}
                    </Button>
                  </div>
                  <div className="flex-1">
                    <div className={`h-80 bg-gradient-to-r from-${service.color}-400 to-${service.color}-600 rounded-lg shadow-lg`}>
                      {/* Placeholder para imagem do veículo */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Como Atendemos {nomeEstado}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nosso processo é otimizado para oferecer a melhor experiência aos clientes em {nomeEstado}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consulta Regional</h3>
              <p className="text-gray-600">
                Atendimento especializado para as necessidades específicas de {nomeEstado}.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Seleção Local</h3>
              <p className="text-gray-600">
                Apresentamos as melhores opções disponíveis para entrega em {nomeEstado}.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Preparação</h3>
              <p className="text-gray-600">
                Inspeção completa e preparação do veículo para as condições de {nomeEstado}.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega</h3>
              <p className="text-gray-600">
                Entregamos seu veículo em qualquer cidade de {nomeEstado}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Vantagens dos Nossos Serviços em {nomeEstado}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Conhecimento Regional</h3>
              <p className="text-gray-600">
                Entendemos as particularidades do mercado e as necessidades específicas em {nomeEstado}.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Logística Otimizada</h3>
              <p className="text-gray-600">
                Nossa rede de distribuição garante entrega rápida em todo o estado de {nomeEstado}.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Suporte Local</h3>
              <p className="text-gray-600">
                Equipe de suporte especializada para atender clientes em {nomeEstado}.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Parcerias Regionais</h3>
              <p className="text-gray-600">
                Mantemos parcerias com prestadores de serviços locais em {nomeEstado}.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Condições Especiais</h3>
              <p className="text-gray-600">
                Oferecemos condições de pagamento adaptadas ao mercado de {nomeEstado}.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Garantia Regional</h3>
              <p className="text-gray-600">
                Garantia e suporte pós-venda em toda a rede de parceiros em {nomeEstado}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interessado em nossos serviços em {nomeEstado}?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco para receber um orçamento personalizado para {nomeEstado}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Solicitar Orçamento
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicosEstadoPage;
