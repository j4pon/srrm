<template>
  <div class="app-layout">
    <navbar />
    <div class="app-layout__content">
      <div class="app-layout__sidebar-wrapper" :class="{ minimized: isSidebarMinimized }">
        <div v-if="isFullScreenSidebar" class="d-flex justify-end">
          <va-button class="px-4 py-4" icon="md_close" preset="plain" color="dark" @click="onCloseSidebarButtonClick" />
        </div>
        <sidebar
          :width="sidebarWidth"
          :minimized="isSidebarMinimized"
          :minimized-width="sidebarMinimizedWidth"
          :animated="!isMobile"
        />
      </div>
      <div class="app-layout__page">

        <div class="info-overflow-visible info-full info-h info-background">

        <div class="layout fluid va-gutter-5">

          <div>
            <div class="pb-2">
              <span class="va-h6 white">
                Dashboard
              </span>
            </div>
            <div class="pb-2">
              <span class="va-h4">
                ¡Hola, Carlos!
              </span>
            </div>
            <div class="pb-4">
              <span class="va-h6">
                ¡Estás cada vez más cerca de tus metas!
              </span>
              
            </div>
          </div>


          <router-view />
        </div>

      </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { onBeforeRouteUpdate } from 'vue-router'

  import { useGlobalStore } from '../stores/global-store'

  import Navbar from '../components/navbar/Navbar.vue'
  import Sidebar from '../components/sidebar/Sidebar.vue'

  const GlobalStore = useGlobalStore()

  const mobileBreakPointPX = 640
  const tabletBreakPointPX = 768

  const sidebarWidth = ref('16rem')
  const sidebarMinimizedWidth = ref(undefined)

  const isMobile = ref(false)
  const isTablet = ref(false)
  const { isSidebarMinimized } = storeToRefs(GlobalStore)
  const checkIsTablet = () => window.innerWidth <= tabletBreakPointPX
  const checkIsMobile = () => window.innerWidth <= mobileBreakPointPX

  const onResize = () => {
    isSidebarMinimized.value = checkIsTablet()

    isMobile.value = checkIsMobile()
    isTablet.value = checkIsTablet()
    sidebarMinimizedWidth.value = isMobile.value ? '0' : '4.5rem'
    sidebarWidth.value = isTablet.value ? '100%' : '16rem'
  }

  onMounted(() => {
    window.addEventListener('resize', onResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
  })

  onBeforeRouteUpdate(() => {
    if (checkIsTablet()) {
      // Collapse sidebar after route change for Mobile
      isSidebarMinimized.value = true
    }
  })

  onResize()

  const isFullScreenSidebar = computed(() => isTablet.value && !isSidebarMinimized.value)

  const onCloseSidebarButtonClick = () => {
    isSidebarMinimized.value = true
  }
</script>

<style lang="scss">
  $mobileBreakPointPX: 640px;
  $tabletBreakPointPX: 768px;

  .info-overflow-visible{
    overflow: visible;
    color: white;
  }
  .info-h{
    height: 13rem;
  }
  .info-full{
    width: 100%;
  }
  .info-background{
    background: linear-gradient(91deg, rgb(80, 19, 191) -59.96%, rgb(0, 204, 153) 122.1%);
  }
  .app-layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
    &__navbar {
      min-height: 4rem;
    }

    &__content {
      display: flex;
      height: calc(100vh - 4rem);
      flex: 1;

      @media screen and (max-width: $tabletBreakPointPX) {
        height: calc(100vh - 6.5rem);
      }

      .app-layout__sidebar-wrapper {
        position: relative;
        height: 100%;
        background: #ffffff;

        @media screen and (max-width: $tabletBreakPointPX) {
          &:not(.minimized) {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            z-index: 999;
          }

          .va-sidebar:not(.va-sidebar--minimized) {
            .va-sidebar__menu {
              padding: 0;
            }
          }
        }
      }
    }
    &__page {
      flex-grow: 2;
      overflow-y: scroll;
    }
  }
</style>
