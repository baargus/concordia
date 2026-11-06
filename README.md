# Concordia

Portail de travail pour le bureau et le conseil d’administration d’une association de parents d’élèves (APEL) — et, plus largement, de toute petite association qui vit entre un groupe WhatsApp et un classeur.

Un seul fichier `index.html`, qui s’ouvre dans n’importe quel navigateur, sur ordinateur comme sur téléphone, sans serveur ni installation. Les données de démonstration sont fictives.

**Statut : prototype fonctionnel (v5.1).** Tout ce qui est saisi reste dans le navigateur. Le raccordement à un serveur (données partagées, comptes, notifications) est la prochaine étape — voir *Feuille de route*.

## Ce qu’on y trouve

| Espace | Pour quoi faire |
| --- | --- |
| Accueil | Ce qui se prépare, les votes ouverts, l’agenda, la conversation du moment, la boussole de l’année |
| Forum & échanges | Un fil par sujet, réponses, « mersi », favoris, filtres ; import d’un export WhatsApp (Android et iPhone) |
| Projets | Chaque projet est autonome : responsable, équipe, tâches, budget, fil de discussion |
| Agenda | Année scolaire, créneaux bénévoles, export `.ics` |
| Gouvernance | Réunions et ordres du jour, votes et sondages, décisions, statuts et obligations, documents |
| Trésorerie | Dépenses à double validation avec justificatif, budget, registre des mouvements, indice de confiance |
| Communication & site public | Circuit brouillon → relecture → vote → publication ; articles, posts, calendrier |
| Réseaux & connexions | Liens de l’association, registre « qui administre quoi », charte du groupe WhatsApp |
| Familles, École et enseignants | Parents relais, kit d’accueil, fonds de solidarité, demandes des enseignants, accompagnateurs |
| Messagerie du bureau | Adresses de fonction (`presidence.apel@…`) qui restent à l’association quand le bureau change |
| Réglages | Rôles (l’interface s’adapte à chacun), six thèmes, français / créole réunionnais, export complet |

## Essayer

Ouvrez `index.html` dans un navigateur. Choisissez un membre fictif pour voir le portail depuis son rôle : la présidente, la trésorière, le référent communication et l’enseignante associée ne voient pas la même chose.

Pour le servir sur un réseau local :

```
python3 -m http.server 8080
```

puis `http://localhost:8080/`.

## Créer une instance pour votre association

Le dépôt public contient uniquement le logiciel et un jeu de données fictif. Vos données vivent dans un **dépôt privé dérivé**, jamais ici.

1. Copiez `src/demo-data.js` vers `data/mon-association.js` (le dossier `data/` est ignoré par git).
2. Remplacez les membres, projets, événements, comptes et textes par les vôtres, en conservant les mêmes constantes et les deux marqueurs `/* === DONNÉES DE DÉMONSTRATION ===` et `/* === FIN DES DONNÉES DE DÉMONSTRATION === */`.
3. Injectez-les dans la page :

```
python3 tools/injecter-donnees.py data/mon-association.js index.html
```

4. Renseignez la constante `INSTANCE` en tête de votre fichier de données : nom de l’association, école, ville, domaine du site public, domaine des adresses de fonction, hashtags, indicatif téléphonique et clé de stockage du navigateur (`cle`, à changer pour chaque instance). Tout ce qui est propre à votre association passe par ce bloc : le code n’a pas à être modifié, et chaque nouvelle version de Concordia se réinjecte avec la même commande.

Une instance porte le nom de son association ; le pied de page peut mentionner « propulsé par Concordia » (voir `TRADEMARK.md`).

## Feuille de route

1. **Serveur** : PocketBase (un binaire, SQLite) — authentification par code e-mail, droits par rôle, temps réel, fichiers. Le même `index.html` devient le front servi par PocketBase.
2. **Application installable** : manifest, service worker, notifications Web Push (Android, et iPhone depuis l’écran d’accueil).
3. **Passerelles** : Telegram (robot officiel), SMS (téléphone de l’association), WhatsApp uniquement par le numéro de l’association et sur décision du bureau.
4. **Paiement en ligne** : préventes et adhésions via un prestataire associatif, avec le registre des paiements dans Trésorerie.

## Licence et marque

Code sous **AGPL-3.0** (`LICENSE`) : libre d’usage, de modification et de redistribution ; quiconque héberge une version modifiée pour des utilisateurs doit en publier le code. Le nom « Concordia » et le logo ne sont pas couverts (`TRADEMARK.md`).

Copyright © 2026 Baptiste Sobocinski — DevPro Services & Projects. Contact : contact@devprosp.com.

## Contribuer

Issues et pull requests bienvenues sur <https://github.com/baargus/concordia>. Ce dépôt GitHub est un miroir : le développement se fait sur un dépôt d’origine privé, qui y pousse chaque version. Les contributions acceptées sont intégrées depuis l’origine, puis apparaissent ici au miroir suivant.

Merci de ne jamais y verser de données réelles (noms de membres, numéros, finances) : utilisez le jeu fictif.
