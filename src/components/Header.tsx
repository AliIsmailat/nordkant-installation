import { logo, site } from '../content'
import logoUrl from '../assets/logo.svg'
import { Icon } from './Icons'
import { QuoteButton } from './QuoteButton'

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b-2 border-navy bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label={logo.alt}>
          <img src={logoUrl} alt="" width="40" height="40" className="h-10 w-10 shrink-0" />
          <span className="hidden font-display text-lg leading-tight text-navy sm:block">
            {site.shortName}
          </span>
        </a>

        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href={site.phone.href}
            aria-label={`${site.phone.label} ${site.phone.display}`}
            className="flex items-center gap-2 font-bold text-navy hover:underline"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-ui border-2 border-navy sm:h-auto sm:w-auto sm:border-0">
              <Icon name="phone" className="h-5 w-5" />
            </span>
            <span className="hidden text-lg tabular-nums sm:inline">{site.phone.display}</span>
          </a>
          <QuoteButton size="sm" />
        </div>
      </div>
    </header>
  )
}
