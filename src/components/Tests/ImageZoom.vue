<template>
    <div>
        <h2>
            Image zoom
        </h2>
    </div>
<div>

    <input type="radio" v-model="choix" value="click" checked><label>Click</label>
    <input type="radio" v-model="choix" value="dblclick"><label>Double click</label>
</div>
    <img src="https://www.la-spa.fr/app/assets-spa/uploads/2023/07/prendre-soin_duree-vie-chat.jpg" :width="taille" @[choix]="modifierTaille" >

</template>

<script lang="ts">
export default {
    name: "ImageZoom",
    data(){
        return {
            choix : 'click',
            taille : 200,
        }
    },
    methods : {
        modifierTaille(){
            this.taille = this.taille*1.5;
        },

    }
}
</script>

