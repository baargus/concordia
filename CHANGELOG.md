# Journal des versions

## 5.0 — 2026-11-06 — première version publique (« Concordia nue »)
- Interface mobile-first : accueil, forum avec fils et favoris, projets, agenda, gouvernance (réunions, votes, décisions, statuts, documents), trésorerie à double validation, communication et site public, réseaux et registre des comptes, familles, école et enseignants, messagerie de fonction, réglages (six thèmes, français / créole réunionnais).
- Jeu de données de démonstration fictif (APEL de l’école des Flamboyants, Saint-Exemple).
- Import d’un export de discussion WhatsApp (formats Android et iPhone), sondages compris.
- Charte d’administration du groupe WhatsApp et registre « qui administre quoi ».
- Fonctionne hors ligne depuis un seul fichier `index.html` ; les données restent dans le navigateur (localStorage).

### Connu, pas encore fait
- Pas de serveur : aucune donnée partagée entre membres, pas d’authentification réelle, pas de notifications.
- Les liens d’export reposent sur `download` et un `blob:` ; ils ne fonctionnent pas dans toutes les visionneuses.
