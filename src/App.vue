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
        <li><RouterLink to="/myeditor"> My Editor </RouterLink></li>

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
  justify-content:center;
  padding: 2rem;
}
nav{
  min-width: 10rem;
  padding: 3 rem;
 
}
li {
  list-style: none;
  margin: 1rem;
}
main{
  width: 70vw;
  min-width: 1000px;
  overflow: scroll;
}

@media (max-width: 1024px) {
  .container {
    flex-direction: column;
  }
  ul{
    display: flex;
  }

}

</style>
