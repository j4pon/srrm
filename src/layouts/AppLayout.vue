<template>
  <div class="app-layout">
    <div class="app-layout__content">
      <div class="app-layout__sidebar-wrapper" :class="{ minimized: isSidebarMinimized }">
        <Sidebar
          :width="sidebarWidth"
          :minimized="isSidebarMinimized"
          :minimized-width="sidebarMinimizedWidth"
          :animated="!isMobile"/>
      </div>
      <div class="app-layout__page">
        
        <div class="info-overflow-visible info-full info-h info-background">
          <div class="layout fluid va-gutter-5">
            <Navbar @onchangeMinimized="minimizedChanged" />
            <Infouser/>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { onBeforeRouteUpdate } from 'vue-router'
  import { useGlobalStore } from '../stores/global-store'
  import state from '../stores/login';

  import Sidebar from '../components/sidebar/Sidebar.vue'
  import Navbar from '../components/navbar/Navbar.vue'
  import Infouser from '../components/infouser/Infouser.vue'

  const GlobalStore = useGlobalStore();
  
  const { isSidebarMinimized } = storeToRefs(GlobalStore)

  // Guardar el estado del store en localStorage antes de actualizar la página
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('store', JSON.stringify(state.user));
  });

  // Limpiar el almacenamiento antes de que se desmonte el componente
  onBeforeUnmount(() => {
    localStorage.removeItem('store');
  });

  const mobileBreakPointPX = 640
  const tabletBreakPointPX = 768

  const checkIsTablet = () => window.innerWidth <= tabletBreakPointPX
  const checkIsMobile = () => window.innerWidth <= mobileBreakPointPX
  const isMobile = ref(false)
  const isTablet = ref(false)
  const sidebarWidth = ref('16rem')
  const sidebarMinimizedWidth = ref(undefined)

  const minimizedChanged = function(value:boolean){
    isSidebarMinimized.value = value
  }

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

</script>

<style lang="scss">
  $mobileBreakPointPX: 640px;
  $tabletBreakPointPX: 768px;

  .info-overflow-visible{
    overflow: visible;
    color: white;
  }
  .info-h{
    height: 17rem;
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