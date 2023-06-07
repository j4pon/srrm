<template>
  <div style="height: 300px; width: 100%;">
    <ag-grid-vue
      class="ag-theme-vuestic"
      style="width: 100%; height: 100%;"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :modules="modules"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { AgGridVue } from '@ag-grid-community/vue3';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

const modules = [ClientSideRowModelModule];

const rowData = ref(null);

const columnDefs = [
  { field: 'athlete', headerName:'ok' },
  { field: 'age' },
  { field: 'country' },
  { field: 'year' },
  { field: 'date' },
  { field: 'sport' },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' },
];

onBeforeMount(() => {
  fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(result => result.json())
    .then(data => {
      rowData.value = data;
    });
});
</script>

<style>
.ag-theme-vuestic {
  /* Estilos personalizados para el tema de la grilla */
}
</style>
