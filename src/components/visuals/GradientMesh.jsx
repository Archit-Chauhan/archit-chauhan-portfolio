// Atmospheric gradient mesh — the actual exported Stitch background image,
// faded into white toward the bottom. Sits behind hero content (absolute, -z-10). Decorative.
export default function GradientMesh({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] overflow-hidden ${className}`}
    >
      <div className="h-full w-full bg-[url('/hero-mesh.png')] bg-cover bg-top bg-no-repeat [mask-image:linear-gradient(to_bottom,black_55%,transparent)]" />
    </div>
  )
}
