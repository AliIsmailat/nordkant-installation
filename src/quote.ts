import { site } from './content'

export interface QuoteValues {
  name: string
  phone: string
  topic: string
  message: string
}

export type QuoteField = keyof QuoteValues
export type QuoteErrors = Partial<Record<QuoteField, string>>

export const emptyQuote: QuoteValues = { name: '', phone: '', topic: '', message: '' }

export const fieldIds: Record<QuoteField, string> = {
  name: 'offert-namn',
  phone: 'offert-telefon',
  topic: 'offert-amne',
  message: 'offert-meddelande',
}

export function validateQuote(values: QuoteValues): QuoteErrors {
  const { errors } = site.form
  const next: QuoteErrors = {}

  if (values.name.trim().length < 2) next.name = errors.name
  if (values.phone.replace(/\D/g, '').length < 6) next.phone = errors.phone
  if (values.topic === '') next.topic = errors.topic
  if (values.message.trim().length < 10) next.message = errors.message

  return next
}
