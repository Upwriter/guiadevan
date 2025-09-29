import { Button } from '@/components/ui/button.jsx';
import { Car, Users, Bed, Heart, CheckCircle } from 'lucide-react';

const Servicos = () => {
  const services = [
    {
      icon: <Car size={48} />,
      title: "Vans Executivas",
      description: "Veículos de luxo para transporte corporativo e executivo",
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
      description: "Casas sobre rodas equipadas para viagens e aventuras",
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
      description: "Veículos médicos equipados para emergências e transporte de pacientes",
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
            <h1 className="text-5xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-300">
              Oferecemos uma ampla gama de vans especializadas para atender suas necessidades específicas. 
              Cada veículo é cuidadosamente preparado e equipado com os melhores recursos do mercado.
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
                      {service.title}
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
                      Solicitar Orçamento
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Como Funciona Nosso Processo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simplificamos todo o processo de compra para que você tenha a melhor experiência possível.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consulta</h3>
              <p className="text-gray-600">
                Entre em contato conosco para discutir suas necessidades e preferências.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Seleção</h3>
              <p className="text-gray-600">
                Apresentamos as melhores opções baseadas no seu perfil e orçamento.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Inspeção</h3>
              <p className="text-gray-600">
                Realizamos inspeção completa e preparamos o veículo para entrega.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega</h3>
              <p className="text-gray-600">
                Entregamos seu veículo onde você estiver, em todo o Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interessado em nossos serviços?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco para receber um orçamento personalizado.
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

export default Servicos;
