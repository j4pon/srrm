<template>
    <va-form class="flex flex-col gap-6" ref="formRef">
    <div class="row row-equeal">
        <div class="flex md1 xs1 offset-md11 offset-xs10">
            <va-button :disabled="!isValid" @click="validate() && submit()">
                Submit
            </va-button>
        </div>
        <va-divider/>

        <div class="flex md6">
          <div class="row">
              <div class="flex md8">
                  <va-select
                  v-model="form.vehiculo"
                  :options="fabricanteOptions"
                  label="Vehiculo"
                  />
              </div>
              <div class="flex md4">
                  <va-button icon="material-icons-add" preset="secondary" border-color="primary"  @click="abrirPopup('Tipo de Vehiculo')">
                      Añadir o Quitar
                  </va-button>
              </div>
          </div>

        </div>
        <div class="flex md6">
          <div class="row">
              <div class="flex md8">
                  <va-select
                  v-model="form.cliente"
                  :options="fabricanteOptions"
                  label="Cliente"
                  />
              </div>
              <div class="flex md4">
                  <va-button icon="material-icons-add" preset="secondary" border-color="primary"  @click="abrirPopup('Tipo de Vehiculo')">
                      Añadir o Quitar
                  </va-button>
              </div>
          </div>
        </div>

        <div class="flex md6">
          <div class="row">
              <div class="flex md8">
                  <va-select
                  v-model="form.cliente"
                  :options="fabricanteOptions"
                  label="Asignar a"
                  />
              </div>
              <div class="flex md4">
                  <va-button icon="material-icons-add" preset="secondary" border-color="primary"  @click="abrirPopup('Tipo de Vehiculo')">
                      Añadir o Quitar
                  </va-button>
              </div>
          </div>
        </div>

        <div class="flex md6">
            <va-date-input v-model="form.fecha" label="Fecha servicio"/>
        </div>

        <div class="flex md12">
          <div class="row">
              <div class="flex md12">
                <va-input
                  v-model="form.detalle"
                  class="mb-6"
                  type="textarea"
                  label="Detalle de cotizacion"
                  :min-rows="3"
                  :max-rows="5"
                  />
              </div>
            </div>

        </div>

        <AdicionProducto :filas="filas" :default-item="defaultItem" :agregarFila="agregarFila" :eliminar-fila="eliminarFila"/>

    </div>
    </va-form>
    
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useForm } from 'vuestic-ui'

  import type { Producto } from '@/interfaces/Model';
  import AdicionProducto from '@/components/productos/AdicionProducto.vue'

  import popup from "@/components/popup/Popup.vue";

  const props = withDefaults(defineProps<{
      closeRow:Function
  }>(),{
  });

  const { isValid, validate, reset, resetValidation } = useForm('formRef')

  const modalTipo = ref("")

  const form = reactive({})

  const refmodal = ref(null);

  const modalFabricante = false;

  const fabricanteOptions = ref([])

  const defaultItem:Producto = { categoria: '', fabricante: '', producto: '', cantidad: '', precio: '', monto: '' };
  
  const filas = ref([Object.assign({}, defaultItem)]);
  
  const agregarFila = () => {
    filas.value.push(Object.assign({}, defaultItem));
};

    const eliminarFila = (index: number) => {
        filas.value.splice(index, 1);
    };


  const submit = () => { 
      alert('Form submitted!') 
      props.closeRow()
  }

</script>

<style scoped>

</style>