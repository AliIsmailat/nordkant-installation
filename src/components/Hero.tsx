import { images, site } from '../content'
import { Icon } from './Icons'
import { Picture } from './Picture'
import { QuoteButton } from './QuoteButton'

export function Hero() {
  const { hero } = site
  return (
    <section id="top" aria-labelledby="hero-rubrik" className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pb-16 lg:pt-14">
        <div>
          <p className="inline-block rounded-ui bg-accent px-3 py-1 text-sm font-bold uppercase tracking-[0.15em] text-navy">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-rubrik"
            className="mt-5 text-[clamp(2rem,9.5vw,4.25rem)] leading-[1.02] text-white"
          >
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-steel">{hero.text}</p>
          <div className="mt-8">
            <QuoteButton variant="light" className="w-full sm:w-auto" />
          </div>
        </div>

        <div className="relative lg:ml-4">
          <div className="aspect-[4/3] overflow-hidden rounded-ui border-2 border-white bg-deep shadow-block-light">
            <Picture
              image={images.hero}
              sizes="(min-width: 1024px) 560px, calc(100vw - 2rem)"
              eager
            />
          </div>
        </div>
      </div>

      <div className="border-t-2 border-white/20 bg-deep">
        <ul
          role="list"
          className="mx-auto grid max-w-6xl gap-px px-4 sm:grid-cols-3 sm:gap-0 sm:px-6"
        >
          {hero.trust.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-4 py-5 sm:px-6 sm:first:pl-0 sm:[&:not(:first-child)]:border-l-2 sm:[&:not(:first-child)]:border-white/20"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-ui bg-accent text-navy">
                <Icon name="check" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg text-white">{item.title}</p>
                <p className="mt-1 text-sm text-steel">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
