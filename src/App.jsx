import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Header/Header'
import { getStorageItem, setStorageItem } from './services/storageService'
import { Onboarding } from './pages/Onboarding/Onboarding'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Metas } from './pages/Metas/Metas'
import { EducacaoFinanceira } from './pages/EducacaoFinanceira/EducacaoFinanceira'
import { Calendario } from './pages/Calendario/Calendario'
import { desafios, metas, pagamentos, transacoes } from './data/mockData'
import './styles/global.css'

const initialProfile = getStorageItem('profile')
const initialAppData = getStorageItem('appData', {
  transacoes,
  metas,
  desafios,
  pagamentos,
})

function App() {
  const [profile, setProfile] = useState(initialProfile)
  const [appData, setAppData] = useState(initialAppData)
  const [activePage, setActivePage] = useState(initialProfile ? 'dashboard' : 'onboarding')

  useEffect(() => {
    setStorageItem('appData', appData)
  }, [appData])

  const userLabel = useMemo(() => {
    if (!profile) {
      return 'Granaup'
    }

    return `${profile.avatar.icone} ${profile.objetivo}`
  }, [profile])

  function handleOnboardingComplete(nextProfile) {
    setStorageItem('profile', nextProfile)
    setProfile(nextProfile)
    setActivePage('dashboard')
  }

  function addTransaction(transaction) {
    setAppData((currentData) => ({
      ...currentData,
      transacoes: [
        {
          id: crypto.randomUUID(),
          data: 'Agora',
          reacao: transaction.valor >= 0 ? '💸' : '🧾',
          comentario:
            transaction.valor >= 0
              ? 'Entrada cadastrada pelo usuario.'
              : 'Gasto cadastrado pelo usuario.',
          ...transaction,
        },
        ...currentData.transacoes,
      ],
    }))
  }

  function addGoal(goal) {
    setAppData((currentData) => ({
      ...currentData,
      metas: [
        {
          id: crypto.randomUUID(),
          atual: 0,
          imagem:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
          poupancaAutomatica: false,
          ...goal,
        },
        ...currentData.metas,
      ],
    }))
  }

  function updateGoal(goalId, changes) {
    setAppData((currentData) => ({
      ...currentData,
      metas: currentData.metas.map((goal) =>
        goal.id === goalId ? { ...goal, ...changes } : goal,
      ),
    }))
  }

  function addChallenge(challenge) {
    setAppData((currentData) => ({
      ...currentData,
      desafios: [
        {
          id: crypto.randomUUID(),
          progresso: 0,
          recompensa: '+50 pts',
          insignia: '🏅',
          ...challenge,
        },
        ...currentData.desafios,
      ],
    }))
  }

  function addPayment(payment) {
    setAppData((currentData) => ({
      ...currentData,
      pagamentos: [
        {
          id: crypto.randomUUID(),
          alerta: 'Planeje antes de gastar: role, sonho e futuro.',
          ...payment,
        },
        ...currentData.pagamentos,
      ],
    }))
  }

  function renderPage() {
    if (!profile || activePage === 'onboarding') {
      return <Onboarding onComplete={handleOnboardingComplete} />
    }

    const pages = {
      dashboard: (
        <Dashboard
          appData={appData}
          onAddChallenge={addChallenge}
          onAddTransaction={addTransaction}
          profile={profile}
        />
      ),
      metas: <Metas appData={appData} onAddGoal={addGoal} onUpdateGoal={updateGoal} profile={profile} />,
      educacao: <EducacaoFinanceira />,
      calendario: <Calendario appData={appData} onAddPayment={addPayment} profile={profile} />,
    }

    return pages[activePage]
  }

  return (
    <div className={`app-shell theme-${profile?.avatar.tema ?? 'neon'}`}>
      <Header
        activePage={activePage}
        onNavigate={setActivePage}
        profile={profile}
        userLabel={userLabel}
      />
      <main className="main-content">{renderPage()}</main>
    </div>
  )
}

export default App
