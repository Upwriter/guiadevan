import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Clock, Shield, DollarSign, Phone, Mail, MapPin } from 'lucide-react'
import LocationSearch from '../components/LocationSearch'
import FAQ from '../components/FAQ'
import vanExecutiva from '../assets/van-executiva.png'
import vanAmbulancia from '../assets/van-ambulancia.png'
import vanMotorhome from '../assets/van-motorhome.png'

const Home = () => {
  const services = [
    {
      title: "Vans Executivas",
      description: "Vans de luxo para transporte executivo e corporativo. Conforto e elegância para seus clientes e colaboradores.",
      image: vanExecutiva,
      features: ["Ar condicionado", "Bancos de couro", "Som ambiente", "Wi-Fi"]
    },
    {
      title: "Ambulâncias",
      description: "Ambulâncias equipadas para pronta entrega. Atendemos hospitais, clínicas e serviços de emergência.",
      image: vanAmbulancia,
      features: ["Equipamentos médicos", "Maca retrátil", "Oxigênio", "Desfibrilador"]
    },
    {
      title: "Vans para Motorhome",
      description: "Vans preparadas para conversão em motorhome. Realize o sonho da casa sobre rodas.",
      image: vanMotorhome,
      features: ["Estrutura reforçada", "Instalação elétrica", "Isolamento térmico", "Janelas especiais"]
    }
  ]

  const differentials = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Agilidade",
      description: "Entrega rápida e atendimento eficiente para suas necessidades."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Confiabilidade",
      description: "Veículos de qualidade com garantia e suporte técnico completo."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Atendimento",
      description: "Equipe especializada para orientar na melhor escolha para seu negócio."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Custo Benefício",
      description: "Preços competitivos e condições de pagamento facilitadas."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Venda de Vans em Todo o Brasil: Qualidade e Excelência
              </h1>
              <p className="text-xl mb-4 text-blue-100">
                Especialistas em venda de vans executivas, ambulâncias e veículos para motorhome
              </p>
              <p className="text-lg mb-8 text-blue-200">
                Oferecemos vans de alta qualidade para diversos segmentos. 
                <strong className="text-white"> Atendimento personalizado em todo território nacional.</strong>
              </p>
              <p className="text-lg mb-8 text-blue-200">
                Solicite um orçamento agora e garanta o veículo ideal para seu negócio!
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold"
              >
                <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
                  Pedir Orçamento
                </a>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={vanExecutiva} 
                alt="Van Executiva GuiaDeVan" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Nossa Missão</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nossa empresa tem como missão proporcionar soluções completas em venda de vans 
                com excelência e profissionalismo. Nosso compromisso é oferecer veículos de 
                qualidade superior com rapidez, segurança e atendimento personalizado.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Garantimos o bem-estar e a satisfação dos nossos clientes, oferecendo desde 
                vans executivas até ambulâncias totalmente equipadas, sempre com foco na 
                qualidade e no melhor custo-benefício do mercado.
              </p>
              <Button 
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
                  Entre em contato e conheça nossas soluções!
                </a>
              </Button>
            </div>
            <div>
              <img 
                src={vanMotorhome} 
                alt="Van Motorhome" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-lg text-gray-600 mb-8">
              Oferecemos vans personalizadas conforme sua demanda. Veja alguns dos serviços 
              que oferecemos para todo o Brasil:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Service Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Atendimento Especializado para Todo o Brasil
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Peça seu orçamento rápido e personalizado.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span>Agilidade e prontidão para entregas em todo território nacional</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span>Vans equipadas para diversos segmentos e necessidades</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span>Atendimento 24h com profissionais especializados</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src={vanAmbulancia} 
                  alt="Ambulância" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que nos Escolher?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pontualidade & Eficiência</h3>
              <p className="text-gray-600">
                Garantimos que as entregas sejam realizadas sempre no prazo estabelecido, sem atrasos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diversidade de Soluções</h3>
              <p className="text-gray-600">
                Com atendimento nacional, estamos à disposição para fornecer vans para diversos 
                segmentos e necessidades específicas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Atendimento Exclusivo</h3>
              <p className="text-gray-600">
                O atendimento de venda de vans é feito de pessoa para pessoa, 
                temos atendimento exclusivo e personalizado.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Somos uma empresa com anos de experiência, comprometida em oferecer o melhor 
              serviço de venda de vans no Brasil. Garantimos agilidade na entrega, 
              segurança na qualidade dos veículos e atendimento personalizado para 
              atender às suas necessidades.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Nossa missão é oferecer soluções práticas, confiáveis e com excelente 
              custo-benefício, tornando seu investimento mais simples e eficiente.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
            >
              <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
                Peça seu orçamento agora!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Search Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Encontre Vans na Sua Região</h2>
            <p className="text-lg text-gray-600 mb-8">
              Busque por sua cidade ou estado e veja nossos serviços disponíveis na sua região.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <LocationSearch />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-lg text-gray-600">
              Não fique com dúvidas, entre em contato conosco! Conheça mais sobre nossos 
              serviços, orçamentos e nossa empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Telefone</h3>
              <p className="text-gray-600">Atendimento por telefone e WhatsApp</p>
              <Button 
                asChild
                className="mt-4 bg-green-500 hover:bg-green-600"
              >
                <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">E-mail</h3>
              <p className="text-gray-600">Envie sua mensagem por e-mail</p>
              <Button 
                asChild
                variant="outline"
                className="mt-4"
              >
                <a href="mailto:contato@guiadevan.com.br">
                  Enviar E-mail
                </a>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Localização</h3>
              <p className="text-gray-600">Atendemos todo o Brasil</p>
              <Button 
                asChild
                variant="outline"
                className="mt-4"
              >
                <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
                  Consultar Região
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Atendemos por telefone, WhatsApp e pelos formulários disponíveis aqui no site.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Nossa missão é oferecer as melhores soluções com eficiência e compromisso.
            </p>
            <p className="text-xl font-semibold text-blue-600">
              Não deixe para depois; fale com nossa equipe agora mesmo!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
