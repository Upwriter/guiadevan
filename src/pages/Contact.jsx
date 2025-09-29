import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Telefone e WhatsApp",
      description: "Atendimento direto e rápido",
      info: "Disponível 24 horas",
      action: "Falar Agora",
      link: "https://wa.link/8sjwum",
      highlight: true
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "E-mail",
      description: "Envie sua mensagem detalhada",
      info: "contato@guiadevan.com.br",
      action: "Enviar E-mail",
      link: "mailto:contato@guiadevan.com.br"
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Atendimento Nacional",
      description: "Presença em todo o Brasil",
      info: "Todos os estados brasileiros",
      action: "Consultar Região",
      link: "https://wa.link/8sjwum"
    }
  ]

  const businessHours = [
    { day: "Segunda a Sexta", hours: "08:00 - 18:00" },
    { day: "Sábado", hours: "08:00 - 12:00" },
    { day: "Domingo", hours: "Plantão WhatsApp" }
  ]

  const faqs = [
    {
      question: "Vocês atendem em todo o Brasil?",
      answer: "Sim! Atendemos todos os estados brasileiros com entrega em qualquer cidade do país."
    },
    {
      question: "Qual o prazo de entrega das vans?",
      answer: "O prazo varia conforme o tipo de van e customizações. Geralmente entre 15 a 45 dias úteis."
    },
    {
      question: "Oferecem financiamento?",
      answer: "Sim, trabalhamos com diversas modalidades de financiamento e condições especiais."
    },
    {
      question: "As vans têm garantia?",
      answer: "Todas as nossas vans contam com garantia completa e suporte técnico especializado."
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Criar mensagem para WhatsApp
    const message = `Olá! Vim do site GuiaDeVan.
    
Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject}

Mensagem: ${formData.message}`
    
    const whatsappUrl = `https://wa.link/8sjwum?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Estamos prontos para atender você! Entre em contato conosco e descubra 
            como podemos ajudar com a van ideal para suas necessidades.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold"
          >
            <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Como Falar Conosco</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Escolha a forma de contato que for mais conveniente para você. 
              Nossa equipe está sempre pronta para atendê-lo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`text-center hover:shadow-lg transition-all duration-300 ${method.highlight ? 'ring-2 ring-green-500 bg-green-50' : ''}`}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{method.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{method.info}</p>
                  <Button 
                    asChild
                    className={method.highlight ? "bg-green-500 hover:bg-green-600" : "bg-blue-600 hover:bg-blue-700"}
                  >
                    <a href={method.link} target="_blank" rel="noopener noreferrer">
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Ex: Orçamento para van executiva"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva suas necessidades, tipo de van desejada, quantidade, prazo, etc."
                    rows={5}
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </div>

            {/* Business Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-2" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700">{schedule.day}</span>
                        <span className="font-semibold text-blue-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700">
                      <CheckCircle className="w-4 h-4 inline mr-1" />
                      WhatsApp disponível 24h para emergências
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Perguntas Frequentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                        {index < faqs.length - 1 && <hr className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-blue-600 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Precisa de Atendimento Rápido?</h3>
                  <p className="mb-4">
                    Para orçamentos urgentes ou dúvidas rápidas, fale diretamente conosco no WhatsApp.
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Falar Agora no WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Estamos Aqui para Ajudar
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Nossa equipe especializada está sempre disponível para esclarecer suas dúvidas, 
            elaborar orçamentos personalizados e orientar na melhor escolha para suas necessidades.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Resposta Rápida</h3>
              <p className="text-gray-600">Respondemos todas as mensagens em até 2 horas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Atendimento Especializado</h3>
              <p className="text-gray-600">Consultores especializados em cada tipo de van</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Suporte Contínuo</h3>
              <p className="text-gray-600">Acompanhamento durante todo o processo</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            Não deixe para depois! Entre em contato agora e descubra como podemos 
            ajudar você a encontrar a van perfeita.
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
          >
            <a href="https://wa.link/8sjwum" target="_blank" rel="noopener noreferrer">
              Iniciar Conversa Agora
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Contact
