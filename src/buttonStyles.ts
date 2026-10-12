const base =
  'inline-flex items-center justify-center gap-3 border-2 font-display tracking-wide rounded-ui transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none'

const variants = {
  solid: 'border-navy bg-accent text-navy shadow-block',
  light: 'border-white bg-accent text-navy shadow-block-light',
  outline: 'border-navy bg-white text-navy shadow-block',
} as const

const sizes = {
  sm: 'px-4 py-2.5 text-base',
  lg: 'px-8 py-4 text-lg sm:text-xl',
} as const

export type ButtonVariant = keyof typeof variants
export type ButtonSize = keyof typeof sizes

export const buttonClasses = (variant: ButtonVariant = 'solid', size: ButtonSize = 'lg') =>
  `${base} ${variants[variant]} ${sizes[size]}`
