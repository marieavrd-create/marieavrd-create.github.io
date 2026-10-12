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

export type Visuel = { src: string; alt: string; format?: 'large' | 'moitie' | 'tiers' };

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
  maPart: string;
  visuels: Visuel[];
  /** Diaporama présenté en fin de page, dans un écran (fichiers 01.webp… et 01-m.webp… en vignettes) */
  presentation?: { titre: string; dossier: string; nombre: number };
};

const v = (slug: string, fichier: string, alt: string, format?: Visuel['format']): Visuel => ({
  src: `/projets/${slug}/${fichier}.webp`,
  alt,
  format,
});

export const projets: Projet[] = [
  {
    slug: 'umyst',
    titre: 'Umyst',
    categorie: 'Cofondatrice — DA & UI',
    couleur: '#f6c400',
    filtres: ['identite', 'digital'],
    etiquettes: ['Identité', 'UI mobile', 'Site', 'Pitch'],
    resume:
      "Une application qui relie consommateurs et entreprises locales pour réinventer ensemble l'expérience client. J'en suis cofondatrice et j'en ai porté la direction artistique et l'UI.",
    role: 'Cofondatrice · DA & UI',
    livrables: 'Logo et mascotte, application, site, présentations',
    outils: 'Figma',
    equipe: 'Projet cofondé en équipe',
    cadre: 'Projet entrepreneurial · Blois et Tours',
    contexte:
      "Projet entrepreneurial que j'ai cofondé : une application qui relie consommateurs et entreprises locales (Blois, Tours) pour améliorer ensemble l'expérience client.",
    maPart:
      "Direction artistique et UI : logo et mascotte, application mobile, site, présentations aux entreprises partenaires. Une identité chaleureuse portée par un jaune franc, pensée pour être expliquée simplement à des publics différents.",
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
    maPart:
      "Création du logotype typographique, inspiré des années 1970, de la charte (palette en deux dégradés, PT Sans, Akzidenz-Grotesk), de l'affiche et des déclinaisons textile et objets.",
    visuels: [
      v('we-love-green', 'merch', 'Affiche violette et merchandising We Love Green', 'large'),
      v('we-love-green', '01', 'Affiche We Love Green, version jaune et rouge', 'tiers'),
      v('we-love-green', '02', 'Affiche We Love Green, version violette', 'tiers'),
      v('we-love-green', '03', 'Affiche We Love Green, ondes concentriques', 'tiers'),
      v('we-love-green', '04', 'Affiche dans un abribus', 'large'),
      v('we-love-green', '05', 'Affiche collée sur un mur', 'moitie'),
      v('we-love-green', '06', 'Affiche en situation dans la végétation', 'moitie'),
      v('we-love-green', '07', 'Charte : référence, logotype et applications', 'large'),
      v('we-love-green', '08', 'Charte : couleurs et typographies', 'large'),
    ],
  },
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
    maPart:
      "J'ai repris son manuscrit, réécrit le texte et composé le livre : couverture, gabarit intérieur, intégration des photographies d'archives et des cartes.",
    visuels: [
      v('deux-guerres-une-vie', 'livre-a-plat', 'Couverture à plat : quatrième, dos et première', 'large'),
      v('deux-guerres-une-vie', '01', 'Maquette du livre fermé', 'moitie'),
      v('deux-guerres-une-vie', '04', 'Tranche du livre', 'moitie'),
      v('deux-guerres-une-vie', '02', 'Double page intérieure avec un portrait d’archives', 'large'),
      v('deux-guerres-une-vie', '03', 'Page qui tourne, texte et photographies', 'large'),
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
    cadre: 'Entreprise · 2021 – 2023',
    contexte:
      "Bureau des goodies personnalise textiles et objets pour les étudiants, les associations et les entreprises. J'y ai géré la chaîne graphique : conception, validation client, préparation des fichiers et envoi en production.",
    maPart:
      "Conception et mise en page de catalogues de plus de 300 pages, avec suivi des corrections : un gabarit par famille de produits, un code couleur par rubrique et des blocs produit répétables. En parallèle, déclinaison du logo et adaptation de la charte : monogramme, couleurs, Barlow, iconographie.",
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
    slug: 'e-square',
    titre: 'E-square',
    categorie: 'Site vitrine',
    couleur: '#5b2bd6',
    filtres: ['digital'],
    etiquettes: ['Site vitrine', 'Framer', 'UI'],
    resume:
      'Le site vitrine d’E-square, solution de recharge pour scooters et motos électriques, conçu et réalisé sous Framer.',
    role: 'Graphiste freelance',
    livrables: 'Site vitrine (desktop et mobile)',
    outils: 'Framer',
    cadre: 'Freelance, 2025',
    contexte:
      'E-square propose des bornes de recharge pour deux-roues électriques, pour les particuliers et les entreprises. Il fallait un site vitrine pour présenter l’offre.',
    maPart:
      'J’ai conçu et réalisé le site sous Framer, en version desktop et mobile.',
    visuels: [
      v('e-square', 'e-cover', 'Page d’accueil du site E-square sur ordinateur', 'large'),
      v('e-square', 'e-logo', 'Logo E-square', 'moitie'),
      v('e-square', 'e-laptop', 'Le site affiché sur un ordinateur portable', 'moitie'),
      v('e-square', 'e-mobile', 'Version mobile de la page d’accueil', 'moitie'),
      v('e-square', 'e-reseau', 'Section « Un réseau de bornes adapté à vos besoins »', 'moitie'),
      v('e-square', 'e-pourquoi', 'Section « Pourquoi choisir E-square pour votre entreprise ? »', 'moitie'),
      v('e-square', 'e-impact', 'Section « Soutenir la transition vers une mobilité durable »', 'moitie'),
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
    maPart:
      'Concept, personas, parcours utilisateur, moodboard et charte (Futura, rouge, jaune). Le visiteur traverse un couloir d’écrans d’affiches d’époque, puis rejoue les déplacements du champion dans une salle-ring.',
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
    maPart:
      'Hiérarchiser les chiffres, choisir la bonne forme (camembert, pictogrammes, gros titres) et garder un message lisible en quelques secondes.',
    visuels: [
      v('infographie', 'i-cover', 'Infographie « Artiste, un métier à risque »', 'large'),
      v('infographie', 'i-data', 'Infographie complète en format vertical', 'tiers'),
    ],
  },
  {
    slug: 'chemtrails',
    titre: 'Chemtrails Over the Country Club',
    categorie: 'Site événementiel',
    couleur: '#e8474c',
    filtres: ['identite', 'affiche', 'digital'],
    etiquettes: ['Logo', 'Affiche', 'Site', 'Boutique'],
    resume:
      "Un site événementiel pour la sortie de l'album de Lana Del Rey, avec logo, charte, affiche et boutique.",
    role: 'Direction artistique, graphisme',
    livrables: 'Moodboard, logo, charte, affiche, maquettes du site et de la boutique',
    equipe: 'Projet d’équipe (4 personnes)',
    cadre: 'Projet d’études',
    contexte: "Créer un site événementiel pour la sortie de l'album de Lana Del Rey et donner envie de le découvrir.",
    maPart:
      'Moodboard années 70, logo, charte (Rousseau Deco, Bodoni Moda, Avenir), affiche et maquettes du site et de la boutique.',
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
    maPart:
      "Recherche d'inspiration, composition dans l'esprit Art déco de la charte Paris 2024 (or, noir, blanc), photomontage puis mise en situation.",
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
    categorie: 'Interface & design system',
    couleur: '#8b85e8',
    filtres: ['digital', 'identite'],
    etiquettes: ['UI', 'Design system', 'Identité'],
    resume: "Nouvelle identité et nouvelle plateforme pour l'émission culte, afin de toucher une nouvelle cible.",
    role: 'Direction artistique, UI design',
    livrables: 'Logotype, design system, maquettes desktop et mobile',
    outils: 'Figma',
    cadre: 'Projet d’études',
    contexte:
      "Culture Pub, émission culte de M6 consacrée à la publicité, veut redevenir la référence qu'elle était : nouvelle identité et nouvelle plateforme pour toucher une nouvelle cible.",
    maPart:
      'Benchmark, personas, wireframes, design system et maquettes : un logotype encadré d’un trait arc-en-ciel et une interface sombre qui met les vidéos au premier plan.',
    visuels: [
      v('culture-pub', '01', 'Page d’accueil Culture Pub en perspective', 'large'),
      v('culture-pub', '02', 'Page d’accueil complète, version desktop', 'tiers'),
      v('culture-pub', '05', 'Page catégories', 'tiers'),
      v('culture-pub', '04', 'Page d’accueil, version mobile', 'tiers'),
      v('culture-pub', '03', 'Page vidéo en perspective', 'large'),
      v('culture-pub', '06', 'Design system : logo, icônes et bouton', 'moitie'),
      v('culture-pub', '08', 'Page vidéo, étiquettes par secteur', 'moitie'),
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
    maPart: 'Concevoir 6 posts qui fonctionnent seuls et forment un ensemble cohérent dans le fil Instagram.',
    visuels: [
      v('decathlon', 'd-cover', 'Série de posts Décathlon dans le profil et le fil Instagram', 'large'),
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
    maPart:
      "Construire le support comme un document de pilotage : analyse, équipe et supervision, cadrage (ce qui est inclus et exclu), planning créatif, échéancier et outils de suivi. Une grille stricte et le rouge AlloCiné guident la lecture d'une partie à l'autre.",
    visuels: [
      v('allocine', '03', 'Contexte du projet', 'large'),
      v('allocine', '02', 'Sommaire en cinq parties', 'moitie'),
      v('allocine', '04', 'Pourquoi ce projet', 'moitie'),
      v('allocine', '05', 'Portée et limites', 'moitie'),
      v('allocine', '06', 'Échéancier des tâches', 'moitie'),
      v('allocine', '07', 'Calendrier détaillé', 'large'),
    ],
  },
];
