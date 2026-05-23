# Granaup

Granaup e um prototipo de aplicativo de educacao financeira para jovens, com foco em metas visuais, controle de gastos em tempo real e uma experiencia mais proxima de redes sociais do que de extratos bancarios tradicionais.

O projeto roda totalmente no front-end, sem backend. As informacoes cadastradas pelo usuario sao salvas localmente no navegador com `localStorage`.

## Funcionalidades

- Onboarding com escolha de avatar, fonte de renda e objetivo principal.
- Feed financeiro para cadastrar entradas e gastos em tempo real.
- Status do mes com termometro visual.
- Regra dos envelopes digitais: 60% role e gastos livres, 30% sonhos e 10% futuro.
- Fabrica de sonhos com metas visuais, progresso e poupanca automatica.
- Desafios gamificados e score do app.
- Educacao financeira em formato de stories.
- Calculadora de "quantos roles custa isso?".
- Calendario de pagamentos e alertas de responsabilidade.
- Exportacao de transacoes para planilha `.xlsx`.

## Tecnologias

- React
- Vite
- JavaScript
- CSS
- localStorage
- xlsx
- file-saver

## Como Rodar

Versao publicada:

```text
https://hudsonneves.github.io/granaup/
```

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://localhost:5173/granaup/
```

Se estiver usando a porta configurada durante o desenvolvimento local:

```text
http://127.0.0.1:5174/granaup/
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Estrutura Principal

```text
src/
|-- assets/
|-- components/
|-- data/
|-- pages/
|-- services/
|-- styles/
|-- App.jsx
`-- main.jsx
```

## Autor

Hudson Neves  
LinkedIn: [hudson-neves-93664ba4](https://www.linkedin.com/in/hudson-neves-93664ba4/)
