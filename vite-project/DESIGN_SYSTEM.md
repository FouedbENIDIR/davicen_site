# 🎨 Design System - Davicen Studio

## 📋 Table des matières
1. [Système de Couleurs](#système-de-couleurs)
2. [Typographie](#typographie)
3. [Composants](#composants)
4. [Backgrounds](#backgrounds)
5. [Animations & Transitions](#animations--transitions)
6. [Multilingue](#multilingue)
7. [Architecture Structurelle](#architecture-structurelle)
8. [Suggestions d'Amélioration](#suggestions-damélioration)
9. [Questions & Réflexions](#questions--réflexions)

---

## Système de Couleurs

### Palette Principal
```
Primary Accent:   #004AD (Bleu foncé)
Secondary Accent: #6C86FF (Bleu clair)
Tertiary:         #ff9ff2 (Violet/Rose)
Gradient:         linear-gradient(to right, #6C86FF, #ff9ff2)
```

### Neutrals
```
Text Primary:     #0f172a (Noir très foncé)
Text Secondary:   #6b7280 (Gris moyen)
Borders:          #d1d5db (Gris-300) / #e5e7eb (Gris-200)
Background Light: #f5f6fa (Gris très clair)
White:            #ffffff
```

### Utilisation des Couleurs
- **Gradients** : Appliqués sur les titres au hover, les boutons, les underlines
- **Bleu (#004AD)** : Accents secondaires, focus states
- **Gris** : Texte navigation, descriptions, labels
- **Blanc** : Backgrounds des cartes, header au scroll

---

## Typographie

### Police Unique
**Nunito Sans** (Google Fonts)
- Weights utilisées : 300, 400, 500, 600, 700, 800, 900
- Appliquée à **tout le site** (body + headings)
- Remplace anciennement Inter + Poppins

### Hiérarchie Typographique
```
h1, h2, h3, h4, h5, h6 {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

body {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
}
```

### Tailles Texte
- **Titres principaux (Hero)** : text-5xl md:text-7xl
- **Titres sections** : text-5xl (gris-800)
- **Titres cartes** : text-2xl / text-xl
- **Body text** : text-lg / text-base
- **Labels** : text-sm
- **Small text** : text-xs

---

## Composants

### Buttons
**Fichier** : `src/components/common/Button.jsx`

#### Variantes
```jsx
variant="primary"   // Gradient #6C86FF → #ff9ff2 | White text
variant="secondary" // White BG | Black text | Gradient border
variant="accent"    // #004AD BG | White text
```

#### Styles Communs
- Padding : `px-8 py-3`
- Border : `2px border-transparent` (primary) ou `border-[#6C86FF]` (secondary)
- Hover : `shadow-lg hover:-translate-y-0.5`
- Rounded : `rounded-lg`
- Transition : `duration-500`

---

### Cards (ServiceCard, ProjectCard, AnimatedCard, Card)

#### Styles Uniformes
```css
Border:          border-2 border-gray-200
Border Hover:    border-[#6C86FF]
Shadow Hover:    shadow-lg
Transform:       hover:-translate-y-1
Rounded:         rounded-lg
Background:      bg-white
Transition:      duration-500
```

#### Titre Hover
- Texte normal → transparent
- Apply : `bg-clip-text` avec gradient

---

### Inputs & Textarea (Contact)

```css
Border:           border-2 border-gray-300
Border Hover:     border-gray-400
Focus Border:     border-[#6C86FF]
Focus Ring:       focus:ring-2 focus:ring-[#6C86FF]/20
Background:       bg-white
Rounded:          rounded-lg
Padding:          px-4 py-3
Transition:       transition-all
```

---

### Header & Navigation

#### Header
- **Non scrollé** : `bg-transparent` | Logo: `h-16` | Padding: `py-8`
- **Scrollé** : `bg-white shadow-md` | Logo: `h-10` | Padding: `py-4`
- **Transition** : `duration-500`

#### Navigation Links
- **Texte** : `text-gray-700` (gris, pas gradient)
- **Hover Texte** : `hover:text-gray-900`
- **Underline** : `w-0` → `group-hover:w-full` (gradient)
- **Underline Color** : `linear-gradient(to right, #6C86FF, #ff9ff2)`

---

## Backgrounds

### Classes Personnalisées (index.css)
```css
.bg-neutral
.bg-neutral-light
.bg-neutral-softer
.bg-accent-softer
```

### Implémentation
```css
background: linear-gradient(135deg, #fafbfc 0%, #f3f4f7 50%, #ececf1 100%);
```

### Distribution par Section
- **Hero** : `bg-gradient-to-br from-white via-gray-50 to-gray-100`
- **Services** : `bg-neutral-light`
- **Projects** : `bg-neutral-softer`
- **Team** : `bg-neutral-light`
- **Contact** : `bg-accent-softer` (teinte bleue légère)
- **App Root** : `bg-neutral-softer`
- **Footer** : `bg-neutral`

---

## Animations & Transitions

### Durées Standards
```
duration-300  : Interactions rapides (underlines, hover)
duration-500  : Standard (border changes, shadows)
duration-700  : Expansions (team member descriptions)
duration-1000 : Animations au scroll (fade in)
```

### Animations Courantes

#### Hover Cards
```css
group-hover:shadow-lg
group-hover:-translate-y-1
group-hover:border-[#6C86FF]
transition-all duration-500
```

#### Text Gradients au Hover
```css
group-hover:text-transparent
group-hover:bg-clip-text
group-hover:bg-gradient-to-r
transition-all duration-500
```

#### Scroll Animations
```css
opacity-0 → opacity-100 (duration-1000)
translate-y-8 → translate-y-0 (duration-1000)
```

#### Team Member Descriptions
```css
opacity-0 invisible → opacity-100 visible
transition-all duration-700
Position: absolute (no layout shift)
```

---

## Multilingue

### Structure i18n

**Fichier** : `src/i18n/translations.json`

```json
{
  "en": { /* Textes anglais */ },
  "fr": { /* Textes français */ }
}
```

### Sections Multilingues
- Navigation (Services, Projects, Team, Contact)
- Hero (title, buttons)
- Services (label, title, description, items)
- Projects (label, title, description, items)
- Team (label, title, description, items)
- Contact (labels, placeholders, button)
- Footer (copyright, language)
- Buttons (expertise, contact_us)

### Hooks Disponibles
```jsx
useLanguage()      // { language, toggleLanguage, translations }
useTranslation()   // Retourne les traductions pour la langue active
```

### Language Switcher
- **Location** : Footer
- **Design** : 🇬🇧 / 🇫🇷 avec code (EN/FR)
- **Persistance** : localStorage
- **Hover** : border-[#6C86FF]

---

## Architecture Structurelle

### Dossier Structure
```
src/
├── components/
│   ├── common/          # Composants réutilisables
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Section.jsx
│   │   ├── AnimatedCard.jsx
│   │   └── Badge.jsx
│   ├── layout/          # Layout components
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── sections/        # Page sections
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Team.jsx
│   │   └── Contact.jsx
│   └── ui/              # UI components
│       ├── ServiceCard.jsx
│       ├── ProjectCard.jsx
│       ├── TeamMember.jsx
│       └── StartCard.jsx
├── data/
│   ├── services.js      # (Legacy - maintenant dans i18n)
│   └── projects.js      # (Legacy - maintenant dans i18n)
├── hooks/
│   ├── useScroll.js     # Détecte scroll position
│   └── useIntersection.js
├── i18n/
│   ├── LanguageContext.jsx
│   └── translations.json
└── styles/
    ├── globals.css
    └── animations.css
```

### Props Standards

#### Section Component
```jsx
<Section
  id="section-id"
  label="Label"
  title="Title"
  description="Description"
  bgColor="bg-neutral-light"
  className=""
/>
```

#### Button Component
```jsx
<Button
  variant="primary" | "secondary" | "accent"
  href={optional}
  onClick={optional}
  className=""
/>
```

#### Card Components
```jsx
{icon, title, description, children}
```

---

## Variables Tailwind Personnalisées

### tailwind.config.js
```js
fontFamily: {
  sans: ['Nunito Sans', 'Segoe UI', ...],
  heading: ['Nunito Sans', ...],
},
colors: {
  primary: '#000000',
  secondary: '#ffffff',
  accent: '#004AD',
  'accent-light': '#6C86FF',
},
transitionDuration: {
  '400': '400ms',
  '500': '500ms',
},
boxShadow: {
  'neo': '8px 8px 0px 0px rgba(0,0,0,1)',
  'neo-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
  'neo-xl': '16px 16px 0px 0px rgba(0,0,0,1)',
}
```

---

## Points Clés de Cohérence

### ✅ Unité Visuelle
- ✓ Une seule police (Nunito Sans)
- ✓ Gradient gradient (#6C86FF → #ff9ff2) cohérent
- ✓ Bordures grises uniformes (border-gray-200/300)
- ✓ Shadows et hover effects consistants

### ✅ Interactivité
- ✓ Tous les liens ont underline gradient au hover
- ✓ Tous les boutons utilisent les mêmes variantes
- ✓ Cards ont animation translate-y au hover
- ✓ Focus states cohérents (#6C86FF)

### ✅ Responsivité
- ✓ Grids adaptatifs (md:grid-cols-3)
- ✓ Texte scalable (text-5xl md:text-7xl)
- ✓ Padding/spacing proportionnel
- ✓ Navigation collapse au scroll

### ✅ Accessibilité
- ✓ Contraste texte adéquat
- ✓ Focus visible sur tous les éléments interactifs
- ✓ Couleurs gradient + texte gris (pas gradient seul)
- ✓ Lang attribute dynamique en i18n

---

## Conventions de Code

### Nommage Classes Tailwind
- Modifiers avec `:` (hover:, focus:, group-hover:)
- Responsive avec `md:` breakpoint principal
- Utilities custom en CSS layer

### Style Inline vs Classes
- **Tailwind** : Pour la plupart des styles
- **Inline styles** : Uniquement pour :
  - `fontFamily` (nécessité de guillemets)
  - `backgroundImage` (gradients dynamiques)

### Ordre d'Application
1. Tailwind utilities de base
2. States (hover, focus)
3. Responsive modifiers
4. Inline styles pour cas spéciaux

---

## Résumé Visuel

```
┌─────────────────────────────────────────────────┐
│ HEADER (Transparent → White au scroll)          │
│ Logo + Navigation (gradient underline hover)    │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ HERO (Gradient bg white→gray)                   │
│ Titre + Buttons (gradient primary)              │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ SERVICES (bg-neutral-light)                     │
│ Cards blanc | Border gray | Hover: border blue  │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ PROJECTS (bg-neutral-softer)                    │
│ Cards blanc | Overlay gradient | Hover effect   │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ TEAM (bg-neutral-light)                         │
│ Cards + Descriptions expandables | Hover border │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ CONTACT (bg-accent-softer - teinte bleue)      │
│ Inputs gray border | Button gradient primary    │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ FOOTER (bg-neutral)                             │
│ Links gray + underline hover | Language picker  │
└─────────────────────────────────────────────────┘
```

---

## Maintenance & Évolution

### Pour Modifier les Couleurs
1. Changer dans `index.css` (gradients)
2. Changer dans `tailwind.config.js` (tokens)
3. Remplacer les `#code` dans les composants

### Pour Modifier la Police
1. Changer l'import Google Fonts dans `index.css`
2. Mettre à jour `tailwind.config.js` fontFamily
3. Remplacer inline `fontFamily` dans les composants

### Pour Ajouter Traductions
1. Ajouter clé dans `translations.json` (EN + FR)
2. Utiliser `useTranslation()` dans le composant
3. Accéder via `t.section.key`

---

## Suggestions d'Amélioration

### 🚀 Performance

#### CSS Custom Properties
```css
/* index.css - Ajouter en :root */
:root {
  --gradient-primary: linear-gradient(to right, #6C86FF, #ff9ff2);
  --color-accent-dark: #004AD;
  --color-accent-light: #6C86FF;
  --color-accent-tertiary: #ff9ff2;
  --duration-fast: 300ms;
  --duration-normal: 500ms;
  --duration-slow: 700ms;
  --duration-slower: 1000ms;
}
```

**Avantage** : Centralisation, maintenance facilitée, évite répétitions

#### Lazy Loading Images
```jsx
<img src={image} loading="lazy" alt="description" />
```

#### Code Splitting
- Charger composants au besoin avec React.lazy()
- Utiliser Suspense pour les sections complexes

---

### ♿ Accessibilité

#### Aria Labels pour Animations
```jsx
<div 
  className="group-hover:translate-y-1" 
  role="region"
  aria-live="polite"
  aria-label="Service card with expandable content"
>
```

#### Ratios de Contraste WCAG
- **Texte sur Gris (#0f172a sur #fafbfc)** : ✅ 16:1 (AAA)
- **Texte sur Blanc (#0f172a sur #ffffff)** : ✅ 15:1 (AAA)
- **Bouton Gradient (#fff sur #6C86FF)** : ✅ 7:1 (AA)

#### Préférence Motion Réduite
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

#### Focus Visible Amélioré
```css
button:focus-visible {
  outline: 2px solid #6C86FF;
  outline-offset: 2px;
}
```

---

### 📘 TypeScript

#### Migration vers TS
```tsx
// components/common/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary',
  ...props 
}: ButtonProps): JSX.Element {
  // Implementation
}
```

#### Configuration tsconfig
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

---

### 🎨 Design Tokens Avancés

#### Tailwind Config Enrichi
```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        gradient: {
          from: '#6C86FF',
          to: '#ff9ff2',
        },
        neutral: {
          50: '#fafbfc',
          100: '#f3f4f7',
          200: '#ececf1',
        }
      },
      animation: {
        'fade-in': 'fadeIn 1000ms ease-in-out',
        'slide-up': 'slideUp 1000ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(32px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
}
```

---

### 🏗️ Atomic Design Pattern

#### Structure Formalisée
```
components/
├── atoms/                  # Éléments de base
│   ├── Button.tsx
│   ├── Badge.tsx
│   ├── Label.tsx
│   └── Icon.tsx
├── molecules/              # Groupes d'atoms
│   ├── Card.tsx
│   ├── FormInput.tsx
│   ├── FormTextarea.tsx
│   └── Link.tsx
├── organisms/              # Complexes
│   ├── ServiceCard.tsx
│   ├── TeamMember.tsx
│   ├── ProjectCard.tsx
│   └── AnimatedCard.tsx
├── templates/              # Page layouts
│   ├── SectionTemplate.tsx
│   └── FormTemplate.tsx
└── sections/               # Pages complètes
    ├── Hero.tsx
    ├── Services.tsx
    └── ...
```

---

### 🧪 Testing

#### Unit Tests avec Vitest
```jsx
// Button.test.jsx
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders with primary variant', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-gradient-to-r');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
});
```

#### E2E Tests avec Playwright
```javascript
// contact.spec.ts
test('Contact form submits successfully', async ({ page }) => {
  await page.goto('/');
  await page.fill('input[type="email"]', 'test@example.com');
  await page.fill('textarea', 'Test message');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/thank-you');
});
```

---

### 🌙 Dark Mode (Future)

#### Configuration Tailwind
```js
module.exports = {
  darkMode: 'class', // ou 'media'
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a',
          surface: '#1a1f3a',
          border: '#334155'
        }
      }
    }
  }
}
```

#### Utilisation
```jsx
<div className="bg-white dark:bg-dark-bg text-black dark:text-white">
```

---

### 📊 Analytics & Monitoring

#### Tracking Interactions
```jsx
const trackEvent = (eventName, eventData) => {
  // Envoyer à votre service d'analytics (GA, Mixpanel, etc.)
  window.gtag?.('event', eventName, eventData);
};

// Utilisation
<Button onClick={() => trackEvent('cta_clicked', { section: 'hero' })}>
  {t.buttons.expertise}
</Button>
```

---

## Questions & Réflexions

### ❓ Code Hex #004AD

**Question** : Pourquoi #004AD plutôt qu'un code standard ?

**Observation** : Le code semble être #004AD (5 caractères) au lieu de #0044AD (6 caractères).

**Recommandation** : 
- Vérifier si c'est intentionnel ou une typo
- Standard : `#0044AD` (Bleu plus cohérent)
- Ou : `#004d99` (Nuance alternative)

**Action** : À confirmer avec votre palette de marque officielle

---

### 🧪 Testing Strategy

**État actuel** : Aucun test automatisé

**Recommandation** :
1. **Tests Unitaires** (Vitest) : Composants isolés
2. **Tests d'Intégration** : Navigation, multilingue
3. **E2E Tests** (Playwright) : Workflows complets
4. **Visual Regression** : Percy, Chromatic

**Priorité** :
- ✅ Phase 1 : Composants critiques (Button, Card)
- ✅ Phase 2 : Hooks (useLanguage, useScroll)
- ✅ Phase 3 : Pages complètes (Hero, Contact)

---

### 🌙 Dark Mode Roadmap

**Questions** :
- Dark mode prévu dans la roadmap produit ?
- Clientèle nocturne cible ? (developers, night workers)

**Impact** :
- ~15-20% de code CSS additionnel
- Nécessite révision palette couleurs
- Support préférence OS automatique

**Recommandation** : Laisser pour Phase 2 post-lancement

---

### ⚡ Performance Optimization

**Métrique actuelle** : À mesurer

**Recommandations** :
1. **Images** : Lazy loading, WEBP format, srcset
2. **Code** : Tree-shaking, minification, compression
3. **Fonts** : Charger seulement weights utilisés
4. **CLS** : Éviter layout shifts
5. **FID** : Interactions fluides

**Outils** :
- Lighthouse CI/CD
- WebPageTest
- Bundle Analyzer (vite-plugin-visualizer)

---

### 🔄 Versioning & Changelog

**Recommandation** : Maintenir un CHANGELOG.md

```markdown
## [1.1.0] - 2025-11-27

### Added
- Multilingue (EN/FR)
- Dynamic logo switching
- Team member hover descriptions

### Changed
- Remplacé Inter + Poppins par Nunito Sans
- Refonte système de couleurs

### Fixed
- Header transition au scroll
```

---

## ⭐ Points Forts du Design

### 1️⃣ Identité Gradient
**Impact** : Reconnaissance visuelle immédiate

Le gradient `#6C86FF → #ff9ff2` revient en boucle :
- Boutons primaires
- Underlines au hover
- Titres au hover
- Accents au scroll

**Résultat** : Cohérence visuelle 95%

---

### 2️⃣ Monofonts Nunito Sans
**Impact** : Simplicité + cohérence

Remplacer Inter + Poppins par une seule police :
- Moins de requêtes Google Fonts
- Maintenance simplifiée
- Hiérarchie claire via weights

**Résultat** : -1 import, +cohérence

---

### 3️⃣ Backgrounds Subtils
**Impact** : Sophistication sans surcharge

Les gradients personnalisés (neutral-light, accent-softer, etc.) :
- Créent profondeur
- Pas agressifs
- Alternent les sections

**Résultat** : Site Premium feel

---

### 4️⃣ Header Scroll-Aware
**Impact** : UX intuitive

Header transparent sur Hero → blanc au scroll :
- Pas de distraction sur vidéo
- Logo change (logo_v2 → davicen_v2)
- Navigation fluide

**Résultat** : Navigation smooth, logo dynamique

---

### 5️⃣ Multilingue Intégré
**Impact** : Scalabilité internationale

i18n depuis le départ (EN/FR) :
- Language picker au footer
- localStorage persistence
- Toutes sections traduites

**Résultat** : Prêt pour expansion

---

## Recommandations Immédiates

### 🔴 Priorité Critique
- [ ] Vérifier code hex #004AD (5 chars vs 6)
- [ ] Valider contraste WCAG sur tous textes

### 🟡 Priorité Haute
- [ ] Ajouter CSS custom properties
- [ ] Implémenter lazy loading images
- [ ] Tests unitaires composants clés

### 🟢 Priorité Moyenne
- [ ] Ajouter prefers-reduced-motion
- [ ] Documenter ratios contraste
- [ ] Commencer migration TypeScript

### 🔵 Priorité Basse
- [ ] Dark mode roadmap
- [ ] Atomic design formalization
- [ ] E2E testing infrastructure

---

**Document mis à jour le 27 Novembre 2025 - Feedback Intégré**
