<template>
    <div class="row row-equal">

        <div class="flex md12">
            Fecha:
            <span>20/06/2023</span>
        </div>
        <div class="flex md12">
            <span class="va-h6">
                Informe sobre acciones
            </span>
            <va-divider></va-divider>
        </div>
        <div class="flex md12">
            <grilla-data :items="items" :columns="columns" :height="height"/>
        </div>
        <div class="flex md12 mt-2 mb-2">
            <va-card>
                <va-card-content>
                    <div class="row">
                        <va-spacer></va-spacer>
                        <div class="md3">
                            Stock Total: <span>200</span>
                        </div>
                    </div>
                </va-card-content>
            </va-card>
        </div>
        <div class="flex md12 md12 mt-2 mb-2">
            <va-card>
                <va-card-content>
                    <div class="row">
                        <va-spacer></va-spacer>
                        <div class="md3">
                            Stock ventas: <span>0</span>
                        </div>
                    </div>
                </va-card-content>
            </va-card>
        </div>
        <div class="flex md12 md12 mt-2 mb-2">
            <va-card>
                <va-card-content>
                    <div class="row">
                        <va-spacer></va-spacer>
                        <div class="md3">
                            Stock servicios: <span>1</span>
                        </div>
                    </div>
                </va-card-content>
            </va-card>
        </div>
        <div class="flex md12 md12 mt-2 mb-2">
            <va-card>
                <va-card-content>
                    <div class="row">
                        <va-spacer></va-spacer>
                        <div class="md3">
                            Stock actual: <span>199</span>
                        </div> 
                    </div>
                </va-card-content>
            </va-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
  import grillaData from '@/components/grid/grilla.data.vue'
  import { ref } from "vue";
  const items = ref([]);

  const height = '250px'

  for (let i = 1; i <= 2; i++) {
    const newItem = {
      id: i,
      //name: `Item ${i}`,
      // Agrega las demás propiedades que necesites para cada objeto
      categoria: "Leanne Graham",
      producto: "Bret",
      fabricante: "Y",
      fechaCompra: "21/06/2023",
      proveedor: "X",
      cantidad: 100,

    }

    items.value.push(newItem);
  }

  const columns = ref([
    { key: "categoria" },
    { key: "producto" },
    { key: "fabricante" },
    { key: "fechaCompra" },
    { key: "proveedor" },
    { key: "cantidad" },
    //{ key: "id", name: "action", label: "action" },
  ]);
</script>

<style lang="scss" scoped>



</style>