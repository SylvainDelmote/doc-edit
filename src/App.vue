<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink><br/>
        <RouterLink to="/ck">CK Editor</RouterLink><br/>
        <RouterLink to="/tiptap">Tiptap</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
