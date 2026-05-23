import { useMemo, useState } from 'react'
import { CardResumo } from '../../components/CardResumo/CardResumo'
import { DesafioCard } from '../../components/DesafioCard/DesafioCard'
import { ExportButton } from '../../components/ExportButton/ExportButton'
import { FeedFinanceiro } from '../../components/FeedFinanceiro/FeedFinanceiro'
import { MetaCard } from '../../components/MetaCard/MetaCard'
import { envelopes } from '../../data/mockData'

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const initialTransactionForm = {
  descricao: '',
  categoria: 'Rolê',
  valor: '',
}

const initialChallengeForm = {
  titulo: '',
  descricao: '',
}

function getStatus(saldoLivre, gastos) {
  if (saldoLivre >= gastos * 0.5) {
    return {
      titulo: 'Grana Segura',
      descricao: 'Voce ainda tem margem para curtir sem atropelar suas metas.',
      nivel: 78,
    }
  }

  if (saldoLivre > 0) {
    return {
      titulo: 'Alerta Amarelo',
      descricao: 'Ainda da para controlar, mas cada gasto novo precisa fazer sentido.',
      nivel: 48,
    }
  }

  return {
    titulo: 'Modo Sobrevivencia',
    descricao: 'Hora de pausar gastos livres e proteger o essencial.',
    nivel: 22,
  }
}

export function Dashboard({ appData, onAddChallenge, onAddTransaction, profile }) {
  const [transactionForm, setTransactionForm] = useState(initialTransactionForm)
  const [challengeForm, setChallengeForm] = useState(initialChallengeForm)
  const { desafios, metas, transacoes } = appData

  const totals = useMemo(() => {
    const entradas = transacoes
      .filter((transaction) => transaction.valor > 0)
      .reduce((total, transaction) => total + transaction.valor, 0)
    const gastos = transacoes
      .filter((transaction) => transaction.valor < 0)
      .reduce((total, transaction) => total + Math.abs(transaction.valor), 0)
    const sonhos = metas.reduce((total, meta) => total + Number(meta.atual), 0)
    const score = Math.round(sonhos * 2 + desafios.length * 120)
    const saldoLivre = entradas - gastos

    return { entradas, gastos, saldoLivre, score, sonhos }
  }, [desafios.length, metas, transacoes])

  const resumoFinanceiro = [
    {
      id: 1,
      titulo: 'Saldo livre',
      valor: totals.saldoLivre,
      tipo: totals.saldoLivre >= 0 ? 'positivo' : 'negativo',
      detalhe: 'Calculado com entradas e gastos cadastrados',
    },
    {
      id: 2,
      titulo: 'Guardado nos sonhos',
      valor: totals.sonhos,
      tipo: 'sonho',
      detalhe: 'Soma das metas atualizadas',
    },
    {
      id: 3,
      titulo: 'Score Granaup',
      valor: totals.score,
      tipo: 'score',
      detalhe: 'Pontos de metas e desafios',
    },
  ]

  const statusDoMes = getStatus(totals.saldoLivre, totals.gastos)
  const rendaBase = Math.max(totals.entradas, 200)
  const envelopesCalculados = envelopes.map((envelope) => ({
    ...envelope,
    valor: (rendaBase * envelope.percentual) / 100,
  }))

  function handleTransactionSubmit(event) {
    event.preventDefault()

    const valor = Number(transactionForm.valor)

    if (!transactionForm.descricao.trim() || Number.isNaN(valor) || valor === 0) {
      return
    }

    onAddTransaction({
      descricao: transactionForm.descricao.trim(),
      categoria: transactionForm.categoria,
      valor,
    })
    setTransactionForm(initialTransactionForm)
  }

  function handleChallengeSubmit(event) {
    event.preventDefault()

    if (!challengeForm.titulo.trim() || !challengeForm.descricao.trim()) {
      return
    }

    onAddChallenge({
      titulo: challengeForm.titulo.trim(),
      descricao: challengeForm.descricao.trim(),
    })
    setChallengeForm(initialChallengeForm)
  }

  return (
    <section className="dashboard">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Feed financeiro</span>
          <h1>Oi, {profile.avatar.icone} pronto para planejar seu {profile.objetivo.toLowerCase()}?</h1>
          <p>Sua renda principal cadastrada: {profile.renda}.</p>
        </div>
        <ExportButton data={transacoes} filename="granaup-transacoes.xlsx" />
      </div>

      <section className="status-band">
        <div>
          <span>Status do mes</span>
          <h2>{statusDoMes.titulo}</h2>
          <p>{statusDoMes.descricao}</p>
        </div>
        <div className="thermometer" aria-label={`Termometro em ${statusDoMes.nivel}%`}>
          <span style={{ width: `${statusDoMes.nivel}%` }} />
        </div>
      </section>

      <div className="summary-grid">
        {resumoFinanceiro.map((item) => (
          <CardResumo key={item.id} {...item} />
        ))}
      </div>

      <section className="panel">
        <div className="panel-title">
          <span>Cadastrar agora</span>
          <h2>Entrada ou gasto em tempo real</h2>
        </div>
        <form className="data-form transaction-form" onSubmit={handleTransactionSubmit}>
          <label>
            Descricao
            <input
              placeholder="Ex: lanche, pix, bolsa..."
              value={transactionForm.descricao}
              onChange={(event) =>
                setTransactionForm((currentForm) => ({
                  ...currentForm,
                  descricao: event.target.value,
                }))
              }
            />
          </label>
          <label>
            Categoria
            <input
              value={transactionForm.categoria}
              onChange={(event) =>
                setTransactionForm((currentForm) => ({
                  ...currentForm,
                  categoria: event.target.value,
                }))
              }
            />
          </label>
          <label>
            Valor
            <input
              placeholder="Use negativo para gasto"
              type="number"
              value={transactionForm.valor}
              onChange={(event) =>
                setTransactionForm((currentForm) => ({
                  ...currentForm,
                  valor: event.target.value,
                }))
              }
            />
          </label>
          <button className="primary-action" type="submit">
            Salvar movimento
          </button>
        </form>
      </section>

      <section className="panel envelope-panel">
        <div className="panel-title">
          <span>Regra dos envelopes</span>
          <h2>Com {currencyFormatter.format(rendaBase)}, o app sugere assim</h2>
        </div>
        <div className="envelope-grid">
          {envelopesCalculados.map((envelope) => (
            <article className="envelope-card" key={envelope.id}>
              <div className="envelope-ring" style={{ '--ring-color': envelope.cor }}>
                {envelope.percentual}%
              </div>
              <div>
                <h3>{envelope.nome}</h3>
                <strong>{currencyFormatter.format(envelope.valor)}</strong>
                <p>{envelope.descricao}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="content-grid">
        <FeedFinanceiro transacoes={transacoes} />

        <section className="panel">
          <div className="panel-title">
            <span>Fabrica de sonhos</span>
            <h2>Metas visuais</h2>
          </div>
          <div className="stack">
            {metas.slice(0, 2).map((meta) => (
              <MetaCard key={meta.id} meta={meta} />
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-title">
            <span>Gamificacao</span>
            <h2>Desafios ativos</h2>
          </div>
          <form className="compact-form" onSubmit={handleChallengeSubmit}>
            <input
              placeholder="Novo desafio"
              value={challengeForm.titulo}
              onChange={(event) =>
                setChallengeForm((currentForm) => ({
                  ...currentForm,
                  titulo: event.target.value,
                }))
              }
            />
            <input
              placeholder="Recompensa ou regra"
              value={challengeForm.descricao}
              onChange={(event) =>
                setChallengeForm((currentForm) => ({
                  ...currentForm,
                  descricao: event.target.value,
                }))
              }
            />
            <button className="primary-action" type="submit">
              Criar desafio
            </button>
          </form>
          <div className="stack">
            {desafios.map((desafio) => (
              <DesafioCard key={desafio.id} desafio={desafio} />
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
