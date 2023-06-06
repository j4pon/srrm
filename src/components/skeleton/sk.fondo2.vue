<template>
    <VaCard>
        <va-card-title class="pb-0">
            <VaSkeleton  variant="text"  :lines="1" width="2rem" height="3rem"/>
        </va-card-title>
        <va-divider/>
        <va-card-content style="display: flex; align-items: center;">
            <div class="row row-equal">
            <div class="flex flex-col md1 xs2">
                <div style="display: flex; align-items: center;">
                <VaSkeleton variant="rounded" class="mr-2" inline width="3rem" height="2rem" />
                </div>              
            </div>
            <div class="flex flex-col md4 xs3">
                <div style="display: flex; align-items: center;">
                <VaSkeleton  variant="text" :lines="2" height="5rem"/>
                </div>              
            </div>
            <div class="flex flex-col md3 xs3">
                <div style="display: flex; align-items: center;">
                <VaSkeleton  variant="text" :lines="2" height="5rem"/>
                </div>              
            </div>
            <div class="flex flex-col md2 xs3">
                <div style="display: flex; align-items: center;">
                <VaSkeleton  variant="text" :lines="2" height="5rem"/>
                </div>              
            </div>
            <div class="flex flex-col md2 xs1">
                <div style="display: flex; align-items: center;">
                <VaSkeleton variant="rounded" inline width="3rem" height="2rem" />
                </div>              
            </div>
            </div>
        </va-card-content>`
    </VaCard>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>