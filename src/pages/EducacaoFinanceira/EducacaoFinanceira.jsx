import { useState } from 'react'
import { parceiros, storiesFinanceiros } from '../../data/mockData'

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function EducacaoFinanceira() {
  const [preco, setPreco] = useState(300)
  const [roleMedio, setRoleMedio] = useState(50)
  const roles = Math.max(1, Math.ceil(preco / roleMedio))

  return (
    <section className="page-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Sem textão</span>
          <h1>Educação financeira em pílulas.</h1>
          <p>Stories rápidos para entender dinheiro antes dele virar boleto.</p>
        </div>
      </div>

      <div className="story-strip">
        {storiesFinanceiros.map((story) => (
          <article className="story-card" key={story.id}>
            <span>{story.icone}</span>
            <strong>{story.titulo}</strong>
            <small>{story.tag}</small>
            <p>{story.resumo}</p>
          </article>
        ))}
      </div>

      <section className="panel calculator-panel">
        <div className="panel-title">
          <span>Calculadora de rolês</span>
          <h2>Quanto isso pesa na sua vida real?</h2>
        </div>

        <div className="calculator-grid">
          <label>
            Preço do desejo
            <input
              min="1"
              type="number"
              value={preco}
              onChange={(event) => setPreco(Number(event.target.value))}
            />
          </label>
          <label>
            Quanto custa um rolê?
            <input
              min="1"
              type="number"
              value={roleMedio}
              onChange={(event) => setRoleMedio(Number(event.target.value))}
            />
          </label>
          <div className="calculator-result">
            <span>{currencyFormatter.format(preco)}</span>
            <strong>equivale a {roles} rolês</strong>
            <p>Vale trocar essa quantidade de saídas por essa compra?</p>
          </div>
        </div>
      </section>

      <section className="panel partner-panel">
        <div>
          <span className="eyebrow">Score do app</span>
          <h2>Pontos podem virar cupons</h2>
          <p>Ideia para integração futura com marcas parceiras.</p>
        </div>
        <div className="partner-list">
          {parceiros.map((parceiro) => (
            <span key={parceiro}>{parceiro}</span>
          ))}
        </div>
      </section>
    </section>
  )
}
