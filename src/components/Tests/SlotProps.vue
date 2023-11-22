<template>
    <li v-for="name in names" :key="name.firstName">
        <slot :firstName="name.firstName" :lastName="name.lastName" ></slot>
    </li>
</template>

<script lang="ts">
export default {
    name: "SlotProps",
    data() {
        return {
            names: [
                { firstName: 'John', lastName: 'Doe' },
                { firstName: 'Jane', lastName: 'Doe' },
                { firstName: 'Alice', lastName: 'Smith' },
            ]
        }
    }

}
</script>

<style></style>