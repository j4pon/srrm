<template>
    <div style="height: 500px; width: 100%;">
        <grilla-data :items="items" :columns="columns" :editRow="editRow" :deleteRow="deleteRow"/>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onBeforeMount } from 'vue';
  import grillaData from '@/components/grid/grilla.data.vue'

  const props = withDefaults(defineProps<{
    items?:Array<object>,
    columns?: Array<object>,
    editRow?:Function,
    deleteRow:Function,
    closeRow:Function
  }>(),{
    items:[],
    columns:[]
  });
 
  </script>
  
  