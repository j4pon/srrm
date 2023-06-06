<template>
  <form class="login" @submit.prevent="onsubmit">
    <va-input
      v-model="email"
      class="mb-3"
      type="email"
      label="Email"
      :error="!!emailErrors.length"
      :error-messages="emailErrors"
    />

    <div class="d-flex justify-center mt-3">
      <va-button type="submit" class="my-0">Recuperar Clave</va-button>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const email = ref('')
  const emailErrors = ref<string[]>([])

  function onsubmit() {
    if (!email.value) {
      emailErrors.value = ['Email is required']
    } else {
      useRouter().push('/')
    }
  }
</script>
