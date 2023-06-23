<template>
  <div class="dashboard">
    
    <div class="row">
      <!--
      <div class="flex md12">
        <va-card class="pt-3" stripe stripe-color="success">
          <va-card-content >
            <va-stepper
              v-model="step"
              :steps="steps"
              controlsHidden
            />
          </va-card-content >
        </va-card>
      </div>
      -->
      <div class="row flex justify-space-between">
        <div class="flex flex-col va-text-center">
          <va-card color="primary">
            <va-icon name="construction" class="pa-3" size="5rem" />
            <va-card-content>
              <span class="va-h3">0</span> Servicios
            </va-card-content>
          </va-card>
        </div>
        <div class="flex flex-col va-text-center">
          <va-card color="info">
            <va-icon name="group"  class="pa-3"  size="5rem" />
            <va-card-content>
              <span class="va-h3">0</span> Cliente
            </va-card-content>
          </va-card>
        </div>
        <div class="flex flex-col va-text-center">
          <va-card color="waring">
            <va-icon name="engineering" class="pa-3"  size="5rem" />
            <va-card-content>
              <span class="va-h3">0</span> Proovedor
            </va-card-content>
          </va-card>
        </div>
        <div class="flex flex-col va-text-center">
          <va-card color="success">
            <va-icon name="add_home" class="pa-3"  size="5rem" />
            <va-card-content>
              <span class="va-h3">0</span> Productos
            </va-card-content>
          </va-card>
        </div>
        <div class="flex flex-col va-text-center">
          <va-card color="danger">
            <va-icon name="shopping_cart_checkout"  class="pa-3" size="5rem" />
            <va-card-content>
              <span class="va-h3">0</span> Compras
            </va-card-content>
          </va-card>
        </div>
      </div>
    </div>
    <!--
    <div class="row flex">
      <div class="flex flex-col md6">
        <va-card stripe stripe-color="primary">
          <va-card-title>
            detalle del servicio
          </va-card-title>
          <va-card-conten>

          </va-card-conten>

        </va-card>
      </div>

      <div class="flex flex-col md6">
        <va-card stripe stripe-color="primary">
          <va-card-title>
            Ultimos clientes
          </va-card-title>
          <va-card-conten>
            
          </va-card-conten>
        </va-card>
      </div>
    </div>
    -->

</div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const step = ref(0)

  const steps = [
    { label: 'Cliente', icon: 'store' },
    { label: 'Proveedor', icon: 'store' },
    { label: 'Vehiculos', icon: 'store' },
    { label: 'Productos', icon: 'store' },
    { label: 'Compras', icon: 'store' },
  ]

  const isLoading = ref(true)

  const load = () => {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
    }, 2000)
  }

  const onload = onMounted(() => {
    load()
  })


</script>

<style lang="scss">
  .row-equal .flex {
    .va-card {
      height: 100%;
    }
  }

  .dashboard {
    .va-card {
      margin-bottom: 0 !important;
      &__title {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
