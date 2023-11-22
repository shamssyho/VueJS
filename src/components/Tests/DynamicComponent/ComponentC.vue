<template>
    <h3>Component C</h3>
    <input type="text" v-model="name">
</template>

<script lang="ts">
import About from '../../../views/About.vue'
export default {
  components: { About },
    name : "ComponentC",
    data (){
        return{
            name : ""
        }
    }

}
</script>

<style>

</style>