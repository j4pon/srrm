<template>
  <div :style="{height: height , width: '100%'}">
  <va-data-table
    :items="items"
    :columns="columns"
    virtual-scroller
    sticky-header
    striped
  >

    <template #cell(action)="{ value }">
      <div class="row">
        <div class="flex md2 mr-2" v-if="editRow">
          <va-button icon="material-icons-edit" @click="edit(value)"/>
        </div>
        <div class="flex md2 mr-1" v-if="deleteRow">
          <va-button icon="material-icons-close" @click="eliminar(value)"/>
        </div>
        <div class="flex md2 mr-1" v-if="showRow">
          <va-button icon="material-icons-search" @click="show(value)"/>
        </div>
      </div>
      
      
    </template>

  </va-data-table>
  </div>
</template>

<script setup lang="ts">
  import { ref, onBeforeMount } from 'vue';

  const props = withDefaults(defineProps<{
    items?:Array<object>,
    columns?: Array<object>,
    editRow?:Function,
    deleteRow:Function,
    showRow?:Function,
    height?:string
  }>(),{
    items:[],
    columns:[],
    height:'500px'
  });



  const edit = (id:number)=>{
    props.editRow(id);
  }
  const eliminar = (id:number)=>{
    props.deleteRow(id);
  }
  const show = (id:number)=>{
    props.showRow(id);
  }

onBeforeMount(() => {

});
</script>

<style>
.ag-theme-vuestic {
  /* Estilos personalizados para el tema de la grilla */
}
</style>
