<template>
    
    <va-form ref="myForm" class="flex flex-col gap-2 pa-0">
        <va-progress-bar v-show="isLoading" indeterminate />

        <va-input
            v-model="password"
            :type="isPasswordVisible ? 'text' : 'password'"
            label="Password"
            class="mr-6 mb-6 pb-2"
        >
            <template #appendInner>
            <va-icon
                :name="isPasswordVisible ? 'visibility_off' : 'visibility'"
                size="small"
                color="--va-primary"
                @click="isPasswordVisible = !isPasswordVisible"
            />
            </template>
        </va-input>

        <va-input
            v-model="repeatpassword"
            :type="isRPasswordVisible ? 'text' : 'password'"
            label="Repeaat Password"
            class="mr-6 mb-6 pb-2"
        >
            <template #appendInner>
            <va-icon
                :name="isRPasswordVisible ? 'visibility_off' : 'visibility'"
                size="small"
                color="--va-primary"
                @click="isRPasswordVisible = !isRPasswordVisible"
            />
            </template>
        </va-input>

        <va-button :loading="isLoading" :disabled="isLoading || !isValid">Send</va-button>
    </va-form>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue'
    
    import { useForm } from 'vuestic-ui'

    const isPasswordVisible = ref(false);
    const password = ref("");
    const isRPasswordVisible = ref(false);
    const repeatpassword = ref("");

    const { isLoading, isValid } = useForm('myForm')

    const asyncRule = (v: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(v.length > 3 || 'Should be more than 3 symbols')
        }, 3000)
    })
    }
  </script>
  
  <style lang="scss">
    .row-equal .flex {
      .va-card {
        height: 100%;
      }
    }
  
    .dashboard {
      .va-card {
        margin-bottom: 0 !important;
        &__title {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  </style>
  