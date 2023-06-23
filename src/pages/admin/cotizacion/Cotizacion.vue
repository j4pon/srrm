<template>
    <va-card class="pt-3">
  
    <va-tabs v-model="value">
      <template #tabs>
        <va-tab v-for="tab in tabs" :key="tab.title" :name="tab.title" v-model="value">
          <va-icon :name="tab.icon" size="small" class="mr-2" />
          {{ tab.title }}
        </va-tab>
      </template>
  
      <div class="dashboard row">
        <div class="flex flex-col" style="width: 100%;">
  
          <div class="md12 pl-4 pr-4 pb-4">
            <component v-if="currentTab.co == 'T'" :is="currentTab.component" :items="items" :columns="columns" :editRow="editRow" :deleteRow="deleteRow" :closeRow="closeRow" />
            <component v-else :is="currentTab.component" :closeRow="closeRow" />
          </div>
            
        </div>
      </div>
  
    </va-tabs>
  </va-card>
  </template>
  
  <script setup lang="ts">
  
  import { computed, ref } from "vue";
  import Listado from "./Cotizacion.listado.vue";
  import Nuevo from "./Cotizacion.nuevo.vue";
  
  
  const TABS = [
    { icon: "feed", title: "Listado Cotizacion", co:"T", component: Listado },
    { icon: "feed", title: "Agregar Cotizacion", co:"N", component: Nuevo },
  ];
  
  
  const tabs = TABS;
  const value =  ref(TABS[0].title);
    
  const currentTab = computed(() => {
    return tabs.find(({ title }) => title === value.value);
  });

  const items = ref([]);

  for (let i = 1; i <= 50; i++) {
    const newItem = {
      id: i,
      //name: `Item ${i}`,
      // Agrega las demás propiedades que necesites para cada objeto
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    }

    items.value.push(newItem);
  }

  const columns = ref([
    { key: "id" },
    { key: "name" },
    { key: "username" },
    { key: "email" },
    { key: "phone" },
    { key: "website" },
    { key: "address.street", name: "street", label: "Street" },
    { key: "id", name: "action", label: "action" },
  ]);

  const editRow = (id:number) =>{
    console.log("Edicionn")
    console.log(id)
    value.value = TABS[1].title;
  }

  const deleteRow = (id:number) =>{
    console.log("delete")
  }

  const closeRow = () => {
    value.value = TABS[0].title;
  }
  </script>
  <style>
  .va-tabs__content{
    width: 100%;
  }
  </style>
  