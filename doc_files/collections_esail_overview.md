# esail-actualites

## routes

| méthode | route             | controller              | status                     |
| ------- | ----------------- | ----------------------- | -------------------------- |
| GET     | /esail-actualites | esail-actualites.find   | <ul><li>[x] done</li></ul> |
| PUT     | /esail-actualites | esail-actualites.update | <ul><li>[x] done</li></ul> |
| DELETE  | /esail-actualites | esail-actualites.delete | <ul><li>[x] done</li></ul> |

# esail-agenda

## routes

| méthode | route         | controller        | status                     |
| ------- | ------------- | ----------------- | -------------------------- |
| GET     | /esail-agenda | esail-agenda.find | <ul><li>[x] done</li></ul> |

# esail-article

## routes

| méthode | route                 | controller            | policies        | status                     |
| ------- | --------------------- | --------------------- | --------------- | -------------------------- |
| GET     | /esail-articles       | esail-article.find    | isAuthenticated | <ul><li>[x] done</li></ul> |
| GET     | /esail-articles/count | esail-article.count   | isAuthenticated | <ul><li>[x] done</li></ul> |
| GET     | /esail-articles/:slug | esail-article.findOne | isAuthenticated | <ul><li>[x] done</li></ul> |

## custom controllers

| nom           | description                                                                                        | status                     |
| ------------- | -------------------------------------------------------------------------------------------------- | -------------------------- |
| findOne(slug) | récupère l'article correspondant au slug associé (et enlève les champs privés avec sanitizeEntity) | <ul><li>[x] done</li></ul> |

## custom services

| nom                       | description                                                                                       | status                     |
| ------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------- |
| findone(params, populate) | fait une requête à la base de données pour récupérer l'article avec les paramètres correspondants | <ul><li>[x] done</li></ul> |

# esail-blogs

## routes

| méthode | route        | controller         | status                     |
| ------- | ------------ | ------------------ | -------------------------- |
| GET     | /esail-blogs | esail-blogs.find   | <ul><li>[x] done</li></ul> |
| PUT     | /esail-blogs | esail-blogs.update | <ul><li>[x] done</li></ul> |
| DELETE  | /esail-blogs | esail-blogs.delete | <ul><li>[x] done</li></ul> |

# esail-campus-info

## routes

| méthode | route                     | controller                | status                        |
| ------- | ------------------------- | ------------------------- | ----------------------------- |
| GET     | /esail-campus-infos       | esail-campus-info.find    | <ul><li>[x] done</li></ul> |
| GET     | /esail-campus-infos/count | esail-campus-info.count   | <ul><li>[x] done</li></ul>    |
| GET     | /esail-campus-infos/:id   | esail-campus-info.findOne | <ul><li>[x] done</li></ul>    |
| POST    | /esail-campus-infos       | esail-campus-info.create  | <ul><li>[x] done</li></ul>    |
| PUT     | /esail-campus-infos/:id   | esail-campus-info.update  | <ul><li>[x] done</li></ul>    |
| DELETE  | /esail-campus-infos/:id   | esail-campus-info.delete  | <ul><li>[x] done</li></ul>    |

## custom controllers

| nom  | description                                                                                                                                                                                                                                  | status                        |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| find | renvoie le premier campus-info trouvé. Si son attribut "content" contient un composant course.programs-category, et que le compo contient des cours, on peuple certains champs de ce cours (on contourne la limite d'imbrications de strapi) | <ul><li>[x] done</li></ul> |

# esail-cat-new

## routes

| méthode | route                 | controller            | status                       |
| ------- | --------------------- | --------------------- | ---------------------------- |
| GET     | /esail-cat-news       | esail-cat-new.find    | <ul><li>[x] done</li></ul>   |
| GET     | /esail-cat-news/count | esail-cat-new.count   | <ul><li>:x: unused</li></ul> |
| GET     | /esail-cat-news/:slug | esail-cat-new.findOne | <ul><li>[x] done</li></ul>   |
| POST    | /esail-cat-news       | esail-cat-new.create  | <ul><li>:x: unused</li></ul> |
| PUT     | /esail-cat-news/:id   | esail-cat-new.update  | <ul><li>:x: unused</li></ul> |
| DELETE  | /esail-cat-news/:id   | esail-cat-new.delete  | <ul><li>:x: unused</li></ul> |

## custom controllers

| nom     | description                                                                | status                     |
| ------- | -------------------------------------------------------------------------- | -------------------------- |
| findOne | renvoie une catégorie de news selon son slug (en faisant appel au service) | <ul><li>[x] done</li></ul> |

## custom services

| nom     | description                                      | status                     |
| ------- | ------------------------------------------------ | -------------------------- |
| findOne | renvoie une catégorie de news selon un paramètre | <ul><li>[x] done</li></ul> |

# esail-crm-landing

## routes

| méthode | route                     | controller                | status                     |
| ------- | ------------------------- | ------------------------- | -------------------------- |
| GET     | /esail-crm-landings/:slug | esail-crm-landing.findOne | <ul><li>[x] done</li></ul> |

# esail-crm-link

## custom models

lifecycles:

| nom                        | description                                                     |
| -------------------------- | --------------------------------------------------------------- |
| beforeUpdate, beforeCreate | update le booléen `<model>Empty` (ex: coursesEmpty) du crm-link |

# esail-landing

## custom models

lifecycles:

| nom                        | description                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------- |
| beforeUpdate, beforeCreate | prend la liste des "children" (numéros représentant les pages articles) et les lie avec "," |
| afterFindOne, afterUpdate  | trie les "children" en fonction du champ "childrenOrder"                                    |

# esail-landing-portfolios

## routes

| méthode | route                     | controller                      | status                       |
| ------- | ------------------------- | ------------------------------- | ---------------------------- |
| GET     | /esail-landing-portfolios | esail-landing-portfolios.find   | <ul><li>[x] done</li></ul>   |
| PUT     | /esail-landing-portfolios | esail-landing-portfolios.update | <ul><li>:x: unused</li></ul> |
| DELETE  | /esail-landing-portfolios | esail-landing-portfolios.delete | <ul><li>:x: unused</li></ul> |

# esail-new

## routes

| méthode | route             | controller         | status                     |
| ------- | ----------------- | ------------------ | -------------------------- |
| GET     | /esail-news       | esail-new.find     | <ul><li>[x] done</li></ul> |
| GET     | /esail-blog       | esail-new.findBlog | <ul><li>[x] done</li></ul> |
| GET     | /esail-news/count | esail-new.count    | <ul><li>[x] done</li></ul> |
| GET     | /esail-news/:slug | esail-new.findOne  | <ul><li>[x] done</li></ul> |

## custom controllers

| nom      | description                                                    | status                     |
| -------- | -------------------------------------------------------------- | -------------------------- |
| findOne  | récupère une news grâce à son slug (en passant par le service) | <ul><li>[x] done</li></ul> |
| find     | récupère toutes les news qui n'ont pas la catégorie blog       | <ul><li>[x] done</li></ul> |
| findBlog | récupère toutes les news qui ont la catégorie blog             | <ul><li>[x] done</li></ul> |

## custom services

| nom     | description       | status                                 |
| ------- | ----------------- | -------------------------------------- |
| findOne | récupère une news | <ul><li>:x: useless thing...</li></ul> |

# esail-portfolios

## routes

| méthode | route                   | controller               | status                     |
| ------- | ----------------------- | ------------------------ | -------------------------- |
| GET     | /esail-portfolios       | esail-portfolios.find    | <ul><li>[x] done</li></ul> |
| GET     | /esail-portfolios/:slug | esail-portfolios.findOne | <ul><li>[x] done</li></ul> |

# esail-programs

# routes

| méthode | route           | controller          | status                     |
| ------- | --------------- | ------------------- | -------------------------- |
| GET     | /esail-programs | esail-programs.find | <ul><li>[x] done</li></ul> |

## custom controllers

| nom  | description                                                                                                                                                                                   | status                                 |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| find | récupère un programme. Si son attribut "content" contient un composant course.programs-category, la fonction remplit certains de ses champs (on contourne la limite d'imbrications de strapi) | <ul><li>:warning: deprecated</li></ul> |

## custom models

lifecycles:

| nom                        | description                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------------------- |
| beforeUpdate, beforeCreate | prend la liste des "children" (numéros représentant les articles associés à la page) et les lie avec "," |
| afterFindOne, afterUpdate  | trie les "children" en fonction du champ "childrenOrder"                                                 |

# esail-search

## routes

| méthode | route         | controller        | status                     |
| ------- | ------------- | ----------------- | -------------------------- |
| GET     | /esail-search | esail-search.find | <ul><li>[x] done</li></ul> |

# esail-taxonomy

## routes

| méthode | route             | controller          | status                        |
| ------- | ----------------- | ------------------- | ----------------------------- |
| GET     | /esail-taxonomies | esail-taxonomy.find | <ul><li>[x] done</li></ul> |

# esail-team

## routes

| méthode | route              | controller         | status                        |
| ------- | ------------------ | ------------------ | ----------------------------- |
| GET     | /esail-teams       | esail-team.find    | <ul><li>[x] done</li></ul> |
| GET     | /esail-teams/count | esail-team.count   | <ul><li>[x] done</li></ul> |
| GET     | /esail-teams/:id   | esail-team.findOne | <ul><li>[x] done</li></ul> |
| POST    | /esail-teams       | esail-team.create  | <ul><li>[x] done</li></ul> |
| PUT     | /esail-teams/:id   | esail-team.update  | <ul><li>[x] done</li></ul> |
| DELETE  | /esail-teams/:id   | esail-team.delete  | <ul><li>[x] done</li></ul> |
