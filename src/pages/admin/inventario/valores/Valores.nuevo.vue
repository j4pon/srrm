<template>

    <va-form class="flex flex-col gap-6" ref="formRef">
  
      <div class="row row-equeal">
          <div class="flex md1 xs1 offset-md11 offset-xs10">
              <va-button :disabled="!isValid" @click="validate() && submit()">
                  Submit
              </va-button>
          </div>
          <va-divider/>

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
              

            <table class="va-table">
              <thead>
                <tr>
                  <th width="10%">Categoria</th>
                  <th width="15%">Nombre Fabricante</th>
                  <th width="15%">Nombre del producto</th>
                  <th width="5%">Cantidad</th>
                  <th width="5%">Precio S/</th>
                  <th width="5%">Cantidad S/</th>
                  <th width="10%">Accion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div style="max-width: 200px;">
                      <va-select
                      v-model="form.categoria"
                      :options="fabricanteOptions"
                      label="Categoria"
                      />       
                    </div>

                  </td>
                  <td>
                    <div style="max-width: 200px;">
                      <va-select
                      v-model="form.fabricante"
                      :options="fabricanteOptions"
                      label="Fabricante"
                      />
                    </div>
                  </td>
                  <td>
                    <div style="max-width: 200px;">
                      <va-select
                      v-model="form.fabricante"
                      :options="fabricanteOptions"
                      label="Producto"
                      />
                    </div>
                  </td>
                  <td>
                    <div style="max-width: 100px;">
                      <va-input v-model="form.cantidad" label="" mask="numeral"/>
                    </div>
                    
                  </td>
                  <td>
                    <div style="max-width: 100px;">
                      <va-input v-model="form.cantidad" label="" mask="numeral"/>
                    </div>
                    
                  </td>
                  <td>
                    <div style="max-width: 100px;">
                      <va-input v-model="form.cantidad" readonly label="" mask="numeral"/>
                    </div>
                  </td>
                  <td align="right">
                    <va-button icon="material-icons-close" />
                  </td>

                </tr>
              </tbody>
            </table>

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


  import popup from "@/components/popup/Popup.vue";

  
    const { isValid, validate, reset, resetValidation } = useForm('formRef')
  
    const form = reactive({

    })

    const modalFabricante = false;
  
    const fabricanteOptions = ref([])
  
    const categoria = ["Vehiculo", "Parte"]
  
    const validateBirthday = (value: Date | null) => {
      if (!value) {
        return 'Field is required'
      }
  
      const today = new Date()
      let yearDiff = today.getFullYear() - value.getFullYear()
      const monthDiff = today.getMonth() - value.getMonth()
  
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < value.getDate())) {
        yearDiff--
      }
  
      return yearDiff >= 18 || 'You must be at least 18 years old'
    }
  
    const submit = () => alert('Form submitted!')
  
  </script>
  
  <style scoped>
  
  </style>