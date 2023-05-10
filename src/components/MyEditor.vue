
<script setup>
// IMPORT
import VueDocumentEditor from 'vue-document-editor'
import {ref} from 'vue'

// VARIABLES
const  content= ref( [" <h2> Je suis une zone éditable </h2> Coller du Texte ici"])
   


  
</script>

<template>
  <div class="container" >
    <vue-document-editor v-model:content="content" /> 
  </div>
</template>


<style scoped>
.container {
   
  border: 1px solid black;
}
</style>