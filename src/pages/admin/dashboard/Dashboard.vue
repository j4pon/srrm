<template>
  <div class="dashboard">


    <va-button @click="$refs.modal.show()">
      Show modal (stateful)
    </va-button>
    <va-modal
      ref="modal"
      stateful
      :message="popup"
    />

    <div class="row row-equal">
    <div class="flex md12 xs12">
      <VaSkeletonGroup v-if="isLoading" animation="pulse" :delay="0">
        <SkDashboard1/>
      </VaSkeletonGroup>
      <va-card v-else>
        <va-card-title>
          <h6 class="va-h6">Balances</h6>
        </va-card-title>
        <va-card-content> 
          <div class="row row-equal">
            <div class="flex md6 xs6">
              <va-card
                color="backgroundPrimary"
              >
                <va-card-content>
                  <div class="row">
                    <div class="flex md2 xs3">
                      <va-icon name="account_balance" size="3rem"/>
                    </div>
                    <div class="flex md10 xs9">
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
            <div class="flex md6 xs6">
              <va-card
                color="backgroundPrimary"
              >
              <va-card-content>
                  <div class="row">
                    <div class="flex md2 xs3">
                      <va-icon name="account_balance" size="3rem"/>
                    </div>
                    <div class="flex md10 xs9">
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
      <div class="flex md6 xs12">

        <VaSkeletonGroup v-if="isLoading" animation="pulse" :delay="0">
          <SkDashboard2/>
        </VaSkeletonGroup>

        <va-card v-else>
          <va-card-title>
            <span class="va-h6">
              Faro Capital Corto Plazo Dolares FMIV
            </span>
          </va-card-title>
          <va-card-container>
            <Line
              class="pa-3"
              id="my-chart-id"
              :options="chartOptions"
              :data="chartData"
            />
          </va-card-container>
        </va-card>
      </div>
      
      <div class="flex md6 xs12">
        <VaSkeletonGroup v-if="isLoading" animation="pulse" :delay="0">
          <SkDashboard2/>
        </VaSkeletonGroup>

        <va-card v-else>
          <va-card-title>
            <span class="va-h6">
              Faro Capital Global Innovation FMIV
            </span>
          </va-card-title>
          <va-card-container>
            <Line
              class="pa-3"
              id="my-chart-id"
              :options="chartOptions"
              :data="chartData"
            />
          </va-card-container>
        </va-card>
      </div>

      <div class="flex md6 xs12">
        <VaSkeletonGroup v-if="isLoading" animation="pulse" :delay="0">
          <SkDashboard2/>
        </VaSkeletonGroup>

        <va-card v-else>
          <va-card-title>
            <span class="va-h6">
              Faro Capital Deuda Global FMIV
            </span>
          </va-card-title>
          <va-card-container>
            <Line
              class="pa-3"
              id="my-chart-id"
              :options="chartOptions"
              :data="chartData"
            />
          </va-card-container>
        </va-card>
      </div>
    </div>
 
</div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { Line } from 'vue-chartjs'

  import SkDashboard1 from '../../../components/skeleton/sk.dashboard1.vue'
  import SkDashboard2 from '../../../components/skeleton/sk.dashboard2.vue'
  import popup from "@/components/popup/Popup.vue";

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Filler,
  } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Filler)


  const isLoading = ref(true)

  const load = () => {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
    }, 2000)
  }

  const onload = onMounted(() => {
    load()
  })

  const chartData = ref({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Data One',
        /*backgroundColor: '#f87979',*/
        data: [40, 39, 10, 40, 39, 80, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3,

      }
    ]
  })

  const chartOptions= {
    responsive: true,
    maintainAspectRatio: false
  }
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
