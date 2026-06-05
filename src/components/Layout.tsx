import { useEffect, useState } from 'react'
import { Segmented } from 'antd'
import {
  CompressOutlined,
  GithubOutlined,
  HistoryOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { isElectronApp } from '../lib/isElectronApp'
import { ParticleBackground } from './ParticleBackground'
import styles from './Layout.module.css'

const NAV_COMPACT_MQ = '(max-width: 767.98px)'

function useNavCompact() {
  const [compact, setCompact] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(NAV_COMPACT_MQ).matches : false,
  )
  useEffect(() => {
    const mq = window.matchMedia(NAV_COMPACT_MQ)
    const onChange = () => setCompact(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return compact
}

const navSegmentedOptions = [
  { value: '/' as const, label: '压缩', icon: <CompressOutlined /> },
  { value: '/history' as const, label: '历史', icon: <HistoryOutlined /> },
  { value: '/settings' as const, label: '设置', icon: <SettingOutlined /> },
]

const navItems = [
  { to: '/' as const, label: '压缩', icon: <CompressOutlined /> },
  { to: '/history' as const, label: '历史', icon: <HistoryOutlined /> },
  { to: '/settings' as const, label: '设置', icon: <SettingOutlined /> },
]

export function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname === '/' ? '/' : location.pathname
  const navCompact = useNavCompact()

  return (
    <div className={styles.shell}>
      <ParticleBackground />
      <header className={`${styles.header} ${navCompact ? styles.headerStack : ''}`}>
        <div className={styles.headerInner}>
          {isElectronApp ? (
            <div className={`${styles.headerElectronLeft} ${navCompact ? styles.headerStackLeading : ''}`}>
              <span className={styles.authorLabel}>作者 shenfangda</span>
            </div>
          ) : (
            <NavLink to="/" className={styles.brand} end>
              <span className={styles.brandIcon} aria-hidden>
                妹
              </span>
              <span className={styles.brandText}>
                <strong className={styles.brandName}>小迷妹</strong>
                <span className={styles.brandSub}>本地媒体压缩工具</span>
              </span>
            </NavLink>
          )}
          {navCompact ? (
            <Segmented
              className={styles.navSegmented}
              block
              size="large"
              value={path}
              options={navSegmentedOptions}
              onChange={(key) => navigate(String(key))}
            />
          ) : (
            <nav className={styles.topNav} aria-label="主导航">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          )}
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      {!isElectronApp && (
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <a
              className={styles.footerLink}
              href="https://github.com/shenfangda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined aria-hidden />
              作者 shenfangda
            </a>
          </div>
        </footer>
      )}
    </div>
  )
}
