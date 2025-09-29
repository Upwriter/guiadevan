import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Truck, Heart, Home, Building, Users, Shield, Wrench } from 'lucide-react'
import vanExecutiva from '../assets/van-executiva.png'
import vanAmbulancia from '../assets/van-ambulancia.png'
import vanMotorhome from '../assets/van-motorhome.png'

const Services = () => {
  const mainServices = [
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: "Vans Executivas",
      description: "Vans de luxo para transporte executivo, corporativo e turismo. Conforto e elegância para seus clientes mais exigentes.",
      image: vanExecutiva,
      features: [
        "Ar condicionado dual zone",
        "Bancos de couro premium",
        "Sistema de som ambiente",
        "Wi-Fi e tomadas USB",
        "Iluminação LED interna",
        "Vidros escuros",
        "Piso antiderrapante",
        "Capacidade para 15-20 passageiros"
      ],
      applications: [
        "Transporte executivo",
        "Turismo corporativo",
        "Eventos empresariais",
        "Transfers aeroporto",
        "Excursões"
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Ambulâncias",
      description: "Ambulâncias totalmente equipadas para pronta entrega. Atendemos hospitais, clínicas, prefeituras e serviços de emergência.",
      image: vanAmbulancia,
      features: [
        "Equipamentos médicos completos",
        "Maca retrátil com rodas",
        "Sistema de oxigênio",
        "Desfibrilador",
        "Monitor cardíaco",
        "Suporte para soro",
        "Iluminação cirúrgica",
        "Sirene e giroflex"
      ],
      applications: [
        "Hospitais e clínicas",
        "Prefeituras municipais",
        "Bombeiros",
        "Serviços de emergência",
        "Eventos médicos"
      ]
    },
    {
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "Vans para Motorhome",
      description: "Vans preparadas especialmente para conversão em motorhome. Base perfeita para realizar o sonho da casa sobre rodas.",
      image: vanMotorhome,
      features: [
        "Estrutura reforçada",
        "Instalação elétrica 12V/220V",
        "Isolamento térmico e acústico",
        "Janelas especiais",
        "Teto solar opcional",
        "Piso preparado",
        "Ventilação adequada",
        "Suporte para equipamentos"
      ],
      applications: [
        "Motorhome familiar",
        "Viagens de longa distância",
        "Camping e aventura",
        "Trabalho itinerante",
        "Turismo sustentável"
      ]
    }
  ]

  const additionalServices = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Vans Corporativas",
      description: "Soluções personalizadas para empresas que precisam de transporte regular de funcionários ou clientes."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Vans para Turismo",
      description: "Veículos especialmente preparados para agências de turismo e operadoras de viagem."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Vans Blindadas",
      description: "Vans com blindagem para transporte de valores e pessoas que necessitam de segurança especial."
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Customização",
      description: "Adaptações e customizações especiais conforme a necessidade específica do cliente."
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Consulta Inicial",
      description: "Entre em contato conosco e conte suas necessidades. Nossa equipe fará uma análise detalhada do seu projeto."
    },
    {
      step: "2", 
      title: "Orçamento Personalizado",
      description: "Elaboramos um orçamento detalhado com todas as especificações e prazos de entrega."
    },
    {
      step: "3",
      title: "Produção/Preparação",
      description: "Iniciamos a preparação ou customização da van conforme suas especificações."
    },
    {
      step: "4",
      title: "Entrega",
      description: "Entregamos sua van pronta para uso, com toda documentação e garantia."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de vans especializadas para atender às mais diversas necessidades. 
            Qualidade, confiabilidade e atendimento personalizado em todo o Brasil.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold"
          >
            <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
            </a>
          </Button>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Principais Serviços</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Especializamos em três principais categorias de vans, cada uma com equipamentos 
              e características específicas para atender perfeitamente sua necessidade.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-3xl font-bold text-gray-900 ml-4">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Características:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Aplicações:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
                      Solicitar Informações
                    </a>
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Serviços Adicionais</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Além dos nossos principais serviços, oferecemos soluções especializadas 
              para necessidades específicas de diversos segmentos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Como Funciona</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nosso processo é simples e transparente. Desde o primeiro contato até a entrega, 
              você terá acompanhamento completo de todas as etapas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para Adquirir sua Van?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nossa equipe especializada está pronta para ajudar você a encontrar a van perfeita 
            para suas necessidades. Entre em contato agora e receba um orçamento personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold"
            >
              <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <a href="mailto:contato@guiadevan.com.br">
                Enviar E-mail
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
