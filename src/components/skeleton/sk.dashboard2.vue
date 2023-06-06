<template>
    <VaCard>
        <VaSkeleton variant="squared" height="3rem" />
        <va-card-content style="display: flex; align-items: center;">
        <VaSkeleton  variant="text" :lines="1" height="5rem"/>
        </va-card-content>
        <va-card-content style="display: flex; align-items: center;">
        <VaSkeleton variant="squared" height="10rem" />
        </va-card-content>
    </VaCard>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>