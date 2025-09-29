import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Substitua pelo número real do WhatsApp
    const whatsappLink = "https://wa.link/8sjwum";
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
