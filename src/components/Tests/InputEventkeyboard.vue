<template>
    <h2>
        Gestion evenements clavier
    </h2>
      <div>
        <input type="text" v-model="texte" @keyup.enter="maj" autofocus>
        <input type="button" value="Majuscule" @click="maj">
    </div>
</template>

<script lang="ts">
export default {
    name: "InputEventkeyboard",
    data(){
        return {
            texte : '',

        }
    },
    methods : {
        maj(){
            this.texte = this.texte.toUpperCase();
        }
    }
}
</script>

<style>

</style>