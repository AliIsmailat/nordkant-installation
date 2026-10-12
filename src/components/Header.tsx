import { useEffect, useState } from "react";
import logoUrl from "../assets/logo.svg";
import { logo, site } from "../content";
import { Icon } from "./Icons";
import { QuoteButton } from "./QuoteButton";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      {open ? (
        <path d="M5 5L19 19M19 5L5 19" />
      ) : (
        <path d="M4 7H20M4 12H20M4 17H20" />
      )}
    </svg>
  );
}

export function Header() {
  const { nav } = site;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-30 border-b-2 border-navy bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-3"
            aria-label={logo.alt}
            onClick={() => setOpen(false)}
          >
            <img
              src={logoUrl}
              alt=""
              width="40"
              height="40"
              className="h-10 w-10 shrink-0"
            />
            <span className="hidden font-display text-lg leading-tight text-navy sm:block">
              {site.shortName}
            </span>
          </a>

          <nav aria-label={nav.label} className="hidden lg:block">
            <ul role="list" className="flex items-center gap-7">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-bold text-navy hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={site.phone.href}
              aria-label={`${site.phone.label} ${site.phone.display}`}
              className="flex items-center gap-2 font-bold text-navy hover:underline"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-ui border-2 border-navy sm:h-auto sm:w-auto sm:border-0">
                <Icon name="phone" className="h-5 w-5" />
              </span>
              <span className="hidden text-lg tabular-nums sm:inline">
                {site.phone.display}
              </span>
            </a>
            <QuoteButton variant="flat" size="sm" />
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobilmeny"
              aria-label={open ? nav.closeLabel : nav.openLabel}
              onClick={() => setOpen((current) => !current)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-ui border-2 border-navy bg-white text-navy transition-colors hover:bg-mist lg:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      <nav
        id="mobilmeny"
        aria-label={nav.label}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[calc(4rem+2px)] z-20 overflow-y-auto bg-navy lg:hidden"
      >
        <ul role="list" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          {nav.links.map((link) => (
            <li key={link.href} className="border-b-2 border-white/20">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-5 font-display text-3xl text-white transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
