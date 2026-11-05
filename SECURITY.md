# Sécurité

## Signaler une vulnérabilité

Utilisez le **rapport de vulnérabilité privé GitHub** (Security → Advisories / Report a vulnerability) sur ce dépôt. Ne créez pas d’issue publique pour un problème de sécurité.

Indiquez :

- une description claire
- les étapes de reproduction
- l’impact estimé

Nous accusons réception dès que possible et traitons le rapport en privé jusqu’à correction.

## Secret poussé par erreur

1. **Révoquer / faire tourner le secret immédiatement** (clé API, token, keystore, etc.) — c’est la priorité.
2. Ensuite seulement, nettoyer l’historique Git si nécessaire.
3. Prévenir Enzo ou Yanis.

Ne committez jamais de fichiers `.env`, keystores (`*.jks`, `*.keystore`), `google-services.json`, `GoogleService-Info.plist`, clés de compte de service, ni certificats (`*.pem`, `*.p8`, `*.p12`).
