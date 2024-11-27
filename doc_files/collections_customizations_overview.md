# Agenda:

## routes

| méthode | route   | controller  | status                     |
| ------- | ------- | ----------- | -------------------------- |
| GET     | /agenda | agenda.find | <ul><li>[x] done</li></ul> |

## custom controllers

| nom  | description                                                                                                                              | status                     |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| find | appele la méthode findSingle du module config.functions.namespace pour retourner le single type associés au namespace de l'user connecté | <ul><li>[x] done</li></ul> |

# Article:

## routes

| méthode | route           | controller       | status                     |
| ------- | --------------- | ---------------- | -------------------------- |
| GET     | /articles       | articles.find    | <ul><li>[x] done</li></ul> |
| GET     | /articles/count | articles.count   | <ul><li>[x] done</li></ul> |
| GET     | /articles/:slug | articles.findOne | <ul><li>[x] done</li></ul> |

## custom controllers

| nom                         | description                                      | status                     |
| --------------------------- | ------------------------------------------------ | -------------------------- |
| find, findOne (slug), count | utilisation du module config.functions.namespace | <ul><li>[x] done</li></ul> |

# Brochure

## routes

| méthode | route      | controller    | status                     |
| ------- | ---------- | ------------- | -------------------------- |
| GET     | /brochures | brochure.find | <ul><li>[x] done</li></ul> |

## custom controllers

| nom  | description                                                                                                                           | status                     |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| find | récupère les brochures correspondant au profile de l'utilisateur connecté, utilise la méthode find du module config.functions.schools | <ul><li>[x] done</li></ul> |

## custom models

lifecycles:

| nom                        | description                                                                     |
| -------------------------- | ------------------------------------------------------------------------------- |
| beforeUpdate, beforeCreate | fait appel à la méthode fixEmptyRelations de config.functions.utils (à étudier) |

# Campus

## routes

| méthode | route                  | controller          | status                     |
| ------- | ---------------------- | ------------------- | -------------------------- |
| GET     | /campuses              | campus.find         | <ul><li>[x] done</li></ul> |
| GET     | /campuses/count        | campus.count        | <ul><li>[x] done</li></ul> |
| GET     | /campuses/autocomplete | campus.autocomplete | <ul><li>[x] done</li></ul> |
| GET     | /campuses/:slug        | campus.findOne      | <ul><li>[x] done</li></ul> |

## custom controllers

| nom            | description                                                                                                                                                                                                                                                           | status                     |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| find           | si l'user connecté correspond à un site école alors on rajoute un filtre a la requete pour ne récupérer que les campus des écoles associées à l'user en cours. les écoles associées a l'user sont récupérées par la méthode getIds du module config.functions.schools | <ul><li>[x] done</li></ul> |
| findOne (slug) | récupère un campus par slug. récupère le profil et les écoles associés a l'user actuel. parcours la relation 'courses' du campus pour retirer de la réponse les programmes ne correspondant pas au profil et aux écoles de l'user actuel                              | <ul><li>[x] done</li></ul> |
| autocomplete   | récupère les title et slug de chaque campus pour la fonctionnalité frontend d'autocompletion                                                                                                                                                                          | <ul><li>[x] done</li></ul> |

## custom models

lifecycles

| nom                     | description                                                                                           |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| afterFind, afterFindOne | classe les cours du ou des campus par ordre alphabétique croissant puis par 'degreeLevel' décroissant |

# Campus-Contact

## routes

toutes les routes par défaut

## custom controllers

| nom     | description                                                                                                                                                  | status                     |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| find    | récupère tous les campus-contact des écoles associées à l'utilisateur actuel. utilise la methode findForEachSchool du module config.functions.schools        | <ul><li>[x] done</li></ul> |
| findOne | utilise la methode findOneById du module config.functions.schools mais en fait celle ci ne fait qu'un findOne de base sans notions de selection par école... | <ul><li>[x] done</li></ul> |
| count   | compte les campus-contact associés aux écoles de l'user actuel. utilise la methode count de config.functions.schools                                         | <ul><li>[x] done</li></ul> |

## custom models

lifecycles:

| nom                         | description                                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| beforeCreates, beforeUpdate | vérifie qu'il n'y a pas déjà une entrée correspondant à la paire campus - école du campus-contact qu'on veut insérer/update |

# Campus-Geozone

## routes

routes par défaut : find, count, findOne (id)

# Campus-Infos

## routes

| méthode | route         | controller       | status                     |
| ------- | ------------- | ---------------- | -------------------------- |
| GET     | /campus-infos | campus-info.find | <ul><li>[x] done</li></ul> |

## custom controllers

| nom  | description                                                                                                             | status                     |
| ---- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| find | retourne les campus-infos associés à l'utilisateur actuel. utilise la méthode find du module config.functions.namespace | <ul><li>[x] done</li></ul> |

# Campus-Landing

## routes

| méthode | route           | controller                | status                     |
| ------- | --------------- | ------------------------- | -------------------------- |
| Get     | /campus-landing | campus-landing.findSingle | <ul><li>[x] done</li></ul> |

## custom controllers

| nom        | description                                                                                                                                                  | status                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| findSingle | retourne la campus-landing associée à l'utilisateur actuel (via la relation website). peuple les champs image, children.campus_geozones, childrem.focusImage | <ul><li>[x] done</li></ul> |

## custom models

lifecycles:

| nom                        | description                                                   |
| -------------------------- | ------------------------------------------------------------- |
| beforeCreate, beforeUpdate | génère la valeur du champs children order                     |
| afterFindOne, afterUpdate  | trie les childrens pour respecter l'ordre dans children order |

# categorie-de-programme

## routes

| méthode | route                                 | controller                          | status                     |
| ------- | ------------------------------------- | ----------------------------------- | -------------------------- |
| GET     | /categorie-de-programmes              | categorie-de-programme.find         | <ul><li>[x] done</li></ul> |
| GET     | /categorie-de-programmes/count        | categorie-de-programme.count        | <ul><li>[x] done</li></ul> |
| GET     | /categorie-de-programmes/autocomplete | categorie-de-programme.autocomplete | <ul><li>[x] done</li></ul> |
| GET     | /categorie-de-programmes/:id          | categorie-de-programme.findOne      | <ul><li>[x] done</li></ul> |

\+ create, update, delete mais elles ne sont pas utilisées je pense

## custom controllers

| nom          | description                                                                                                  | status                     |
| ------------ | ------------------------------------------------------------------------------------------------------------ | -------------------------- |
| autocomplete | récupère les title et slug de chaque catégorie de programme pour la fonctionnalité frontend d'autocompletion | <ul><li>[x] done</li></ul> |

# Courses

## routes

| méthode | route                   | controller          | status                                                                 |
| ------- | ----------------------- | ------------------- | ---------------------------------------------------------------------- |
| GET     | /courses                | course.find         | <ul><li>[x] done</li></ul>                                             |
| GET     | /courses/search         | course.search       | <ul><li>[x] done</li></ul>                                             |
| GET     | /courses/filters        | course.filters      | <ul><li>[x] done</li></ul>                                             |
| GET     | /courses/count          | course.count        | <ul><li>[x] done<br/>:warning: cet endpoint semble inutilisé</li></ul> |
| GET     | /courses/autocomplete   | course.autocomplete | <ul><li>[x] done</li></ul>                                             |
| GET     | /courses/:slug          | course.findOne      | <ul><li>[x] done</li></ul>                                             |
| GET     | /courses/category/:slug | course.findByCat    | <ul><li>[x] done</li></ul>                                             |

# custom controllers

| nom              | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | status                                                                 |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| find, findOne    | si l'user actuel correspond à un compte école, on ne récupère que les cours appartenant au profile et aux écoles associés à l'user                                                                                                                                                                                                                                                                                                                                                                                         | <ul><li>[x] done</li></ul>                                             |
| findByCat (slug) | récupère les cours correspondants au slug d'une catégorie de programmes donnée (ajout d'un filtre programCat.slug = slug dans la query)                                                                                                                                                                                                                                                                                                                                                                                    | <ul><li>[x] done</li></ul>                                             |
| count            | compte les cours des écoles associées à l'user actuel                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | <ul><li>[x] done<br/>:warning: cet endpoint semble inutilisé</li></ul> |
| filters          | récupère les filtres correspondants aux cours de l'user actuel. si l'user actuel correspond à un compte école, on ne récupère que les cours appartenant au profile et aux écoles associés à l'user. fait appel au service parseFilters                                                                                                                                                                                                                                                                                     | <ul><li>[x] done</li></ul>                                             |
| search           | effectue une recherche selon une chaine de caractères reçue. la recherche s'effecture dans la liste des cours correspondants au profil et aux écoles de l'user actuel. si il n'y a aucun résultats et qu'il y avait un filtre sur 'graduationLevel == X' on relance la recherche avec un filtre 'graduationLevel >= X'. <br/>fait appel au service `searchCourse`. <br/>Une string de recherche peut être passée au controller via la query ex: `courses/search?_q=machin`, elle doit être passée au service en paramètre. | <ul><li>[x] done</li></ul>                                             |
| autocomplete     | selectionne les champs title et name des cours associés à l'école de l'user actuel pour la fonctionnalité frontend d'autocompletion                                                                                                                                                                                                                                                                                                                                                                                        | <ul><li>[x] done</li></ul>                                             |

## custom models

lifecycles:

| nom                       | description                                                                                                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| beforeUpdate              | 1) si le cours n'est pas encore publié on y insère les skills unit associés (via le service getSkillsUnits) 2) on génère le champ labelsOrder 3) on génère le pLabel via le service getPrivateLabel |
| beforeCreate              | 1) on y insère les skills unit associés (via le service getSkillsUnits) 2) on génère le champ labelsOrder 3) on génère le pLabel via le service getPrivateLabel                                     |
| afterUpdate, afterFindOne | classe les labels par labelsOrder                                                                                                                                                                   |
| afterFind                 | pour chaque cours classe ses campus par ordre alphabétique                                                                                                                                          |

## custom services

| nom                        | description                                                                                                                                                                                                                                                                                                                                                                                                                   | status                        |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| find                       | fait juste un find sur la table course...                                                                                                                                                                                                                                                                                                                                                                                     | <ul><li>[x] done</li></ul>    |
| searchCourse               | recherche les cours correspondants à une string de recherche (tape directement dans la db...).<br/>Si la requete contient une string de recherche on retourne la liste des cours ayant TOUS les mots de cette string inclue dans leur champ search (peu importe l'ordre des mots, si un de la recherche n'est pas dans search alors on ignore le cours). Si la requete ne contient pas de string on retourne tous les cours ! | <ul><li>[x] done</li></ul>    |
| getPrivateLabel            | récupère le nom de l'école et du profil associés à un cours passé en entrée pour générer un private label (`[${schoolName}][${profileName}] ${data.name}`)                                                                                                                                                                                                                                                                    | <ul><li>[x] done</li></ul>    |
| (unused) getDurationValue  | calcule la valeur réelle de durationValue, exprimée en heures, par rapport à l'attribut scale                                                                                                                                                                                                                                                                                                                                 | <ul><li>[ ] pending</li></ul> |
| getSkillsUnits             | récupère les skills-unit et teaching-units associés à un cours. parcours la dynamic zone 'details' et ajoute chaque composant skills-unit ou teaching-units à un tableau de résultats                                                                                                                                                                                                                                         | <ul><li>[x] done</li></ul>    |
| parseFilters               | prend une liste de cours en entrée. parcours tous les cours et utilise la méthode parseItemFilters pour remplir le tableau de filtres obtenu via getConfigFilters                                                                                                                                                                                                                                                             | <ul><li>[x] done</li></ul>    |
| (private) parseItemFilters | prend en entrée un cours et un tableau de filtres. peuple le tableau de filtres avec les données du cours                                                                                                                                                                                                                                                                                                                     | <ul><li>[x] done</li></ul>    |

# Crm-landing

## routes:

| méthode | route               | controller          | status                     |
| ------- | ------------------- | ------------------- | -------------------------- |
| GET     | /crm-landings/:slug | crm-landing.findOne | <ul><li>[x] done</li></ul> |

## custom controllers

| nom     | description                                                                                       | status                     |
| ------- | ------------------------------------------------------------------------------------------------- | -------------------------- |
| findOne | recherche la crm-landing par namespace (utilise la méthode findOne de config.functions.namespace) | <ul><li>[x] done</li></ul> |

# Crm-links

## routes

| méthode | route                               | controller                            | status                     |
| ------- | ----------------------------------- | ------------------------------------- | -------------------------- |
| GET     | /crm-links/:action/:course/campuses | crm-link.findCampusesFromActionCourse | <ul><li>[x] done</li></ul> |
| GET     | /crm-links/actions                  | crm-link.findActions                  | <ul><li>[x] done</li></ul> |
| GET     | /crm-links/:action/:course/:campus  | crm-link.findCRMLinksFromActionCourse | <ul><li>[x] done</li></ul> |

## custom controllers

| nom                          | description                                                                                                                                                                                                                                                | status                     |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| findActions                  | récupère les crm-links correspondants au namespace de l'user (config.functions.namespace.find). récupère les crm-links dont le profil du cours est le même que le profil de l'user actuel. retourne la liste des crm-links triés par action dans un object | <ul><li>[x] done</li></ul> |
| findCampusesFromActionCourse | récupère les liens crm correspondants a un cours et a une action donnés (et par namespace). retourne la liste des campus associés à ces liens crm                                                                                                          | <ul><li>[x] done</li></ul> |
| findCRMLinksFromActionCourse | retourne un lien crm (associé au namespace de l'user) en fonctions d'une action, d'un cours et d'un campus donné                                                                                                                                           | <ul><li>[x] done</li></ul> |

# Event

## routes

| méthode | route         | controller    | status                     |
| ------- | ------------- | ------------- | -------------------------- |
| GET     | /events       | event.find    | <ul><li>[x] done</li></ul> |
| GET     | /events/count | event.count   | <ul><li>[x] done</li></ul> |
| GET     | /events/:slug | event.findOne | <ul><li>[x] done</li></ul> |

## custom controllers

| nom     | description                                                                                                                                        | status                     |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| find    | récupère les events liés au profil et a une des écoles de l'user actuel (utilise services.profile.getUserProfile et config.functions.schools.find) | <ul><li>[x] done</li></ul> |
| findOne | idem que find mais avec un slug en entrée                                                                                                          | <ul><li>[x] done</li></ul> |
| count   | idem que find mais pour count                                                                                                                      | <ul><li>[x] done</li></ul> |

# Global-news

## routes

| méthode | route        | controller           | status                        |
| ------- | ------------ | -------------------- | ----------------------------- |
| GET     | /global-news | global-news.findNews | <ul><li>[ ] pending</li></ul> |

## custom controllers

| nom      | description                                                                                                                                                                                                                                                                                                                                         | status                        |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| findNews | récupère une entrée de global-news associée au globaluser actuel. pour chaque actu dans global-news on récupère le nom de la collection, de l'école et de la propriété (ifag_actualite, epsi_actualite) dont elle est tirée. on renseigne son origine (le site dont elle est issue). on récupère sa version originale dans la collection de l'école | <ul><li>[ ] pending</li></ul> |

# Homepage

## routes

| méthode | route     | controller         | status                     |
| ------- | --------- | ------------------ | -------------------------- |
| GET     | /homepage | hompage.findSingle | <ul><li>[x] done</li></ul> |

## custom controllers

| nom        | description                                           | status                     |
| ---------- | ----------------------------------------------------- | -------------------------- |
| findSingle | récupère la homepage associée à l'id de l'user actuel | <ul><li>[x] done</li></ul> |

# Landings

## routes

| méthode | route           | controller      | status                     |
| ------- | --------------- | --------------- | -------------------------- |
| GET     | /landings/:slug | landing.findOne | <ul><li>[x] done</li></ul> |
| GET     | /landings       | landing.find    | <ul><li>[x] done</li></ul> |

## custom controllers

| nom           | description                                                                                                                     | status                     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| find, findOne | utilisent la methode correspondante de config.functions.namespace pour rechercher la ou les rubriques associées à l'user actuel | <ul><li>[x] done</li></ul> |

# Menu-enrichi

## routes

toutes les routes par défaut

## custom controllers

| nom     | description                                                                                                                                                                                           | status                     |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| find    | récupère les entrées de menus-enrichi correspondant à l'user actuel. pour chaque entrée du body du menu, s'il s'agit d'un composant core.menu-dropdown récupère les entrées de menu-section associées | <ul><li>[x] done</li></ul> |
| findOne | recupère une entrée par id. pour chaque entrée du body du menu, s'il s'agit d'un composant core.menu-dropdown récupère les entrées de menu-section associées                                          | <ul><li>[x] done</li></ul> |

# New

## routes

find, count, findOne (slug)

## custom controllers

| nom     | description                                                                                                                                                                                                             | status                     |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| find    | récupère les news (entre 0 et 100 si les limites ne sont pas précisées) associées aux écoles et au namespace de l'utilisateur actuel (config.functions.schools et config.functions.namespace)                           | <ul><li>[x] done</li></ul> |
| findOne | récupère une new par slug, recherche d'abord dans les news globales (config.functions.schools.findOne) puis, si il n'y a pas de résultats, recherche dans la collection namespacée (config.functions.namespace.findOne) | <ul><li>[x] done</li></ul> |
| count   | somme le nb de news globales et namespacées associées à l'user actuel                                                                                                                                                   | <ul><li>[x] done</li></ul> |

# Profile

## routes

routes par défaut find, findOne et count

## custom services:

| nom            | description                                 | status                     |
| -------------- | ------------------------------------------- | -------------------------- |
| getUserProfile | récupère le profil de l'utilisateur courant | <ul><li>[x] done</li></ul> |

# programs

## routes

| méthode | route     | controller    | status                     |
| ------- | --------- | ------------- | -------------------------- |
| GET     | /programs | programs.find | <ul><li>[x] done</li></ul> |

## custom controllers

| nom  | description                                                                 | status                     |
| ---- | --------------------------------------------------------------------------- | -------------------------- |
| find | récupère les programmes du namespace actuel et appelle le service cleanData | <ul><li>[x] done</li></ul> |

## custom services

| nom                      | description                                                                | status                                                                                                                                                                                               |
| ------------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cleanData(data, profile) | retire les données dont le profil n'est pas celui de l'utilisateur courant | <ul><li>:x: ignored<br />:warning: à cause d'une erreur de syntaxe dans le code de la v3 ce service ne fait actuellement absolument rien, je ne vais donc pas l'implémenter pour l'instant</li></ul> |

# School

## routes

| méthode | route                 | controller          | status                     |
| ------- | --------------------- | ------------------- | -------------------------- |
| GET     | /schools              | school.find         | <ul><li>[x] done</li></ul> |
| GET     | /schools/count        | school.count        | <ul><li>[x] done</li></ul> |
| GET     | /schools/:id          | school.findOne      | <ul><li>[x] done</li></ul> |
| GET     | /schools/campus/:slug | school.findByCampus | <ul><li>[x] done</li></ul> |

## custom controllers

| nom                | description                                 | status                     |
| ------------------ | ------------------------------------------- | -------------------------- |
| findByCampus(slug) | récupère l'école associée au slug du campus | <ul><li>[x] done</li></ul> |

## custom models

lifecycles:

| nom                     | description                                                                       |
| ----------------------- | --------------------------------------------------------------------------------- |
| afterFindOne, afterFind | trie le contenu des cours (par nom puis par degreeLevel) et des campus (par noms) |

## custom services

| nom     | description                                                                                                                                     | status                     |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| find    | fix pour contourner le bug de la relation campus en passant par campus2. On remplace le contenu de campuses par campuses2 et on vire campuses2. | <ul><li>[x] done</li></ul> |
| findOne | idem                                                                                                                                            | <ul><li>[x] done</li></ul> |

# Search

## routes

| méthode | route   | controller  | status                     |
| ------- | ------- | ----------- | -------------------------- |
| GET     | /search | search.find | <ul><li>[x] done</li></ul> |

## custom controllers

| nom  | description                                                  | status                     |
| ---- | ------------------------------------------------------------ | -------------------------- |
| find | appelle la fonction findSingle de config.funcitons.namespace | <ul><li>[x] done</li></ul> |

# Sitemap

## routes

| méthode | route    | controller   | status                     |
| ------- | -------- | ------------ | -------------------------- |
| GET     | /sitemap | sitemap.find | <ul><li>[x] done</li></ul> |

## custom controllers

| nom  | description                                           | status                     |
| ---- | ----------------------------------------------------- | -------------------------- |
| find | génère le sitemap pour l'utilisateur (profil) courant | <ul><li>[x] done</li></ul> |

# Taxonomy

## routes

| méthode | route            | controller      | policies           | status                        |
| ------- | ---------------- | --------------- | ------------------ | ----------------------------- |
| GET     | /taxonomy        | taxonomy.find   |                    | <ul><li>[x] done</li></ul> |
| POST    | /taxonomy/update | taxonomy.update | has-security-token | <ul><li>[x] done</li></ul> |
| POST    | /taxonomy/sync   | taxonomy.sync   | has-security-token | <ul><li>:warning: déprécié</li></ul> |

## custom controllers

| nom           | description                                                                                                                                                                                                                                                       | status                        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| find          | grâce à functions/namespace.js, appelle la fonction taxonomy.find() appartenant. au namespace de l'utilisateur actuel (ex: si l'utilisateur actuel est esail, appelle esail-taxonomy.find), puis renvoie un objet "propre" pour la taxo (utilisable par le front) | <ul><li>[x] done</li></ul> |
| update(taxos) | crée les taxonomies (pour l'utilisateur courant) qui n'existent pas dans celles données par la requêtes et renvoie la liste des taxos                                                                                                                             | <ul><li>[x] done</li></ul> |
| sync(taxos)   | idem mais en plus supprime les taxos inutilisées                                                                                                                                                                                                                  | <ul><li>:warning: déprécié</li></ul> |

## custom services

| accessibilité | nom                  | description                                                                                                                                                 | status                        |
| ------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| private       | \_createObjectDepths | crée les imbrications de l'objet taxo à renvoyer au front                                                                                                   | <ul><li>[x] done</li></ul> |
| private       | \_getPath            | utilisé par \_flatten pour formater une chaîne                                                                                                              | <ul><li>[x] done</li></ul> |
| private       | \_flatten            | à partir d'un objet utilisable en front, crée un objet strapi (ne semble pas utilisé)                                                                       | <ul><li>[x] done</li></ul> |
| private       | \_flattenByKeys      | ???                                                                                                                                                         | <ul><li>[x] done</li></ul> |
| public        | transformToObject    | crée un object utilisable par le front                                                                                                                      | <ul><li>[x] done</li></ul> |
| public        | flattenObject        | appelle \_flatten                                                                                                                                           | <ul><li>[x] done</li></ul> |
| public        | checkDataFromUser    | permet d'identifié les données en plus ou en moins par rapport à ce qui est fourni en paramètre                                                             | <ul><li>[x] done</li></ul> |
| public        | saveItems            | ajoute des taxos dans strapi si une fonction create est définie. dans le service taxonomy du namespace de l'utilisateur (ce qui ne semble pas être le cas?) | <ul><li>[x] done</li></ul> |
| public        | deleteItems          | idem mais supprime au lieu d'ajouter                                                                                                                        | <ul><li>[x] done</li></ul> |

# titres (déprécié)

## routes

| méthode | route         | controller   | status             |
| ------- | ------------- | ------------ | ------------------ |
| GET     | /titres       | titres.find  | :warning: déprécié |
| GET     | /titres/count | titres.count | :warning: déprécié |

# version

## routes

| méthode | route    | controller   | policies                    | status                     |
| ------- | -------- | ------------ | --------------------------- | -------------------------- |
| GET     | /version | version.find | policies: is-allowed-origin | <ul><li>[x] done</li></ul> |

## custom controllers

| nom  | description                                          | status                     |
| ---- | ---------------------------------------------------- | -------------------------- |
| find | récupère la version du projet depuis le package.json | <ul><li>[x] done</li></ul> |
