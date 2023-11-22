<template>
    <div class="card">
        <div id="card-header">
            <slot name="header"></slot>
        </div>
        <div id="card-default">
            <slot name="default"></slot>
        </div>
        <div id="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "CardSlot",

}
</script>

<style scoped>
    .card{
        border: solid;
        width: 100px;
    }
</style>
