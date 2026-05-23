import { useState } from 'react'
import { avatares, fontesDeRenda, objetivosRapidos } from '../../data/mockData'

export function Onboarding({ onComplete }) {
  const [avatar, setAvatar] = useState(avatares[0])
  const [renda, setRenda] = useState(fontesDeRenda[0])
  const [objetivo, setObjetivo] = useState(objetivosRapidos[0])

  function handleSubmit(event) {
    event.preventDefault()
    onComplete({ avatar, renda, objetivo })
  }

  return (
    <section className="onboarding-page">
      <div className="onboarding-hero">
        <span className="eyebrow">Primeiro contato</span>
        <h1>Vamos deixar sua grana com a sua cara.</h1>
        <p>
          Escolha uma estética, conte de onde vem seu dinheiro e defina o primeiro sonho para
          proteger.
        </p>
      </div>

      <form className="onboarding-flow" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Escolha seu avatar</legend>
          <div className="option-grid">
            {avatares.map((item) => (
              <button
                className={avatar.id === item.id ? 'choice-card choice-card--selected' : 'choice-card'}
                key={item.id}
                type="button"
                onClick={() => setAvatar(item)}
              >
                <span>{item.icone}</span>
                <strong>{item.nome}</strong>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>De onde vem a sua grana?</legend>
          <div className="pill-grid">
            {fontesDeRenda.map((item) => (
              <button
                className={renda === item ? 'pill pill--selected' : 'pill'}
                key={item}
                type="button"
                onClick={() => setRenda(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>Qual é o grande objetivo?</legend>
          <div className="pill-grid">
            {objetivosRapidos.map((item) => (
              <button
                className={objetivo === item ? 'pill pill--selected' : 'pill'}
                key={item}
                type="button"
                onClick={() => setObjetivo(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>

        <button className="primary-action" type="submit">
          Entrar no meu feed
        </button>
      </form>
    </section>
  )
}
