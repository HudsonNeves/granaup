const navItems = [
  { id: 'dashboard', label: 'Feed' },
  { id: 'metas', label: 'Sonhos' },
  { id: 'educacao', label: 'Stories' },
  { id: 'calendario', label: 'Calendário' },
]

export function Header({ activePage, onNavigate, onToggleThemeMode, profile, themeMode, userLabel }) {
  const isLightTheme = themeMode === 'light'

  return (
    <header className="header">
      <button className="brand" type="button" onClick={() => onNavigate('dashboard')}>
        <span className="brand-mark">G</span>
        <span>Granaup</span>
      </button>

      {profile && (
        <nav className="nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <button
              className={activePage === item.id ? 'nav-item nav-item--active' : 'nav-item'}
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}

      <div className="header-actions">
        <button
          aria-pressed={isLightTheme}
          className="theme-toggle"
          type="button"
          onClick={onToggleThemeMode}
        >
          {isLightTheme ? 'Tema escuro' : 'Tema claro'}
        </button>

        <div className="profile-chip" aria-label="Perfil atual">
          <span>{profile ? profile.avatar.icone : '✨'}</span>
          <strong>{userLabel}</strong>
        </div>
      </div>
    </header>
  )
}
