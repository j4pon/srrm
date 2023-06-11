<template>
    <popupgrilla :mantenedor="mantenedor"/>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import popupgrilla from "../grid/grilla.popup.vue"

const props = defineProps<{
  mantenedor?: string;
}>();

const mantenedor = props.mantenedor || 'fabricante';
</script>

<style lang="scss" scoped>

</style>