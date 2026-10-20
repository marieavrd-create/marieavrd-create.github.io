// Liste des projets du portfolio.
// Pour ajouter ou modifier un projet : éditer ce fichier, puis déposer les
// visuels dans public/projets/<slug>/. Le premier visuel sert de couverture
// (ratio 16:10 sur l'accueil). L'ordre de la liste est l'ordre d'affichage.

export const filtres = [
  { id: 'edition', label: 'Édition & print' },
  { id: 'identite', label: 'Identité' },
  { id: 'affiche', label: 'Affiche' },
  { id: 'digital', label: 'Digital & UI' },
  { id: 'presentation', label: 'Présentation & data' },
] as const;

export type Filtre = (typeof filtres)[number]['id'];

/** Un visuel en .mp4 est lu en vidéo muette et en boucle, avec `poster` comme image d'attente */
export type Visuel = { src: string; alt: string; format?: 'large' | 'moitie' | 'tiers'; poster?: string };

export type Projet = {
  slug: string;
  titre: string;
  categorie: string; // en italique sur la carte
  couleur: string;
  filtres: Filtre[];
  etiquettes: string[];
  resume: string;
  role: string;
  livrables: string;
  outils?: string;
  equipe?: string;
  cadre: string;
  contexte: string;
  /** Les tâches réalisées, affichées en liste */
  taches: string[];
  visuels: Visuel[];
  /** Animation de la vignette d'accueil au survol (voir CarteVisuel.astro) */
  survol?: { type: 'livre' | 'defile' | 'eventail' | 'diapo' | 'volet' | 'brillance' | 'arcenciel' | 'coeur' | 'flash'; images?: string[]; couleur?: string; titre?: string; badge?: string };
  /** Diaporama présenté en fin de page, dans un écran (fichiers 01.webp… et 01-m.webp… en vignettes) */
  presentation?: { titre: string; dossier: string; nombre: number; texte?: string; mot?: string };
  lecture?: { dossier: string; hauteurs: number[]; largeur: number; texte?: string };
  /** Planche des déclinaisons en fin de page : grille de cases légendées « nom • variante » */
  planche?: { titre: string; items: { src: string; alt: string; nom: string; variante: string }[] };
};

const v = (slug: string, fichier: string, alt: string, format?: Visuel['format']): Visuel => ({
  src: `/projets/${slug}/${fichier}.webp`,
  alt,
  format,
});

export const projets: Projet[] = [
  {
    slug: 'deux-guerres-une-vie',
    titre: 'Deux guerres, une vie',
    categorie: 'Édition',
    couleur: '#8a6d4b',
    filtres: ['edition'],
    etiquettes: ['Édition', 'Couverture', 'Mise en page', 'Typographie'],
    resume:
      'Les mémoires de mon arrière-grand-père, témoin des deux guerres mondiales : réécriture du manuscrit et mise en page complète d’un livre de 378 pages.',
    role: 'Réécriture et mise en page',
    livrables: 'Couverture (première, dos, quatrième) et gabarit intérieur',
    outils: 'InDesign, Photoshop',
    cadre: 'Projet personnel',
    contexte:
      "Deux guerres, une vie est l'autobiographie de mon arrière-grand-père, qui traverse les deux conflits mondiaux. Un format broché de 110 × 170 mm, 378 pages de texte et d'archives.",
    taches: [
      'Reprise et réécriture du manuscrit',
      'Couverture : première, dos et quatrième',
      'Gabarit et mise en page intérieure (378 pages)',
      "Intégration des photographies d'archives et des cartes",
    ],
    survol: { type: 'livre' },
    visuels: [
      v('deux-guerres-une-vie', 'livre-a-plat', 'Couverture à plat : quatrième, dos et première', 'large'),
      v('deux-guerres-une-vie', '01', 'Maquette du livre fermé', 'moitie'),
      v('deux-guerres-une-vie', '04', 'Tranche du livre', 'moitie'),
      v('deux-guerres-une-vie', '02', 'Double page intérieure avec un portrait d’archives', 'large'),
      v('deux-guerres-une-vie', '03', 'Page qui tourne, texte et photographies', 'large'),
      v('deux-guerres-une-vie', 'close-up-mosaique', 'Doubles pages du livre, archives, cartes et textes', 'large'),
      v('deux-guerres-une-vie', 'close-up-texte', 'Gros plan sur la première phrase du récit', 'moitie'),
      v('deux-guerres-une-vie', 'close-up-page-soulevee', 'Page qui se soulève sur les photographies de cavalerie', 'moitie'),
      v('deux-guerres-une-vie', 'close-up-page-de-titre', 'Page de titre en lumière rasante', 'large'),
    ],
  },
  {
    slug: 'e-square',
    titre: 'E-square',
    categorie: 'Site vitrine',
    couleur: '#5b2bd6',
    filtres: ['digital'],
    etiquettes: ['Site vitrine', 'Framer', 'UI'],
    resume:
      'Le site vitrine d’E-square, solution de recharge pour scooters et motos électriques, conçu et réalisé sous Framer.',
    role: 'Webdesign (freelance)',
    livrables: 'Site vitrine (desktop et mobile)',
    outils: 'Framer',
    cadre: 'Freelance, 2025',
    contexte:
      'E-square propose des bornes de recharge pour deux-roues électriques, pour les particuliers et les entreprises. Il fallait un site vitrine pour présenter l’offre.',
    taches: [
      "Design de l'interface, en version desktop et mobile",
      'Conception des sections : accueil, impact, « Pourquoi E-square », réseau de bornes',
      'Réalisation et mise en ligne du site sous Framer',
    ],
    survol: { type: 'defile', images: ['/projets/e-square/e-page.webp'] },
    visuels: [
      v('e-square', 'e-cover', 'Page d’accueil du site E-square sur ordinateur', 'large'),
      v('e-square', 'e-terrasse-1', 'Page d’accueil du site sur un ordinateur portable, en terrasse', 'large'),
      v('e-square', 'e-logo', 'Logo E-square', 'moitie'),
      v('e-square', 'e-laptop', 'Le site affiché sur un ordinateur portable', 'moitie'),
      v('e-square', 'e-mobile', 'Version mobile de la page d’accueil', 'moitie'),
      v('e-square', 'e-reseau', 'Section « Un réseau de bornes adapté à vos besoins »', 'moitie'),
      v('e-square', 'e-pourquoi', 'Section « Pourquoi choisir E-square pour votre entreprise ? »', 'moitie'),
      v('e-square', 'e-impact', 'Section « Soutenir la transition vers une mobilité durable »', 'moitie'),
      v('e-square', 'e-terrasse-2', 'Section « Notre impact » sur un ordinateur portable, en terrasse', 'large'),
    ],
  },
  {
    slug: 'mohamed-ali',
    titre: 'Sur les pas de Mohamed Ali',
    categorie: 'Expérience muséale',
    couleur: '#d7262e',
    filtres: ['digital', 'identite'],
    etiquettes: ['Scénographie digitale', 'UX', 'Charte'],
    resume:
      'Une expérience digitale autour de Mohamed Ali pour la Collection Pinault : un couloir d’écrans d’affiches d’époque, puis une salle-ring où l’on rejoue ses déplacements.',
    role: 'Concept, UX, direction artistique',
    livrables: 'Concept, personas, parcours utilisateur, moodboard, charte',
    cadre: 'Projet de Master',
    contexte: 'Brief : concevoir une expérience digitale autour de Mohamed Ali pour la Collection Pinault.',
    taches: [
      "Concept de l'expérience",
      'Personas et parcours utilisateur',
      'Moodboard',
      'Charte graphique : Futura, rouge, jaune',
      "Scénographie : couloir d'écrans d'affiches d'époque, puis salle-ring",
    ],
    survol: { type: 'diapo', images: ['/projets/mohamed-ali/m-ring.webp', '/projets/mohamed-ali/m-ko.webp'] },
    presentation: {
      titre: 'La présentation du projet',
      dossier: '/projets/mohamed-ali/presentation',
      nombre: 30,
      mot: 'du projet',
      texte: 'Les 30 diapositives du projet, du brief au planning, en passant par les personas et la salle-ring.',
    },
    visuels: [
      v('mohamed-ali', 'm-cover', 'Mohamed Ali devant des affiches de combats', 'large'),
      v('mohamed-ali', 'm-chiffres', 'Mohamed Ali en quelques chiffres', 'large'),
      v('mohamed-ali', 'm-moodboard', 'Moodboard d’affiches de combats', 'moitie'),
      v('mohamed-ali', 'm-charte', 'Charte : couleurs et typographie Futura', 'moitie'),
      v('mohamed-ali', 'm-ring', 'Salle-ring vue de dessus : mettez-vous en position', 'moitie'),
      v('mohamed-ali', 'm-parcours', 'Parcours utilisateur entre le couloir et la salle de boxe', 'moitie'),
      v('mohamed-ali', 'm-ko', 'Salle-ring : séquence KO', 'moitie'),
      v('mohamed-ali', 'm-coin', 'Salle-ring : séquence dans le coin', 'moitie'),
    ],
  },
  {
    slug: 'we-love-green',
    titre: 'We Love Green',
    categorie: 'Identité de festival',
    couleur: '#ff4fa3',
    filtres: ['identite', 'affiche'],
    etiquettes: ['Identité', 'Affiche', 'Merch', 'Charte'],
    resume:
      "Identité visuelle d'une édition du festival We Love Green, à Paris : logotype, charte, affiches et déclinaisons textile et objets.",
    role: 'Direction artistique, graphisme',
    livrables: 'Logotype, charte, affiches, merchandising, posts Instagram',
    outils: 'Illustrator',
    cadre: 'Projet d’études',
    contexte:
      "Identité visuelle d'une édition du festival We Love Green (Paris) : logo, palette, typographies, affiche et déclinaisons.",
    taches: [
      'Logotype typographique inspiré des années 1970',
      'Charte graphique : palette en deux dégradés, PT Sans, Akzidenz-Grotesk',
      'Affiche du festival',
      'Déclinaisons textile et objets',
    ],
    survol: { type: 'eventail', images: ['/projets/we-love-green/01.webp', '/projets/we-love-green/02.webp', '/projets/we-love-green/04.webp'] },
    visuels: [
      v('we-love-green', 'merch', 'Affiche violette et merchandising We Love Green', 'large'),
      v('we-love-green', '01', 'Affiche We Love Green, version jaune et rouge', 'moitie'),
      v('we-love-green', '02', 'Affiche We Love Green, version violette', 'moitie'),
      v('we-love-green', '04', 'Affiche dans un abribus', 'large'),
      v('we-love-green', '05', 'Affiche collée sur un mur', 'moitie'),
      v('we-love-green', '06', 'Affiche en situation dans la végétation', 'moitie'),
      v('we-love-green', '07', 'Charte : référence, logotype et applications', 'large'),
      v('we-love-green', '08', 'Charte : couleurs et typographies', 'large'),
    ],
  },
  {
    slug: 'allocine',
    titre: 'AlloCiné',
    categorie: 'Présentation de projet',
    couleur: '#ff6a2a',
    filtres: ['presentation'],
    etiquettes: ['Présentation', 'Cadrage', 'Planning'],
    resume: "Une présentation de cadrage et de pilotage pour la refonte du site, de l'application et de la ligne éditoriale d'AlloCiné.",
    role: 'Direction artistique, conception de la présentation',
    livrables: 'Présentation d’une trentaine de slides',
    cadre: 'Projet d’études, Master 2 · 2024',
    contexte:
      "AlloCiné relance la refonte de son site, de son application et de sa ligne éditoriale sociale après une première collaboration décevante avec une agence. L'enjeu : regagner la confiance du client.",
    taches: [
      'Analyse du besoin client',
      "Présentation de l'équipe et de la supervision",
      'Cadrage : ce qui est inclus et exclu',
      'Planning créatif, échéancier et outils de suivi',
      'Mise en page du support sur une grille stricte, guidée par le rouge AlloCiné',
    ],
    survol: { type: 'eventail', images: ['/projets/allocine/02.webp', '/projets/allocine/04.webp', '/projets/allocine/05.webp'] },
    visuels: [
      v('allocine', 'lecteur-portee', 'Diapositive « Portée et limites » sur un ordinateur portable, en terrasse', 'large'),
      v('allocine', '03', 'Contexte du projet', 'large'),
      v('allocine', '02', 'Sommaire en cinq parties', 'moitie'),
      v('allocine', '04', 'Pourquoi ce projet', 'moitie'),
      v('allocine', '05', 'Objectifs du projet', 'moitie'),
      v('allocine', '06', 'Échéancier des tâches', 'moitie'),
      v('allocine', '07', 'Calendrier détaillé', 'large'),
    ],
    lecture: {
      dossier: '/projets/allocine/lecture',
      hauteurs: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 932],
      largeur: 1400,
      texte: 'Toute la présentation, de l’analyse à la gestion des imprévus, à faire défiler dans l’écran.',
    },
  },
  {
    slug: 'cider-sunday-run-club',
    titre: 'Cider Sunday Run Club',
    categorie: 'Character design',
    couleur: '#1C20FF',
    filtres: ['identite'],
    etiquettes: ['Character design', 'Identité', 'Illustration', 'Merch'],
    resume:
      'Une mascotte et une identité pour un club de course du dimanche qui finit autour d’un cidre, déclinées sur les vêtements et les bouteilles.',
    role: 'Direction artistique, illustration',
    livrables: 'Mascotte et ses poses, logotype, stickers, cartes de rythme, affiche, merch et étiquettes',
    outils: 'Illustrator, InDesign',
    cadre: 'Projet personnel',
    contexte:
      'Cider Sunday Run Club réunit des coureurs le dimanche matin, puis autour d’une bouteille de cidre. Il lui fallait une mascotte qu’on a envie de suivre : un petit coureur au trait, rond et rieur, et un seul bleu électrique, assez franc pour se voir de loin.',
    taches: [
      'Création du personnage et de ses poses (repos, course, tête)',
      'Logotype Cider sunday run club',
      'Trois rythmes de course, Doux, Brut et Extra-brut, nommés comme les cidres',
      'Stickers, flasque et affiche',
      'Déclinaison sur les vêtements et les étiquettes de bouteilles',
    ],
    survol: {
      type: 'flash',
      titre: '/projets/cider-sunday-run-club/titre-blanc.svg',
      badge: '/projets/cider-sunday-run-club/sticker.webp',
      images: ['m-bouteilles', 'affiche', 'm-tee-blanc', 'm-bouteille', 'm-tote'].map((f) => `/projets/cider-sunday-run-club/${f}.webp`),
    },
    visuels: [
      v('cider-sunday-run-club', '01', 'Carte de membre Cider Sunday Run Club sur fond bleu', 'large'),
      v('cider-sunday-run-club', 'm-bouteilles', 'Trois bouteilles de cidre Doux, Brut et Extra-brut', 'large'),
      v('cider-sunday-run-club', 'm-bouteille', 'Bouteille Extra-brut', 'moitie'),
      v('cider-sunday-run-club', 'm-tote', 'Tote bag en toile', 'moitie'),
      {
        src: '/projets/cider-sunday-run-club/video.mp4',
        poster: '/projets/cider-sunday-run-club/video-poster.webp',
        alt: 'Présentation animée du projet, au défilement',
        format: 'large',
      },
      v('cider-sunday-run-club', 'affiche', 'Affiche du club, logotype sur une photo de course', 'moitie'),
      v('cider-sunday-run-club', 'perso-trait', 'La mascotte au trait bleu, une bouteille à la main', 'moitie'),
      v('cider-sunday-run-club', 'titre', 'Logotype avec la mascotte et la bouteille en stickers', 'moitie'),
      v('cider-sunday-run-club', 'rythmes', 'Cartes de rythme Doux, Brut et Extra-brut', 'large'),
      v('cider-sunday-run-club', 'perso-repos', 'La mascotte au repos', 'tiers'),
      v('cider-sunday-run-club', 'perso-course', 'La mascotte en pleine course', 'tiers'),
      v('cider-sunday-run-club', 'flasque', 'Flasque du club', 'tiers'),
      v('cider-sunday-run-club', 'm-tee-blanc', 'T-shirt blanc avec la mascotte et le logotype', 'large'),
    ],
    planche: {
      titre: 'Déclinaisons',
      items: [
        { src: '/projets/cider-sunday-run-club/d-trait.webp', alt: 'La mascotte au trait bleu', nom: 'Coureur', variante: 'Trait' },
        { src: '/projets/cider-sunday-run-club/d-aplat.webp', alt: 'La mascotte en aplat noir', nom: 'Coureur', variante: 'Aplat' },
        { src: '/projets/cider-sunday-run-club/d-arrivee.webp', alt: 'La mascotte bras ouverts à l’arrivée', nom: 'Coureur', variante: 'Arrivée' },
        { src: '/projets/cider-sunday-run-club/d-tete.webp', alt: 'Sticker de la tête de la mascotte', nom: 'Sticker', variante: 'Tête' },
        { src: '/projets/cider-sunday-run-club/d-sticker-bleu.webp', alt: 'Sticker de la mascotte en sweat bleu', nom: 'Sticker', variante: 'Couleur' },
        { src: '/projets/cider-sunday-run-club/d-bouteille.webp', alt: 'Main qui tient la bouteille du club', nom: 'Bouteille', variante: 'Pictogramme' },
      ],
    },
  },
  {
    slug: 'umyst',
    titre: 'Umyst',
    categorie: 'Application & identité',
    couleur: '#f6c400',
    filtres: ['identite', 'digital'],
    etiquettes: ['Identité', 'UI mobile', 'Site', 'Pitch'],
    resume:
      "Une application qui relie consommateurs et entreprises locales pour réinventer ensemble l'expérience client. J'en ai porté la direction artistique et l'UI.",
    role: 'Directrice artistique · DA & UI',
    livrables: 'Logo et mascotte, application, site, présentations',
    outils: 'Figma',
    equipe: 'Projet en équipe',
    cadre: 'Projet entrepreneurial · Blois et Tours',
    contexte:
      "Un projet entrepreneurial : une application qui relie consommateurs et entreprises locales (Blois, Tours) pour améliorer ensemble l'expérience client.",
    taches: [
      'Direction artistique du projet',
      'Logo et mascotte',
      "Design de l'application mobile (UI)",
      'Design du site',
      'Présentations pour les entreprises partenaires',
    ],
    survol: { type: 'volet', images: ['/projets/umyst/u-app.webp'], couleur: '#f6c400' },
    visuels: [
      v('umyst', 'u-cover', "Écran d'accueil de l'application Umyst sur un fond noir et jaune", 'large'),
      v('umyst', 'u-home', 'Nouveau site Umyst : sections de la page d’accueil', 'large'),
      v('umyst', 'u-mobile', 'Nouveau site Umyst présenté sur ordinateur', 'moitie'),
      v('umyst', 'u-desk', 'Sections du site Umyst en perspective', 'moitie'),
      v('umyst', 'u-app', "Écrans de l'application : communauté et filtres", 'large'),
      v('umyst', 'u-dash', 'Tableau de bord entreprise', 'moitie'),
      v('umyst', 'u-tarifs', 'Page tarification', 'moitie'),
      v('umyst', 'u-collab', 'Présentation : récoltez les fruits de votre collaboration', 'large'),
    ],
  },
  {
    slug: 'bureau-des-goodies',
    titre: 'Bureau des goodies',
    categorie: 'Catalogues & charte',
    couleur: '#3d7be0',
    filtres: ['edition', 'identite'],
    etiquettes: ['Catalogue', 'Mise en page', 'Charte'],
    resume:
      'Catalogues produits de plus de 300 pages et charte graphique, en stage puis en alternance, de la conception jusqu’à l’envoi en production.',
    role: 'Graphiste, stage puis alternance',
    livrables: 'Catalogues produits, charte graphique, visuels personnalisés',
    outils: 'InDesign, Illustrator, Photoshop',
    cadre: 'Entreprise · 2021-2023',
    contexte:
      "Bureau des goodies personnalise textiles et objets pour les étudiants, les associations et les entreprises. J'y ai géré la chaîne graphique : conception, validation client, préparation des fichiers et envoi en production.",
    taches: [
      'Conception et mise en page de catalogues de plus de 300 pages',
      'Gabarits par famille de produits, code couleur par rubrique, blocs produit répétables',
      'Suivi des corrections et validation client',
      'Préparation des fichiers et envoi en production',
      'Déclinaison du logo et adaptation de la charte : monogramme, couleurs, Barlow, iconographie',
    ],
    survol: { type: 'eventail', images: ['/projets/bureau-des-goodies/01.webp', '/projets/bureau-des-goodies/04.webp', '/projets/bureau-des-goodies/05.webp'] },
    visuels: [
      v('bureau-des-goodies', '03', 'Catalogue, page de la rubrique Sacs et bagages', 'large'),
      v('bureau-des-goodies', '01', 'Couverture du catalogue', 'moitie'),
      v('bureau-des-goodies', '02', 'Page « Qui sommes-nous ? » du catalogue', 'moitie'),
      v('bureau-des-goodies', '04', 'Page produits Écritures', 'moitie'),
      v('bureau-des-goodies', '05', 'Page produits Alimentaire et boisson', 'moitie'),
      v('bureau-des-goodies', '06', 'Page produits Pack été', 'moitie'),
      v('bureau-des-goodies', '07', 'Page produits Pack ski', 'moitie'),
      v('bureau-des-goodies', '09', 'Charte graphique Bureau des goodies, page de titre', 'large'),
      v('bureau-des-goodies', '11', 'Couleurs et déclinaisons du logotype', 'moitie'),
      v('bureau-des-goodies', '13', "L'univers typographique, Barlow", 'moitie'),
      v('bureau-des-goodies', '15', 'Les quatre déclinaisons couleur du monogramme', 'large'),
    ],
  },
  {
    slug: 'infographie',
    titre: 'Artiste, un métier à risque',
    categorie: 'Infographie',
    couleur: '#e63946',
    filtres: ['presentation'],
    etiquettes: ['Infographie', 'Data'],
    resume:
      '« Artiste, un métier à risque » : une infographie qui met en regard les risques du métier d’artiste et ceux du quotidien.',
    role: 'Graphisme, data visualisation',
    livrables: 'Infographie verticale',
    cadre: 'Projet d’études',
    contexte:
      'Une infographie qui met en regard les risques du métier d’artiste et ceux du quotidien.',
    taches: [
      'Hiérarchisation des chiffres',
      'Choix des formes : camembert, pictogrammes, gros titres',
      "Mise en page d'une infographie lisible en quelques secondes",
    ],
    survol: { type: 'defile', images: ['/projets/infographie/i-data.webp'] },
    visuels: [
      v('infographie', 'i-cover', 'Infographie « Artiste, un métier à risque »', 'large'),
      v('infographie', 'i-data', 'Infographie complète en format vertical', 'tiers'),
    ],
  },
  {
    slug: 'chemtrails',
    titre: 'Chemtrails Over the Country Club',
    categorie: 'Direction artistique',
    couleur: '#e8474c',
    filtres: ['identite', 'affiche', 'digital'],
    etiquettes: ['DA', 'Logo', 'Affiche', 'Packaging'],
    resume:
      "La direction artistique de la sortie de l'album de Lana Del Rey : logo, charte, affiche, packaging et boutique.",
    role: 'Direction artistique, graphisme',
    livrables: 'Moodboard, logo, charte, affiche, packaging, maquettes de la boutique',
    equipe: 'Projet d’équipe (4 personnes)',
    cadre: 'Projet d’études',
    contexte: "Imaginer la direction artistique de la sortie de l'album de Lana Del Rey et donner envie de le découvrir.",
    taches: [
      'Moodboard années 70',
      'Logo',
      'Charte graphique : Rousseau Deco, Bodoni Moda, Avenir',
      'Affiche',
      'Packaging du CD et livret',
      'Maquettes de la boutique',
      'Présentation orale du projet',
    ],
    survol: { type: 'diapo', images: ['/projets/lana-del-rey/presentation/20.webp', '/projets/lana-del-rey/presentation/22.webp', '/projets/lana-del-rey/04.webp'] },
    visuels: [
      v('lana-del-rey', '03', 'Moodboard de l’univers rétro de l’album', 'large'),
      v('lana-del-rey', '01', 'Affiche avec liens d’écoute', 'moitie'),
      v('lana-del-rey', 'abribus', 'Affiche dans un abribus', 'moitie'),
      v('lana-del-rey', '04', 'Packaging CD et livret', 'large'),
      v('lana-del-rey', '05', 'Page À propos du site', 'moitie'),
      v('lana-del-rey', '06', 'Page boutique', 'moitie'),
    ],
    presentation: { titre: 'La présentation orale du projet', dossier: '/projets/lana-del-rey/presentation', nombre: 44 },
  },
  {
    slug: 'paris-2024',
    titre: 'Paris 2024',
    categorie: 'Affiches A3',
    couleur: '#c9a94f',
    filtres: ['affiche'],
    etiquettes: ['Affiche', 'Retouche photo', 'Mockup'],
    resume: 'Deux affiches promotionnelles au format A3 pour les Jeux de Paris 2024, dans le respect de l’identité existante.',
    role: 'Graphisme, retouche photo',
    livrables: '2 affiches A3, mises en situation',
    outils: 'Photoshop',
    cadre: 'Projet d’études',
    contexte: "Deux affiches promotionnelles au format A3 pour les Jeux de Paris 2024, à partir d'une analyse de l'identité existante.",
    taches: [
      "Recherche d'inspiration",
      "Composition dans l'esprit Art déco de la charte Paris 2024 (or, noir, blanc)",
      'Photomontage',
      'Mise en situation',
    ],
    survol: { type: 'brillance' },
    visuels: [
      v('paris-2024', 'p-mur', 'Les deux affiches Paris 2024 en situation', 'large'),
      v('paris-2024', 'p-skate', 'Affiche : le skate aussi est une discipline olympique', 'moitie'),
      v('paris-2024', 'p-surf', 'Affiche : le surf aussi est une discipline olympique', 'moitie'),
      v('paris-2024', 'p-vitrine', 'Affiche en vitrine', 'large'),
    ],
  },
  {
    slug: 'culture-pub',
    titre: 'Culture Pub',
    categorie: 'Direction artistique & UI',
    couleur: '#8b85e8',
    filtres: ['digital', 'identite'],
    etiquettes: ['Direction artistique', 'Identité', 'UI'],
    resume: "Nouvelle identité et nouvelle plateforme pour l'émission culte, afin de toucher une nouvelle cible.",
    role: 'Direction artistique, UI design',
    livrables: 'Moodboard, logotype, charte, maquettes desktop et mobile, présentation',
    outils: 'Figma',
    cadre: 'Projet d’études',
    contexte:
      "Culture Pub, émission culte de M6 consacrée à la publicité, veut redevenir la référence qu'elle était : nouvelle identité et nouvelle plateforme pour toucher une nouvelle cible.",
    taches: [
      'Benchmark',
      'Personas',
      'Wireframes',
      'Moodboard et direction artistique',
      "Logotype encadré d'un trait arc-en-ciel",
      "Maquettes d'une interface sombre qui met les vidéos au premier plan",
      'Présentation du projet',
    ],
    survol: { type: 'arcenciel' },
    presentation: {
      titre: 'La présentation du projet',
      dossier: '/projets/culture-pub/presentation',
      nombre: 24,
      mot: 'du projet',
      texte: 'Les 24 diapositives du projet, du brief au planning, en passant par le moodboard et les maquettes.',
    },
    visuels: [
      v('culture-pub', '01', 'Page d’accueil Culture Pub en perspective', 'large'),
      v('culture-pub', 'presentation/14', 'Moodboard : affiches, néons et typographies', 'large'),
      v('culture-pub', 'presentation/13', 'Nouvelle identité visuelle', 'moitie'),
      v('culture-pub', '08', 'Page vidéo, étiquettes par secteur', 'moitie'),
      v('culture-pub', '02', 'Page d’accueil complète, version desktop', 'tiers'),
      v('culture-pub', '05', 'Page catégories', 'tiers'),
      v('culture-pub', '04', 'Page d’accueil, version mobile', 'tiers'),
      v('culture-pub', '03', 'Page vidéo en perspective', 'large'),
    ],
  },
  {
    slug: 'decathlon',
    titre: 'Décathlon',
    categorie: 'Réseaux sociaux',
    couleur: '#0082c3',
    filtres: ['digital'],
    etiquettes: ['Instagram', 'Réseaux sociaux'],
    resume: 'Une série de posts Instagram pour les 45 ans de Décathlon.',
    role: 'Graphisme',
    livrables: 'Série de 6 posts Instagram',
    cadre: 'Projet d’études',
    contexte: 'Une série de posts Instagram pour les 45 ans de Décathlon.',
    taches: [
      "Conception d'une série de 6 posts Instagram",
      'Cohérence de la série dans le fil Instagram',
    ],
    survol: { type: 'coeur' },
    visuels: [
      v('decathlon', 'd-cover', 'Série de posts Décathlon dans le profil et le fil Instagram', 'large'),
    ],
  },
];
