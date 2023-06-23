<template>

    <va-form class="flex flex-col gap-6" ref="formRef">
  
      <div class="row row-equeal">
          <div class="flex md12">
            <div class="row">
              <va-spacer/>
              <va-button :disabled="!isValid" @click="validate() && submit()">
                  Submit
              </va-button>
            </div>
          </div>

          <div class="flex md9">
                <va-select
                v-model="form.proveedor"
                :options="fabricanteOptions"
                label="Proveedor"
                />
          </div>
          <div class="flex md3">
            <va-date-input v-model="form.fecha" label="Fecha de compra"/>
          
          </div>
          <AdicionProducto :filas="filas" :default-item="defaultItem" :agregarFila="agregarFila" :eliminar-fila="eliminarFila"/>
      </div>
  
    </va-form>

    <va-modal
      v-model="modalFabricante"
      :message="popup"
      title="Añadir o Quitar"
    />
  
  </template>
  
  <script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useForm } from 'vuestic-ui'

  import type { Producto } from '../../../../interfaces/Model';
  import AdicionProducto from '../../../../components/productos/AdicionProducto.vue'

  import popup from "@/components/popup/Popup.vue";

  const props = withDefaults(defineProps<{
    closeRow:Function
  }>(),{
  });
  
    const { isValid, validate, reset, resetValidation } = useForm('formRef')
  
    const form = reactive({})

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