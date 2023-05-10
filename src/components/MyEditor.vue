
<script setup>
// IMPORT
import VueDocumentEditor from 'vue-document-editor'
import VueFileToolbarMenu from 'vue-file-toolbar-menu';
import {ref, computed, onMounted} from 'vue'

// VARIABLES
const editableBlock = `<div class='editableBlock' contenteditable='true'> <br> <h3> Editable Block </h3> Please Edith me </div>`
const editableSpan = `<span class='editableSpan' contenteditable='true'> <br>   Span Edith me </span>`

const  content= ref( ["<div> Coller du texte ici </div>"] )
const  documentIsEditable = ref(true)

// FUNCTIONS

const addEditableElement =(el)=>{
  // content.value = [content.value[0]+el]  << Ajoute l'element dans l'Array mais toujours à la fin.
  const sel = window.getSelection(); // Recupere la selection du curseur (carret). type none si pas de selection.
  const range = sel.getRangeAt(0);  // Recupere les coordonnées de départ de la selection. Exception si sel est vide
  const newNode = document.createElement("span");  // Cree un Node vide
  newNode.innerHTML = el  // Ajoute le contenu HTML comportant une balise contenteditable
  range.insertNode(newNode);  // Insere le Node à l'emplacement de la selection dans le DOM
}

const turnIntoEditable = () =>{
  const sel = window.getSelection(); // Recupere la selection du curseur (carret). type none si pas de selection.
  const range = sel.getRangeAt(0);  // Recupere les coordonnées de départ de la selection. Exception si sel est vide
  const rangeContent = range.extractContents(); // Deplace  le contenu du "range" vers un DocumentFragment.
  const span =  document.createElement("span") // Créer un span 
  span.setAttribute("contenteditable", "true") // Rend le contenu du span Editable 
  span.appendChild(rangeContent)   // Rempli le span avec le contenu du DocumentFragement.
  range.insertNode(span)  // Insere ce span dans le range (le contenu initial  ayant été déplacé avec extractContents()) 


  // const newParent = document.createElement("h1");
// range.selectNode(document.querySelector(".header-text"));
//  range.surroundContents(newParent);
}


const menu =  computed( ()=> {
  return   [
    { text: "Nouveau", title: "Nouveau Document", icon: "description", click: () => { if(confirm("Créer un nouveau document ?")){ content.value = [""]; } } },
    { text:  documentIsEditable.value ? "Verrouiller" :"Deverrouiller", title: "Verrou document" , icon:  documentIsEditable.value ? "lock": "lock_open", click: () => { documentIsEditable.value = !documentIsEditable.value ;  } },
   
    { is: "separator" },
    { text: "Add edit block", type: "compact", title: "Ajout un bloc editable à l'emplacement du curseur", icon: "add", disabled: documentIsEditable.value ?  false : true,  click: () => { addEditableElement(editableBlock)  } },
    { text: "Add edit line", type: "compact", title: "Ajout un span editable à l'emplacement du curseur", icon: "add",  disabled: documentIsEditable.value ?  false : true, click: () => { addEditableElement(editableSpan)  } },
    { text: "Turn into Edit", type: "compact", title: "Rendre la selection editable", icon: "select_all",  disabled: documentIsEditable.value ?  false : true, click: () => { turnIntoEditable()  } },

    { is: "separator" },

  ]
} )




  
</script>

<template>
  <div class="main" >
    
    <vue-file-toolbar-menu 
      :content="menu" 
      class="bar"
    />

    <vue-document-editor 
      v-model:content= content
      :editable= "documentIsEditable"      
    /> 
  </div>


</template>





<style>
.main {
  width: fit-content;
  min-width: 100%;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
}
.bar {
  position: sticky;
  left: 0;
  top: 0;
  width: 50vw;
  min-width: 100%;
  margin-bottom: 1rem;
  z-index: 1000;
  background: rgba(197, 200, 202, 0.8);
  border-bottom: solid 1px rgb(248, 249, 250);
}


    
</style>