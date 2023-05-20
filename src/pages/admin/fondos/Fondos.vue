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
   
      <div class="row row-equal">
      <div class="flex md12">
        <va-card>
          <va-card-title class="pb-0">
            <h6 class="va-h6">Detalle de tus Inversiones</h6>
          </va-card-title>
          <va-divider/>
          <va-card-content class="pt-0">

            <span class="text-medium">Fondos en dólares</span>

            <div class="row row-equal">
              <div class="flex md12">
                <va-card
                  color="backgroundPrimary"
                >
                  <va-card-content>
                    <div class="row">
                      <div class="flex flex-col">
                        <va-icon name="account_balance" />
                      </div>
                      <div class="flex flex-col xs5">
                        <div class="pb-2">
                          <span>
                            Blum Cash Fondo Mutuo
                          </span>
                        </div>
                        <div>
                          <span class="">
                            Ganancia acumulada:
                          </span>
                          <va-icon name="trending_up" class="pl-2 pr-2"/>
                          <span>0.42%</span>
                        </div>
                      </div>
                      <div class="flex flex-col xs2">
                        <div class="pb-2">
                          <span class="">
                            Valor Cuota
                          </span>
                        </div>
                        <div>
                          <span class="">
                            $10.24
                          </span>
                        </div>
                      </div>
                      <div class="flex flex-col xs2">
                        <div class="pb-2">
                          <span class="">
                            Balance de fondo
                          </span>
                        </div>
                        <div>
                          <span class="va-h6">
                            $100.42
                          </span>
                        </div>
                      </div>     
                      <div class="flex flex-col offset-xs1 justify-space-around">
                            <va-button preset="plain">
                                <span>
                                    ver detalle
                                </span>
                                <va-icon name="arrow_right_alt"/>
                            </va-button>

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
  