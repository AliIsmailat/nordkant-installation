import { images, site } from "../content";
import { Picture } from "./Picture";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  const { process } = site;
  return (
    <section
      id="sa-jobbar-vi"
      aria-labelledby="process-rubrik"
      className="bg-white py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            id="process-rubrik"
            eyebrow={process.eyebrow}
            title={process.title}
          />
          <ol role="list" className="mt-10 grid gap-6">
            {process.steps.map((step, index) => (
              <li key={step.title} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-ui bg-accent font-display text-2xl text-navy"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl">
                    <span className="sr-only">Steg {index + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-1 text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="aspect-[4/3] overflow-hidden rounded-ui border-2 border-navy bg-mist shadow-card">
          <Picture
            image={images.work1}
            sizes="(min-width: 1024px) 520px, calc(100vw - 2rem)"
          />
        </div>
      </div>
    </section>
  );
}
