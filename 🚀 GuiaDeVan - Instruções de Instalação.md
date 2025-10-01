# 🚀 GuiaDeVan - Instruções de Instalação

## 📦 Conteúdo do Projeto

Este ZIP contém o projeto completo do **GuiaDeVan** com:
- ✅ **5.631 URLs únicas** cobrindo todo o Brasil
- ✅ **Design responsivo** com Tailwind CSS
- ✅ **Sistema de busca inteligente**
- ✅ **FAQ interativo**
- ✅ **WhatsApp flutuante**
- ✅ **Páginas dinâmicas** para estados e municípios

## 🛠️ Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **pnpm**
- **Git** (opcional)

## 📋 Instalação

### 1. Extrair o Projeto
```bash
# Extrair o arquivo ZIP
unzip guiadevan-projeto-completo.zip
cd guiadevan-site
```

### 2. Instalar Dependências
```bash
# Usando npm
npm install

# OU usando pnpm (recomendado)
pnpm install
```

### 3. Executar em Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
npm run dev
# OU
pnpm run dev

# Acesse: http://localhost:5173
```

### 4. Build para Produção
```bash
# Gerar build de produção
npm run build
# OU
pnpm run build

# Testar build localmente
npm run preview
# OU
pnpm run preview
```

## 🌐 Deploy no Netlify

### Opção 1: Deploy Manual
1. Faça o build: `npm run build`
2. Acesse [netlify.com](https://netlify.com)
3. Arraste a pasta `dist/` para o Netlify

### Opção 2: Deploy via Git
1. Crie um repositório no GitHub
2. Faça push do código
3. Conecte o repositório no Netlify
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

## 📱 Links do WhatsApp

### Localização Atual
O link do WhatsApp está configurado como: `https://wa.link/8sjwum`

### Como Alterar
Para alterar o link do WhatsApp, procure por `https://wa.link/8sjwum` nos seguintes arquivos:

1. **src/components/WhatsAppFloat.jsx** (linha 8)
2. **src/pages/Home.jsx** (múltiplas ocorrências)
3. **src/components/StatePage.jsx** (múltiplas ocorrências)
4. **src/components/CityPage.jsx** (múltiplas ocorrências)
5. **src/pages/Services.jsx** (múltiplas ocorrências)
6. **src/pages/Contact.jsx** (múltiplas ocorrências)

### Busca Rápida
```bash
# Encontrar todas as ocorrências
grep -r "https://wa.link/8sjwum" src/

# Substituir em todos os arquivos (Linux/Mac)
find src/ -type f -name "*.jsx" -exec sed -i 's|https://wa.link/8sjwum|SEU_NOVO_LINK|g' {} +
```

## 🗂️ Estrutura do Projeto

```
guiadevan-site/
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/            # Imagens e dados
│   │   ├── images/        # Logos e ícones
│   │   ├── municipios_utf8.csv
│   │   └── estados_info.json
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes de interface
│   │   ├── Header.jsx
│   │   ├── WhatsAppFloat.jsx
│   │   └── ...
│   ├── pages/            # Páginas principais
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── utils/            # Utilitários
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Ponto de entrada
│   └── index.css         # Estilos globais
├── package.json          # Dependências
├── vite.config.js        # Configuração Vite
├── tailwind.config.js    # Configuração Tailwind
└── netlify.toml          # Configuração Netlify
```

## 🎯 URLs Disponíveis

### Páginas Principais
- `/inicio` - Página inicial
- `/servicos` - Serviços gerais
- `/sobrenos` - Sobre a empresa
- `/contato` - Contato

### Páginas Dinâmicas
- `/{estado}` - Ex: `/sao-paulo`
- `/{estado}/{municipio}` - Ex: `/sao-paulo/campinas`
- `/servicos/{estado}` - Ex: `/servicos/sao-paulo`

## 🔧 Troubleshooting

### Erro: "Module not found"
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Tailwind CSS not working"
```bash
# Verificar se o Tailwind está configurado
npm run build
# Se der erro, reinstalar Tailwind
npm install -D tailwindcss@3.4.0 postcss autoprefixer
```

### Erro no Deploy
- Verifique se o arquivo `_redirects` está em `public/`
- Confirme que o build está gerando a pasta `dist/`
- Verifique as configurações no `netlify.toml`

## 📞 Suporte

Para dúvidas sobre o projeto:
1. Verifique este README
2. Consulte a documentação do [Vite](https://vitejs.dev/)
3. Consulte a documentação do [Tailwind CSS](https://tailwindcss.com/)

---

**Projeto desenvolvido com React + Vite + Tailwind CSS**
**Total: 5.631 URLs únicas cobrindo todo o Brasil** 🇧🇷
