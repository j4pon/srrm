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

          <div class="flex md12">
            <h3>Detalle de la Compra</h3>
            <va-divider/>

            <div class="row">
              <va-spacer/>
                <va-button icon="material-icons-add" @click="agregarFila()" />
            </div>
            <div class="row">
              <table class="va-table" width="100%">
                <thead>
                  <tr>
                    <th width="15%">Nombre Fabricante</th>
                    <th width="15%">Nombre del producto</th>
                    <th width="5%">Cantidad</th>
                    <th width="5%">Precio S/</th>
                    <th width="5%">Cantidad S/</th>
                    <th width="10%" style="text-align: right;">Accion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(fila, index) in filas" :key="index">
 
                    <td>
                      <div style="max-width: 200px;">
                        <va-select
                        v-model="filas[index].fabricante"
                        :options="fabricanteOptions"
                        label="Fabricante"
                        />
                      </div>
                    </td>
                    <td>
                      <div style="max-width: 200px;">
                        <va-select
                        v-model="filas[index].producto"
                        :options="fabricanteOptions"
                        label="Producto"
                        />
                      </div>
                    </td>
                    <td>
                      <div style="max-width: 100px;">
                        <va-input v-model="filas[index].cantidad" label="" mask="numeral"/>
                      </div>
                      
                    </td>
                    <td>
                      <div style="max-width: 100px;">
                        <va-input v-model="filas[index].precio" label="" mask="numeral"/>
                      </div>
                      
                    </td>
                    <td>
                      <div style="max-width: 100px;">
                        <va-input v-model="filas[index].monto" readonly label="" mask="numeral"/>
                      </div>
                    </td>
                    <td style="text-align: right;">
                      <va-button icon="material-icons-close" @click="eliminarFila(index)"/>
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>


          </div>
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