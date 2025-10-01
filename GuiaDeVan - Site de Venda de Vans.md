# GuiaDeVan - Site de Venda de Vans

## 📋 Sobre o Projeto

O **GuiaDeVan** é um site completo para venda de vans executivas, ambulâncias e veículos para motorhome em todo o Brasil. O site foi desenvolvido com foco em SEO e posicionamento local, oferecendo páginas específicas para todos os estados e municípios brasileiros.

## 🚀 Funcionalidades

### ✅ Páginas Principais
- **Início** (`/inicio`) - Página principal com apresentação da empresa
- **Serviços** (`/servicos`) - Detalhes dos serviços oferecidos
- **Sobre Nós** (`/sobrenos`) - Informações sobre a empresa
- **Contato** (`/contato`) - Formulários e informações de contato

### ✅ Páginas Dinâmicas por Localização
- **Estados**: Páginas para todos os 27 estados brasileiros
  - Exemplo: `/sao-paulo`, `/rio-de-janeiro`, `/minas-gerais`
- **Municípios**: Páginas para todos os 5.571 municípios do Brasil
  - Exemplo: `/sao-paulo/campinas`, `/rio-de-janeiro/niteroi`
- **Serviços por Estado**: `/servicos/sao-paulo`
- **Serviços por Município**: `/servicos/sao-paulo/campinas`

### ✅ Funcionalidades Interativas
- **Busca Inteligente**: Sistema de busca por cidade ou estado com sugestões automáticas
- **FAQ Interativo**: Seção de perguntas frequentes com expansão/contração
- **WhatsApp Flutuante**: Botão fixo para contato direto via WhatsApp
- **Navegação Responsiva**: Design adaptável para desktop e mobile

### ✅ Otimizações SEO
- Meta tags dinâmicas por localização
- URLs amigáveis e estruturadas
- Conteúdo otimizado para cada região
- Schema markup para melhor indexação

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **React Router** - Roteamento dinâmico
- **Tailwind CSS** - Estilização
- **Shadcn/UI** - Componentes de interface
- **Lucide React** - Ícones
- **Vite** - Build tool
- **Netlify** - Hospedagem e deploy

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx              # Cabeçalho com navegação
│   ├── WhatsAppFloat.jsx       # Botão flutuante do WhatsApp
│   ├── StatePage.jsx           # Template para páginas de estados
│   ├── CityPage.jsx            # Template para páginas de municípios
│   ├── DynamicRouter.jsx       # Sistema de roteamento dinâmico
│   ├── LocationSearch.jsx      # Componente de busca por localização
│   ├── FAQ.jsx                 # Seção de perguntas frequentes
│   └── ui/                     # Componentes de interface
├── pages/
│   ├── Home.jsx                # Página inicial
│   ├── Services.jsx            # Página de serviços
│   ├── About.jsx               # Página sobre nós
│   └── Contact.jsx             # Página de contato
├── assets/
│   ├── images/                 # Imagens e ícones
│   ├── estados_info.json       # Dados dos estados
│   ├── municipios_por_estado.json # Dados dos municípios
│   └── municipios_utf8.csv     # Lista completa de municípios
├── utils/
│   └── seo.js                  # Utilitários para SEO
└── App.jsx                     # Componente principal
```

## 🔗 Links do WhatsApp

### Localização Atual
O link do WhatsApp usado em todo o site é: `https://wa.link/8sjwum`

### Como Alterar
Para alterar o link do WhatsApp, consulte o arquivo `WHATSAPP_LINKS.md` que contém:
- Localização de todos os links no código
- Instruções para alteração global
- Recomendações para facilitar futuras mudanças

## 🌐 URLs Disponíveis

### Páginas Principais
- `/` → Redireciona para `/inicio`
- `/inicio` → Página inicial
- `/servicos` → Página de serviços
- `/sobrenos` → Página sobre nós
- `/contato` → Página de contato

### Páginas por Estado (27 estados)
- `/acre` → Página do Acre
- `/sao-paulo` → Página de São Paulo
- `/rio-de-janeiro` → Página do Rio de Janeiro
- ... (todos os 27 estados)

### Páginas por Município (5.571 municípios)
- `/sao-paulo/campinas` → Campinas, SP
- `/rio-de-janeiro/niteroi` → Niterói, RJ
- `/minas-gerais/belo-horizonte` → Belo Horizonte, MG
- ... (todos os municípios)

### Páginas de Serviços por Localização
- `/servicos/sao-paulo` → Serviços em São Paulo
- `/servicos/sao-paulo/campinas` → Serviços em Campinas, SP

## 🚀 Deploy e Hospedagem

O site está configurado para deploy automático no **Netlify** com:
- Build automático via `pnpm run build`
- Redirects configurados para SPA
- Headers de segurança
- Cache otimizado para assets

### Comandos de Deploy
```bash
# Build local
pnpm run build

# Preview local
pnpm run preview

# Deploy (via Netlify)
# O deploy é feito automaticamente via interface do Netlify
```

## 📊 Estatísticas do Projeto

- **Total de Páginas**: 5.626 páginas únicas
  - 4 páginas principais
  - 27 páginas de estados
  - 5.571 páginas de municípios
  - 24 páginas de serviços (estados + municípios principais)

- **Cobertura Geográfica**: 100% do território brasileiro
  - Todos os 26 estados + Distrito Federal
  - Todos os 5.571 municípios brasileiros

## 🎯 Estratégia de SEO

### Conteúdo Localizado
- Títulos únicos para cada localização
- Descrições personalizadas por região
- Keywords específicas por cidade/estado
- Meta tags dinâmicas

### Estrutura de URLs
- URLs amigáveis e hierárquicas
- Padrão consistente: `/estado/municipio`
- Redirects automáticos para SPA

### Performance
- Lazy loading de componentes
- Otimização de imagens
- Minificação de CSS/JS
- Cache estratégico

## 📞 Contato e Suporte

- **WhatsApp**: https://wa.link/8sjwum
- **E-mail**: contato@guiadevan.com.br
- **Site**: www.guiadevan.com.br

## 📝 Licença

Este projeto foi desenvolvido especificamente para a empresa GuiaDeVan.

---

**Desenvolvido com ❤️ para revolucionar a venda de vans no Brasil**
