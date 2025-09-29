import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoVan: '',
    mensagem: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Reset do formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      tipoVan: '',
      mensagem: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Telefone",
      info: "(11) 99999-9999",
      description: "Atendimento de segunda a sexta, das 8h às 18h"
    },
    {
      icon: <Mail size={24} />,
      title: "E-mail",
      info: "contato@guiadevan.com.br",
      description: "Resposta em até 24 horas"
    },
    {
      icon: <MapPin size={24} />,
      title: "Endereço",
      info: "São Paulo, SP - Brasil",
      description: "Atendemos todo o território nacional"
    },
    {
      icon: <Clock size={24} />,
      title: "Horário de Funcionamento",
      info: "Segunda a Sexta: 8h às 18h",
      description: "Sábado: 8h às 12h"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-300">
              Estamos aqui para ajudar você a encontrar a van perfeita. 
              Entre em contato conosco e receba atendimento personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Envie sua Mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="tipoVan" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Van de Interesse
                  </label>
                  <select
                    id="tipoVan"
                    name="tipoVan"
                    value={formData.tipoVan}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="executiva">Van Executiva</option>
                    <option value="motorhome">Motorhome</option>
                    <option value="ambulancia">Ambulância</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Conte-nos mais sobre suas necessidades..."
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                    <div className="text-blue-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 font-medium mb-1">
                        {item.info}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Prefere falar pelo WhatsApp?
                </h3>
                <p className="text-gray-600 mb-4">
                  Para um atendimento mais rápido, entre em contato conosco pelo WhatsApp.
                </p>
                <Button 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    const whatsappLink = "https://wa.link/8sjwum";
                    window.open(whatsappLink, '_blank');
                  }}
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Algumas das perguntas mais comuns que recebemos de nossos clientes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Vocês entregam em todo o Brasil?
              </h3>
              <p className="text-gray-600">
                Sim, atendemos todo o território nacional. Temos parcerias com transportadoras 
                especializadas para garantir a entrega segura do seu veículo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Os veículos possuem garantia?
              </h3>
              <p className="text-gray-600">
                Todos os nossos veículos passam por rigorosa inspeção e oferecemos garantia 
                conforme especificações do fabricante e condições do veículo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                É possível financiar a compra?
              </h3>
              <p className="text-gray-600">
                Sim, trabalhamos com diversas opções de financiamento e parcelamento. 
                Nossa equipe pode ajudar você a encontrar a melhor condição de pagamento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Posso visitar os veículos antes da compra?
              </h3>
              <p className="text-gray-600">
                Claro! Agendamos visitas para que você possa conhecer pessoalmente o veículo 
                e tirar todas as suas dúvidas antes da decisão de compra.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
