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
            <component :is="currentTab.component" :items="items" :columns="columns" :editRow="editRow" :deleteRow="deleteRow" :closeRow="closeRow" />
          </div>
            
        </div>
      </div>
  
    </va-tabs>
  </va-card>
  </template>
  
  <script setup lang="ts">
  
  import { computed, ref } from "vue";
  import Listado from "./Producto.listado.vue";
  import Nuevo from "./Producto.nuevo.vue";
  
  
  const TABS = [
    { icon: "feed", title: "Listado Producto", component: Listado },
    { icon: "feed", title: "Agregar Producto", component: Nuevo },
  ];
  
  
  const tabs = TABS;
  const value =  ref(TABS[0].title);
    
  const currentTab = computed(() => {
    return tabs.find(({ title }) => title === value.value);
  });

  const items = ref([
    {
      id: 1,
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
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
  ]);

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
  