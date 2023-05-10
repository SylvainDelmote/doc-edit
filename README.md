# doc-edit

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

TODO :

- barre d'outils/liste de widgets/autre...  sur la gauche
- menu pour la mise en forme sur le dessus
- editeur sur la droite
- tester l'ajout de zone de saisie
  -> ok si dans un composant

Fonctions de l'editeur :

 - copier/coller du texte (depuis word, html, pdf)
 - inserer zone de saisie avec une taille fixe
 - mise en forme : gras, souligné, italique
 - mise en forme: ajouter un style perso
 - mise en forme : changer la police (taille et type)
 - note de base de page
 - pied de page
 - inserer une image
 - paragraphe optionnel (case a cocher)
 - champ de donnée de la BDD
 - saut de page

3 etats : 
 - editeur de document
 - saisie de document : passer le composant vue-document-editor avec :editable="false"
 - affichage pdf du document

-> sauver le contenu de l'editeur au format html en bdd pour faire un pdf depuis un webservice