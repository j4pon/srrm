<template>
  <va-card class="pt-3">

  <va-tabs v-model="value">
    <template #tabs>
      <va-tab v-for="tab in tabs" :key="tab.title" :name="tab.title">
        <va-icon :name="tab.icon" size="small" class="mr-2" />
        {{ tab.title }}
      </va-tab>
    </template>

    <div class="dashboard row">
      <div class="flex flex-col" style="width: 100%;">

        <div class="md12 pl-4 pr-4 pb-4">
          <component :is="currentTab.component"  />
        </div>
          
      </div>
    </div>

  </va-tabs>
</va-card>
</template>

<script setup lang="ts">

import { computed, ref } from "vue";
import Listado from "./Cliente.listado.vue";
import Nuevo from "./Cliente.nuevo.vue";


const TABS = [
  { icon: "feed", title: "Listado Clientes", component: Listado },
  { icon: "feed", title: "Agregar Clientes", component: Nuevo },
];


const tabs = TABS;
const value =  ref(TABS[0].title);
  
const currentTab = computed(() => {
  return tabs.find(({ title }) => title === value.value);
});

</script>
<style>
.va-tabs__content{
  width: 100%;
}
</style>
