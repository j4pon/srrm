<template>
  <div style="height: 300px; width: 100%;">
    <va-data-table
    :items="items"
    :columns="columns"
  >

    <template #cell(action)="{ value }">
      <div class="row">
        <div class="flex md3">
          <va-button icon="material-icons-edit" @click="edit(value)"/>
        </div>
        <div class="flex md3">
          <va-button icon="material-icons-close" @click="eliminar(value)"/>
        </div>
      </div>
      
      
    </template>

  </va-data-table>
  </div>
</template>

<script setup lang="ts">
  import { ref, onBeforeMount, defineProps, withDefaults } from 'vue';

  const props = withDefaults(defineProps<{
    items?:Array<object>,
    columns?: Array<object>,
    editRow?:Function,
    deleteRow:Function
  }>(),{
    items:[],
    columns:[]
  });



  const edit = (id:number)=>{
    props.editRow(id);
  }

  const eliminar = (id:number)=>{
    props.deleteRow(id);
  }

onBeforeMount(() => {

});
</script>

<style>
.ag-theme-vuestic {
  /* Estilos personalizados para el tema de la grilla */
}
</style>
