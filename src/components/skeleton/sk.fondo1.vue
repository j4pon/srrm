<template>
    <VaCard>
        <VaSkeleton variant="squared" height="3rem" />
        <va-card-content style="display: flex; align-items: center;">
            <div class="row row-equal">
            <div class="flex md6 xs6">
                <div style="display: flex; align-items: center;">
                <VaSkeleton variant="rounded" class="mr-2" inline width="5rem" height="3rem" />
                <VaSkeleton  variant="text" :lines="2" height="5rem"/>
                </div>              
            </div>
            <div class="flex md6 xs6">
                <div style="display: flex; align-items: center;">
                <VaSkeleton variant="rounded" class="mr-2" inline width="5rem" height="3rem" />
                <VaSkeleton  variant="text" :lines="2" height="5rem"/>
                </div>              
            </div>
            </div>
        </va-card-content>
    </VaCard>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>