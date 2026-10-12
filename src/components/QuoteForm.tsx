import { useEffect, useRef, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { buttonClasses } from '../buttonStyles'
import { site } from '../content'
import {
  emptyQuote,
  fieldIds,
  validateQuote,
  type QuoteErrors,
  type QuoteField,
  type QuoteValues,
} from '../quote'
import { SectionHeading } from './SectionHeading'
import { Icon } from './Icons'

const labelClass = 'block text-sm font-bold uppercase tracking-[0.12em] text-navy'

const inputClass =
  'mt-2 block w-full rounded-ui border-2 border-navy bg-white px-4 py-3 text-base text-navy placeholder:text-muted focus:border-accent aria-[invalid=true]:border-accent aria-[invalid=true]:bg-mist'

interface FieldProps {
  field: QuoteField
  label: string
  error?: string
  hint?: string
  children: ReactNode
}

function Field({ field, label, error, hint, children }: FieldProps) {
  const id = fieldIds[field]
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {hint && (
        <p id={`${id}-tips`} className="mt-2 text-sm text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${id}-fel`}
          className="mt-2 border-l-4 border-accent pl-3 text-sm font-bold"
        >
          {error}
        </p>
      )}
    </div>
  )
}

export function QuoteForm() {
  const { form: content } = site
  const [values, setValues] = useState<QuoteValues>(emptyQuote)
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [sent, setSent] = useState<QuoteValues | null>(null)
  const [attempt, setAttempt] = useState(0)
  const summaryRef = useRef<HTMLDivElement>(null)
  const confirmRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (attempt > 0) summaryRef.current?.focus()
  }, [attempt])

  useEffect(() => {
    if (sent) confirmRef.current?.focus()
  }, [sent])

  const update = (patch: Partial<QuoteValues>) => setValues((current) => ({ ...current, ...patch }))

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next = validateQuote(values)
    setErrors(next)

    if (Object.keys(next).length > 0) {
      setAttempt((current) => current + 1)
      return
    }

    setSent(values)
  }

  const reset = () => {
    setValues(emptyQuote)
    setErrors({})
    setSent(null)
  }

  const errorEntries = Object.entries(errors) as [QuoteField, string][]

  const describedBy = (field: QuoteField, hint = false) => {
    const id = fieldIds[field]
    const parts = [hint ? `${id}-tips` : '', errors[field] ? `${id}-fel` : ''].filter(Boolean)
    return parts.length > 0 ? parts.join(' ') : undefined
  }

  const invalid = (field: QuoteField) => (errors[field] ? true : undefined)

  return (
    <section id="offert" aria-labelledby="offert-rubrik" className="bg-mist py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading id="offert-rubrik" eyebrow={content.eyebrow} title={content.title} />
          <p className="mt-6 max-w-md text-lg text-muted">{content.intro}</p>

          <h3 className="mt-10 text-xl">{content.next.title}</h3>
          <ul role="list" className="mt-4 grid gap-3">
            {content.next.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-ui bg-accent text-navy">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {sent ? (
          <div className="self-start rounded-ui border-2 border-navy bg-white p-6 shadow-card sm:p-8">
            <h3 ref={confirmRef} tabIndex={-1} className="text-2xl sm:text-3xl">
              {content.confirm.title}
            </h3>
            <p className="mt-3 text-lg text-muted">
              {content.confirm.thanks} {sent.name.trim()}! {content.confirm.message}
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.12em]">
              {content.confirm.summary}
            </p>
            <dl className="mt-3 divide-y-2 divide-steel border-y-2 border-steel">
              {(
                [
                  [content.labels.name, sent.name.trim()],
                  [content.labels.phone, sent.phone.trim()],
                  [content.labels.topic, sent.topic],
                  [content.labels.message, sent.message.trim()],
                ] as [string, string][]
              ).map(([label, value]) => (
                <div key={label} className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4">
                  <dt className="text-muted">{label}</dt>
                  <dd className="font-semibold [overflow-wrap:anywhere]">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-muted">{content.demoNote}</p>
            <button type="button" onClick={reset} className={`${buttonClasses('outline')} mt-6`}>
              {content.confirm.again}
            </button>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={onSubmit}
            className="grid gap-6 self-start rounded-ui border-2 border-navy bg-white p-6 shadow-card sm:p-8"
          >
            <div ref={summaryRef} tabIndex={-1} role="alert" className="empty:hidden">
              {errorEntries.length > 0 && (
                <div className="rounded-ui border-2 border-accent bg-mist p-5">
                  <p className="font-display text-xl">{content.errorTitle}</p>
                  <ul role="list" className="mt-3 grid gap-1">
                    {errorEntries.map(([field, message]) => (
                      <li key={field}>
                        <a
                          href={`#${fieldIds[field]}`}
                          className="font-semibold underline underline-offset-4 hover:text-muted"
                        >
                          {message}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Field field="name" label={content.labels.name} error={errors.name}>
              <input
                id={fieldIds.name}
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(event) => update({ name: event.target.value })}
                aria-invalid={invalid('name')}
                aria-describedby={describedBy('name')}
                className={inputClass}
              />
            </Field>

            <Field field="phone" label={content.labels.phone} error={errors.phone}>
              <input
                id={fieldIds.phone}
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={values.phone}
                onChange={(event) => update({ phone: event.target.value })}
                aria-invalid={invalid('phone')}
                aria-describedby={describedBy('phone')}
                className={inputClass}
              />
            </Field>

            <Field field="topic" label={content.labels.topic} error={errors.topic}>
              <select
                id={fieldIds.topic}
                value={values.topic}
                onChange={(event) => update({ topic: event.target.value })}
                aria-invalid={invalid('topic')}
                aria-describedby={describedBy('topic')}
                className={inputClass}
              >
                <option value="">{content.topicPlaceholder}</option>
                {content.topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              field="message"
              label={content.labels.message}
              error={errors.message}
              hint={content.messageHint}
            >
              <textarea
                id={fieldIds.message}
                rows={5}
                value={values.message}
                onChange={(event) => update({ message: event.target.value })}
                aria-invalid={invalid('message')}
                aria-describedby={describedBy('message', true)}
                className={inputClass}
              />
            </Field>

            <div>
              <button type="submit" className={`${buttonClasses()} w-full sm:w-auto`}>
                {content.submitLabel}
              </button>
              <p className="mt-4 text-sm text-muted">{content.demoNote}</p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
