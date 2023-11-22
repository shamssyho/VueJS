<template>
    <h2>
        This is a Popup
    </h2>
    <button @click="$emit('close')">Close popup</button>
</template>

<script lang="ts">
export default {
    name: "Popup",
    emits: ["close"]
}
</script>

<style></style>