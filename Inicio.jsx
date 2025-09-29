import { Button } from '@/components/ui/button.jsx';
import { Car, Shield, Clock, Star } from 'lucide-react';

const Inicio = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Venda de Vans Executivas, Motorhomes e Ambulâncias
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Encontre a van perfeita para suas necessidades. Oferecemos veículos de alta qualidade 
              à pronta entrega em todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Ver Nossos Veículos
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
              Por que escolher a GuiaDeVan?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Somos especialistas em venda de vans com anos de experiência no mercado, 
              oferecendo qualidade e confiança em cada negociação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Variedade de Modelos</h3>
              <p className="text-gray-600">
                Vans executivas, motorhomes e ambulâncias de diversas marcas e modelos.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garantia de Qualidade</h3>
              <p className="text-gray-600">
                Todos os veículos passam por rigorosa inspeção antes da entrega.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pronta Entrega</h3>
              <p className="text-gray-600">
                Veículos disponíveis para entrega imediata em todo o território nacional.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Premium</h3>
              <p className="text-gray-600">
                Suporte especializado desde a escolha até a entrega do seu veículo.
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
              Nossos Produtos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de vans para atender diferentes necessidades e orçamentos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Van Executiva */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
              <img src="/src/assets/van-executiva.png" alt="Van Executiva" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Vans Executivas</h3>
              <p className="text-center mb-4">Perfeitas para transporte executivo e corporativo, com acabamento premium e máximo conforto para os passageiros.</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300">Ver Modelos</button>
            </div>

            {/* Motorhome */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
              <img src="/src/assets/motorhome.png" alt="Motorhome" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Motorhomes</h3>
              <p className="text-center mb-4">Ideais para viagens e aventuras, equipadas com tudo que você precisa para uma experiência única na estrada.</p>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300">Ver Modelos</button>
            </div>

            {/* Ambulância */}
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
              <img src="/src/assets/ambulancia.png" alt="Ambulância" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Ambulâncias</h3>
              <p className="text-center mb-4">Ambulâncias completas e equipadas, prontas para atender emergências médicas com total segurança e eficiência.</p>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition duration-300">Ver Modelos</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para encontrar sua van ideal?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e descubra as melhores opções do mercado.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Falar com Especialista
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
