# Links do WhatsApp - GuiaDeVan

## Link Atual
O link do WhatsApp usado em todo o site é: `https://wa.link/8sjwum`

## Localização dos Links

### 1. Componente Header
- **Arquivo**: `src/components/Header.jsx`
- **Linha**: 9 (botão "ENTRAR EM CONTATO")
- **Linha**: 130 (versão mobile)

### 2. Componente WhatsApp Flutuante
- **Arquivo**: `src/components/WhatsAppFloat.jsx`
- **Linha**: 4 (constante whatsappLink)

### 3. Páginas Principais
- **Home**: `src/pages/Home.jsx` - múltiplas ocorrências nos botões de CTA
- **Services**: `src/pages/Services.jsx` - múltiplas ocorrências nos botões de CTA
- **About**: `src/pages/About.jsx` - múltiplas ocorrências nos botões de CTA
- **Contact**: `src/pages/Contact.jsx` - múltiplas ocorrências nos botões de CTA

### 4. Componentes de Páginas Dinâmicas
- **StatePage**: `src/components/StatePage.jsx` - múltiplas ocorrências
- **CityPage**: `src/components/CityPage.jsx` - múltiplas ocorrências

### 5. Componente FAQ
- **Arquivo**: `src/components/FAQ.jsx`
- **Linha**: 95 (botão "Falar no WhatsApp")

## Como Alterar o Link

### Opção 1: Busca e Substituição Global
Use o comando de busca e substituição do seu editor:
- **Buscar**: `https://wa.link/8sjwum`
- **Substituir**: `SEU_NOVO_LINK_AQUI`

### Opção 2: Criar Constante Global
1. Crie um arquivo `src/config/constants.js`:
```javascript
export const WHATSAPP_LINK = "https://wa.link/8sjwum"
```

2. Importe e use em todos os componentes:
```javascript
import { WHATSAPP_LINK } from '../config/constants'
```

### Opção 3: Usar Variável de Ambiente
1. Adicione no arquivo `.env`:
```
VITE_WHATSAPP_LINK=https://wa.link/8sjwum
```

2. Use nos componentes:
```javascript
const whatsappLink = import.meta.env.VITE_WHATSAPP_LINK
```

## Recomendação
Para facilitar futuras alterações, recomendamos implementar a **Opção 2** (constante global) ou **Opção 3** (variável de ambiente).

## Verificação
Após alterar o link, teste em:
1. Botão flutuante do WhatsApp
2. Botões de CTA nas páginas principais
3. Formulário de contato
4. Links nas páginas de estados e municípios
5. FAQ

## Observações
- O link atual funciona em dispositivos móveis e desktop
- Abre diretamente no WhatsApp Web ou aplicativo
- Não requer número de telefone visível no código
