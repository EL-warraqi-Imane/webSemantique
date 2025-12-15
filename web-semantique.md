# Le Web Sémantique
### Définition, Origine, Objectifs et Technologies

<br>

**1. Comprendre l’évolution des données et de leur interconnexion**

<br>

**Présenté par :**
* Abdellah BOULIDAM
* Youness BOUMLIK
* Oumaima EL ALAMI
* Zakaria EL HOUARI
* Imane EL WARRAQI

**Encadré par :** Mme Nidal LAMGHARI

---

## 1. Introduction générale

Le **Web sémantique** est une extension du Web actuel qui rend les informations compréhensibles par les machines grâce à des **métadonnées**.

**Points clés :**
*   **Compréhension par la machine :** Les ordinateurs ne font pas que "lire" les données, ils les comprennent.
*   **Interconnexion :** Relier les données par leur sens et non juste par des liens.

---

## 2. Définition et comparaison

| **Web Classique** (Web de Documents) | **Web Sémantique** (Web de Données) |
| :--- | :--- |
| Basé sur des liens hypertextes | Basé sur des relations sémantiques |
| Conçu pour les **humains** | Exploitable par les **machines** |
| Liens entre pages | Liens entre concepts et données |
| "Le chat est sur le lit" (Texte) | `<Chat> <estSur> <Lit>` (Triplet) |

---

## 3. Origine et évolution

### L'évolution du Web
*   **Web 1.0 (Statique) :** Consultation de documents HTML simples.
*   **Web 2.0 (Social) :** Interaction, réseaux sociaux, contenu généré par l'utilisateur.
*   **Web 3.0 (Sémantique) :** Données liées, structurées et intelligentes.

### La vision de Tim Berners-Lee
Transformer le Web en une **base de données globale** où les agents logiciels peuvent "raisonner" et effectuer des tâches complexes pour les humains.

---

## 4. Pourquoi le Web sémantique ?
### Les problèmes du Web actuel

1.  **Recherche par mots-clés limitées :**
    *   Ambiguïté (ex: "Jaguar" = animal ou voiture ?).
    *   Manque de précision dans les résultats.
2.  **Données en silos :**
    *   Information dispersée et non structurée.
    *   Difficile de croiser automatiquement des sources différentes.
3.  **Aveuglement machine :**
    *   L'ordinateur affiche le contenu mais ignore sa signification réelle.

---

## 4. Pourquoi le Web sémantique ?
### Besoins et Objectifs

*   **Interopérabilité :** Permettre aux différents systèmes (médicaux, bancaires, etc.) de partager et réutiliser les données sans friction.
*   **Automatisation :** Permettre aux agents logiciels d'exécuter des tâches complexes (ex: réserver un vol et un hôtel compatibles avec mon agenda).
*   **Précision :** Fournir des réponses exactes basées sur le contexte plutôt que des listes de liens.

---

## 5. Principes et concepts clés

Le Web sémantique repose sur quatre piliers conceptuels :

1.  **Métadonnées :** Données décrivant d'autres données pour leur donner du sens (étiquetage).
2.  **Relations Sémantiques :** Liens logiques explicites entre entités (ex: *estUn*, *aPourAuteur*, *situeÀ*).
3.  **Ontologies :** Vocabulaires partagés et hiérarchisés définissant les concepts d'un domaine et leurs relations.
4.  **Raisonnement :** Capacité de la machine à déduire de nouvelles informations (Inférence : Si A=B et B=C, alors A=C).

---

## 6. Technologies associées

L'architecture technique repose sur des standards du W3C :

### 1. RDF (Resource Description Framework)
*   Modèle de base pour l'échange de données.
*   Structure en **Triplets** : *Sujet - Prédicat - Objet*.
*   *Exemple :* `<Film> <aPourRéalisateur> <Christopher Nolan>`.

### 2. SPARQL
*   Langage de requête standard pour interroger les bases de données RDF.
*   L'équivalent du SQL pour le Web Sémantique.

### 3. OWL (Web Ontology Language)
*   Langage pour définir des ontologies complexes.
*   Permet de décrire les propriétés, les classes et les contraintes logiques.

---

## 7. Applications et cas d’usage

*   **Santé :**
    *   Interopérabilité des dossiers médicaux électroniques.
    *   Systèmes d'aide au diagnostic basés sur des bases de connaissances médicales.
*   **Google Knowledge Graph :**
    *   Affichage d'encarts d'information structurés (à droite des résultats de recherche).
    *   Réponses directes aux questions factuelles.
*   **E-Commerce :**
    *   Comparateurs de prix plus précis.
    *   Recommandations contextuelles basées sur les caractéristiques produits.

---

## 7. Applications : Exemple détaillé

### Web des données ouvertes (Linked Open Data - LOD)

*   **Le concept :** Publier des données structurées sous licence libre et les interconnecter.
*   **Exemples majeurs :**
    *   **DBpedia / Wikidata :** Versions structurées et sémantiques de Wikipédia.
*   **Innovation :**
    *   Permet de créer des "Mashups" (applications combinées).
    *   *Exemple :* Une app combinant météo, horaires de transport en temps réel et événements culturels sans créer sa propre base de données.

---

## 8. Limites et défis

Malgré son potentiel, le Web sémantique fait face à des obstacles :

1.  **Complexité technique :** Créer et maintenir des ontologies (OWL) est une tâche difficile et coûteuse.
2.  **Adoption lente :** Manque d'experts qualifiés et investissement initial important pour les entreprises.
3.  **Qualité des données :** Difficulté de gérer la cohérence, la mise à jour et la véracité des données provenant de sources multiples.
4.  **Performance :** Le raisonnement logique sur des milliards de triplets nécessite une puissance de calcul considérable.

---

## 9. Perspectives et Conclusion

### L'avenir du Web Sémantique

*   **Web Autonome :** Vers des agents logiciels personnels capables d'effectuer des tâches quotidiennes sans intervention humaine.
*   **Convergence IA :** Le Web Sémantique fournit la "connaissance" structurée nécessaire pour alimenter les algorithmes de Deep Learning.
*   **Web 4.0 (Internet des Objets) :** Connecter non seulement les données, mais aussi les objets physiques de manière intelligente.

### Conclusion
Le Web sémantique rend le Web **compréhensible, exploitable et intelligent**, transformant une bibliothèque de documents en une base de connaissances mondiale.

---

# Merci de votre attention

**Avez-vous des questions ?**