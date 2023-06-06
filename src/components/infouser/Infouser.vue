<template>
    <div>  
    <div class="pb-2">
        <span class="va-h6 white va-text-capitalize">
            {{route.name}}
        </span>
    </div>
    <div class="pb-2">
        <span class="va-h4">
        ¡Hola, {{getNameUser}}!
        </span>
    </div>
    <div class="pb-4">
        <span class="va-h6">
        ¡Estás cada vez más cerca de tus metas!
        </span>
        
    </div>
    </div>
</template>

<script setup ts>

    import { computed } from 'vue'
    import { useGlobalStore } from '../../stores/global-store'
    import { storeToRefs } from 'pinia'
    import { onBeforeRouteUpdate, useRoute } from 'vue-router'
    import { state, setUser} from '../../stores/login';

    const route = useRoute();

    const GlobalStore = useGlobalStore()

    // Obtener el estado almacenado en localStorage
    const storedState = localStorage.getItem('store');
    
    if (storedState) {
        // Si hay un estado almacenado, establecerlo en el store
        setUser(JSON.parse(storedState));
    }

    const getNameUser = computed(() => state.user.name);

    const { isSidebarMinimized, userName } = storeToRefs(GlobalStore)

</script>
<style lang="scss" scoped>

</style>