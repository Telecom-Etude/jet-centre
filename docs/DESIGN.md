# Logique métier

## Données

On sépare les données selon 4 types :

-   données statiques
-   données semi-statiques
-   données semi-dynamiques
-   données dynamiques

### Données statiques

#### Création et mise à jour des données

Ces données sont _immuables_ au sein de l'outil, c'est à dire qu'elles ont vocation à être modifiée "manuellement" dans la base de données.  
Ces données sont donc représentées uniquement sous la forme de tables (qui peuvent tout de même être filtrées et triées), qui reflètent directement la base de données.

#### Type de données

Ces données ont vocation à être disponibles dans toute l'application. Il s'agit principalement de configurations et de données a priori immuables au cours du mandat.

#### Exemples

-   Administrateurs (mail, rôles)
-   Identification de la structure (SIREN, SIRET, adresse)

### Données semi-statiques

#### Création et mise à jour des données

Ces données évoluent au cours du mandat, mais ne sont découlent pas d'autres données (mis à part les données statiques et l'apport extérieur).
Elles sont représentées sous forme de tables, ou sous une forme plus appropriée pour chaque donnée. Elles sont principalement créées via des interfaces dédiées (ex. page de création d'une nouvelle étude) et n'ont pas vocation à être mises à jour via un affichage par tables.

#### Type de données

Ces données ont vocation à être créées régulièrement, rarement mises à jour.
Il s'agit du point d'entrée pour les données dynamiques.

#### Exemple

Une étude (avec numéro d'étude, informations client)

### Données semi-dynamiques

#### Création et mise à jour des données

Ces données sont rarement créées manuellement, elle découlent de la création des données semi-statiques et de l'éventuelle production de document extérieurs à l'outil. Le mode de mise à jour est statique et majoritairement immuable. Un évènement donné entraîne la production de certaines données et actions secondaires.

#### Type de données

Ces données ont vocation à être créées régulièrement de manière presque exclusivement automatique via des évènements internes ou externes à l'outil, selon des règles définies à l'avance.

#### Exemple

Les données créées au cours d'une étude (PVRi, PVRf, relance client, notes de réunion, etc...)
