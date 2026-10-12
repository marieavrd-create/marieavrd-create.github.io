// Liste des projets du portfolio.
// Pour ajouter ou modifier un projet : éditer ce fichier, puis déposer les
// visuels dans public/projets/<slug>/ (01.webp, 02.webp…). Le premier visuel
// sert de couverture. L'ordre de la liste est l'ordre d'affichage.

export type Visuel = { src: string; alt: string; format?: 'large' | 'portrait' | 'paysage' };

export type Projet = {
  slug: string;
  titre: string;
  accroche: string;
  categorie: string;
  cadre: string;
  annee?: string;
  role: string;
  outils?: string[];
  livrables: string[];
  texte: string[];
  visuels: Visuel[];
};

const v = (slug: string, n: number, alt: string, format?: Visuel['format']): Visuel => ({
  src: `/projets/${slug}/${String(n).padStart(2, '0')}.webp`,
  alt,
  format,
});

export const projets: Projet[] = [
  {
    slug: 'bureau-des-goodies',
    titre: 'Bureau des goodies',
    accroche: 'Catalogue produits de 141 pages et charte graphique',
    categorie: 'Édition · Identité',
    cadre: 'Stage puis alternance',
    annee: '2021 – 2023',
    role: 'Graphiste',
    outils: ['InDesign', 'Illustrator', 'Photoshop'],
    livrables: ['Catalogue produits de 141 pages', 'Charte graphique', 'Déclinaisons du logotype', 'Supports de communication'],
    texte: [
      "Bureau des goodies personnalise textiles et objets pour les étudiants, les associations et les entreprises. J'y ai d'abord fait mon stage, puis mon alternance, au sein de la chaîne graphique.",
      "Pour le catalogue, j'ai conçu une maquette capable de tenir plus de 140 pages : un gabarit par famille de produits, un code couleur par rubrique, des blocs produit répétables avec référence, visuel et descriptif. La structure permet de mettre à jour une gamme sans casser la mise en page.",
      "En parallèle, j'ai travaillé la charte graphique de la marque : construction du monogramme, déclinaisons couleur et noir, univers typographique en Barlow, iconographie et mises en situation sur les réseaux et le merchandising.",
    ],
    visuels: [
      v('bureau-des-goodies', 3, 'Catalogue Bureau des goodies, page de la rubrique Sacs et bagages', 'large'),
      v('bureau-des-goodies', 1, 'Couverture du catalogue', 'paysage'),
      v('bureau-des-goodies', 2, 'Page « Qui sommes-nous ? » du catalogue', 'paysage'),
      v('bureau-des-goodies', 4, 'Page produits Écritures', 'paysage'),
      v('bureau-des-goodies', 5, 'Page produits Alimentaire et boisson', 'paysage'),
      v('bureau-des-goodies', 6, 'Page produits Pack été', 'paysage'),
      v('bureau-des-goodies', 7, 'Page produits Pack ski', 'paysage'),
      v('bureau-des-goodies', 8, 'Page produits Pack WEI', 'paysage'),
      v('bureau-des-goodies', 9, 'Charte graphique Bureau des goodies, page de titre', 'large'),
      v('bureau-des-goodies', 10, 'Contexte et identité visuelle', 'paysage'),
      v('bureau-des-goodies', 11, 'Couleurs et déclinaisons du logotype', 'paysage'),
      v('bureau-des-goodies', 12, "L'univers chromatique", 'paysage'),
      v('bureau-des-goodies', 13, "L'univers typographique, Barlow", 'paysage'),
      v('bureau-des-goodies', 14, 'Logo mis en situation sur Instagram et en merchandising', 'paysage'),
      v('bureau-des-goodies', 15, 'Les quatre déclinaisons couleur du monogramme', 'large'),
    ],
  },
  {
    slug: 'deux-guerres-une-vie',
    titre: 'Deux guerres, une vie',
    accroche: 'Mise en page d’une autobiographie de 378 pages',
    categorie: 'Édition',
    cadre: 'Projet d’édition',
    annee: '2026',
    role: 'Maquettiste',
    outils: ['InDesign'],
    livrables: ['Maquette intérieure de 378 pages', 'Couverture, dos et quatrième', 'Intégration de photographies d’archives'],
    texte: [
      "Deux guerres, une vie est l'autobiographie de Gabriel Lafon, qui retrace son existence à travers les deux conflits mondiaux. Le texte est long et dense, ponctué de photographies et de documents d'époque.",
      "J'ai composé l'intérieur dans un format de poche, avec une typographie à empattements choisie pour le confort de lecture sur la durée, des marges généreuses et un traitement sobre des photographies d'archives, légendées et calées sur la grille.",
      "La couverture reprend un portrait de l'auteur en noir et blanc, avec un titre en capitales qui laisse toute la place au document.",
    ],
    visuels: [
      v('deux-guerres-une-vie', 1, 'Maquette de la couverture du livre Deux guerres, une vie', 'large'),
      v('deux-guerres-une-vie', 2, 'Double page intérieure avec un portrait d’archives', 'large'),
      v('deux-guerres-une-vie', 3, 'Page qui tourne, texte et photographies', 'paysage'),
      v('deux-guerres-une-vie', 4, 'Tranche du livre', 'paysage'),
    ],
  },
  {
    slug: 'lana-del-rey',
    titre: 'Lana Del Rey',
    accroche: 'Charte graphique pour l’album Chemtrails over the Country Club',
    categorie: 'Identité · Présentation',
    cadre: 'Projet d’études',
    role: 'Direction artistique, graphisme',
    livrables: ['Moodboard', 'Logotype et zone de protection', 'Charte typographique', 'Affiche', 'Packaging CD', 'Page web et boutique', 'Présentation orale'],
    texte: [
      "Le brief : créer l'univers graphique du huitième album de Lana Del Rey, Chemtrails over the Country Club (2021), entre Americana des années 1970, glamour rétro et mélancolie.",
      "Le logotype est composé en Rousseau Deco, une typographie Art déco. La palette reprend les tons délavés des photographies de l'album. La charte est ensuite déclinée en affiche, en packaging CD et en pages web avec une boutique de merchandising.",
      "Le projet a été présenté à l'oral à partir d'un support de présentation conçu pour l'occasion.",
    ],
    visuels: [
      v('lana-del-rey', 1, 'Affiche Chemtrails over the Country Club avec liens d’écoute', 'portrait'),
      v('lana-del-rey', 2, 'Page projet : moodboard, logotype, affiche et boutique', 'portrait'),
      v('lana-del-rey', 3, 'Moodboard de l’univers rétro de l’album', 'large'),
      v('lana-del-rey', 4, 'Packaging CD et livret', 'paysage'),
      v('lana-del-rey', 5, 'Page À propos du site de l’album', 'paysage'),
      v('lana-del-rey', 6, 'Page boutique, t-shirts de la collection', 'paysage'),
    ],
  },
  {
    slug: 'allocine',
    titre: 'AlloCiné',
    accroche: 'Présentation de cadrage et de pilotage d’un projet de refonte',
    categorie: 'Présentation · Gestion de projet',
    cadre: 'Projet d’études, Master 2',
    annee: '2024',
    role: 'Direction artistique, conception de la présentation',
    livrables: ['Présentation d’une trentaine de slides', 'Cadrage et périmètre', 'Échéancier et calendrier détaillé', 'Organisation de l’équipe et outils'],
    texte: [
      "Le cas : AlloCiné relance la refonte de son site, de son application et de sa ligne éditoriale sociale après une première collaboration décevante avec une agence. L'enjeu de la présentation est de regagner la confiance du client.",
      "J'ai construit le support comme un document de pilotage : analyse, équipe et supervision, cadrage avec ce qui est inclus et exclu, planning créatif, échéancier et outils de suivi. Une grille stricte et un rouge AlloCiné guident la lecture d'une partie à l'autre.",
      "C'est le type de document que l'on produit au quotidien en studio ou en cabinet : beaucoup d'information à hiérarchiser, et une mise en forme qui doit rester claire à chaque page.",
    ],
    visuels: [
      v('allocine', 3, 'Contexte du projet', 'paysage'),
      v('allocine', 1, 'Slide d’ouverture de la présentation', 'large'),
      v('allocine', 2, 'Sommaire en cinq parties', 'paysage'),
      v('allocine', 4, 'Pourquoi ce projet', 'paysage'),
      v('allocine', 5, 'Portée et limites : ce qui est inclus et exclu', 'paysage'),
      v('allocine', 6, 'Échéancier des tâches', 'paysage'),
      v('allocine', 7, 'Calendrier détaillé', 'paysage'),
      v('allocine', 8, 'Outils de communication interne', 'paysage'),
    ],
  },
  {
    slug: 'culture-pub',
    titre: 'Culture Pub',
    accroche: 'Refonte de l’identité et du site de l’émission culte',
    categorie: 'Web · UI design',
    cadre: 'Projet d’études',
    role: 'Direction artistique, UI design',
    livrables: ['Logotype', 'Design system', 'Maquettes desktop et mobile', 'Page catégories et page vidéo'],
    texte: [
      "Culture Pub, émission culte de M6 consacrée à la publicité, veut redevenir la référence qu'elle était. Le brief demandait de refondre l'identité graphique et le site, en desktop et en mobile.",
      "J'ai dessiné un logotype encadré d'un trait arc-en-ciel, puis un design system sombre qui met les vidéos au premier plan : boutons, icônes, cartes et étiquettes colorées par secteur.",
      "Les maquettes couvrent la page d'accueil, la page vidéo, les catégories et leurs versions mobiles.",
    ],
    visuels: [
      v('culture-pub', 1, 'Page d’accueil Culture Pub en perspective', 'large'),
      v('culture-pub', 2, 'Page d’accueil complète, version desktop', 'portrait'),
      v('culture-pub', 3, 'Page vidéo en perspective', 'paysage'),
      v('culture-pub', 4, 'Page d’accueil, version mobile', 'portrait'),
      v('culture-pub', 5, 'Page catégories', 'portrait'),
      v('culture-pub', 6, 'Design system : logo, icônes et bouton', 'portrait'),
      v('culture-pub', 7, 'Page vidéo, version desktop', 'paysage'),
      v('culture-pub', 8, 'Page vidéo, étiquettes par secteur', 'paysage'),
    ],
  },
  {
    slug: 'we-love-green',
    titre: 'We Love Green',
    accroche: 'Identité visuelle du festival, de l’affiche au merchandising',
    categorie: 'Identité · Print',
    cadre: 'Projet d’études',
    role: 'Direction artistique, graphisme',
    livrables: ['Logotype', 'Charte graphique', 'Affiches', 'Merchandising', 'Posts Instagram'],
    texte: [
      "We Love Green est un festival de musique organisé chaque année au bois de Vincennes, à Paris. Le projet consistait à imaginer son identité complète pour une édition.",
      "Le logotype s'inspire des années 1970 : des lettres volontairement décalées, des ondes concentriques et deux dégradés, jaune vers rouge et rose vers violet. Les typographies PT Sans et Akzidenz-Grotesk structurent les informations.",
      "L'identité est déclinée en affiches, en mobilier urbain, en merchandising (sweats, t-shirts, sac, vinyle) et en posts Instagram.",
    ],
    visuels: [
      v('we-love-green', 4, 'Affiche dans un abribus', 'large'),
      v('we-love-green', 1, 'Affiche We Love Green, version jaune et rouge', 'portrait'),
      v('we-love-green', 2, 'Affiche We Love Green, version violette', 'portrait'),
      v('we-love-green', 3, 'Affiche We Love Green, ondes concentriques', 'portrait'),
      v('we-love-green', 5, 'Affiche collée sur un mur', 'paysage'),
      v('we-love-green', 6, 'Affiche en situation dans la végétation', 'paysage'),
      v('we-love-green', 7, 'Charte : référence, logotype et applications', 'large'),
      v('we-love-green', 8, 'Charte : couleurs et typographies', 'large'),
      v('we-love-green', 9, 'Affiches et merchandising', 'large'),
    ],
  },
];
