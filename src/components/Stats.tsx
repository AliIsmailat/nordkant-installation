import { site } from '../content'

export function Stats() {
  const { stats } = site
  return (
    <section aria-label={stats.eyebrow} className="bg-deep py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="inline-block rounded-ui bg-accent px-3 py-1 text-sm font-bold uppercase tracking-[0.15em] text-navy">
          {stats.demoLabel}
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.items.map((item) => (
            <div key={item.label} className="flex flex-col-reverse border-l-4 border-accent pl-5">
              <dt className="mt-2 text-steel">{item.label}</dt>
              <dd className="font-display text-[clamp(2rem,9vw,3.5rem)] leading-none text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
