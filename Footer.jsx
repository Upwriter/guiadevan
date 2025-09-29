import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/favicon.png" 
                alt="GuiaDeVan" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold">GuiaDeVan</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Especialistas em venda de vans executivas, motorhomes e ambulâncias à pronta entrega. 
              Atendemos todo o Brasil com qualidade e confiança.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <p className="text-gray-300">(13) 99118-3894</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-300">contato@guiadevan.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-300">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <div className="space-y-2">
              <a href="/inicio" className="block text-gray-300 hover:text-white transition-colors">
                Início
              </a>
              <a href="/servico" className="block text-gray-300 hover:text-white transition-colors">
                Serviços
              </a>
              <a href="/sobrenos" className="block text-gray-300 hover:text-white transition-colors">
                Sobre Nós
              </a>
              <a href="/contato" className="block text-gray-300 hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 GuiaDeVan. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
