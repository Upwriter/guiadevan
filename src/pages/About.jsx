import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye, Award, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react'
import vanExecutiva from '../assets/van-executiva.png'
import vanMotorhome from '../assets/van-motorhome.png'

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Missão",
      description: "Proporcionar soluções completas em venda de vans com excelência, qualidade e atendimento personalizado, garantindo a satisfação total dos nossos clientes em todo o Brasil."
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Visão",
      description: "Ser reconhecida como a principal referência nacional em venda de vans especializadas, oferecendo inovação, qualidade superior e atendimento diferenciado."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Valores",
      description: "Compromisso com a qualidade, transparência nas relações, inovação constante, responsabilidade social e foco total na satisfação do cliente."
    }
  ]

  const differentials = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Equipe Especializada",
      description: "Profissionais com anos de experiência no mercado de vans, prontos para orientar na melhor escolha para cada necessidade específica."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Agilidade na Entrega",
      description: "Processos otimizados que garantem entregas rápidas sem comprometer a qualidade. Cumprimos rigorosamente os prazos estabelecidos."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Garantia de Qualidade",
      description: "Todos os nossos veículos passam por rigoroso controle de qualidade e contam com garantia completa e suporte técnico especializado."
    },
    {
      icon: <Star className="w-12 h-12 text-blue-600" />,
      title: "Atendimento Personalizado",
      description: "Cada cliente é único. Oferecemos soluções customizadas e acompanhamento personalizado durante todo o processo de compra."
    }
  ]

  const achievements = [
    {
      number: "500+",
      label: "Vans Entregues",
      description: "Mais de 500 vans vendidas em todo o Brasil"
    },
    {
      number: "15+",
      label: "Anos de Experiência",
      description: "Mais de 15 anos atuando no mercado"
    },
    {
      number: "27",
      label: "Estados Atendidos",
      description: "Presença em todos os estados brasileiros"
    },
    {
      number: "98%",
      label: "Satisfação",
      description: "Índice de satisfação dos clientes"
    }
  ]

  const timeline = [
    {
      year: "2008",
      title: "Fundação",
      description: "Início das atividades com foco em vans executivas na região Sudeste."
    },
    {
      year: "2012",
      title: "Expansão Nacional",
      description: "Ampliação do atendimento para todo o território nacional."
    },
    {
      year: "2015",
      title: "Diversificação",
      description: "Inclusão de ambulâncias e vans para motorhome no portfólio."
    },
    {
      year: "2018",
      title: "Modernização",
      description: "Implementação de novos processos e tecnologias para melhor atendimento."
    },
    {
      year: "2023",
      title: "Liderança",
      description: "Consolidação como referência nacional em venda de vans especializadas."
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
                Sobre a GuiaDeVan
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                Especialistas em venda de vans com mais de 15 anos de experiência no mercado brasileiro
              </p>
              <p className="text-lg mb-8 text-blue-200 leading-relaxed">
                Somos uma empresa consolidada no mercado de venda de vans especializadas, 
                oferecendo soluções completas para diversos segmentos. Nossa trajetória é 
                marcada pela excelência no atendimento e pela qualidade superior dos nossos veículos.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold"
              >
                <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
                  Conheça Nossos Serviços
                </a>
              </Button>
            </div>
            <div>
              <img 
                src={vanExecutiva} 
                alt="Van Executiva GuiaDeVan" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Pilares</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossos valores fundamentais guiam cada decisão e ação, garantindo que sempre 
              entreguemos o melhor para nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Números</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Números que refletem nossa dedicação e o reconhecimento dos nossos clientes 
              ao longo dos anos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white text-4xl font-bold py-6 px-4 rounded-lg mb-4">
                  {achievement.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{achievement.label}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              O que nos torna únicos no mercado e por que somos a escolha preferida 
              de clientes em todo o Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    {differential.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{differential.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{differential.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa História</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Uma trajetória de crescimento, inovação e compromisso com a excelência 
              no atendimento aos nossos clientes.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nosso Compromisso com Você
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Na GuiaDeVan, entendemos que cada cliente tem necessidades únicas. Por isso, 
                nosso compromisso vai além da simples venda de veículos. Oferecemos consultoria 
                especializada, acompanhamento personalizado e suporte completo durante todo o 
                processo.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nossa equipe de especialistas está sempre atualizada com as últimas tendências 
                e tecnologias do mercado, garantindo que você receba não apenas um veículo, 
                mas uma solução completa que atenda perfeitamente às suas expectativas.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Atendimento personalizado e consultivo</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Garantia completa e suporte técnico</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Transparência em todo o processo</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Relacionamento de longo prazo</span>
                </div>
              </div>

              <Button 
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              >
                <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
                  Fale com Nossa Equipe
                </a>
              </Button>
            </div>
            <div>
              <img 
                src={vanMotorhome} 
                alt="Van Motorhome" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para Conhecer Nossas Soluções?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você a encontrar 
            a van perfeita para suas necessidades. Nossa equipe está pronta para atendê-lo.
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

export default About
