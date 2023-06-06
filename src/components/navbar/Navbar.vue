<template>
  <div class="row">
    <div class="flex flex-col xs2">
      <div class="item">

        <va-icon-menu-collapsed
          :class="{ 'x-flip': !isSidebarMinimized }"
          class="va-navbar__item"
          :color="colors.backgroundSecondary"
          @click="isSidebarMinimized = !isSidebarMinimized"
        />

        <!-- 
          metodo checkbox usando computed y emit
          <va-checkbox
            v-model="checkMinimized"
            class="mt-2"
            label="Minimized"
          />
        -->

      </div>
    </div>
    <div class="flex flex-col xs2 offset-lg8 offset-xs8">
      <app-navbar-actions class="app-navbar__actions md5 lg4" :user-name="userName" />
    </div>
  </div>    
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useColors } from 'vuestic-ui'
    import { useGlobalStore } from '../../stores/global-store'
    import AppNavbarActions from './components/AppNavbarActions.vue'
    import VaIconMenuCollapsed from '../icons/VaIconMenuCollapsed.vue'

    const GlobalStore = useGlobalStore()

    const emit = defineEmits<{
        (event: 'onchangeMinimized', value: boolean): void,
    }>();

    const { isSidebarMinimized, userName } = storeToRefs(GlobalStore)

    const minimized = ref(false);
    /* 
    metodo checkbox usando computed y emit

    const checkMinimized = computed<boolean>({
        get(){
            return minimized.value;
        },
        set(value){
            minimized.value = value;
            emit('onchangeMinimized', value)
        }
    })
    */
    const { getColors } = useColors()
    const colors = computed(() => getColors())
</script>

<style lang="scss" scoped>
.navbar-transparent{
    background-color: none;
}
.va-navbar{
    background-color: none;
}
.x-flip {
    transform: scaleX(-100%);
  }
</style>