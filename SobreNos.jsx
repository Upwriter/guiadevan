import { Button } from '@/components/ui/button.jsx';
import { Award, Users, MapPin, Clock } from 'lucide-react';

const SobreNos = () => {
  const stats = [
    {
      icon: <Award size={32} />,
      number: "10+",
      label: "Anos de Experiência",
      color: "text-blue-600"
    },
    {
      icon: <Users size={32} />,
      number: "500+",
      label: "Clientes Satisfeitos",
      color: "text-green-600"
    },
    {
      icon: <MapPin size={32} />,
      number: "27",
      label: "Estados Atendidos",
      color: "text-purple-600"
    },
    {
      icon: <Clock size={32} />,
      number: "24h",
      label: "Suporte Disponível",
      color: "text-orange-600"
    }
  ];

  const values = [
    {
      title: "Qualidade",
      description: "Oferecemos apenas veículos que passaram por rigorosa inspeção e atendem aos mais altos padrões de qualidade."
    },
    {
      title: "Confiança",
      description: "Construímos relacionamentos duradouros baseados na transparência e honestidade em todas as nossas negociações."
    },
    {
      title: "Inovação",
      description: "Estamos sempre buscando as melhores tecnologias e soluções para oferecer a melhor experiência aos nossos clientes."
    },
    {
      title: "Compromisso",
      description: "Nosso compromisso é com a satisfação total do cliente, desde o primeiro contato até a entrega do veículo."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Sobre a GuiaDeVan
            </h1>
            <p className="text-xl text-blue-100">
              Somos uma empresa especializada em venda de vans com mais de uma década de experiência 
              no mercado automotivo brasileiro. Nossa missão é conectar pessoas aos veículos ideais 
              para suas necessidades específicas.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-md">
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Nossa História
              </h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                A GuiaDeVan nasceu da paixão por veículos especializados e da necessidade de oferecer 
                soluções completas para diferentes segmentos do mercado. Fundada em 2014, começamos 
                como uma pequena empresa familiar focada na venda de vans executivas para empresas 
                da região metropolitana de São Paulo.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Com o passar dos anos, expandimos nosso portfólio para incluir motorhomes e ambulâncias, 
                sempre mantendo nosso compromisso com a qualidade e o atendimento personalizado. 
                Hoje, atendemos clientes em todo o território nacional, oferecendo desde veículos 
                básicos até soluções completamente customizadas.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Nossa equipe é formada por profissionais experientes que entendem as particularidades 
                de cada tipo de veículo e as necessidades específicas de cada cliente. Trabalhamos 
                com as principais marcas do mercado e mantemos parcerias estratégicas que nos 
                permitem oferecer os melhores preços e condições de pagamento.
              </p>
              
              <p className="text-lg leading-relaxed">
                Acreditamos que cada cliente é único, e por isso oferecemos um atendimento 
                personalizado desde o primeiro contato até a entrega do veículo. Nossa missão 
                é facilitar o processo de compra e garantir que você encontre exatamente o que precisa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nossos Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os valores que guiam nossa empresa e definem como trabalhamos todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profissionais experientes e apaixonados por oferecer o melhor atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Equipe Comercial</h3>
              <p className="text-gray-600">
                Especialistas em identificar a van perfeita para cada necessidade e orçamento.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Equipe Técnica</h3>
              <p className="text-gray-600">
                Profissionais qualificados para inspeção e preparação de todos os veículos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Atendimento ao Cliente</h3>
              <p className="text-gray-600">
                Suporte dedicado para garantir sua satisfação em todas as etapas do processo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Quer conhecer melhor nosso trabalho?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e descubra como podemos ajudar você a encontrar a van ideal.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Falar Conosco
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;
