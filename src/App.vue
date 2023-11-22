<script setup>
</script>

<template>
  <nav>
    <ul>
        <li>
            <router-link to="/home">Home</router-link>
        </li>
        <li>
            <router-link to="/about">About</router-link>
        </li>
        <li>
            <router-link to="/contact">Contact</router-link>
        </li>
        <li>
            <router-link to="/tests">Tests</router-link>
        </li>

    </ul>
  </nav>
  <router-view/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
