<template>
    <div class="row">
      <div style="height: 300px;" class="flex md12">
        <va-data-table
        :items="items"
        :columns="columns"
      >
        <template #cell(action)="{ value }">
          <div class="row">
            <div class="flex md3">
              <va-button icon="material-icons-edit" />
            </div>
            <div class="flex md3">
              <va-button icon="material-icons-close" />
            </div>
          </div>
        </template>
    
      </va-data-table>
      </div>
      <div class="flex md12">
        <va-divider/>
      </div>
    </div>
    
    <div class="row">
        <div class="flex md9">
            <va-input v-model="form.precio" :label="`Agregar ${mantenedor}`"/>
        </div>
        <div class="flex md3">
            <va-button icon="material-icons-add" size="small" class="ml-3 pl-2 pr-3 pb-2" @click="">
              Agregar
            </va-button>
        </div>
    </div>

  </template>
  
  <script setup lang="ts">
  import { ref, onBeforeMount, defineProps } from 'vue';

  const props = defineProps<{
    mantenedor?: string;
  }>();

  console.log(props.mantenedor)

  const form = ref([])

    const items = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
      },
    ];
  
    const columns = [
      { key: "id" },
      { key: "name" },
      { key: "id", name: "action", label: "action" },
    ];
  
  
  onBeforeMount(() => {
  
  });
  </script>
  
  <style>
  .ag-theme-vuestic {
    /* Estilos personalizados para el tema de la grilla */
  }
  </style>
  