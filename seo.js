// Configurações de SEO para o site GuiaDeVan

export const siteConfig = {
  name: "GuiaDeVan",
  title: "GuiaDeVan - Venda de Vans Executivas, Ambulâncias e Motorhomes",
  description: "Especialistas em venda de vans executivas, ambulâncias e veículos para motorhome em todo o Brasil. Qualidade, confiabilidade e atendimento personalizado.",
  url: "https://www.guiadevan.com.br",
  ogImage: "/og-image.jpg",
  keywords: ["vans executivas", "ambulâncias", "motorhome", "venda de vans", "transporte executivo", "veículos comerciais"],
  author: "GuiaDeVan",
  twitterHandle: "@guiadevan"
}

export const generatePageTitle = (pageTitle, location = null) => {
  let title = pageTitle
  
  if (location) {
    if (location.cidade && location.estado) {
      title = `${pageTitle} em ${location.cidade}, ${location.estado}`
    } else if (location.estado) {
      title = `${pageTitle} em ${location.estado}`
    }
  }
  
  return `${title} | ${siteConfig.name}`
}

export const generatePageDescription = (baseDescription, location = null) => {
  let description = baseDescription
  
  if (location) {
    if (location.cidade && location.estado) {
      description = `${baseDescription} Atendemos ${location.cidade}, ${location.estado} com entrega rápida e atendimento personalizado.`
    } else if (location.estado) {
      description = `${baseDescription} Atendemos todo o estado de ${location.estado} com entrega rápida e atendimento personalizado.`
    }
  }
  
  return description
}

export const generateKeywords = (baseKeywords, location = null) => {
  let keywords = [...baseKeywords]
  
  if (location) {
    if (location.cidade && location.estado) {
      keywords.push(
        `vans ${location.cidade}`,
        `ambulâncias ${location.cidade}`,
        `motorhome ${location.cidade}`,
        `${location.cidade} ${location.estado}`,
        `transporte executivo ${location.cidade}`
      )
    } else if (location.estado) {
      keywords.push(
        `vans ${location.estado}`,
        `ambulâncias ${location.estado}`,
        `motorhome ${location.estado}`,
        `transporte executivo ${location.estado}`
      )
    }
  }
  
  return keywords.join(", ")
}

// Função para atualizar meta tags dinamicamente
export const updateMetaTags = (title, description, keywords) => {
  // Atualizar título
  document.title = title
  
  // Atualizar meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.name = 'description'
    document.head.appendChild(metaDescription)
  }
  metaDescription.content = description
  
  // Atualizar meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]')
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta')
    metaKeywords.name = 'keywords'
    document.head.appendChild(metaKeywords)
  }
  metaKeywords.content = keywords
  
  // Atualizar Open Graph tags
  let ogTitle = document.querySelector('meta[property="og:title"]')
  if (!ogTitle) {
    ogTitle = document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    document.head.appendChild(ogTitle)
  }
  ogTitle.content = title
  
  let ogDescription = document.querySelector('meta[property="og:description"]')
  if (!ogDescription) {
    ogDescription = document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    document.head.appendChild(ogDescription)
  }
  ogDescription.content = description
}
