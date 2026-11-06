// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (C) 2026 Baptiste Sobocinski — DevPro Services & Projects
/* === DONNÉES DE DÉMONSTRATION ===
   Association fictive : APEL de l’école des Flamboyants, Saint-Exemple (La Réunion).
   Toute ressemblance avec des personnes ou des montants réels serait fortuite.
   Pour une instance réelle, remplacez ce bloc par vos données (voir README, « Créer une instance »). */
const TODAY = new Date('2026-11-03T08:00:00');

const MEMBERS = [
  {id:'m1', canal:{type:'whatsapp', id:'à renseigner'}, nom:'Nadège Payet', role:'Présidente', bureau:true, mandat:'Élue à l’AG du 17/10/2026', aide:['Relations avec l’école et l’OGEC','Réunions et sondages'], email:'nadege.payet@example.org', tel:'—', couleur:'#0E7C7B'},
  {id:'m2', canal:{type:'whatsapp', id:'à renseigner'}, nom:'Karine Grondin', role:'Vice-présidente', bureau:true, mandat:'Élue à l’AG du 17/10/2026', aide:['Suppléance de la présidente','Partenariats'], email:'karine.grondin@example.org', tel:'—', couleur:'#2E7D32'},
  {id:'m3', canal:{type:'whatsapp', id:'à renseigner'}, nom:'Laure Técher', role:'Trésorière', bureau:true, mandat:'Élue à l’AG du 17/10/2026', aide:['Comptes, justificatifs, budget','Demandes de subvention'], email:'laure.techer@example.org', tel:'—', couleur:'#B9344F'},
  {id:'m4', canal:{type:'whatsapp', id:'à renseigner'}, nom:'Émilie Dijoux', role:'Secrétaire', bureau:true, mandat:'Élue à l’AG du 17/10/2026', aide:['Convocations, PV, archives','Boîte mail de l’association'], email:'emilie.dijoux@example.org', tel:'—', couleur:'#E29424'},
  {id:'m5', canal:{type:'whatsapp', id:'à renseigner'}, nom:'Sophie Fontaine', role:'Administratrice', bureau:false, mandat:'Membre du CA, AG du 17/10/2026', aide:['Planning mensuel','Page Facebook'], email:'sophie.fontaine@example.org', tel:'—', couleur:'#8A5A9C'},
  {id:'m6', canal:{type:'telegram', id:'@thomas_demo'}, nom:'Thomas Lebon', role:'Référent communication', bureau:false, mandat:'Membre du CA, AG du 17/10/2026', aide:['Site public et affichage','Outils numériques'], email:'thomas.lebon@example.org', tel:'—', couleur:'#1F3A4D'},
  {id:'m7', canal:{type:'whatsapp', id:'à renseigner'}, nom:'Julie Rivière', role:'Administratrice', bureau:false, mandat:'Membre du CA, AG du 17/10/2026', aide:['Kermesse et fêtes'], email:'julie.riviere@example.org', tel:'—', couleur:'#5B8A33'},
  {id:'m8', canal:{type:'sms', id:'à renseigner'}, nom:'Mickaël Turpin', role:'Administrateur', bureau:false, mandat:'Membre du CA, AG du 17/10/2026', aide:['Logistique, barnums, sono'], email:'mickael.turpin@example.org', tel:'—', couleur:'#C0392B'},
  {id:'m9', canal:{type:'whatsapp', id:'à renseigner'}, nom:'Anaïs Robert', role:'Administratrice', bureau:false, mandat:'Membre du CA, AG du 17/10/2026', aide:['Bourse aux jouets et aux vêtements'], email:'anais.robert@example.org', tel:'—', couleur:'#7D68A6'},
  {id:'m10', canal:{type:'email', id:'c.lauret@example.org'}, nom:'Mme Lauret', role:'Enseignante associée', bureau:false, mandat:'Lien APEL–enseignants (désignée par la direction)', aide:['Centralise les demandes des classes'], email:'c.lauret@example.org', tel:'—', couleur:'#607443', enseignant:true, statutAdhesion:'Membre associée (voix consultative)'},
  {id:'m11', canal:{type:'whatsapp', id:'à renseigner'}, nom:'David Bègue', role:'Administrateur', bureau:false, mandat:'Membre du CA, AG du 17/10/2026', aide:['À renseigner'], email:'david.begue@example.org', tel:'—', couleur:'#5681A0'},
  {id:'m12', canal:{type:'whatsapp', id:'à renseigner'}, nom:'Céline Pothin', role:'Administratrice', bureau:false, mandat:'Membre du CA, AG du 17/10/2026', aide:['Accueil des nouvelles familles'], email:'celine.pothin@example.org', tel:'—', couleur:'#A47825'},
  {id:'m13', canal:{type:'signal', id:'à renseigner'}, nom:'Olivier Vienne', role:'Trésorier adjoint', bureau:false, mandat:'Membre du CA, AG du 17/10/2026', aide:['Caisse des événements'], email:'olivier.vienne@example.org', tel:'—', couleur:'#9A6414'}
];
const POSTES_A_POURVOIR = ['Référent pastorale','Parent relais CM2'];

const PROJETS = [
  {id:'kermesse-noel', nom:'Kermesse de Noël', statut:'encours', resp:'m7', equipe:['m7','m1','m8'], objectif:'Participation de l’APEL à la kermesse de Noël organisée avec l’école : stands de jeux, buvette, tombola. Réunion d’organisation le mercredi 4 novembre à 17 h.', budget:{recettesPrevues:1800, depensesPrevues:600, recettesReelles:0, depensesReelles:0}, echeance:'2026-12-11', debut:'2026-11-04', taches:[
    {id:'t1', t:'Réunion d’organisation à l’école (17 h)', qui:'m7', d:'2026-11-04', done:false},
    {id:'t2', t:'Rapporter au CA ce qui est attendu de l’APEL (stands, buvette, bénévoles, budget)', qui:'m7', d:'2026-11-06', done:false},
    {id:'t3', t:'Demander le prêt de barnums à la mairie', qui:'m8', d:'2026-11-20', done:false},
    {id:'t4', t:'Ouvrir les créneaux bénévoles dans l’agenda', qui:'m6', d:'2026-11-25', done:false}
  ], docs:[], decisions:[], fil:[{by:'m7', when:'2026-11-02T09:10', txt:'Je prends la réunion de mercredi, je vous fais un retour vendredi.'}], modele:'Événement'},
  {id:'chocolats-noel', nom:'Vente de chocolats de Noël', statut:'etude', resp:'m3', equipe:['m3','m6','m12'], objectif:'Précommande de chocolats auprès d’un artisan local, retrait à l’école la dernière semaine avant les vacances. Marge estimée 30 %.', budget:{recettesPrevues:2400, depensesPrevues:1700, recettesReelles:0, depensesReelles:0}, echeance:'2026-12-18', debut:'2026-11-10', taches:[
    {id:'t1', t:'Demander deux devis (artisan, grossiste)', qui:'m3', d:'2026-11-12', done:false},
    {id:'t2', t:'Bon de commande papier + prévente en ligne (si le CA l’adopte)', qui:'m6', d:'2026-11-20', done:false},
    {id:'t3', t:'Distribution dans la cour, 16 h 30 – 18 h', qui:'m12', d:'2026-12-18', done:false}
  ], docs:[], decisions:[], fil:[], modele:'Vente'},
  {id:'bourse-jouets-vetements', nom:'Bourse aux jouets et aux vêtements', statut:'etude', resp:'m9', equipe:['m9','m5'], objectif:'Un samedi matin au préau : les familles déposent, vendent et achètent ; l’APEL prend 10 % pour le fonds de solidarité.', budget:{recettesPrevues:300, depensesPrevues:50, recettesReelles:0, depensesReelles:0}, echeance:'2027-03-13', debut:'2027-01-15', taches:[
    {id:'t1', t:'Valider la date avec la direction', qui:'m9', d:'2027-01-20', done:false},
    {id:'t2', t:'Règlement du déposant (une page)', qui:'m9', d:'2027-02-01', done:false}
  ], docs:[], decisions:[], fil:[], modele:'Événement'},
  {id:'preau', nom:'Soutien à la campagne des préaux', statut:'encours', resp:'m1', equipe:['m1','m2'], objectif:'Relayer la campagne de dons de l’école pour deux préaux : affiche, QR code, mot dans le cahier de liaison.', budget:{recettesPrevues:0, depensesPrevues:0, recettesReelles:0, depensesReelles:0}, echeance:'2027-05-04', debut:'2026-10-20', taches:[
    {id:'t1', t:'Texte du mot aux familles validé par la direction', qui:'m1', d:'2026-11-15', done:true},
    {id:'t2', t:'Affiche A3 avec QR code sur le tableau de l’école', qui:'m6', d:'2026-11-30', done:false}
  ], docs:[], decisions:[], fil:[], modele:'Partenariat'},
  {id:'planning-mensuel', nom:'Planning mensuel des familles', statut:'encours', resp:'m5', equipe:['m5','m6'], objectif:'Un visuel par mois : dates de l’école et de l’APEL, publié sur Facebook et affiché à l’école.', budget:{recettesPrevues:0, depensesPrevues:0, recettesReelles:0, depensesReelles:0}, echeance:null, debut:'2026-09-01', taches:[
    {id:'t1', t:'Planning de novembre validé sur le groupe', qui:'m5', d:'2026-11-02', done:true},
    {id:'t2', t:'Planning de décembre', qui:'m5', d:'2026-11-25', done:false}
  ], docs:[], decisions:[], fil:[], modele:'Communication'},
  {id:'kermesse-juin', nom:'Kermesse de fin d’année', statut:'idee', resp:'m7', equipe:['m7'], objectif:'La grande fête de juin : spectacle des classes, stands, restauration.', budget:{recettesPrevues:4000, depensesPrevues:1500, recettesReelles:0, depensesReelles:0}, echeance:'2027-06-26', debut:'2027-03-01', taches:[], docs:[], decisions:[], fil:[], modele:'Événement'},
  {id:'boum', nom:'Boum de rentrée', statut:'termine', resp:'m7', equipe:['m7','m8','m13'], objectif:'Soirée dansante des CM1-CM2 au préau, buvette et tee-shirts.', budget:{recettesPrevues:500, depensesPrevues:400, recettesReelles:640, depensesReelles:420}, echeance:'2026-09-26', debut:'2026-09-01', taches:[{id:'t1', t:'Bilan présenté au CA', qui:'m3', d:'2026-10-07', done:true}], docs:[], decisions:[], fil:[], modele:'Événement'}
];

const EVENEMENTS = [
  {id:'e1', nom:'Assemblée générale de l’APEL', date:'2026-10-17', type:'ca', lieu:'École', desc:'Élection du conseil d’administration, en présence des parents, de la direction et de l’OGEC.', manif:false, passe:true},
  {id:'e2', nom:'Conseil d’administration', date:'2026-10-24', type:'ca', lieu:'École', desc:'Élection du bureau, bilan de l’exercice précédent.', manif:false, passe:true},
  {id:'e3', nom:'Messe de rentrée', date:'2026-11-01', type:'ecole', lieu:'Église de Saint-Exemple', desc:'Familles bienvenues.', manif:false, passe:true},
  {id:'e4', nom:'Réunion d’organisation de la kermesse', date:'2026-11-04', type:'apel', lieu:'École', desc:'Avec la direction et les enseignants volontaires.', manif:false, passe:false, projet:'kermesse-noel'},
  {id:'e5', nom:'Journée de la bienveillance', date:'2026-11-05', type:'ecole', lieu:'École', desc:'Initiative de l’école ; l’APEL relaie.', manif:false, passe:false},
  {id:'e6', nom:'Conseil d’administration', date:'2026-11-06', type:'ca', lieu:'École', desc:'Organisation de la gestion, kermesse, communication.', manif:false, passe:false},
  {id:'e7', nom:'Formation des nouveaux administrateurs (Apel départementale)', date:'2026-11-07', type:'reseau', lieu:'Saint-Exemple', desc:'Matinée d’accueil des nouvelles équipes.', manif:false, passe:false},
  {id:'e8', nom:'Armistice — école fermée', date:'2026-11-11', type:'vac', lieu:'', desc:'', manif:false, passe:false},
  {id:'e9', nom:'Conseil d’administration', date:'2026-11-14', type:'ca', lieu:'École', desc:'Budget 2026-2027, chocolats, préaux.', manif:false, passe:false},
  {id:'e10', nom:'Kermesse de Noël', date:'2026-12-11', type:'apel', lieu:'Cour de l’école', desc:'Stands, buvette, tombola. Bénévoles bienvenus.', manif:true, passe:false, projet:'kermesse-noel', creneaux:[{id:'c1', t:'Stand pêche aux canards (14 h – 15 h 30)', places:2, inscrits:['m9']},{id:'c2', t:'Buvette (14 h – 16 h)', places:3, inscrits:[]},{id:'c3', t:'Rangement (16 h – 17 h)', places:4, inscrits:['m8']}]},
  {id:'e11', nom:'Distribution des chocolats', date:'2026-12-18', type:'apel', lieu:'Cour de l’école, 16 h 30', desc:'Retrait des précommandes.', manif:false, passe:false, projet:'chocolats-noel'},
  {id:'e12', nom:'Vacances de Noël', date:'2026-12-19', type:'vac', lieu:'', desc:'Jusqu’au 24 janvier.', manif:false, passe:false},
  {id:'e13', nom:'Bourse aux jouets et aux vêtements', date:'2027-03-13', type:'apel', lieu:'Préau', desc:'Samedi matin.', manif:true, passe:false, projet:'bourse-jouets-vetements', creneaux:[{id:'c1', t:'Accueil des déposants (7 h 30 – 9 h)', places:2, inscrits:[]},{id:'c2', t:'Caisse (9 h – 12 h)', places:2, inscrits:[]}]},
  {id:'e14', nom:'Fin de la campagne des préaux', date:'2027-05-04', type:'ecole', lieu:'', desc:'', manif:false, passe:false},
  {id:'e15', nom:'Kermesse de fin d’année', date:'2027-06-26', type:'apel', lieu:'École', desc:'', manif:true, passe:false, projet:'kermesse-juin'}
];

const PARTENAIRES = [
  {id:'p1', nom:'Boulangerie du Centre', type:'Commerce', statut:'actif', contact:'Mme Hoarau-Demo, gérante', dernier:'2026-09-26', prochain:'Viennoiseries de la kermesse de Noël', notes:'Remise de 20 % sur les commandes de l’APEL.', dons:[{d:'2026-09-26', t:'40 pains au chocolat pour la boum', v:40}]},
  {id:'p2', nom:'Mairie de Saint-Exemple', type:'Institution', statut:'prospect', contact:'Service vie associative', dernier:null, prochain:'Déposer la demande de subvention annuelle', notes:'Prêt de barnums possible sur demande écrite.', dons:[]},
  {id:'p3', nom:'Chocolaterie Demo-Vanille', type:'Artisan', statut:'prospect', contact:'Atelier, zone artisanale', dernier:null, prochain:'Devis pour 120 coffrets', notes:'', dons:[]},
  {id:'p4', nom:'Apel départementale', type:'Réseau', statut:'actif', contact:'Secrétariat', dernier:'2026-10-17', prochain:'Formation du 7 novembre', notes:'Appui juridique et modèles de documents.', dons:[]},
  {id:'p5', nom:'Supermarché du Rond-Point', type:'Commerce', statut:'prospect', contact:'Direction du magasin', dernier:null, prochain:'Demander des lots pour la tombola', notes:'', dons:[]}
];

const DOSSIERS = [
  {id:'d1', guichet:'g1', nom:'Subvention annuelle 2027 — Mairie de Saint-Exemple', projet:null, statut:'idee', montant:1500, echeance:'2027-01-31', checklist:[
    {t:'Formulaire de la commune récupéré', ok:false},{t:'Statuts et récépissé RNA', ok:true},{t:'PV de l’AG et composition du bureau', ok:true},{t:'Bilan financier 2025-2026', ok:true},{t:'Budget prévisionnel 2026-2027', ok:false},{t:'RIB au nom de l’association', ok:true},{t:'Fiche projet', ok:false}
  ], journal:[{when:'2026-11-02', txt:'Dossier ouvert par la trésorière.'}]}
];

const REUNIONS = [
  {id:'r0', nom:'Conseil d’administration', date:'2026-10-24', statut:'passee', pv:true, presents:11, odj:[{t:'Élection du bureau', par:'m1', duree:30},{t:'Bilan financier 2025-2026', par:'m3', duree:20}]},
  {id:'r1', nom:'Assemblée générale', date:'2026-10-17', statut:'passee', pv:true, presents:38, odj:[{t:'Rapport d’activité', par:'m1', duree:15},{t:'Rapport financier', par:'m3', duree:15},{t:'Élection du CA', par:'m4', duree:20}]},
  {id:'r2', nom:'Conseil d’administration', date:'2026-11-06', statut:'afixer', pv:false, presents:0, odj:[
    {t:'Nouvelle organisation de la gestion : espèces, stocks, justificatifs', par:'m3', duree:20},
    {t:'Kermesse de Noël : retour de la réunion du 4 novembre', par:'m7', duree:15},
    {t:'Vente de chocolats : devis et prévente', par:'m3', duree:10},
    {t:'Réseaux sociaux et site public', par:'m6', duree:10},
    {t:'Rangement du local', par:'m8', duree:5}
  ]}
];
const DECISIONS = [
  {date:'2026-10-24', txt:'Bilan financier de l’exercice 2025-2026 approuvé par le conseil d’administration.', vote:'CA', ref:'Bilan financier 2025-2026'},
  {date:'2026-10-24', txt:'Bureau élu : présidente, vice-présidente, trésorière, secrétaire.', vote:'CA', ref:'PV du 24/10/2026'},
  {date:'2026-10-24', txt:'Participation de l’APEL à la kermesse de Noël, budget plafonné à 600 €.', vote:'CA', ref:'Kermesse de Noël'},
  {date:'2026-10-24', txt:'Toute dépense est validée par deux membres du bureau et accompagnée d’un justificatif.', vote:'CA', ref:'Règle de gestion'}
];
const VOTES = [
  {id:'v1', q:'Prochaine réunion du CA — quel créneau ?', ouvert:true, clos:'2026-11-04', options:['Mardi 17 h','Vendredi 17 h','Samedi 9 h'], bulletins:{}, comptes:[3,6,4], type:'sondage', note:'Sondage ouvert par la présidente.'},
  {id:'v2', q:'Vente de chocolats : artisan local (plus cher) ou grossiste (marge plus forte) ?', ouvert:true, clos:'2026-11-13', options:['Artisan local','Grossiste'], bulletins:{}, comptes:[5,2], type:'vote', note:'Décision au CA du 14 novembre.'},
  {id:'v3', q:'Adopter la règle « deux validations par dépense, justificatif obligatoire »', ouvert:false, clos:'2026-10-24', options:['Pour','Contre','Abstention'], bulletins:{}, comptes:[11,0,0], type:'vote', note:'Adoptée au CA du 24/10/2026.'}
];
const DOCUMENTS = [
  {n:'Bilan financier 2025-2026', t:'PDF', maj:'2026-10-17', cat:'Trésorerie'},
  {n:'Procès-verbal de l’AG du 17/10/2026', t:'PDF', maj:'2026-10-20', cat:'Réunions'},
  {n:'Procès-verbal du CA du 24/10/2026', t:'PDF', maj:'2026-10-27', cat:'Réunions'},
  {n:'Planning de novembre 2026', t:'Image', maj:'2026-11-02', cat:'Communication'},
  {n:'Statuts de l’APEL (2016)', t:'PDF', maj:'2016-09-12', cat:'Officiel'},
  {n:'Récépissé de déclaration RNA', t:'PDF', maj:'2016-10-03', cat:'Officiel'},
  {n:'Charte du groupe WhatsApp (projet)', t:'Texte', maj:'2026-11-03', cat:'Officiel', note:'Réseaux › Groupes et comptes'}
];
const DEPENSES = [
  {id:'x1', libelle:'Tee-shirts de la boum de rentrée', montant:420, projet:'boum', demandeur:'m7', date:'2026-09-20', justif:true, validations:['m1','m3'], statut:'paye'},
  {id:'x2', libelle:'Lots de la tombola de Noël (acompte)', montant:180, projet:'kermesse-noel', demandeur:'m7', date:'2026-11-02', justif:false, validations:['m1'], statut:'attente'}
];
const MOUVEMENTS = [
  {date:'2026-10-24', libelle:'Caisse (situation au 24/10/2026)', montant:112.40, sens:'in', justif:true},
  {date:'2026-10-24', libelle:'Compte courant (situation au 24/10/2026)', montant:4218.65, sens:'in', justif:true},
  {date:'2026-10-24', libelle:'Livret A (situation au 24/10/2026)', montant:1500.00, sens:'in', justif:true},
  {date:'2026-10-02', libelle:'Recettes de la boum de rentrée', montant:640, sens:'in', justif:true}
];
const PUBLICATIONS = [
  {id:'pub1', titre:'Post Facebook : le nouveau conseil d’administration', canal:['Facebook'], statut:'publie', par:'m5', date:'2026-10-19'},
  {id:'pub2', titre:'Planning de novembre', canal:['Facebook','Affichage'], statut:'publie', par:'m5', date:'2026-11-02'},
  {id:'pub3', titre:'Appel aux bénévoles pour la kermesse de Noël', canal:['Facebook','Cahier de liaison'], statut:'valide', par:'m7', date:'2026-11-10'},
  {id:'pub4', titre:'Précommande de chocolats : mode d’emploi', canal:['Site','Affichage'], statut:'brouillon', par:'m6', date:'2026-11-20'}
];
const LAKOUR = [
  {id:'l1', by:'m1', when:'2026-10-25T08:30', txt:'Bonjour à toutes et à tous,\nMerci pour votre confiance. Une belle année nous attend : on avance ensemble, avec les idées de chacun, toujours pour les enfants.', mercis:['m5','m7','m13'], type:'mot'},
  {id:'l2', by:'m7', when:'2026-11-02T09:05', txt:'Qui est disponible mercredi à 17 h pour la réunion kermesse avec l’école ? Je prends les présents.', mercis:['m1'], type:'coupdemain'},
  {id:'l3', by:'m5', when:'2026-11-02T08:41', txt:'Je finalise le planning de novembre ce soir, je vous l’envoie pour validation avant publication.', mercis:['m1','m4'], type:'partage'},
  {id:'l4', by:'m12', when:'2026-11-02T10:15', txt:'Deux familles nouvellement arrivées m’ont demandé comment adhérer : je leur passe le bulletin et je les présente au bureau.', mercis:['m1','m2'], type:'partage'},
  {id:'l5', by:'m9', when:'2026-11-02T11:20', txt:'Pour la bourse aux jouets, est-ce qu’on part sur un samedi de mars ? Je vérifie avec la direction.', mercis:[], type:'partage'},
  {id:'l6', by:'m4', when:'2026-11-02T12:56', txt:'Le PV du CA du 24/10 est relu, je le dépose dans Documents ce soir.', mercis:['m1','m3','m6'], type:'partage'}
];
const NOTIFS = [
  {when:'Hier', txt:'Deux sondages sont ouverts : créneau du CA et choix du chocolatier.', lien:'gouvernance'},
  {when:'Hier', txt:'Le PV du CA du 24/10 est disponible dans Documents.', lien:'gouvernance'},
  {when:'Il y a 2 jours', txt:'Dépense en attente de seconde validation : lots de la tombola (180 €).', lien:'tresorerie'},
  {when:'Il y a 2 jours', txt:'Le planning de novembre est publié.', lien:'communication'},
  {when:'Il y a 3 jours', txt:'Réunion d’organisation de la kermesse mercredi 4 novembre à 17 h.', lien:'agenda'}
];
const AUDIT = [
  {when:'2026-11-02 21:40', qui:'m4', txt:'PV du CA du 24/10/2026 déposé dans Documents'},
  {when:'2026-11-02 18:05', qui:'m1', txt:'Dépense x2 validée (1/2)'},
  {when:'2026-11-02 09:00', qui:'m5', txt:'Planning de novembre publié'},
  {when:'2026-10-27 20:10', qui:'m3', txt:'Dépense x1 payée, justificatif joint'},
  {when:'2026-10-24 19:30', qui:'m4', txt:'Décisions du CA consignées'},
  {when:'2026-10-24 18:00', qui:'m1', txt:'Bureau élu'}
];

const BUDGET = {
  exercice:'2026-2027 (1er août 2026 – 31 juillet 2027)', statut:'Prévisionnel à voter au CA du 14 novembre', voteLe:null,
  precedent:{exercice:'2025-2026', recettes:9840.00, depenses:8215.50, resultat:1624.50, tresorerie:5831.05, banque:4218.65, livret:1500.00, caisse:112.40, familles:186, cotisation:15, horsProduits:'', regularisations:['Facture du traiteur de la kermesse de juin reçue après clôture (240 €), à passer sur l’exercice en cours']},
  recettes:[
    {nom:'Cotisations des familles', prevu:2800, realise:0, note:'186 familles × 15 € l’an passé'},
    {nom:'Actions et fêtes', prevu:6200, realise:640, note:'Boum, kermesse de Noël, chocolats, bourse, kermesse de juin'},
    {nom:'Subventions', prevu:1500, realise:0, note:'Mairie (dossier en cours)'},
    {nom:'Dons et partenaires', prevu:400, realise:0, note:'Lots et remises'}
  ],
  depenses:[
    {nom:'Projets des classes et sorties', prevu:3000, realise:0, note:'Sur demande des enseignants, validée au CA'},
    {nom:'Fêtes et événements', prevu:2500, realise:420, note:'Achats, locations, lots'},
    {nom:'Cotisation à l’Apel départementale', prevu:1860, realise:0, note:'10 € par famille adhérente'},
    {nom:'Fonds de solidarité', prevu:300, realise:0, note:'Aide discrète aux familles'},
    {nom:'Communication', prevu:200, realise:0, note:'Affiches, impression'},
    {nom:'Assurance et frais bancaires', prevu:180, realise:0, note:''}
  ]
};

const STATUTS_ASSO = {
  deposes:'2016-09-12', derniereModif:null,
  articles:[
    {n:1, t:'Dénomination', c:'Il est fondé entre les adhérents aux présents statuts une association régie par la loi du 1er juillet 1901, dénommée Association des parents d’élèves de l’enseignement libre (Apel) de l’école des Flamboyants.'},
    {n:2, t:'Objet', c:'[Texte intégral des statuts déposés]'},
    {n:3, t:'Siège social', c:'[Texte intégral]'},
    {n:4, t:'Membres et cotisation', c:'[Texte intégral — cotisation actuelle : 15 € par famille]'},
    {n:5, t:'Conseil d’administration', c:'[Texte intégral]'},
    {n:6, t:'Bureau', c:'[Texte intégral]'},
    {n:7, t:'Assemblée générale', c:'[Texte intégral]'},
    {n:8, t:'Ressources', c:'[Texte intégral]'},
    {n:9, t:'Modification des statuts et dissolution', c:'[Texte intégral]'}
  ],
  propositions:[
    {id:'s0', t:'Adopter de nouveaux statuts sur la trame des statuts-types Apel 2022 : le CA seul organe décisionnaire, le bureau prépare et met en œuvre', par:'m1', statut:'À inscrire à l’ordre du jour', detail:'Trame : statuts-types de l’Apel nationale (2022). Procédure : projet adressé au président de l’Apel départementale pour avis trente jours francs au moins avant l’AGE ; convocation quinze jours avant, texte en annexe ; adoption à la majorité des deux tiers des suffrages exprimés, un quart des membres présents ; déclaration au greffe dans les trois mois.', vote:null},
    {id:'s1', t:'Créer un poste de vérificateur aux comptes indépendant', par:'m13', statut:'À inscrire à l’ordre du jour', detail:'Un ou deux membres hors bureau, élus en AG, contrôlent les comptes et les pièces avant chaque AG et rendent un rapport écrit.', vote:null},
    {id:'s2', t:'Inscrire la double validation des dépenses dans le règlement intérieur', par:'m3', statut:'Rédaction en cours', detail:'Compte au nom de l’association, deux validations, justificatif obligatoire, information du CA au-dessus de 500 €, export à chaque CA, espèces et chèques toujours acceptés.', vote:null},
    {id:'s3', t:'Préciser le statut de membre associé pour les enseignants (voix consultative)', par:'m1', statut:'À vérifier dans les statuts', detail:'Mme Lauret fait le lien APEL–enseignants. Si les statuts ne le prévoient pas, créer la catégorie « membre associé », avec accord du chef d’établissement.', vote:null},
    {id:'s4', t:'Adopter la charte du groupe WhatsApp (règlement intérieur, canaux numériques)', par:'m6', statut:'À voter au CA', detail:'Administrateurs : membres du bureau en exercice (deux au minimum) plus le téléphone de l’association ; retrait des anciens membres ; ni finances, ni données de familles, ni décision engageante sur le groupe. Texte complet dans Réseaux › Groupes et comptes.', vote:null}
  ],
  obligations:[
    {t:'Déposer le PV de l’AG du 17/10/2026 dans Documents (secrétaire)', d:'2026-10-24', note:'Fait.', fait:true},
    {t:'Statuts : décider en réunion de lancer la révision sur la trame Apel 2022 et fixer la date de l’AGE', d:'2026-11-06', note:'Fondation de tout le reste.', fait:false},
    {t:'Statuts : envoyer le projet au président de l’Apel départementale pour avis (30 jours francs avant l’AGE)', d:'2026-11-14', note:'Pour une AGE avant les vacances.', fait:false},
    {t:'Sécuriser la boîte mail de l’association : nouveau mot de passe, validation en deux étapes (secrétaire)', d:'2026-11-10', note:'', fait:false},
    {t:'Confirmer les administrateurs du groupe WhatsApp et le détenteur du téléphone de l’association', d:'2026-11-10', note:'Deux administrateurs du bureau en exercice ; consigné dans Réseaux › Groupes et comptes.', fait:false},
    {t:'Transmettre la composition du bureau à l’Apel départementale et à l’école', d:'2026-11-15', note:'Courrier simple avec le PV de l’AG.', fait:false},
    {t:'Mettre à jour les signataires du compte bancaire (présidente, trésorière)', d:'2026-11-30', note:'Rendez-vous à l’agence avec le PV.', fait:false},
    {t:'Déclarer le changement de bureau au greffe des associations', d:'2027-01-17', note:'Dans les trois mois suivant l’AG (loi 1901, art. 5).', fait:false},
    {t:'Assemblée générale annuelle', d:'2027-10-15', note:'Comptes arrêtés au 31/07/2027, rapport d’activité, élections.', fait:false}
  ]
};

const PAGES = [
  {n:'Accueil', maj:'2026-10-20', etat:'En ligne'},{n:'Dernières infos', maj:'2026-11-02', etat:'En ligne'},{n:'Le bureau et le CA', maj:'2026-10-20', etat:'En ligne'},{n:'Agenda', maj:'2026-11-02', etat:'En ligne'},
  {n:'Adhérer', maj:null, etat:'À créer'},{n:'Préventes', maj:null, etat:'À créer'},{n:'Partenaires', maj:null, etat:'À créer'},{n:'Contact', maj:'2026-10-20', etat:'En ligne'}
];
const ARTICLES = [
  {id:'a1', titre:'Un nouveau conseil d’administration pour l’APEL', extrait:'Élu le 17 octobre : treize parents, un bureau de quatre, et des projets pour toute l’année.', auteur:'m5', statut:'publie', date:'2026-10-20', votes:{m1:'pour', m2:'pour', m3:'pour', m4:'pour'}, commentaires:[{by:'m1', txt:'Texte validé au CA du 24/10.'}]},
  {id:'a2', titre:'Kermesse de Noël : appel aux bénévoles', extrait:'Le 11 décembre, stands et buvette ont besoin de bras. Deux créneaux d’une heure et demie suffisent.', auteur:'m7', statut:'pret', date:'2026-11-10', votes:{m1:'pour', m2:'pour', m3:'pour', m4:null}, commentaires:[]},
  {id:'a3', titre:'Précommander les chocolats de Noël', extrait:'Mode d’emploi de la prévente, retrait le 18 décembre dans la cour.', auteur:'m6', statut:'brouillon', date:'2026-11-20', votes:{m1:null, m2:null, m3:null, m4:null}, commentaires:[]},
  {id:'a4', titre:'Bourse aux jouets et aux vêtements : règlement du déposant', extrait:'Ce qu’on peut déposer, à quel prix, et ce qui revient au fonds de solidarité.', auteur:'m9', statut:'brouillon', date:'2027-02-01', votes:{m1:null, m2:null, m3:null, m4:null}, commentaires:[]}
];
const RESEAUX = [
  {id:'facebook', nom:'Page Facebook', etat:'Existante', note:'Publications par Sophie (planning, événements, photos de classes avec autorisations). Administrateurs à consigner dans Groupes et comptes.', max:63206},
  {id:'instagram', nom:'Instagram', etat:'À décider', note:'Utile pour les photos d’événements ; à décider au CA.', max:2200},
  {id:'whatsapp', nom:'Groupe WhatsApp', etat:'À part', note:'Coordination du CA ; pas de synchronisation en direct. Import des exports possible.', max:65536},
  {id:'lettre', nom:'Lettre aux familles', etat:'À créer', note:'Un mot dans le cahier de liaison par trimestre.', max:1500}
];
const POSTS = [
  {id:'ps1', texte:'Notre assemblée générale s’est tenue le 17 octobre. Merci aux familles présentes et bienvenue au nouveau conseil d’administration ! Présidente : Nadège Payet ; vice-présidente : Karine Grondin ; trésorière : Laure Técher ; secrétaire : Émilie Dijoux.', reseaux:['facebook'], date:'2026-10-19', statut:'publie', visuel:'Logo APEL', visages:false, par:'m5'},
  {id:'ps2', texte:'Le planning de novembre est en ligne : réunion kermesse le 4, journée de la bienveillance le 5, CA le 6 et le 14. Affiché aussi devant l’école.', reseaux:['facebook'], date:'2026-11-02', statut:'publie', visuel:'Planning', visages:false, par:'m5'},
  {id:'ps3', texte:'Kermesse de Noël le 11 décembre : on cherche des bénévoles pour les stands et la buvette, deux créneaux d’1 h 30. Inscrivez-vous auprès de Julie.', reseaux:['facebook'], date:'2026-11-12', statut:'validation', visuel:'Affiche kermesse', visages:false, par:'m7'},
  {id:'ps4', texte:'Précommandez vos chocolats de Noël jusqu’au 10 décembre ; retrait le 18 dans la cour.', reseaux:['facebook','instagram'], date:'2026-11-24', statut:'brouillon', visuel:'Visuel chocolats', visages:false, par:'m6'}
];

const CANAUX_REGISTRE = [
  {id:'wa-bureau', nom:'Groupe WhatsApp « APEL Flamboyants »', type:'Groupe du bureau et du CA', usage:'Coordination rapide, sondages de date, validation des posts et du planning. Pas de finances détaillées, pas de données de familles, pas de décision engageante.', admins:['m1','m4'], etat:'OK', note:'Créé par le téléphone de l’association ; deux administratrices du bureau en exercice ; anciens membres retirés après l’AG.', verif:'2026-10-25', action:''},
  {id:'tel-apel', nom:'Téléphone de l’association', type:'Téléphone de l’association', usage:'Reçoit les photos des enseignantes, administre le groupe, contact des familles.', admins:['m4','m1'], etat:'OK', note:'Détenu par la secrétaire, suppléante : la présidente. Code de déverrouillage dans le coffre.', verif:'2026-10-25', action:''},
  {id:'mail-apel', nom:'Boîte mail apel.flamboyants@example.org', type:'Adresse officielle', usage:'Courriers de l’Apel départementale, des partenaires, des familles.', admins:['m4'], etat:'À sécuriser', note:'À faire : nouveau mot de passe, validation en deux étapes, second administrateur du bureau.', verif:'2026-10-25', action:'Mot de passe + validation en deux étapes'},
  {id:'mail-fonction', nom:'Boîtes de fonction « .apel » sur le domaine de l’école', type:'Messagerie', usage:'presidence.apel@, vice-presidence.apel@, tresorerie.apel@, secretariat.apel@, communication.apel@, contact.apel@ (publique) ; bureau.apel@ = liste vers les quatre ; concordia.apel@ = envois du portail.', admins:[], etat:'À créer', note:'Convention fonction.entite@ sur le domaine de l’école, hébergées sur son serveur. Mot de passe remis à chaque AG avec le téléphone ; adresse perso pour se connecter au portail, adresse de fonction pour la correspondance.', verif:null, action:'Accord de l’OGEC, puis création des boîtes'},
  {id:'fb', nom:'Page Facebook de l’APEL', type:'Réseau social', usage:'Planning mensuel, événements, photos de classes avec autorisations.', admins:['m5','m1'], etat:'OK', note:'Deux administratrices du bureau et du CA.', verif:'2026-10-25', action:''},
  {id:'site', nom:'Site public apel.ecole-des-flamboyants.example', type:'Site', usage:'Vitrine de l’APEL, dernières infos, planning, préventes.', admins:['m6'], etat:'OK', note:'Sous-domaine accordé par l’OGEC ; propriétaire : l’APEL ; administrateur technique : le référent communication.', verif:'2026-10-20', action:''},
  {id:'concordia', nom:'Portail Concordia', type:'Portail du bureau', usage:'Tout le travail de l’association.', admins:['m6','m1'], etat:'OK', note:'Accès par code e-mail ; les droits suivent les rôles ; export complet à tout moment.', verif:'2026-11-03', action:''},
  {id:'banque', nom:'Compte bancaire et Livret A de l’association', type:'Banque', usage:'Toutes les recettes et dépenses.', admins:['m1','m3'], etat:'À vérifier', note:'Signataires à mettre à jour après l’AG : présidente et trésorière.', verif:null, action:'Rendez-vous à l’agence avec le PV de l’AG'},
  {id:'caisse', nom:'Caisse (espèces)', type:'Caisse', usage:'112,40 € au 24/10/2026.', admins:['m3'], etat:'OK', note:'Tenue par la trésorière ; comptage à chaque CA.', verif:'2026-10-24', action:''},
  {id:'helloasso', nom:'Paiement en ligne', type:'Paiement', usage:'Préventes, adhésions, billetterie.', admins:[], etat:'Après le vote du CA', note:'Compte au nom de l’APEL, ouvert par la présidente et la trésorière si le CA adopte le paiement en ligne.', verif:null, action:''},
  {id:'lca', nom:'Le Compte Asso', type:'Démarches', usage:'Déclaration du changement de bureau, demandes FDVA.', admins:['m4'], etat:'OK', note:'Compte au nom de l’association, accès secrétaire + présidente.', verif:'2026-10-27', action:''}
];

const FAMILLES = {
  relais:[{classe:'PS A', qui:'m12'},{classe:'MS A', qui:null},{classe:'MS B', qui:null},{classe:'GS A', qui:'m9'},{classe:'GS B', qui:null},{classe:'CE1 B', qui:null},{classe:'CE2 A', qui:'m7'},{classe:'CM1 A', qui:null}],
  kit:[{t:'Mot de bienvenue du bureau (une page)', ok:true},{t:'Trombinoscope avec les parents relais', ok:false},{t:'Planning du mois et QR vers Dernières infos', ok:true},{t:'Bulletin d’adhésion (cotisation 15 € par famille)', ok:true},{t:'Charte des accompagnateurs de sorties', ok:false},{t:'Qui contacter pour quoi (école / APEL / OGEC)', ok:false}],
  nouvelles:2, parrainage:[{id:'m12'}],
  solidarite:{fonds:300, regle:'Aide discrète aux familles pour une sortie, un uniforme ou la cantine. Demande traitée par la présidente, la trésorière et le chef d’établissement uniquement ; rien n’apparaît nominativement au registre, seulement « aide de solidarité » et le montant.', enCours:1, traitees:0},
  parentalite:[{t:'Journée de la bienveillance (école)', d:'2026-11-05', etat:'Initiative de l’école ; l’APEL relaie'},{t:'Café des parents', d:'2027-01-30', etat:'À proposer ; dossier REAAP possible'},{t:'Ressources « Grandir ensemble » sur le site de l’école', d:null, etat:'En ligne'}],
  ecoute:[]
};

const ECOLE = {
  demandes:[
    {id:'dm1', classe:'Toutes', de:'Direction', t:'Kermesse de Noël : participation de l’APEL', d:'2026-11-04', etat:'etudiee', besoin:'Réunion d’organisation mercredi 4/11 à 17 h', lien:'kermesse-noel'},
    {id:'dm2', classe:'CE2 A', de:'Enseignante de CE2', t:'Financer la sortie au jardin botanique (bus)', d:'2026-10-29', etat:'recue', besoin:'180 € — à passer au CA du 14/11', lien:null},
    {id:'dm3', classe:'GS', de:'Mme Lauret (lien APEL–enseignants)', t:'Centraliser les actions des classes pour le planning mensuel', d:null, etat:'faite', besoin:'Un point par mois, avant le 20', lien:'planning-mensuel'}
  ],
  accompagnateurs:[{id:'m8', dispo:'Jeudis et vendredis', charte:true}],
  finances:[{t:'Actions et fêtes 2025-2026 (recettes 6 100 €)', an:'2025-2026', montant:0},{t:'Projets de classes et sorties 2026-2027', an:'2026-2027', montant:0, prevu:3000}],
  instances:[
    {t:'Présentation du bureau aux enseignants, en début d’une de leurs réunions', d:'2026-11-18', qui:['m1','m2'], etat:'Confirmée par la direction', cr:false},
    {t:'Réunion d’organisation de la kermesse de Noël', d:'2026-11-04', qui:['m7'], etat:'Confirmée, 17 h', cr:false},
    {t:'Point communication école–APEL avec la direction', d:null, qui:['m1','m6'], etat:'À proposer', cr:false},
    {t:'Réunion OGEC – APEL (préaux, sous-domaine, préventes)', d:null, qui:['m1','m3'], etat:'À proposer', cr:false}
  ],
  mercis:[{t:'Attention de Noël pour l’équipe enseignante', d:'2026-12-15', fait:false},{t:'Fête des enseignants de fin d’année', d:'2027-06-30', fait:false}]
};

/* Charte d’administration du groupe WhatsApp — proposition à voter au CA, appliquée depuis Réseaux › Groupes et comptes. */
const CHARTE_WA = {
  titre:'Charte du groupe WhatsApp de l’association',
  constats:[
    'Le créateur d’un groupe WhatsApp reste administrateur et ne peut être ni retiré ni rétrogradé : il faut savoir qui c’est, et préférer que ce soit le téléphone de l’association.',
    'Le téléphone de l’association doit être administrateur du groupe, et détenu par un membre du bureau avec un suppléant.',
    'La règle de contenu la plus simple : tout post destiné aux familles est envoyé en amont sur le groupe pour validation.',
    'L’export ne montre pas la liste des administrateurs : elle se lit uniquement dans WhatsApp, Infos du groupe → Participants (badge « Admin du groupe »).'
  ],
  regles:[
    {t:'Le groupe appartient à l’association', d:'Il sert à la coordination rapide du bureau et du conseil d’administration. Il n’est la propriété d’aucune personne : son créateur idéal est le téléphone de l’association.'},
    {t:'Qui en est membre', d:'Les membres du CA en exercice et le téléphone de l’association. Les membres associés seulement sur décision du CA. Toute personne qui quitte le CA quitte le groupe dans la semaine, retirée par un administrateur.'},
    {t:'Qui l’administre', d:'Uniquement des membres du bureau en exercice — le CA peut y ajouter un administrateur désigné. Toujours deux personnes au minimum, plus le téléphone de l’association. Jamais un ancien membre, jamais un numéro non identifié.'},
    {t:'Comment on les désigne', d:'Par décision du CA, consignée au registre (nom, canal, date). Réexamen à chaque AG et à chaque changement de bureau : les nouveaux administrateurs sont nommés avant que les anciens soient rétrogradés ou retirés.'},
    {t:'Le téléphone de l’association', d:'Détenu par un membre du bureau désigné, avec un suppléant. Code de déverrouillage et code PIN WhatsApp (vérification en deux étapes) dans le coffre de l’association. Le téléphone change de mains à chaque changement de bureau, contre signature au registre.'},
    {t:'Réglages du groupe', d:'Modifier les infos du groupe : administrateurs uniquement. Ajouter d’autres participants : administrateurs uniquement. Approuver les nouveaux participants : activé. Envoi de messages : tous. Lien d’invitation réinitialisé à chaque changement de bureau. Description du groupe : son objet et un renvoi vers cette charte.'},
    {t:'Ce qui s’y dit', d:'Coordination, sondages de date, validation rapide d’un post ou d’un planning, photos avec autorisation, un merci. Pas de finances détaillées, pas de données de familles, pas de document officiel : les PV, statuts et pièces vont dans le portail et le dossier.'},
    {t:'Ce qui s’y décide', d:'Rien d’engageant. Une décision se prend en CA (ou par vote dans le portail) et y est consignée ; le groupe sert à la préparer et à l’annoncer.'},
    {t:'Confidentialité', d:'Ce qui est écrit dans le groupe reste dans le CA : pas de transfert ni de capture vers l’extérieur, numéros des membres jamais communiqués hors du groupe.'},
    {t:'Mémoire', d:'À chaque AG, un export sans médias est fait depuis le téléphone de l’association et versé dans le portail, puis le groupe peut être allégé.'}
  ],
  reglages:[
    {id:'infos', t:'Modifier les infos du groupe → Administrateurs uniquement', ou:'Infos du groupe → Paramètres du groupe'},
    {id:'ajout', t:'Ajouter d’autres participants → Administrateurs uniquement', ou:'Infos du groupe → Paramètres du groupe'},
    {id:'approb', t:'Approuver les nouveaux participants → Activé', ou:'Infos du groupe → Paramètres du groupe'},
    {id:'lien', t:'Réinitialiser le lien d’invitation', ou:'Infos du groupe → Inviter via un lien'},
    {id:'desc', t:'Description du groupe : objet + « administré par le bureau, charte dans le portail »', ou:'Infos du groupe → Modifier'},
    {id:'pin', t:'Vérification en deux étapes activée sur le téléphone de l’association, code au coffre', ou:'WhatsApp → Paramètres → Compte'}
  ],
  createur:[
    ['inconnu','Pas encore identifié'],
    ['bureau','Un membre du bureau en exercice'],
    ['ca','Un membre du CA (hors bureau)'],
    ['ancien','Une personne qui n’est plus au CA']
  ],
  message:`Bonsoir à toutes et tous,

Petit point d’organisation sur notre groupe. Comme nous restons sur WhatsApp, le bureau propose de cadrer simplement son administration :

• Le groupe appartient à l’association : ses administrateurs sont des membres du bureau en exercice (deux au minimum) et le téléphone de l’association.
• Les réglages passent en « administrateurs uniquement » pour les infos du groupe et l’ajout de participants, avec approbation des nouveaux.
• Le groupe sert à se coordonner, se sonder, valider un post. Les décisions se prennent en CA, les documents et les finances restent dans le portail et le dossier.
• Ce qui s’écrit ici reste entre nous.

La charte complète sera soumise au vote au prochain CA.

Merci à toutes et tous !`
};

const MESSAGES = [
  {id:'g1', by:'m1', when:'2026-11-02T20:52', source:'whatsapp', txt:'Bonsoir, merci pour vos réponses au sondage : on propose le CA vendredi à 17 h, et le samedi 14 au matin pour le budget. Un résumé sera envoyé aux absents.'},
  {id:'g2', by:'m7', when:'2026-11-02T20:55', source:'whatsapp', txt:'Réunion kermesse mercredi 4 à 17 h avec l’école. Dites-moi qui vient.'},
  {id:'g3', by:'m5', when:'2026-11-02T08:41', source:'whatsapp', txt:'Je finalise le planning de novembre pour publication et affichage. Je vous le donne pour validation avant.'},
  {id:'g4', by:'m1', when:'2026-11-02T08:47', source:'whatsapp', txt:'Pour les posts, merci d’envoyer en amont sur le groupe.'},
  {id:'g5', by:'m4', when:'2026-11-02T12:56', source:'whatsapp', txt:'Le PV du CA du 24/10 est relu, je le dépose dans Documents ce soir.'}
];
/* === FIN DES DONNÉES DE DÉMONSTRATION === */
