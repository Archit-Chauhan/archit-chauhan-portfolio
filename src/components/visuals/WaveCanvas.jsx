import { useEffect, useRef } from 'react'

// Animated gradient "strand": many fine gradient lines that flow and pinch like a
// twisting ribbon. Canvas-based; pauses off-screen and honours prefers-reduced-motion.
//   onDark  (default) → additive blending for a glow on dark surfaces
//   onLight=true       → normal blending so the colours read as strands on white
const STOPS = [
  [0.0, '255,150,70'], // orange
  [0.34, '255,93,143'], // pink
  [0.58, '224,72,170'], // magenta
  [0.82, '168,85,247'], // purple
  [1.0, '124,58,237'], // violet
]

export default function WaveCanvas({ className = '', lines = 50, speed = 0.006, onLight = false, thickness }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf = 0
    let phase = 0
    let w = 0
    let h = 0
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const makeGradient = () => {
      const g = ctx.createLinearGradient(0, 0, w, 0)
      for (const [stop, rgb] of STOPS) g.addColorStop(stop, `rgb(${rgb})`)
      return g
    }

    const render = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = onLight ? 'source-over' : 'lighter'
      ctx.lineWidth = thickness ?? (onLight ? 2.2 : 1.6)
      ctx.strokeStyle = makeGradient()
      const cy = h * 0.5
      const amp = h * 0.2
      const amp2 = h * 0.06
      const band = h * 0.82 // wider/taller strand spread
      const step = Math.max(4, Math.floor(w / 320))
      for (let k = 0; k < lines; k++) {
        const c = k / (lines - 1) - 0.5 // -0.5 .. 0.5
        ctx.beginPath()
        for (let x = 0; x <= w; x += step) {
          const t = x / w
          const wave =
            Math.sin(t * Math.PI * 1.6 + phase) * amp + Math.sin(t * Math.PI * 3.2 + phase * 0.55) * amp2
          // gentle pinch toward the centre so the lines cross like a twisted strand
          const pinch = 0.28 + 0.72 * Math.abs(Math.sin(t * Math.PI + phase * 0.22))
          const y = cy + wave + c * band * pinch
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        const centre = 1 - Math.min(1, Math.abs(c) * 2)
        ctx.globalAlpha = onLight ? 0.12 + 0.22 * centre : 0.06 + 0.12 * centre
        ctx.stroke()
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'
    }

    const loop = () => {
      render()
      phase += speed
      raf = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reduce) {
          if (!raf) raf = requestAnimationFrame(loop)
        } else {
          cancelAnimationFrame(raf)
          raf = 0
          render() // hold a static frame
        }
      },
      { threshold: 0 },
    )
    io.observe(canvas)

    if (reduce) render()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      io.disconnect()
    }
  }, [lines, speed, onLight, thickness])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
