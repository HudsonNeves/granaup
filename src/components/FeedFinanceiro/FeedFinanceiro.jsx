const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function FeedFinanceiro({ transacoes }) {
  return (
    <section className="panel feed-panel">
      <div className="panel-title">
        <span>Feed financeiro</span>
        <h2>Seu dinheiro em tempo real</h2>
      </div>

      <div className="transaction-list">
        {transacoes.map((transacao) => (
          <article className="transaction-item" key={transacao.id}>
            <span className="reaction">{transacao.reacao}</span>
            <div className="transaction-copy">
              <div>
                <strong>{transacao.descricao}</strong>
                <span>{transacao.data} • {transacao.categoria}</span>
              </div>
              <p>{transacao.comentario}</p>
            </div>
            <span className={transacao.valor >= 0 ? 'value-positive' : 'value-negative'}>
              {currencyFormatter.format(transacao.valor)}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}
