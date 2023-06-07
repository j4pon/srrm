<template>

  <va-form class="flex flex-col gap-6" ref="formRef">

    <div class="row row-equeal">
        <div class="flex md2 xs2 offset-md10 offset-xs10 ">
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
            <div class="row">
                <div class="flex md2">
                    <span class="va-title">Genero</span>
                </div>
                <div class="md10">
                    <va-radio
                    v-for="(option, index) in genero"
                    :key="index"
                    v-model="form.genero"
                    :option="option"
                />   
                </div>               
            </div>
        </div>
        <div class="flex md6">
            <va-input
                v-model="form.telefono"
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
        <div class="flex md12">
          <va-checkbox
            v-model="form.vigencia"
            label="Vigencia"
            left-label
          />
        </div>
    </div>


  </va-form>

</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useForm } from 'vuestic-ui'

  const { isValid, validate, reset, resetValidation } = useForm('formRef')

  const form = reactive({
    nombres: '',
    apellidos: '',
    genero: '',
    telefono: '',
    direccion:'',
    vigencia:false
  })

  const countries = [
    { value: 'ua', text: 'Ukraine' },
    { value: 'us', text: 'USA' },
    { value: 'uk', text: 'United Kingdom' },
  ]

  const genero = ["M", "F"]

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