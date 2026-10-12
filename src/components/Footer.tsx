import { images, site } from '../content'

export function Footer() {
  const credits = Object.values(images)
    .map((image) => image.photographer.trim())
    .filter((name, index, all) => name !== '' && all.indexOf(name) === index)

  return (
    <footer className="border-t-4 border-accent bg-deep py-12 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-2xl">{site.name}</p>
        <p className="mt-3 text-xl font-bold text-accent">{site.footerText}</p>
        <p className="mt-2 text-steel">{site.footerNote}</p>
        {credits.length > 0 && <p className="mt-6 text-sm text-steel">Foto: {credits.join(', ')}</p>}
      </div>
    </footer>
  )
}
