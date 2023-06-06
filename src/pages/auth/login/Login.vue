<template>
    <form @submit.prevent="onsubmit">
      <va-input
        v-model="user"
        class="mb-3"
        type="text"
        label="Email"
        :error="!!emailErrors.length"
        :error-messages="emailErrors"
      />
  
      <va-input
        v-model="password"
        class="mb-3"
        type="password"
        label="Password"
        :error="!!passwordErrors.length"
        :error-messages="passwordErrors"
      />
  
      <div class="auth-layout__options d-flex align-center justify-space-between">
      <!--
      <va-checkbox v-model="keepLoggedIn" class="mb-0" :label="t('auth.keep_logged_in')" />
      -->
      <router-link class="ml-1 va-link" :to="{ name: 'recover-password' }">
        Recuperar Clave
      </router-link>
    </div>

  
      <div class="d-flex justify-center mt-3">
        <va-button class="my-0" @click="onsubmit">ingresar</va-button>
      </div>
    </form>
  </template>
<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { login } from '@/api/login';
  import { setUser } from '@/stores/login';

  const user = ref('')
  const email = ref('')
  const password = ref('')
  const keepLoggedIn = ref(false)
  const emailErrors = ref<string[]>([])
  const passwordErrors = ref<string[]>([])
  const router = useRouter()
  const formReady = computed(() => !emailErrors.value.length && !passwordErrors.value.length)

  async function onsubmit() {
    try{
      if (!formReady.value) return

      const access = await login(user.value, password.value);

      //emailErrors.value = email.value ? [] : ['Email is required']
      //passwordErrors.value = password.value ? [] : ['Password is required']
      if(access.status){
        console.log("aquiiiiiiiiiii")
        setUser(access);
        router.push({ name: 'dashboard' })
      }
    }catch(error){
      console.log(error)
    }
  }

</script>

<style lang="scss" scoped>

</style>