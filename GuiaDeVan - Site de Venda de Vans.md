# GuiaDeVan - Site de Venda de Vans

Site completo para venda de vans executivas, motorhomes e ambulâncias, com páginas específicas para todos os estados e municípios do Brasil.

## 🚐 Sobre o Projeto

O GuiaDeVan é um site otimizado para SEO que oferece:

- **Vans Executivas**: Transporte corporativo premium
- **Motorhomes**: Casas sobre rodas para viagens
- **Ambulâncias**: Veículos médicos equipados

## 🌍 Cobertura Nacional

O site possui páginas específicas para:
- **27 Estados** + Distrito Federal
- **5.569 Municípios** do Brasil
- Páginas de serviços regionalizadas

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework frontend
- **Vite** - Build tool e dev server
- **React Router** - Roteamento dinâmico
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Vercel** - Deploy e hospedagem

## 📱 Funcionalidades

### Páginas Principais
- `/inicio` - Página inicial
- `/servico` - Serviços oferecidos
- `/sobrenos` - Sobre a empresa
- `/contato` - Formulário de contato

### Páginas Regionais
- `/{estado}` - Página do estado (ex: `/sp`)
- `/{estado}/{municipio}` - Página do município (ex: `/sp/sao-paulo`)
- `/servicos/{estado}` - Serviços por estado
- `/servicos/{estado}/{municipio}` - Serviços por município

### Componentes
- **Header** - Navegação principal com logo personalizado
- **Footer** - Informações de contato e links
- **WhatsApp Float** - Botão flutuante para contato
- **Páginas Dinâmicas** - Conteúdo personalizado por localização

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd guiadevan

# Instale as dependências
pnpm install

# Execute o servidor de desenvolvimento
pnpm run dev
```

### Build para Produção
```bash
# Gere o build otimizado
pnpm run build

# Visualize o build localmente
pnpm run preview
```

## 🌐 Deploy na Vercel

O projeto está configurado para deploy automático na Vercel:

1. Conecte o repositório à Vercel
2. Configure o domínio `www.guiadevan.com.br`
3. O deploy será automático a cada push

### Configurações da Vercel
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📊 SEO e Performance

### Otimizações Implementadas
- Meta tags otimizadas para cada página
- Open Graph e Twitter Cards
- Favicon personalizado
- URLs amigáveis para SEO
- Conteúdo único por localização
- Estrutura semântica HTML5

### Estrutura de URLs
```
www.guiadevan.com.br/
├── inicio/
├── servico/
├── sobrenos/
├── contato/
├── {estado}/                    # Ex: sp, rj, mg
├── {estado}/{municipio}/        # Ex: sp/sao-paulo
├── servicos/{estado}/           # Ex: servicos/sp
└── servicos/{estado}/{municipio}/ # Ex: servicos/sp/santos
```

## 📞 Contato

- **WhatsApp**: Botão flutuante em todas as páginas
- **Redes Sociais**: Instagram, Facebook, Reddit
- **Formulário**: Página de contato com formulário completo

## 🎨 Design

- **Responsivo**: Funciona em desktop, tablet e mobile
- **Moderno**: Design clean e profissional
- **Acessível**: Seguindo boas práticas de acessibilidade
- **Performático**: Otimizado para carregamento rápido

## 📈 Estratégia de SEO

O site foi desenvolvido com foco em SEO local:

1. **Páginas por Estado**: Conteúdo otimizado para cada estado
2. **Páginas por Município**: Presença em todas as cidades do Brasil
3. **Conteúdo Único**: Cada página tem conteúdo específico
4. **URLs Semânticas**: Estrutura clara e amigável
5. **Meta Tags Dinâmicas**: Títulos e descrições personalizadas

## 🔧 Manutenção

### Adicionando Novos Estados/Municípios
Os dados estão em `src/data/estados_municipios.json` e as páginas são geradas dinamicamente.

### Atualizando Conteúdo
- Páginas principais: `src/pages/`
- Componentes: `src/components/`
- Estilos: `src/App.css`

## 📄 Licença

Este projeto foi desenvolvido para a GuiaDeVan. Todos os direitos reservados.
