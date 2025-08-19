# Logique métier

## Données

On distingue 4 catégories principales de données :

1. données statiques
2. données semi-statiques
3. données semi-dynamiques
4. données dynamiques

Cette séparation en catégories a pour but d'assurer une certaine cohérence de la manipulation des au sein de jet-centre.

### Données statiques

#### Création et mise à jour des données

Ces données sont _immuables_ au sein de l'outil, c'est à dire qu'elles ont vocation à être modifiées "manuellement" dans la base de données.  
Ces données sont donc représentées uniquement sous la forme de tables de données.  
Ces données reflètent directement (one to one) la base de données.

#### Type de données

Ces données ont vocation à être disponibles dans toute l'application.  
Il s'agit principalement de configurations et de données a priori immuables au cours d'un mandat.

#### Exemples

- Administrateurs (mail, rôles)
- Identification de la structure (SIREN, SIRET, adresse)

#### Stratégie de mise en cache

Cache avec une grande durée de vie (plusieurs jours).
Pas de mécanisme d'invalidation nécessaire.

### Données semi-statiques

#### Création et mise à jour des données

Ces données évoluent au cours du mandat, mais ne sont découlent pas d'autres données (mis à part les données statiques et l'apport extérieur).
Elles sont représentées sous forme de tables, ou sous une forme plus appropriée pour chaque donnée. Elles sont principalement créées via des interfaces dédiées (ex. page de création d'une nouvelle étude) et n'ont pas vocation à être mises à jour via un affichage par tables.

#### Type de données

Ces données ont vocation à être créées régulièrement, rarement mises à jour.
Il s'agit du point d'entrée pour les données dynamiques.

#### Exemple

- Une étude (avec numéro d'étude, informations client)
- Un client
- Un intervenant

#### Stratégie de mise en cache

Cache avec une durée de vie plutôt longue (quelques jours).
Mécanisme d'invalidation nécessaire.

### Données semi-dynamiques

#### Création et mise à jour des données

Ces données sont rarement créées manuellement, elle découlent de la création des données semi-statiques et de l'éventuelle production de document extérieurs à l'outil. Le mode de mise à jour est statique et majoritairement immuable. Un évènement donné entraîne la production de certaines données et actions secondaires.

#### Type de données

Ces données ont vocation à être créées régulièrement de manière presque exclusivement automatique via des évènements internes ou externes à l'outil, selon des règles définies à l'avance.

#### Exemple

- Les données créées au cours d'une étude
    - PVRi
    - PVRf
    - Relance client
    - Notes de réunion
    - ...

#### Stratégie de mise en cache

Cache avec une durée de vie courte (quelques minutes à quelques heures).
Mécanisme d'invalidation nécessaire.

### Données dynamiques

#### Création et mise à jour des données

Ces données sont définies manuellement, mais ne sont jamais crées et mises à jour manuellement. Elle découlent exclusivement des autres données présentes dans l'outil.

#### Type de données

Ces données ont vocation à servir au contrôle (humain ou automatisé) de l'état de santé de la structure, ainsi qu'aux audits annuels.

#### Exemple

- KPIs
- Chiffre d'affaire signé, facturé, etc...
- Charge des administrateurs
- Nombre d'intervenants
- ...

#### Stratégie de mise en cache

Cache avec une durée de vie courte (quelques minutes à quelques heures).
Mécanisme d'invalidation nécessaire.

## Relations entre ces catégories

Les données d'une catégorie dépendent (potentiellement) de données de catégories plus faibles.  
En revanche elles ne peuvent pas dépendre de données

La distinction semi-statique/ semi-dynamique peut sembler obscure. Pourquoi ne pas se contenter d'une unique catégorie regroupant ces deux catégories ? L'idée derrière cette distinction est de représenter la limite de l'automatisation proposée par jet-centre. La création d'une étude avec son numéro d'étude et ses chefs de projets attribués pourrait être réalisée automatiquement aux suites d'un démarcharge par exemple, mais nous choisissons de ne pas automatiser cette étape pour le moment. C'est pourquoi cette donnée reste semi-statique. En revanche, la génération de notes de réunions est systématique et ne donne a priori pas lieu à débat, c'est pourquoi ce genre de données est semi-dynamique.

La question du stockage est importante : quoi stocker, et où?

- données statiques : stockage de la valeur dans la bdd relationnelle (postgres), variables d'environnement, constantes dans le code
- données semi-statiques : stockage de la valeur dans la bdd relationnelle (postgres)
- données semi-dynamiques : stockage de la valeur dans la bdd relationnelle (postgres)
- données dynamiques : stockage de la méthode d'obtention (fonction d'autres données) dans la bdd nosql, stockage de la valeur en cache uniquement
