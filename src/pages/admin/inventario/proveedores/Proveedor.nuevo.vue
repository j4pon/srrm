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
            <va-input
            v-model="form.nombre"
            :rules="[(value) => (value && value.length > 0) || 'First name is required']"
            label="Nombres"
            />
        </div>
        <div class="flex md6">
            <va-input
            v-model="form.apellido"
            :rules="[(value) => (value && value.length > 0) || 'Last name is required']"
            label="Apellidos"
            />            
        </div>
        <div class="flex md6">
            <va-input
            v-model="form.email"
            label="Email"
            type="email"
            />               
        </div>
        <div class="flex md6">
            <va-input
                v-model="form.phone"
                type="tel"
                label="Telefono & celular"
                class="mr-6 mb-6"
            />            
        </div>
        <div class="flex md12">
            <va-input
            v-model="form.direccion"
            :rules="[(value) => (value && value.length > 0) || 'First name is required']"
            label="Direccion"
            />
        </div>
    </div>


  </va-form>

</template>

<script setup lang="ts">

  import { reactive } from 'vue'
  import { useForm } from 'vuestic-ui'

  const { isValid, validate, reset, resetValidation } = useForm('formRef')
  const props = withDefaults(defineProps<{
    closeRow:Function
  }>(),{
  });

  const form = reactive({
  })

  const submit = () => { 
    alert('Form submitted!') 
    props.closeRow()
  }

</script>

<style scoped>

</style>