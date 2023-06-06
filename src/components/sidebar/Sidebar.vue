<template>
    <div  :class="[minimized ? 'pl-3': 'pl-4']" class="pt-3">
        <router-link to="/">
          <img src="@/assets/logo_color.png" height="20" v-if="!minimized"/>
          <img src="@/assets/logo_minimized.png" height="20" v-else/>
        </router-link>
    </div>
    <va-divider></va-divider>
    <va-sidebar
        color="backgroundSecondary"
        active-class = "activeMenuSidebar"
        :minimized="minimized"
        minimized-width="64px"
    >
        <MenuAccordion v-if="!minimized" :items="items"/>
        <MenuMinimized v-else :items="items" />
    </va-sidebar>          
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import NavigationRoutes from './NavigationRoutes'
    import MenuAccordion from './menu/MenuAccordion.vue'
    import MenuMinimized from './menu/MenuMinimized.vue'

    withDefaults(
        defineProps<{
        width?: string
        color?: string
        animated?: boolean
        minimized?: boolean
        minimizedWidth?: string
        }>(),
        {
        width: '16rem',
        color: 'secondary',
        animated: true,
        minimized: true,
        minimizedWidth: undefined,
        },
    )

    const items = ref(NavigationRoutes.routes)

</script>

<style lang="scss" scoped>
.va-collapse + .va-collapse {
  border-top: 1px solid var(--va-background-element);
}

.nav-item {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  color: black !important;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #c0c0c0;
  }
}
</style>