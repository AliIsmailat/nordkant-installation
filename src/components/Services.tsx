import { site } from '../content'
import { Icon } from './Icons'
import { SectionHeading } from './SectionHeading'

export function Services() {
  const { services } = site
  return (
    <section id="tjanster" aria-labelledby="tjanster-rubrik" className="bg-mist py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="tjanster-rubrik" eyebrow={services.eyebrow} title={services.title} />
        <ul role="list" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item) => (
            <li
              key={item.name}
              className="rounded-ui border-2 border-navy bg-white p-6 shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-ui bg-navy text-accent">
                <Icon name={item.icon} className="h-8 w-8" />
              </span>
              <h3 className="mt-5 text-xl">{item.name}</h3>
              <p className="mt-2 text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
