interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: string
  tone?: 'light' | 'dark'
}

export function SectionHeading({ id, eyebrow, title, tone = 'light' }: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div>
      <p
        className={`inline-block rounded-ui px-3 py-1 text-sm font-bold uppercase tracking-[0.15em] ${dark ? 'bg-accent text-navy' : 'bg-navy text-white'}`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 text-[clamp(1.75rem,8vw,2.5rem)] leading-[1.05] sm:text-5xl ${dark ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </h2>
    </div>
  )
}
