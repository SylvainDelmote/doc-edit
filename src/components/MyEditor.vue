
<script setup>
// IMPORT
import VueDocumentEditor from 'vue-document-editor'
import VueFileToolbarMenu from 'vue-file-toolbar-menu';
import {ref, computed, onMounted} from 'vue'

// VARIABLES
const editableBlock = `<div class='editableBlock' contenteditable='true'> <br> <h3> Editable Block </h3> Please Edith me </div>`
const  content= ref( ["<div> Coller du texte ici </div>"+editableBlock] )
const  documentIsEditable = ref(true)

// FUNCTIONS
const menu =  computed( ()=> {
  return   [
    { text: "Nouveau", title: "Nouveau Document", icon: "description", click: () => { if(confirm("Créer un nouveau document ?")){ content.value = [""]; } } },
    { text:  documentIsEditable.value ? "Verrouiller" :"Deverrouiller", title: "Verrou document" , icon:  documentIsEditable.value ? "lock": "lock_open", click: () => { documentIsEditable.value = !documentIsEditable.value ; console.log(documentIsEditable.value) } },
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
  max-width: 50vw;
}
.bar {
  position: sticky;
  left: 0;
  top: 0;
  width: calc(50vw );
  z-index: 1000;
  background: rgba(248, 249, 250, 0.8);
  border-bottom: solid 1px rgb(248, 249, 250);
}


    
</style>