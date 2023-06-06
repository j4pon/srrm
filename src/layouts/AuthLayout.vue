<template>
    <div class="auth-layout row align-content-center">
      <div class="flex xs12 pa-3 justify-center">
        <router-link class="py-5 justify-center d-flex" to="/">
          <img src="@/assets/logo_color.png"/>
        </router-link>
      </div>
  
      <div class="flex xs12 pa-3">
        <div class="d-flex justify-center">
          <va-card class="auth-layout__card">
            <va-card-content>
  
              <va-separator />
  
              <div class="pa-3">
                <router-view />
              </div>
            </va-card-content>
          </va-card>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
    export default {
      name: 'AuthLayout',
      //components: { VuesticLogo },
      setup() {
        return {  }
      },
      data() {
        return {
          selectedTabIndex: 0,
        }
      },
      computed: {
        tabIndex: {
          set(tabName) {
            this.$router.push({ name: tabName })
          },
          get() {
            return this.$route.name
          },
        },
      },
    }
  </script>
  
  <style lang="scss">
    .auth-layout {
      min-height: 100vh;
      background-image: linear-gradient(to right, var(--va-background-primary), var(--va-white));
  
      &__card {
        width: 100%;
        max-width: 600px;
      }
    }
  </style>