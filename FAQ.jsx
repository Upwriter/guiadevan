import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = ({ className = "" }) => {
  const [openItems, setOpenItems] = useState(new Set())

  const faqData = [
    {
      question: "Vocês atendem em todo o Brasil?",
      answer: "Sim! Atendemos todos os estados brasileiros com entrega em qualquer cidade do país. Temos uma rede de parceiros e logística especializada para garantir que sua van chegue até você, independentemente da localização."
    },
    {
      question: "Qual o prazo de entrega das vans?",
      answer: "O prazo varia conforme o tipo de van e customizações solicitadas. Geralmente entre 15 a 45 dias úteis. Vans executivas padrão têm prazo menor, enquanto ambulâncias e vans customizadas podem levar mais tempo devido aos equipamentos especiais."
    },
    {
      question: "Oferecem financiamento?",
      answer: "Sim, trabalhamos com diversas modalidades de financiamento e condições especiais. Temos parcerias com bancos e financeiras para oferecer as melhores condições do mercado. Entre em contato para simular seu financiamento."
    },
    {
      question: "As vans têm garantia?",
      answer: "Todas as nossas vans contam com garantia completa do fabricante e suporte técnico especializado. Além disso, oferecemos garantia adicional nos equipamentos e customizações realizadas pela nossa equipe."
    },
    {
      question: "Posso personalizar minha van?",
      answer: "Absolutamente! Oferecemos diversos níveis de customização, desde alterações simples até projetos completamente personalizados. Nossa equipe técnica pode adaptar a van conforme suas necessidades específicas."
    },
    {
      question: "Vocês fazem manutenção das vans vendidas?",
      answer: "Sim, oferecemos serviços de manutenção preventiva e corretiva para todas as vans que vendemos. Temos oficinas especializadas e equipe técnica treinada para manter seu veículo sempre em perfeitas condições."
    },
    {
      question: "É possível fazer um test drive?",
      answer: "Claro! Agendamos test drives para que você possa conhecer pessoalmente a van antes da compra. Entre em contato conosco para agendar uma visita e teste o veículo que mais se adequa às suas necessidades."
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos diversas formas de pagamento: à vista (dinheiro, PIX, transferência), financiamento bancário, consórcio, cartão de crédito (parcelado) e também fazemos análise para pagamentos especiais conforme o perfil do cliente."
    }
  ]

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Tire suas dúvidas sobre nossos serviços, processos e condições. 
          Se não encontrar a resposta que procura, entre em contato conosco.
        </p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqData.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader 
              className="cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleItem(index)}
            >
              <CardTitle className="flex items-center justify-between text-lg">
                <span>{item.question}</span>
                {openItems.has(index) ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </CardTitle>
            </CardHeader>
            {openItems.has(index) && (
              <CardContent className="pt-0 pb-6">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 mb-6">
          Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.link/8sjwum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors duration-200"
          >
            Falar no WhatsApp
          </a>
          <a
            href="mailto:contato@guiadevan.com.br"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
          >
            Enviar E-mail
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQ
