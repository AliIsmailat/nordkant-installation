# Nordkant Installation (Demo)

Demo-landningssida för ett påhittat VVS- och elföretag i Malmö. Företaget, omdömena, siffrorna och kontaktuppgifterna är påhittade, och sidan är inte ett riktigt företag. Sidan har en professionell, tydlig och strukturerad känsla, och målet är att besökaren ska begära en offert.

**Live:** https://nordkant-installation.netlify.app/

## Funktioner

- Mobilen först, responsiv från små mobiler till stora skärmar
- Ett enda mål: knappen "Begär offert", som leder till offertformuläret. Telefonnumret syns i headern
- Sticky header med logotyp, klickbart telefonnummer och offertknapp, samt hamburgermeny på mobil och länkar i headern på desktop
- Sektioner: hero med tre förtroendepunkter, tjänster, så jobbar vi, omdömen, siffror, offertformulär, kontakt och område samt sidfot
- Offertformulär med validering på klientsidan, felsammanfattning som tar fokus och en tydlig bekräftelse. Formuläret skickar ingenting på riktigt
- Omdömen och siffror är tydligt märkta som exempel och demo
- Ikoner som egna inline-SVG:er, utan bibliotek
- Semantisk HTML, tangentbordsnavigering, tydliga etiketter och tillräcklig färgkontrast

## Prestanda

Uppmätt med Lighthouse (mobil):

| Performance | Accessibility | Best Practices | SEO | Agentic Browsing |
| :---------: | :-----------: | :------------: | :-: | :--------------: |
|     95      |      100      |      100       | 100 |       2/2        |

Bilder skalas och konverteras till WebP vid bygget (max 1600 px bredd, flera storlekar via `srcset`). Alla bilder utom hero-bilden lazy-laddas.

## Design

- **Typsnitt:** Archivo Black till rubriker och Public Sans till brödtext, via Google Fonts
- **Färger:** mörkblå, ljusgrå och vit med orange som accent
- **Former:** små rundade hörn, kort med tydlig kant och hård skugga, tjocka knappar som trycks in vid hover och numrerade steg

## Teknik

- [Vite](https://vite.dev), [React](https://react.dev) och TypeScript
- [Tailwind CSS](https://tailwindcss.com) v3
- [vite-imagetools](https://github.com/JonasKruckenberg/imagetools) för bildoptimering

## Komma igång

Du behöver Node.js installerat.

```bash
npm install
npm run dev
```

Öppna adressen som visas i terminalen, oftast `http://localhost:5173`.

Bygg och förhandsgranska produktionsversionen:

```bash
npm run build
npm run preview
```

## Projektstruktur

```
src/
├── content.ts            All kundspecifik data och designvärden
├── quote.ts              Validering för offertformuläret
├── buttonStyles.ts       Gemensamma knappstilar
├── App.tsx               Sätter ihop sektionerna i rätt ordning
├── index.css             Tailwind och grundstil
├── assets/               Bilder och logotyp
│   └── placeholders/     Platshållare som används tills riktiga bilder finns
└── components/
    ├── Header.tsx        Sticky header med telefon, offertknapp och meny
    ├── Hero.tsx
    ├── Services.tsx
    ├── Process.tsx
    ├── Testimonials.tsx
    ├── Stats.tsx
    ├── QuoteForm.tsx     Offertformulär och bekräftelse
    ├── Contact.tsx
    ├── Footer.tsx
    ├── QuoteButton.tsx   Knappen "Begär offert"
    ├── Icons.tsx         Inline-SVG-ikoner
    ├── SectionHeading.tsx
    └── Picture.tsx       Visar bilder (lazy loading, srcset, platshållare)
```

## Byta till en annan kund

All kundspecifik information och alla designvärden ligger i `src/content.ts`:

1. **Texter, tjänster, omdömen, siffror, områden och kontaktuppgifter** i `site`.
2. **Färger** i `theme.colors`, **typsnitt** i `theme.fonts` och **hörnradie** i `theme.radius`. Tailwind läser värdena därifrån.
3. **Ämnen i offertformuläret** i `site.form.topics`.
4. **Sidtitel och beskrivning** i `site.meta`. Google Fonts-länken, `<title>` och `<meta name="description">` i `index.html` fylls i automatiskt vid bygget av en liten plugin i `vite.config.ts`.
5. **Bilder:** lägg nya bilder i `src/assets/` med samma filnamn som i `images` (`hero`, `arbete-1`, `arbete-2`, med ändelsen .jpg, .png eller .webp). De ersätter platshållarna automatiskt.
6. **Logotyp:** byt ut `src/assets/logo.svg`. Den används i headern och som favicon.

Skriv också in fotografens namn i `photographer` för varje bild, så visas de i sidfoten.

## Bildkrediter

Foton från [Unsplash](https://unsplash.com). Fotografernas namn visas i sidfoten.
