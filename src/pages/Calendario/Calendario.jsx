import { useState } from 'react'

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const initialPaymentForm = {
  titulo: '',
  data: '',
  dias: '',
  valor: '',
  alerta: '',
}

export function Calendario({ appData, onAddPayment, profile }) {
  const [paymentForm, setPaymentForm] = useState(initialPaymentForm)
  const { pagamentos } = appData

  function handlePaymentSubmit(event) {
    event.preventDefault()

    const dias = Number(paymentForm.dias)
    const valor = Number(paymentForm.valor)

    if (!paymentForm.titulo.trim() || !paymentForm.data.trim() || Number.isNaN(valor)) {
      return
    }

    onAddPayment({
      titulo: paymentForm.titulo.trim(),
      data: paymentForm.data.trim(),
      dias: Number.isNaN(dias) ? 0 : dias,
      valor,
      alerta:
        paymentForm.alerta.trim() ||
        'Planeje o deposito antes dele cair: role, sonhos e futuro.',
    })
    setPaymentForm(initialPaymentForm)
  }

  return (
    <section className="page-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Pagamentos</span>
          <h1>Seu dinheiro antes dele cair.</h1>
          <p>
            O app lembra quando {profile.renda} esta chegando e ajuda voce a planejar os envelopes.
          </p>
        </div>
      </div>

      <section className="panel">
        <div className="panel-title">
          <span>Novo lembrete</span>
          <h2>Cadastrar pagamento</h2>
        </div>
        <form className="data-form" onSubmit={handlePaymentSubmit}>
          <label>
            Nome
            <input
              placeholder="Ex: Pe-de-Meia, mesada..."
              value={paymentForm.titulo}
              onChange={(event) =>
                setPaymentForm((currentForm) => ({
                  ...currentForm,
                  titulo: event.target.value,
                }))
              }
            />
          </label>
          <label>
            Data
            <input
              placeholder="Ex: 25/05"
              value={paymentForm.data}
              onChange={(event) =>
                setPaymentForm((currentForm) => ({ ...currentForm, data: event.target.value }))
              }
            />
          </label>
          <label>
            Dias restantes
            <input
              min="0"
              type="number"
              value={paymentForm.dias}
              onChange={(event) =>
                setPaymentForm((currentForm) => ({ ...currentForm, dias: event.target.value }))
              }
            />
          </label>
          <label>
            Valor
            <input
              min="0"
              type="number"
              value={paymentForm.valor}
              onChange={(event) =>
                setPaymentForm((currentForm) => ({ ...currentForm, valor: event.target.value }))
              }
            />
          </label>
          <label className="form-wide">
            Alerta
            <input
              placeholder="Opcional"
              value={paymentForm.alerta}
              onChange={(event) =>
                setPaymentForm((currentForm) => ({ ...currentForm, alerta: event.target.value }))
              }
            />
          </label>
          <button className="primary-action" type="submit">
            Salvar lembrete
          </button>
        </form>
      </section>

      <div className="calendar-list">
        {pagamentos.map((pagamento) => (
          <article className="payment-card" key={pagamento.id}>
            <div className="payment-date">
              <span>{pagamento.data}</span>
              <strong>{pagamento.dias} dias</strong>
            </div>
            <div>
              <h2>{pagamento.titulo}</h2>
              <p>{currencyFormatter.format(pagamento.valor)} previstos</p>
              <small>{pagamento.alerta}</small>
            </div>
          </article>
        ))}
      </div>

      <section className="responsibility-alert">
        <strong>Alerta de responsabilidade</strong>
        <p>Mantenha a frequencia nas aulas para garantir o proximo deposito do Pe-de-Meia.</p>
      </section>
    </section>
  )
}
