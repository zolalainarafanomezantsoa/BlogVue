
<template>
  <div>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/blog">Blog</RouterLink>
      <RouterView />
  </div>
</template>
<script>
import {
RouterLink,
RouterView,
} from 'vue-router';

export default {
      
}
</script>
<style scoped>
  .router-link-active{
      border : 2px solid rgb(19, 9, 9);
  }
</style> 

<!-- <style scoped> -->
<!-- header { -->
  <!-- line-height: 1.5; -->
<!-- }

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
