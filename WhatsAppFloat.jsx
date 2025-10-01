import whatsappIcon from '../assets/whatsapp-icon.png'

const WhatsAppFloat = () => {
  const whatsappLink = "https://wa.link/8sjwum"

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-8 h-8"
        />
      </a>
    </div>
  )
}

export default WhatsAppFloat
