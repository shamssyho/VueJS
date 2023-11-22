<template>
    <h2>
        v-once
    </h2>
    <p>
        un élément soit rendu qu’une fois et les mises à jours ne soient pas affichés dans la page
    </p>
  <div v-once>
    {{ nombre }}
  </div>
  <div>
    {{ nombre }}
  </div>
  <button @click="plusUn"> Incrémenter</button>
</template>

<script lang="ts">
export default {
    name : "VOnce",
    data (){
        return {
            nombre : 15,
        }
    },
    methods : {
        plusUn(){
            this.nombre +=1;
        }
    }
}
</script>

<style>

</style>