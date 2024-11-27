# Présentation

## Format des noms de versions

basé sur : https://edutechwiki.unige.ch/fr/Versionnage_s%C3%A9mantique

structure des versions : `majeure.mineure.correction`

`v1.0.0` => application strapi v3 développée par La Chose

`v2.0.0` => début du développement sur la v4

### Tags de version

`-alpha` => version en cours de développement (instable)

`-betas` => preprod (version considérée comme stable)

aucun tag => prod

## Informations générales

Les version `1.0.0` à `1.13.0` sont présentes sur le répo https://github.com/mohamedElkhoulali/api-strapi-ovh

Les version `1.13.1` à `1.22.0` sont présentes sur le répo https://github.com/mohamedElkhoulali/preprod-webpaas1

Les version `2.0.0` à `2.13.3` sont présentes sur le répo https://github.com/Cyani-Maisou/temp_migration_strapi

Les versions ultérieures à la `2.13.3` sont présentes sur le répo https://github.com/mohamedElkhoulali/preprod-webpaas1

Schéma des entrées du Change Log :

    ## [`numéro de version`] - DATE

    ### Ajouts

    ### Modifications

    ### Bug Fix

## [`2.40.1`] - 24/09/2024

### Ajouts

### Modifications

### Bug Fix

- ajout du middleware `exclude-unpublished` sur la route de l'endpoint `sitemap` afin d'ignorer les entrées non publiées

## [`2.40.0`] - 16/09/2024

### Ajouts

- ajout des endpoints `/<ns>-news/pagination-infos/:newsPerPage` pour les controleur `<ns>-news`
- ajout d'un middleware `fix-sort-for-pagination` qui ajoute automatiquement un sort par ID lorsqu'une requete utilise les fonctionnalités sort et pagination simultanément
- ajout d'un single type `cd-landing-job`

### Modifications

- mise à jour des endpoint `/<ns>-cat-news` pour qu'ils prennent en compte les paramètres de pagination dans la requête

### Bug Fix

## [`2.39.1`] - 13/09/2024

### Ajouts

### Modifications

- mise à jour des endpoint `/<ns>-news` pour qu'ils prennent en compte les paramètres de pagination dans la requete

### Bug Fix

- mise à jour des endpoint `/<ns>-news` pour qu'ils prennent en compte les paramètres de filtrage tels que "$or" ou "$and" dans la requête

## [`2.39.0`] - 12/09/2024

### Ajouts

- ajout de la collection `commons-article` pour gérer des articles communs à tous les sites
- ajout d'un composant `generic-cta`

### Modifications

- mise à jour de l'endpoint `findOne` des collections `<ns>-article` et de l'api `article` pour prendre en compte les entrée de `commons-article`
- mise à jour de l'api `sitemap` pour prendre en compte les entrées de `commons-article`
- mise à jour des modèles des collections `<ns>-article` et `commons-article` pour ajouter un attribut `generic-cta` dans le header

### Bug Fix

## [`2.38.1`] - 18/07/2024

### Ajouts

### Modifications

- ajout de la valeur `Tiktok` dans le schema du composant `social.social`

### Bug Fix

## [`2.38.0`] - 17/07/2024

### Ajouts

- ajout de champs `alternative_logo` et `baseline` dans la collection `schools`

### Modifications

### Bug Fix

## [`2.37.0`] - 16/07/2024

### Ajouts

- ajout d'un nouveau composant `lists.list-with-icons` aux dynamic zones des collections `homepage`, `<ns>-article` et `<ns>-campus-info`

### Modifications

### Bug Fix

- prise en compte des paramètres de population dans la requête pour l'api `ifag-campus-infos`

## [`2.36.1`] - 02/07/2024

### Ajouts

### Modifications

- ajout de l'option `Bac+1` et `Bac+4` dans l'enum du niveau de la collection `jobs`

### Bug Fix

## [`2.36.0`] - 19/06/2024

### Ajouts

- ajout de l'endpoint `taxonomy/last-update`
- mise en cache de la date de dernière mise à jour des taxonomies du namespace `figs`

### Modifications

- mise à jour de l'endpoint find des single types `<ns>-landing-job` pour que l'attribut `job_offers` soit filtré en fonction des écoles de l'utilisateur connecté

### Bug Fix

- fix du schema des single types `<ns>-landing-job` pour que les composants `seo` et `textBeforeFooter` ne soient pas répétables
- fix du schema des single types `<ns>-landing-job`, l'attribute' `seo` n'utilisais pas le bon composant
- fix du schema de population des single types `<ns>-landing-job` pour peupler les image des offres

## [`2.35.0`] - 05/06/2024

### Ajouts

- ajout du single type `cd-program`

### Modifications

- ajout d'une nouvelle valeur `jobDating` dans les valeurs disponible de l'attribut `type (enum)` de la collection `events`

### Bug Fix

# Change Log

## [`2.34.1`] - 30/05/2024

### Ajouts

### Modifications

- mise à jour du composant `core.seo` pour la gestion des balises link

### Bug Fix

- fix de la population de l'endpoint `campus-contact/all`

## [`2.34.0`] - 21/05/2024

### Ajouts

- ajout de la collection `jobs`
- ajout du single type `icl-landing-job`
- duplacation du single type `icl-landing-job` pour chacun des namespaces

### Modifications

### Bug Fix

## [`2.33.1`] - 12/04/2024

### Ajouts

### Modifications

- retrait d'une méthode dépréciée `findOneByWhereClause` dans le module `controller-override`
- ajout de l'internationalisation sur le champ `summary` dans la collection `homepage`

### Bug Fix

## [`2.33.0`] - 12/04/2024

### Ajouts

- ajout de l'internationalisation pour les collections `brochure`, `campus-contact`, `campus-geozone`, `campus-landing`, `crm-landing`, `new`, `partner` et `school`.
- ajout de l'internationalisation pour les collections namespacées d'ESAIL

### Modifications

- remplacement d'une relation entre `campus-landing` et `users` par une relation entre `campus-landing` et `school`

### Bug Fix

## [`2.32.0`] - 12/04/2024

### Ajouts

- ajout des controleurs `getCampusesByAction` et `getCrmLinkByCampusAndAction` et leurs endpoints associés dans l'api `epsi-crm-link`

### Modifications

### Bug Fix

- prise en compte des paramètres de population dans la requête pour les endpoints des api `figs-schools-info` et `cd-schools-info`
- prise en compte des paramètres de population dans la requête pour les endpoints de l'api `figs-actualite`
- prise en compte des paramètres de population dans la requête pour les endpoints de l'api `periodes`
- prise en compte des paramètres de population dans la requête pour l'endpoints `findOne` de l'api `campuses`
- prise en compte des paramètres de population dans la requête pour l'api `esail-portfolios`
- prise en compte des paramètres de population dans la requête pour l'api `campus-contacts`
- gestion du mode draft pour l'api `esail-portfolios`

## [`2.31.1`] - 22/02/2024

### Ajouts

### Modifications

### Bug Fix

- add `exclude-unpublished` middleware everywhere it was missing

## [`2.31.0`] - 21/02/2024

### Ajouts

- ajout du booléen `isAffiliated` sur la collection `campuses`

### Modifications

### Bug Fix

## [`2.30.1`] - 19/02/2024

### Ajouts

### Modifications

### Bug Fix

- fix bug qui empéchait des publier d'ajouter un profil à un cours déjà existant (et non publié) qui avait été créé sans profil. Le bug était du à une erreur dans le lifecycle `beforeUpdate`, de la collection course, qui est en charge de générer le `pLabel` des cours.

## [`2.30.0`] - 18/01/2024

### Ajouts

- déploiement en production

### Modifications

### Bug Fix

- prise en compte des paramètres de population dans la requête pour les endpoints de l'api `campus-infos` et `ieft-blog`

## [`2.29.1-beta`] - 11/12/2023

### Bug Fix

- fix de population sur les endpoints `/<ns>-agenda`, `/agenda`, `/<ns>-news`, `/campus-landing`, `<ns>-search`, `/homepage`, `/landings`
- nettoyage des paramètres de requete dans les controleurs `<ns>-search` et `<ns>-programs`
- fix des endpoints `/campuses/autocomplete` et `/categorie-de-programmes/autocomplete` qui ne filtraient pas les entrées en fonction de l'utilisateur connecté

## [`2.29.0-beta`] - 5/12/2023

### Ajouts

- ajout de l'internationalisation pour les collections globales
- ajout de l'internationalisation pour les collections de `figs`

### Modifications

- retrait des collections pour `figsen`
- ajout d'une colonne `reference` dans la collection `courses` qui aura pour but de remplacer la colonne `ref`
- ajout d'un endpoint `campus-contact/all` pour le role content-manager

### Bug Fix

- fix d'un mauvaise gestion de l'asynchrone sur le service `taxonomies`
- fix du controller `ns-new.find` pour qu'il filtre les blogs avant la limite de pagination
- fix du middleware de publication pour qu'il exclue les brouillons avant la limite de pagination
- fix de l'endpoint `/courses` pour qu'il retourne toujours l'attibut `publishedAt`
- fix de la population des `programCat` dans les dynamic zones de courses

## [`2.28.0-beta`] - 07/11/2023

### Ajouts

- Accès à `esail-article` et `esail-news` pour le rôle `contentmanager`
- Accès à `igefi-articles` et `igefi-news` pour le rôle `contentmanager`
- Accès à `figs-articles` et `figs-news` pour le rôle `contentmanager`

### Bug Fix

- Correction de la fonctionnalité `DraftAndPublish` (certains brouillons apparaissaient en front)

## [`2.27.0-beta`] - 6/11/2023

### Ajouts

- Mise en place du rôle `contentmanager`

### Bug Fix

- Pour `findOne` sur `courses`, prise en compte des paramètres de population dans la requête
- Route `create` pour la collection `esail-article`
- Correction de la population de `campus` car `findOne` ne renvoyait pas les cours

### Modifications

- Mise à jour de la population de `campus-landing`
- Mise à jour de la population des `labels` dans la collection `courses`

## [`2.26.3-beta`] - 18/10/2023

### Bug Fix

- Fix de la population pour l'endpoint `/events` lorsque la demande de population vient des paramètres de la requete

## [`2.26.2-beta`] - 18/10/2023

### Modifications

- Pour le `find` sur `campus`, prise en compte des paramètres de filtrage dans la requête

### Bug Fix

## [`2.26.1-beta`] - 17/10/2023

### Modifications

- Paramétrage de sentry sur l'environnement de production uniquement

## [`2.26.0-beta`] - 17/10/2023

### Ajouts

- Ajout du plugin sentry

## [`2.25.1-beta`] - 17/10/2023

### Modifications

- Ajout de la population dans les dynamic zones pour le composant `carousel.temoignages`

### Bug Fix

- Fix de la population pour l'endpoint `/courses` lorsque la demande de population vient des paramètres de la requete

## [`2.25.0-beta`] - 17/10/2023

### Ajouts

- Ajout de la collection `vivamundi-shorts`
- Ajout du composant `carousel.temoignages` et ajout de ce composant aux dynamic zones

### Modifications

- Ajout du composant `texts.accordion` à la dynamic zone des homepages

## [`2.24.1-beta`] - 13/10/2023

### Modifications

- Ajout du composant `internal-link` à la dynamic zone de la collection `courses`

### Bug Fix

- fix : utilisation du champ `fields` de la requete pour peupler la réponse dans le controlleur de la collection `courses`

## [`2.24.0-beta`] - 12/10/2023

### Bug Fix

- Downgrade de la version strapi jusqu'à la `4.11.1`. Un bug semble avoir été inséré dans les versions plus récentes empéchant de publier un cours s il n'a pas de campus associé.

## [`2.23.0-alpha`] - 22/09/2023

### Ajouts

- Génération des collections pour le namespace `vivamundi`

## [`2.22.1-alpha`] - 22/09/2023

### Modifications

- Ajout du `section-separator` a la collection `school-infos`
- Ajout d'un champ `textProgFigs` à la collection `courses`

## [`2.22.0-alpha`] - 19/09/2023

### Ajouts

- Ajout d'un composant pour le carousel de lives

## [`2.21.0-alpha`] - 19/09/2023

### Ajouts

- Retrait du plugin de documentation qui ne fonctionne pas

## [`2.20.0-alpha`] - 14/09/2023

### Ajouts

- Ajout des collections et single types pour la version anglaise de figs
- Ajout des booléens `figsAllowed` et `cdAllowed` sur la colection `courses`
- Mise à jour de strapi à la version `4.13.6`
- Ajout du plugin de documentation

## [`2.19.0-alpha`] - 14/09/2023

### Ajouts

- Ajout d'une collection et d'un single type pour les `figs-lives`

### Modifications

- rend le type d'un evenement obligatoire dans la collection `events`

### Bug Fix

- fix de population dans le controlleur de `courses`
- limitation du nombre de labels dans le single type `figs-bureau`

## [`2.18.2-alpha`] - 13/09/2023

### Bug Fix

- fix de population dans le controlleur de `courses` pour favoriser la population de la requete

## [`2.18.1-alpha`] - 12/09/2023

### Modifications

- Ajout du composant `teams` dans la collection `articles`

## [`2.18.0-alpha`] - 01/09/2023

### Ajouts

- Ajout des content-types `figs-office` et `figs-bureau`

## [`2.17.4-alpha`] - 31/08/2023

### Bug Fix

- fix : ajout d'une valeur minimale pour l'attribut `entryLevel` de la collection courses

## [`2.17.3-alpha`] - 29/08/2023

### Bug Fix

- fix bug sur le controller `crm-link` lorsqu'il n'y avait aucun profil associé à un cours

## [`2.17.2-alpha`] - 04/08/2023

### Bug Fix

- fix population sur `figs-ecoles`
- fix population su `school-infos` pour les global users

## [`2.17.1-alpha`] - 03/08/2023

### Bug Fix

- fix sur le controller `events` pour retourner tous les events lorsque l'utilisateur connecté est un globaluser

## [`2.17.0-alpha`] - 01/08/2023

### Ajouts

- Ajout du single type `figs-program`
- Ajout d'une dynamic zone pour le single type `ecole`

## [`2.16.0-alpha`] - 31/07/2023

### Ajouts

- Ajout des collections pour `FIGS`

## [`2.15.10-alpha`] - 27/07/2023

### Modifications

- retrait de certaines populations inutiles pour améliorer les performances

### Bug Fix

- fix de population sur `campuses`

## [`2.15.9-alpha`] - 21/07/2023

### Modifications

- population des composants `seo` et `header_image` dans `cd-ecole`

## [`2.15.8-alpha`] - 18/07/2023

### Bug Fix

- fix de population pour `news` et `courses`

## [`2.15.7-alpha`] - 17/07/2023

### Modifications

- maj de population pour les composant `programs`

### Bug Fix

- fix de la gestion des paramètres de requetes dans le controlleur de `crm-links`
- fix de la gestion des paramètres de requetes dans le controlleur de `courses`

## [`2.15.6-alpha`] - 07/07/2023

### Bug Fix

- fix de l'endpoint `courses.search` (qui ne prenait pas en compte tous les filtres)
- fix du parametre `sort` sur les news
- fix population sur la collection `news`

## [`2.15.5-alpha`] - 06/07/2023

### Bug Fix

- fix de la fonctionalité de tri sur `esail-portfolios`
- fix de population sur le composant `programs-category`
- fix de population sur l'endpoint `courses.filters`
- fix population sur la collection `courses`

## [`2.15.4-alpha`] - 04/07/2023

### Bug Fix

- fix pour vérifier la présence d'attributs undefined dans `controllers/campus`
- fix endpoint `/sitemap` pour gérer la différence entre un blog et une news
- fix population sur la collection `courses`

## [`2.15.3-alpha`] - 03/07/2023

### Bug Fix

- fix de population sur la collection `courses`
- fix typo

## [`2.15.2-alpha`] - 30/06/2023

### Bug Fix

- fix de la méthode `fixEmptyRelationships` dans les foncitons utilitaires

## [`2.15.1-alpha`] - 28/06/2023

### Bug Fix

- fix du controller `<ns>-news` pour prendre en compte les paramètres de la requete

## [`2.15.0-alpha`] - 27/06/2023

### Ajouts

- Ajout d'un endpoint pour trouver un campus-infos en fonction du slug d'un campus

### Bug Fix

- fix de populations
- fix des filtres sur l'endpoint `menu-enrichis.find`

## [`2.14.1-alpha`] - 26/06/2023

### Bug Fix

- fix de population

## [`2.14.0-alpha`] - 16/06/2023

### Ajouts

- migration de la methode bootstrap pour générer les champ `fts_search` dans la table `courses` de la database

### Bug Fix

- fix du composant `course.programs`

## [`2.13.5-alpha`] - 15/06/2023

### Modifications

- modification de `securityToken` dans Users pour en faire un champ privé

### Bug Fix

- divers ajustement de populations
- fix des endpoints pour la collection `<ns>-news`

## [`2.13.4-alpha`] - 13/06/2023

### Modifications

- ajustement des fonctionnalités de déploiement pour la préprod
- ajustement de l'espace disque pour la préprod

### Bug Fix

- ajouts de valeurs par défaut pour les variables d'environnements

## [`2.13.3-alpha`] - 16/06/2023

### Modifications

- (re)mise en place de la méthode bootstrap pour la connection à la database

### Bug Fix

- fix de populations
- fix dans les endpoints de `homepage` et `<ns>-news`

## [`2.13.2-alpha`] - 09/06/2023

### Bug Fix

- fix de la methode `find` du module namespace
- divers fix pour le filtrage et la population dans les controlleurs

## [`2.13.1-alpha`] - 05/06/2023

### Modifications

- Mise à jour des connections à la base de données

### Bug Fix

- fix : population des Users

## [`2.13.0-alpha`] - 05/06/2023

### Ajouts

- ajout du plugin media cloudinary

## [`2.12.0-alpha`] - 31/05/2023

### Ajouts

- ajout de l'editeur de richText

## [`2.11.0-alpha`] - 24/05/2023

### Ajouts

- ajout des routes et controlleur pour GlobalNews

### Modifications

- ajout d'un fichier helper pour gérer les informations de l'utilisateur courrant

### Bug Fix

- fix des composants ayant des relations vers `news`
- fix des composants ayant des relations vers `teams`

## [`2.10.0-alpha`] - 23/05/2023

### Ajouts

- Re-construction des collections namespacées pour toutes les écoles
- Ajout des collections pour les GlobalUser

### Modifications

- retrait de routes inutiles
- ajout d'un fichier helper pour gérer les relations dans les lifecycles

## [`2.9.0-alpha`] - 22/05/2023

### Ajouts

- Ajout du middleware `transform-response` pour controller le format des objets JSON en sortie des APIs

### Bug Fix

- Fix : option de tris dans le controller `courses`

## [`2.8.0-alpha`] - 17/05/2023

### Ajouts

- Ajout du controlleur pour la collection `taxonomies`
- Ajout de controlleurs et routes pour certaines collections namespacées

### Modifications

- mise a jout du schema des collections `campus-infos`

### Bug Fix

- fix typo dans `population-schemas`

## [`2.7.0-alpha`] - 16/05/2023

### Ajouts

- Ajout des routes, controlleurs et services pour `programs`, `schools` et `search`
- Ajout des routes `sitemap` et `version`
- Ajout de controlleurs et routes pour certaines collections namespacées

### Modifications

- Ajout de la méthode `search` dans le controlleur de `courses`

### Bug Fix

- fix de relations entre composants et collections

## [`2.6.0-alpha`] - 15/05/2023

### Ajouts

- Ajout des `lifecycles` pour les modèles
- Ajout du controlleur pour les collections `homepage`, `crm-links`, `news` et `event`
- Ajout des routes pour la collection `courses`

### Modifications

- Refactor et ré-organisation de code

### Bug Fix

- fix de la méthode `count` du module de tri par écoles
- fix de `controller-override` lorsqu'une collection demandée n'existe pas
- fix de la relation entre `MenuDropdown` et `MenuSection`

## [`2.5.0-alpha`] - 05/05/2023

### Ajouts

- Ajout des `lifecycles` pour les modèles
- Ajout du controlleur pour la collection `courses`

### Modifications

- certaines relations deviennent obligatoires
- ajout de la fonctionnalité `DraftAndPublish` sur certains content-types

## [`2.4.0-alpha`] - 04/05/2023

### Ajouts

- Migration des controlleurs et services pour la majorité des collections globales
- Ajout du module de fonctionnalités de tri par profil pour les controlleurs
- ajout du fichier `population-schemas`

### Modifications

- ajout de population dans `controller-override`

### Bug Fix

- fix de la fonctionnalité de recherche par école pour les controlleurs

## [`2.3.0-alpha`] - 14/04/2023

### Ajouts

- Ajouts des champs de base pour la collection `Users`
- Ajout des content type communs à tous les namespaces
- Ajout de relations entre les content types
- Ajout d'un composant `Slider` dans la collection `Homepage`
- Ajout du module de fonctionnalités de tri par école pour les controlleurs

### Modifications

- Ajout de population sur le controlleur `users/me`
- Ajout des composants dans les dynamic zones

### Bug Fix

- fix de certain composants
- ajout de content types manquants

## [`2.2.0-alpha`] - 13/04/2023

### Ajouts

- Ajout d'une version de base (esail) des content types namespacés
- Ajout des relations entre les content types namespacés

### Modifications

- Modification de certains composants reposant sur des relations avec des content types

### Bug Fix

- fix des composants images

## [`2.1.0-alpha`] - 12/04/2023

### Ajouts

- Ajout des fonctionnalités de tri par namespace
- Ajout d'un module de foncitonnalités globales pour les controlleurs
- Ajout du `securityToken` pour la collection User et migration des policies
- Migration des composants

## [`2.0.0-alpha`] - 12/04/2023

### Ajouts

- Ajout d'un nouveau projet Strapi basé sur la v4 du CMS

## [`1.22.0`] - 15/03/2023

### Ajouts

- Ajout du single type `esail-landing-portfolios`

## [`1.21.1`] - 03/03/2023

### Modifications

- Ajout du des composants `carousels.carousel-d-evenements` et `carousels.carousel-actus-et-agenda` à la dynamic zone de `esail-campus-info`
- Ajout d'un champ `summary` aux composants `carousels.campus` et `carousels.carousel-info`

## [`1.21.0`] - 28/02/2023

### Ajouts

- Re-génération des collections pour `esail`
- Ajout de la collection `esail-portfolios`
- Ajout d'un composant `carousels.portfolios` et ajout de ce composant aux dynamic zones

## [`1.20.0`] - 24/02/2023

### Ajouts

- Ajout d'un composant `carousels.carousel-d-evenements` et ajout de ce composant aux dynamic zones
- Ajout d'un composant `carousels.carousel-actus-et-agenda` et ajout de ce composant aux dynamic zones

### Modification

- Ajout d'une seconde dynamic zone dans les collections `course` et `ihedrea-campus-infos`
- Ajout de champs `maxNewsCount`, `subtitle`, `ctaLabel` et `ctaUri` au composant `news.list`

### Bug Fix

- fix sur le composant `carousels-infos`

## [`1.19.0`] - 23/02/2023

### Ajouts

- Ajout d'un composant `carousel-infos`

### Modification

- Ajout d'un champ `carouselInfos` dans les différents composants `carousels`
- Ajout d'un `cta` aux carousels de campus

## [`1.18.0`] - 23/02/2023

### Ajouts

- Ajout des single types `actualites` et `blog` pour les namespaces `ihedrea` et `iet`

### Modifications

- Ajout d'un composant `panel` dans la collection `courses`
- Ajout d'un champ `accordionGroup` dans le composant `texts-accordions`
- Ajout d'un `textbeforeFooter` aux content types `campus-landing`, `course`, `iet-crm-landing` et `ìhedrea-crm-landing`
- Ajout d'un composant `slider` sur la collection `homepage`
- Ajout de champs `headerTitle` et `summary` sur la collection `homepage`

## [`1.17.0`] - 18/01/2023

### Ajouts

- Re-génération des collections pour le namespace `ihedrea`

## [`1.16.3`] - 16/01/2023

### Modifications

- Ajout d'un champ `publishDate` dans la collection `ihedrea-news`

## [`1.16.2`] - 04/01/2023

### Bug Fix

- fix du controller `taxonomy` pour ne pas insérér un taxo si il en existe déjà une avec la même clé

## [`1.16.1`] - 15/12/2022

### Bug Fix

- fix filtrage dans le service service `course`
- fix de l'endpoint `<ns>-news` lorsqu'une limite est demandée pour n'appliquer cette limite qu'une fois que les news on été filtrées dans le controller

## [`1.16.0`] - 06/12/2022

### Ajouts

- Ajout des collections pour le namespace `iet`

### Modifications

- population du champ `courses.programCat` dans le controller `campus`

### Bug Fix

- Fix endpoint `/sitemap`

## [`1.15.0`] - 07/11/2022

### Ajouts

- Ajout des collections pour le namespace `ieft`

### Modifications

- Ajout d'un `textBeforeFooter` dans les collections `supdecom-articles`, `supdecom-news` et dans le single type `supdecom-agenda`

## [`1.14.1`] - 28/10/2022

### Modifications

- population des champs `image` et `geozones` sur l'endpoint `/campus-landing`
- Ajout d'un champ `title` dans les collections `supdecom-campus-infos`, `supdecom-crm-link`, `supdecom-news` et dans le composant `supdecom-teams`

## [`1.14.0`] - 19/10/2022

### Ajouts

- Ajout des collections pour le namespace `supdecom`

## [`1.13.2`] - 17/10/2022

### Modifications

- Ajout d'un endpoint permettant de récupérer une entrée de `cd-ecoles-infos` à partir d'un nom d'école

- Ajout du composant `cd-team` à la dynamic zone de la collection `cd-articles`

### Bug Fix

- fix de la méthode `findOne` du controller `cd-ecoles-infos`

## [`1.13.1`] - 10/10/2022

### Modifications

- Ajout d'un champ `publishDate` à la collection `[SDC]-news`

## [`1.13.0`] - 30/09/2022

### Ajouts

- Ajout du collection type `cd-school-infos`

### Modifications

- Ajout d'un champ `main-news` à la collection `global-news`
- Ajout des niveaux `h1` et `h2` au composant `texts.title`

### Bug Fix

- Fix de la methode `findOne` du controleur `cd-ecoles-infos`

## [`1.12.2`] - 22/09/2022

### Bug Fix

- fix bug dans la relation `schools-campuses`, il a fallu recréer la relation (`campus2`) pour régler le problème

## [`1.12.1`] - 05/09/2022

### Modifications

- MAJ de population dans la collection `global-news`

### Bug Fix

- fix d'une propriété dupliqué dans `3a-news`

## [`1.12.0`] - 05/09/2022

### Ajouts

- Ajout des collections et single types pour le namespace `FIGS`

### Modifications

- MAJ de la policy `has-security-token` pour inclure les globalUsers
- MAJ de la collection `global-news` pour qu'elle ne retourne que les news de l'user connecté

## [`1.11.0`] - 31/08/2022

### Ajouts

- Ajout de la collection `global-news`
- Ajout des collections et single types pour le namespace `CD`

## [`1.10.2`] - 30/08/2022

### Modifications

- Autorisation pour les GlobalUser d'accéder aux collection `homepage`, `campus-landing`, `courses`, `events` et `campuses`
- Ajout d'un endpoint pour récupérer les écoles en fonction d'un campus
- Ajout d'un endpoint pour récupérer les cours en fonction d'une catégorie

## [`1.10.1`] - 10/08/2022

### Modifications

- Ajout de l'endpoint `/blog` aux collections `<ns>-news`
- Modification de l'endpoint `/news` des collections `<ns>-news` pour qu'il ignore les news de type blog

## [`1.10.0`] - 02/08/2022

### Ajouts

- Ajout du composant `texts.unillustratedText`

### Modifications

- Maj du controller de `campus-infos` pour peupler le composant `programs`

## [`1.9.0`] - 25/07/2022

### Ajouts

- Ajout des collections pour le namespace `ileri`

## [`1.8.4`] - 20/07/2022

### Modifications

- Ajout d'un champ `description` sur la collection `campus-landings`

## [`1.8.3`] - 19/07/2022

### Modifications

- Ajout des composants `news-list` et `section-separator` a la DZ des `campus-infos`
- Nettoyage de code et maj de documentation
- Ajout du composant `textBeforeFooter` aux colections `<ns>-rubrique`
- Ajout de divers composants manquants dans plusieurs DZ

## [`1.8.2`] - 12/07/2022

### Modifications

- Ajout d'un champ `programCat` dans le single type `<ns>-programs`
- Population du champ `focusImage` dans le single type `<ns>-programs`
- Ajout d'un champ `programCat` dans la collection `homepage`
- Population des `programCat` dans les endpoints de `/courses`

## [`1.8.1`] - 06/07/2022

### Modifications

- Ajout d'un champ `summary` dans le single type `<ns>-programs`

## [`1.8.0`] - 05/07/2022

### Ajouts

- Ajout de la collection `titres` pour les programmes

## [`1.7.3`] - 23/06/2022

### Modifications

- population des `focusImage` sur l'endpoint `/campuses`

## [`1.7.2`] - 22/06/2022

### Modifications

- modification des `menus-enrichis` pour gérer un 3eme niveau de menus
- modification de la methode `find` du controller `menu-enrichi` pour ne retourner que les menus appartenant à l'user
- ajout d'un titre sur les `menus-sections`
- ajout de champs `cta` et `description` optionnels pour les `menu-dropdown`

## [`1.7.1`] - 13/06/2022

### Bug Fix

- fix du composant `key-data` dans les DZ

## [`1.7.0`] - 10/06/2022

### Ajouts

- Ajout des collections pour le namespace `icl`

### Modifications

- ajout des champs `email` et `phone` dans les `teams` des écoles.
- Création d'un composant `textBeforeFooter` et utilisation de ce composant pour les collections des écoles

## [`1.6.3`] - 01/06/2022

### Modifications

- Ajout d'un champ `historicPrice` à la collection `courses`
- Population du slug sur les différents endpoints `autocomplete`
- Ajout d'un champ `publishDate` sur les collections `<ns>-news`

## [`1.6.2`] - 19/05/2022

### Modifications

- ajout de `programCat` aux valeurs retournées par l'endpoint `/courses/filters`
- modification du comportement de la recherche de cours lorsque le filtre `graduationLevel` est renseigné
- mise à jour des collections pour le namespace `idrac`

## [`1.6.1`] - 06/05/2022

### Modifications

- retrait des limitations de caractères sur les composants `seo`

## [`1.6.0`] - 05/05/2022

### Ajouts

- ajout du composant `text + video`

### Modifications

- ajout d'un champ `seo` dans `campus-info`

## [`1.5.2`] - 04/05/2022

### Modifications

- ajout des endpoints autocomplete pour `courses`, `categorie de programme` et `campus`

## [`1.5.1`] - 28/04/2022

### Modifications

- Ajout d'une relation `période`-`campus`
- Changement du nom `periode` en `programme : periode`
- ajout d'un champ summary dans `3a-programmes`
- Ajout d'un champ `description` sur le composant `periodes`
- la relation 1-1 du composant `periodes` vers la collection `période` devient une relation 1-n
- Ajout du composant `sectionSeparator` à toutes les dynamicZones
- Ajout d'un champ détails dans la collection `périodes`

## [`1.5.0`] - 06/04/2022

### Ajouts

- Ajout du composant `socials`
- Ajout de la collection `categorie-de-programmes`
- Ajout d'un relation entre `categorie-de-programmes` et `courses`

### Modifications

- Ajout du composant `periode` dans la DZ de la collection `courses`
- Ajout de divers composants dans la DZ de `campus-landing`
- Ajout d'un champ headerDesription dans la collection `campus-landing`
- Ajout d'un description dans `texts.quote`

## [`1.4.0`] - 05/04/2022

### Ajouts

- Ajout de la collection `periodes`

### Modifications

- Ajout d'une relation entre `courses` et `periodes`

## [`1.3.0`] - 23/03/2022

### Ajouts

- Ajout d'une collection `<ns>-teams`
- AJout du composant `team` pour les écoles
- Ajout d'une collection `<ns>-partners`
- AJout du composant `section-separator`
- Ajout d'une collection `partners`
- AJout du composant `partner` pour les écoles

## [`1.2.0`] - 21/03/2022

### Ajouts

- Ajout du composant `campus`

### Modifications

- Ajout d'un cta a la collection `homepage`
- Ajout d'un `textBeforeFooter` dans les single `<ns>-programmes` et les collections `<ns>-campus-infos`
- ajout d'un `subTitle` dans les collections `<ns>-article`

## [`1.1.2`] - 07/03/2022

### Bug Fix

- Fix du composant `textBeforeFooter`

## [`1.1.1`] - 28/02/2022

### Modifications

- Ajout d'un cta et d'un titre sur le composant `illustratedText`
- Ajout d'un attribut `textBeforeFooter` sur la collection `homepage`
- Mise à jour de l'attribut `title` de `illustratedText` pour utiliser le composant `texts.title`

## [`1.1.0`] - 28/02/2022

### Ajouts

- Mise en place du plugin `cloudinary`

## [`1.0.0`] - 09/02/2022

### Ajouts

- Mise en place d'un serveur de préproduction contenant l'application strapi fournie par la Chose

## Versions antérieurs à la `1.0.0`

Ces versions concernent le développement par la Chose de la première application strapi. Nous n'avons pas accès à cet historique.
