<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <ul>
          <li> <RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/ck">CK Editor</RouterLink></li>
          <li><RouterLink to="/tiptap">Tiptap</RouterLink></li>
          <li><RouterLink to="/demo">Demo</RouterLink></li>
      </ul>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
