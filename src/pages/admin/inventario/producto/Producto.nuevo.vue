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
              <va-input
              v-model="form.nombre"
              :rules="[(value) => (value && value.length > 0) || 'Last name is required']"
              label="Nombre"
              />            
          </div>
          <div class="flex md3">
            <va-date-input v-model="form.fecha" label="Fecha del producto"/>
          
          </div>
          <div class="flex md9">
            <div class="row">
                <div class="flex md8">
                    <va-select
                    v-model="form.fabricante"
                    :options="fabricanteOptions"
                    label="Fabricante"
                    />
                </div>
                <div class="flex md4">
                    <va-button icon="material-icons-add" preset="secondary" border-color="primary"  @click="abrirPopup('fabricante')">
                        Añadir o Quitar
                    </va-button>
                </div>
            </div>
 
          </div>
          <div class="flex md3">
            <va-input v-model="form.precio" label="Precio S/" mask="numeral"/>
          </div>

          <div class="flex md9">
            <div class="row">
                <div class="flex md8">
                    <va-select
                    v-model="form.medida"
                    :options="fabricanteOptions"
                    label="Unidad de medida"
                    />
                </div>
                <div class="flex md4">
                    <va-button icon="material-icons-add" preset="secondary" border-color="primary"  @click="abrirPopup('unidad')">
                        Añadir o Quitar
                    </va-button>
                </div>
            </div>                
          </div>
          <div class="flex md3">
                <div style="max-width: 300px;">
                    <va-select
                    v-model="form.proveedor"
                    :options="fabricanteOptions"
                    label="Proveedor"
                    />
                </div>
          </div>

          <div class="flex md12">
              <div class="row">
                  <div class="flex md1">
                      <span class="va-title">Categoria</span>
                  </div>
                  <div class="md10">
                      <va-radio
                      v-for="(option, index) in categoria"
                      :key="index"
                      v-model="form.categoria"
                      :option="option"
                  />   
                  </div>               
              </div>
          </div>
      </div>
      </va-form>
      <va-modal ref="refmodal" overlay-opacity="0.5" size="small"  stateful  hide-default-actions>
        <template #header>
          <h2>{{ modalTipo }}</h2>
        </template>
        <va-divider />
        <div class="row">
          <popup :mantenedor="modalTipo"/>
        </div>
        <template #footer>
          
        </template>
        
      </va-modal>
      
    

  </template>
  
  <script setup lang="ts">
    import { reactive, ref } from 'vue'
    import { useForm } from 'vuestic-ui'

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
  
    const categoria = ["Vehiculo", "Parte"]

    const abrirPopup = (modal:string) => {
        modalTipo.value = modal
        refmodal.value.show()
    }
  
    const submit = () => alert('Form submitted!')
  
  </script>
  
  <style scoped>
  
  </style>