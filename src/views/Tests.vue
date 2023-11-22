<template>
  <image-zoom />
  <input-eventkeyboard />
  <v-once />
  <classe-conditionelle />
  <propriete name="Propriete" :age=13 bind="No binding" />
  <propriete :name="name" :age="age" bind="binding" />
  <div>
    <button @click="showPopup = true">Show Popup</button>
    <Popup v-show="showPopup" @close="showPopup = false" />
  </div>
  <Btn>
    <h2>Slot</h2>
  </Btn>
  <div>
    <h2>SlotCard Component</h2>

    <card-slot>
      <template v-slot:header>
        <h3>Header</h3>
      </template>
      <template v-slot:default>
        <img class="image" src="https://www.la-spa.fr/app/assets-spa/uploads/2023/07/prendre-soin_duree-vie-chat.jpg" />
      </template>
      <template v-slot:footer>
        <h3>Footer</h3>
      </template>
    </card-slot>
  </div>
  <div>
    <h2>Slot props</h2>

    <slot-props>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }} {{ slotProps.lastName }}
      </template>
    </slot-props>
    -------------------------
    <slot-props>
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }}
      </template>
    </slot-props>
  </div>

  <div>
    <h2>Dynamic components</h2>
    <button @click="activeTab = 'ComponentA'">Tab A</button>
    <button @click="activeTab = 'ComponentB'">Tab B</button>
    <button @click="activeTab = 'ComponentC'">Tab C</button>
    <!-- Methode 1 : -->
    <keep-alive>
      <component :is="activeTab" />
    </keep-alive>
    <!-- Methode 2 -->
    <!-- <component-a v-if="activeTab === 'ComponentA'" />
    <component-b v-if="activeTab === 'ComponentB'" />
    <component-c v-if="activeTab === 'ComponentC'" /> -->
  </div>
</template>

<script lang="ts">
import ImageZoom from '../components/Tests/ImageZoom.vue';
import InputEventkeyboard from '../components/Tests/InputEventkeyboard.vue';
import VOnce from '../components/Tests/VOnce.vue';
import ClasseConditionelle from '../components/Tests/ClasseConditionelle.vue';
import Propriete from '../components/Tests/Propriete.vue';
import Popup from '../components/Tests/Popup.vue';
import Btn from '../components/Btn.vue';
import CardSlot from '../components/Tests/CardSlot.vue';
import SlotProps from '../components/Tests/SlotProps.vue';
import ComponentA from '../components/Tests/DynamicComponent/ComponentA.vue';
import ComponentB from '../components/Tests/DynamicComponent/ComponentB.vue';
import ComponentC from '../components/Tests/DynamicComponent/ComponentC.vue';


export default {
  data() {
    return {
      prenom: "",
      name: "Shams",
      age: 23,
      binding: "with bind",
      showPopup: false,
      activeTab: "ComponentA",
    }
  },
  components: {
    ImageZoom,
    InputEventkeyboard,
    VOnce,
    ClasseConditionelle,
    Propriete,
    Popup,
    Btn,
    CardSlot,
    SlotProps,
    ComponentA,
    ComponentB,
    ComponentC,

  },

}
</script>
<style scoped>
.image {
  max-width: 100px;
}
</style>