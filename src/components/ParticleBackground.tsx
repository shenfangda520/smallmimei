import type { CSSProperties } from 'react'
import styles from './ParticleBackground.module.css'

const particles = [
  { x: 8, y: 18, size: 5, delay: -2, duration: 16, drift: 28 },
  { x: 18, y: 74, size: 7, delay: -8, duration: 22, drift: -34 },
  { x: 28, y: 36, size: 4, delay: -12, duration: 18, drift: 22 },
  { x: 39, y: 86, size: 6, delay: -4, duration: 24, drift: 30 },
  { x: 48, y: 22, size: 5, delay: -10, duration: 19, drift: -26 },
  { x: 58, y: 68, size: 8, delay: -16, duration: 27, drift: 36 },
  { x: 67, y: 42, size: 4, delay: -6, duration: 17, drift: -20 },
  { x: 76, y: 14, size: 6, delay: -13, duration: 21, drift: 25 },
  { x: 86, y: 80, size: 5, delay: -3, duration: 23, drift: -32 },
  { x: 94, y: 52, size: 7, delay: -18, duration: 26, drift: 24 },
  { x: 12, y: 48, size: 3, delay: -15, duration: 15, drift: -18 },
  { x: 72, y: 92, size: 4, delay: -9, duration: 20, drift: 18 },
  { x: 6, y: 62, size: 4, delay: -21, duration: 25, drift: 26 },
  { x: 22, y: 10, size: 3, delay: -5, duration: 17, drift: -16 },
  { x: 33, y: 58, size: 5, delay: -19, duration: 22, drift: 20 },
  { x: 44, y: 48, size: 3, delay: -7, duration: 16, drift: -22 },
  { x: 61, y: 9, size: 4, delay: -23, duration: 24, drift: 28 },
  { x: 82, y: 34, size: 3, delay: -11, duration: 18, drift: -18 },
  { x: 91, y: 68, size: 4, delay: -14, duration: 21, drift: 22 },
  { x: 52, y: 94, size: 5, delay: -1, duration: 26, drift: -24 },
  { x: 4, y: 32, size: 8, delay: -6, duration: 24, drift: 30 },
  { x: 15, y: 88, size: 11, delay: -18, duration: 30, drift: -38 },
  { x: 24, y: 24, size: 6, delay: -2, duration: 19, drift: 24 },
  { x: 31, y: 73, size: 9, delay: -12, duration: 27, drift: -30 },
  { x: 42, y: 14, size: 7, delay: -17, duration: 22, drift: 32 },
  { x: 49, y: 63, size: 12, delay: -9, duration: 31, drift: -36 },
  { x: 57, y: 34, size: 6, delay: -25, duration: 20, drift: 26 },
  { x: 64, y: 82, size: 10, delay: -4, duration: 29, drift: 34 },
  { x: 70, y: 20, size: 8, delay: -20, duration: 23, drift: -28 },
  { x: 79, y: 57, size: 6, delay: -8, duration: 18, drift: 22 },
  { x: 88, y: 8, size: 9, delay: -15, duration: 28, drift: -32 },
  { x: 96, y: 88, size: 10, delay: -22, duration: 32, drift: 30 },
  { x: 9, y: 7, size: 4, delay: -29, duration: 16, drift: 18 },
  { x: 36, y: 96, size: 7, delay: -26, duration: 25, drift: -20 },
  { x: 73, y: 72, size: 5, delay: -31, duration: 17, drift: 16 },
  { x: 98, y: 25, size: 5, delay: -27, duration: 19, drift: -18 },
]

export function ParticleBackground() {
  return (
    <div className={styles.particles} aria-hidden>
      {particles.map((particle, index) => (
        <span
          key={index}
          className={styles.particle}
          style={
            {
              '--x': `${particle.x}%`,
              '--y': `${particle.y}%`,
              '--size': `${particle.size}px`,
              '--delay': `${particle.delay}s`,
              '--duration': `${particle.duration}s`,
              '--drift': `${particle.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
