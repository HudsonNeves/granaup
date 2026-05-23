const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function MetaCard({ meta }) {
  const progresso = Math.min(Math.round((meta.atual / meta.objetivo) * 100), 100)

  return (
    <article className="goal-card">
      <img src={meta.imagem} alt="" />
      <div className="goal-card__content">
        <div>
          <span>{meta.poupancaAutomatica ? 'Poupança automática ligada' : 'Guardar manualmente'}</span>
          <h3>{meta.nome}</h3>
        </div>
        <p>
          Você já conquistou {progresso}%: {currencyFormatter.format(meta.atual)} de{' '}
          {currencyFormatter.format(meta.objetivo)}.
        </p>
        <div className="progress" aria-label={`Progresso de ${progresso}%`}>
          <span style={{ width: `${progresso}%` }} />
        </div>
      </div>
    </article>
  )
}
