<!-- Button.vue (composant de bouton réutilisable) -->

<template>
  <button class="button">
    <slot>Bonjour</slot>

  </button>
</template>
  
<script>
export default {
  name: "Btn"
}
</script>
  
<style scoped>
.button {
  background: firebrick;
}
</style>
  