import { site } from "../content";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  const { testimonials } = site;
  return (
    <section
      id="omdomen"
      aria-labelledby="omdomen-rubrik"
      className="bg-mist py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="omdomen-rubrik"
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
        />
        <ul role="list" className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <li key={item.name}>
              <figure className="flex h-full flex-col rounded-ui border-2 border-navy bg-white p-6 shadow-card">
                <p className="w-fit rounded-ui bg-accent px-2 py-0.5 text-xs font-bold uppercase tracking-[0.15em] text-navy">
                  {testimonials.exampleLabel}
                </p>
                <blockquote className="mt-4 flex-1 text-lg font-medium">
                  <p>{item.quote}</p>
                </blockquote>
                <figcaption className="mt-5 border-t-2 border-steel pt-4">
                  <span className="font-bold">{item.name}</span>
                  <span className="text-muted">, {item.place}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">{testimonials.note}</p>
      </div>
    </section>
  );
}
