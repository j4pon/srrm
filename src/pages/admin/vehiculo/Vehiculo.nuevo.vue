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
          <div class="row">
              <div class="flex md8">
                  <va-select
                  v-model="form.tipo"
                  :options="fabricanteOptions"
                  label="Tipo Vehiculo"
                  />
              </div>
              <div class="flex md4">
                  <va-button icon="material-icons-add" preset="secondary" border-color="primary"  @click="abrirPopup('Tipo de Vehiculo')">
                      Añadir o Quitar
                  </va-button>
              </div>
          </div>

        </div>
        <div class="flex md3">
          <va-input v-model="form.chasis" label="N#Chasis" mask="numeral"/>
        </div>

        <div class="flex md9">
          <div class="row">
              <div class="flex md8">
                  <va-select
                  v-model="form.marca"
                  :options="fabricanteOptions"
                  label="Marca de Vehiculo"
                  />
              </div>
              <div class="flex md4">
                  <va-button icon="material-icons-add" preset="secondary" border-color="primary"  @click="abrirPopup('Marca de Vehiculo')">
                      Añadir o Quitar
                  </va-button>
              </div>
          </div>                
        </div>
        <div class="flex md3">
              <div style="max-width: 300px;">
                <va-input
                    label="Año de modelo"
                    v-model="form.anno" 
                />

              </div>
        </div>

        <div class="flex md9">
          <div class="row">
              <div class="flex md8">
                  <va-select
                  v-model="form.combustible"
                  :options="fabricanteOptions"
                  label="Tipo de Combustible"
                  />
              </div>
              <div class="flex md4">
                  <va-button icon="material-icons-add" preset="secondary" border-color="primary"  @click="abrirPopup('Tipo de Combustible')">
                      Añadir o Quitar
                  </va-button>
              </div>
          </div>                
        </div>
        <div class="flex md3">
              <div style="max-width: 300px;">
                <va-input
                    label="Nro. de Placa"
                    v-model="form.anno" />
              </div>
        </div>
        <div class="flex md6">
            <va-file-upload
                v-model="form.tarjeta"
                dropzone
                file-types="jpg,png"
                dropZoneText="Suba una imagen de la tarjeta de propiedad"
                uploadButtonText="Subir"
            />
        </div>
        <va-spacer></va-spacer>
        <div class="flex md3">
              <div style="max-width: 300px;">
                <va-input
                    label="Nro. Motor"
                    v-model="form.motor" />
              </div>
        </div>

        <div class="flex md6">
            <va-divider></va-divider>
            <div class="row">
              <va-spacer/>
                <va-button icon="material-icons-add" @click="agregarFila()" class="pl-2 pr-2">
                    Agregar descripcion
                </va-button>
            </div>

            <div class="row">
              <table class="va-table" width="100%">
                <thead>
                  <tr>
                    <th width="85%">Descripcion</th>
                    <th width="15%">Accion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(fila, index) in filas" :key="index">
                    <td>
                      <div style="max-width: 100%;">
                        <va-input
                            v-model="filas[index].descripcion"
                            class="mb-6"
                            type="textarea"
                            label=""
                            :min-rows="3"
                            :max-rows="5"
                            />
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

  const defaultItem = { descripcion: '', id: '' };

    const filas = ref([Object.assign({}, defaultItem)]);

    const agregarFila = () => {
        filas.value.push(Object.assign({}, defaultItem));
    };

    const eliminarFila = (index: number) => {
        filas.value.splice(index, 1);
    };


  const abrirPopup = (modal:string) => {
      modalTipo.value = modal
      refmodal.value.show()
  }

  const submit = () => { 
      alert('Form submitted!') 
      props.closeRow()
  }

</script>

<style scoped>

</style>