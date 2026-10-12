import type { IconName } from '../content'

const paths: Record<IconName | 'phone' | 'check' | 'mail' | 'pin', string[]> = {
  drop: ['M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z'],
  bolt: ['M13 2 4 14h7l-1 8 9-12h-7l1-8z'],
  bath: [
    'M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3z',
    'M6 12V6a2 2 0 0 1 4 0',
    'M7 19l-1 2',
    'M17 19l1 2',
  ],
  siren: [
    'M7 18v-6a5 5 0 0 1 10 0v6',
    'M5 18h14',
    'M4 21h16',
    'M12 3v1',
    'M4.5 6.5l1 1',
    'M19.5 6.5l-1 1',
  ],
  snow: ['M12 3v18', 'M3 12h18', 'M5.6 5.6l12.8 12.8', 'M18.4 5.6 5.6 18.4'],
  plug: ['M9 2v5', 'M15 2v5', 'M6 7h12v4a6 6 0 0 1-12 0V7z', 'M12 17v5'],
  phone: ['M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z'],
  check: ['M5 12l5 5 9-10'],
  mail: ['M3 6h18v12H3z', 'M3 7l9 7 9-7'],
  pin: ['M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z', 'M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'],
}

interface IconProps {
  name: keyof typeof paths
  className?: string
}

export function Icon({ name, className = 'h-6 w-6' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
