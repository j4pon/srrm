<template>
  <div class="dashboard">

    <div class="row row-equal">
    <div class="flex md12">
      <va-card>
        <va-card-title>
          <h6 class="va-h6">Balances</h6>
        </va-card-title>

        <va-card-content>
          
          <div class="row row-equal">
            <div class="flex md6">
              <va-card
                color="backgroundPrimary"
              >
                <va-card-content>
                  <div class="row">
                    <div class="flex md-4">
                      <va-icon name="account_balance" size="3rem"/>
                    </div>
                    <div class="flex">
                      <div>
                        <span class="va-h5 text-medium">
                          Balance de fondos en dólares
                        </span>
                      </div>
                      <div>
                        <span class="va-h3">
                          $100.42
                        </span>
                      </div>
                    </div>
                  </div>
                </va-card-content>
              </va-card>              
            </div>
            <div class="flex md6">
              <va-card
                color="backgroundPrimary"
              >
              <va-card-content>
                  <div class="row">
                    <div class="flex md-4">
                      <va-icon name="account_balance" size="3rem"/>
                    </div>
                    <div class="flex">
                      <div>
                        <span class="va-h5 text-medium">
                          Balance de fondos en soles
                        </span>
                      </div>
                      <div>
                        <span class="va-h3">
                          S/ 0.00
                        </span>
                      </div>
                    </div>
                  </div>
                </va-card-content>
              </va-card>              
            </div>
          </div>

        </va-card-content>

      </va-card>
    </div>
    </div>
 
</div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  
  const dashboardMap = ref()

  function addAddressToMap({ city, country }: { city: { text: string }; country: string }) {
    dashboardMap.value.addAddress({ city: city.text, country })
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
