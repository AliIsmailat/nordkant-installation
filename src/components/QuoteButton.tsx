import { buttonClasses, type ButtonSize, type ButtonVariant } from '../buttonStyles'
import { site } from '../content'

interface QuoteButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

export function QuoteButton({ variant = 'solid', size = 'lg', className = '' }: QuoteButtonProps) {
  return (
    <a href={site.quote.href} className={`${buttonClasses(variant, size)} ${className}`}>
      {site.quote.buttonLabel}
    </a>
  )
}
