<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <nav>
      <ul>
        <li> <RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/ck">CK Editor</RouterLink></li>
        <li><RouterLink to="/tiptap">Tiptap</RouterLink></li>
        <li><RouterLink to="/demo">Demo</RouterLink></li>
      </ul>
    </nav>

  <main>
    <RouterView />
  </main>
</div>
</template>

<style>
.container{
  display: flex;
  justify-content: center;
  padding: 2rem;
}

nav{
  min-width: 10rem;
}
li {
  list-style: none;
}
main{
  width: 50vw;
  overflow: scroll;
}

</style>
