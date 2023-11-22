<template>
    <h2>
        Classe conditionnelle
    </h2>
    <div>
      <!-- Utilisation de la directive v-bind:class pour appliquer la classe conditionnelle -->
      <input
        type="checkbox"
        v-model="isChecked"
        @change="updateColor"
      />
      <label for="checkbox">Cochez pour changer la couleur de l'input</label>
  
      <input
        type="text"
        :class="{ 'red-background': isChecked }"
      />
    </div>
  </template>
  
  <script>
  export default {
    name :"ClasseConditionnelle",
    data() {
      return {
        isChecked: false
      };
    },
    methods: {
      updateColor() {
        // La méthode est appelée lorsque l'état de la case à cocher change
      }
    }
  };
  </script>
  
  <style>
  /* Définition du style de la classe "red-background" */
  .red-background {
    background-color: red;
  }
  </style>
  