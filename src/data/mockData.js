export const avatares = [
  { id: 'pixel', nome: 'Pixel neon', icone: '🎮', tema: 'neon' },
  { id: 'street', nome: 'Street pastel', icone: '🛹', tema: 'pastel' },
  { id: 'focus', nome: 'Foco futuro', icone: '🚀', tema: 'future' },
]

export const fontesDeRenda = [
  'Pé de Meia',
  'Bolsa Formação',
  'Salário Aprendizagem',
  'Freelance',
  'Mesada',
]

export const objetivosRapidos = [
  'Comprar um tênis',
  'Ir a um festival',
  'Criar uma reserva',
  'Trocar de celular',
  'Montar meu setup',
]

export const resumoFinanceiro = [
  {
    id: 1,
    titulo: 'Saldo livre',
    valor: 236,
    tipo: 'positivo',
    detalhe: 'Rolê e gastos do dia a dia',
  },
  {
    id: 2,
    titulo: 'Guardado nos sonhos',
    valor: 390,
    tipo: 'sonho',
    detalhe: 'Metas protegidas',
  },
  {
    id: 3,
    titulo: 'Score Granaup',
    valor: 1280,
    tipo: 'score',
    detalhe: 'Pontos acumulados',
  },
]

export const statusDoMes = {
  titulo: 'Grana Segura',
  descricao: 'Você ainda tem margem para curtir sem atropelar suas metas.',
  nivel: 72,
}

export const envelopes = [
  {
    id: 1,
    nome: 'Rolê e gastos livres',
    percentual: 60,
    valor: 120,
    descricao: 'Transporte, lanche, lazer e pequenas escolhas.',
    cor: '#42e8ff',
  },
  {
    id: 2,
    nome: 'Sonhos',
    percentual: 30,
    valor: 60,
    descricao: 'Dinheiro separado para objetivos com foto e prazo.',
    cor: '#b8ff5c',
  },
  {
    id: 3,
    nome: 'Futuro',
    percentual: 10,
    valor: 20,
    descricao: 'Reserva escondida para não sumir no impulso.',
    cor: '#ff74d4',
  },
]

export const transacoes = [
  {
    id: 1,
    descricao: 'Pé-de-Meia caiu',
    categoria: 'Renda',
    valor: 200,
    data: 'Hoje',
    reacao: '💸',
    comentario: 'Sugestão aplicada: 60/30/10 nos envelopes digitais.',
  },
  {
    id: 2,
    descricao: 'Lanche depois da aula',
    categoria: 'Alimentação',
    valor: -18,
    data: 'Ontem',
    reacao: '🍔',
    comentario: 'Cabe no envelope de rolê, mas olho no acumulado.',
  },
  {
    id: 3,
    descricao: 'Pix guardado no sonho',
    categoria: 'Meta',
    valor: -35,
    data: 'Terça',
    reacao: '✨',
    comentario: 'Você chegou mais perto do festival.',
  },
]

export const metas = [
  {
    id: 1,
    nome: 'Ingresso do festival',
    atual: 180,
    objetivo: 400,
    imagem: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=900&q=80',
    poupancaAutomatica: true,
  },
  {
    id: 2,
    nome: 'Tênis novo',
    atual: 220,
    objetivo: 480,
    imagem: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    poupancaAutomatica: false,
  },
]

export const desafios = [
  {
    id: 1,
    titulo: 'Zero Gasto',
    descricao: 'Passe a terça sem gastar nada e ganhe uma insígnia.',
    progresso: 80,
    recompensa: '+120 pts',
    insignia: '🏅',
  },
  {
    id: 2,
    titulo: 'Streak de Economia',
    descricao: 'Atualize o app por 7 dias seguidos para liberar dicas exclusivas.',
    progresso: 57,
    recompensa: '4/7 dias',
    insignia: '🔥',
  },
]

export const storiesFinanceiros = [
  {
    id: 1,
    titulo: 'Juros compostos',
    tag: '1 min',
    resumo: 'Quando o dinheiro rende sobre o próprio rendimento.',
    icone: '📈',
  },
  {
    id: 2,
    titulo: 'Golpe do Pix',
    tag: 'alerta',
    resumo: 'Confirme nome, banco e contexto antes de transferir.',
    icone: '🛡️',
  },
  {
    id: 3,
    titulo: 'Cartão sem susto',
    tag: 'crédito',
    resumo: 'Limite não é renda. Parcela também ocupa o mês que vem.',
    icone: '💳',
  },
]

export const pagamentos = [
  {
    id: 1,
    titulo: 'Pé-de-Meia',
    data: '25/05',
    dias: 2,
    valor: 200,
    alerta: 'Mantenha a frequência nas aulas para garantir o próximo depósito.',
  },
  {
    id: 2,
    titulo: 'Mesada',
    data: '01/06',
    dias: 9,
    valor: 120,
    alerta: 'Planeje antes de gastar: rolê, sonho e futuro.',
  },
]

export const parceiros = ['iFood', 'Steam', 'Shein', 'Renner']
