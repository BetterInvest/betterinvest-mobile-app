# BetterInvest — application mobile

Application mobile éducative BetterInvest (style Duolingo) pour apprendre l’investissement long terme. Ce dépôt contient le client **Expo / React Native** (TypeScript).

**Plateforme prioritaire : Android (Play Store).** iOS reste configuré mais secondaire.

## Prérequis

- Node.js 22 LTS (ou compatible avec Expo SDK 58)
- npm
- Compte Expo / EAS (uniquement pour les builds cloud, pas nécessaire pour le CI local)

## Installation

```bash
npm install
cp .env.example .env
npm start
```

Puis lancer l’app avec Expo Go ou un development build (`a` pour Android).

## Scripts

| Commande | Description |
|---|---|
| `npm start` | Démarre le serveur de développement Expo |
| `npm run android` | Ouvre l’app sur Android |
| `npm run ios` | Ouvre l’app sur iOS (secondaire) |
| `npm run lint` | ESLint (config Expo) |
| `npm run typecheck` | Vérification TypeScript (`tsc --noEmit`) |
| `npm test` | Tests unitaires (Jest + Testing Library) |
| `npm run build` | Export du bundle (`expo export --platform android`) |

## Structure

- `src/app/` — routes Expo Router
- `src/components/` — composants UI
- `eas.json` — profils EAS `development`, `preview`, `production` (sans credentials)
- Identifiants : `com.betterinvest.app` (Android package et iOS bundle id)

## Workflow Git (résumé)

- Branches longues : `main` (production) et `develop` (intégration)
- Travail : `feat/*` ou `fix/*` depuis `develop` → squash merge vers `develop`
- Release : `develop` → `main` en **merge commit**, puis tag `vX.Y.Z`
- Hotfix : `hotfix/*` depuis `main` → merge commit + tag, puis back-merge `main` → `develop`

Voir [CONTRIBUTING.md](./CONTRIBUTING.md) pour le détail.
