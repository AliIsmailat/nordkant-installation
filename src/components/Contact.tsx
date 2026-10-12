import { images, site } from '../content'
import { Icon } from './Icons'
import { Picture } from './Picture'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const { contact } = site
  return (
    <section id="kontakt" aria-labelledby="kontakt-rubrik" className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading id="kontakt-rubrik" eyebrow={contact.eyebrow} title={contact.title} />

          <ul role="list" className="mt-10 grid gap-4">
            <li className="flex items-center gap-4 rounded-ui border-2 border-navy p-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-ui bg-navy text-accent">
                <Icon name="phone" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-muted">
                  {contact.phoneLabel}
                </p>
                <a
                  href={site.phone.href}
                  className="font-display text-2xl tabular-nums hover:underline"
                >
                  {site.phone.display}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4 rounded-ui border-2 border-navy p-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-ui bg-navy text-accent">
                <Icon name="mail" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-muted">
                  {contact.emailLabel}
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg font-bold [overflow-wrap:anywhere] hover:underline"
                >
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4 rounded-ui border-2 border-navy p-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-ui bg-navy text-accent">
                <Icon name="siren" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-muted">
                  {contact.hoursLabel}
                </p>
                <p className="text-lg font-bold">{contact.hours}</p>
              </div>
            </li>
          </ul>

          <h3 className="mt-10 flex items-center gap-2 text-xl">
            <Icon name="pin" />
            {contact.areasTitle}
          </h3>
          <ul role="list" className="mt-4 flex flex-wrap gap-2">
            {contact.areas.map((area) => (
              <li
                key={area}
                className="rounded-ui border-2 border-navy bg-mist px-3 py-1.5 font-bold"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="aspect-[4/3] overflow-hidden rounded-ui border-2 border-navy bg-mist shadow-card">
          <Picture image={images.work2} sizes="(min-width: 1024px) 520px, calc(100vw - 2rem)" />
        </div>
      </div>
    </section>
  )
}
