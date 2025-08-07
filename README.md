# Kimi Next.js Dashboard (Pro)

## Stack
- **Next.js 14+** (App Router, TypeScript, SSR/SSG ready)
- **Tailwind CSS** (JIT, dark mode, plugins forms/typography/aspect-ratio/container-queries/scrollbar)
- **HeadlessUI** (sidebar responsive, modals, accessible UI)
- **Heroicons** (icônes SVG modernes)
- **DaisyUI** (composants stylés, thèmes)
- **ESLint** (qualité code)

## Structure UX/Design
- **Layout parent en CSS Grid** : footer toujours visible, main scrollable, sidebar sticky
- **Sidebar responsive** : drawer mobile, transitions, accessibilité HeadlessUI
- **Dark mode natif**
- **Composants extensibles, pro et évolutifs**
- **Prêt pour l’intégration RadixUI/DaisyUI**

## Plugins Tailwind
- `@tailwindcss/forms` (formulaires pros)
- `@tailwindcss/typography` (textes riches)
- `@tailwindcss/aspect-ratio` (images/videos)
- `@tailwindcss/container-queries` (responsive avancé)
- `tailwind-scrollbar` (scrollbar custom)
- `daisyui` (thèmes et composants)

## Démarrage
```bash
cd kimi-nextjs-dashboard
npm install
npm run dev
```

## Fichiers clés
- `/src/app/layout.tsx` : layout global grid/flex
- `/src/components/Sidebar.tsx` : sidebar responsive HeadlessUI
- `/src/components/Footer.tsx` : footer sticky
- `/src/app/page.tsx` : dashboard d’accueil

## Améliorations possibles
- Authentification (NextAuth.js)
- API REST/GraphQL intégrée
- Tests (Jest, Playwright)
- CI/CD Vercel ou autre

---

**Ce projet est la base la plus moderne et scalable pour un backoffice/admin dashboard pro en 2024.**
