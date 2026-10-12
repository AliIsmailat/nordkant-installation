import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { QuoteForm } from './components/QuoteForm'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { site } from './content'

export default function App() {
  return (
    <>
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-ui focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
      >
        {site.skipLabel}
      </a>
      <Header />
      <main id="innehall">
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <Stats />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
