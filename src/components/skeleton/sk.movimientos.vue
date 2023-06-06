<template>
    <VaCard>
        <VaSkeleton variant="squared" height="3rem" />
        <va-card-content style="display: flex; align-items: center;">
        <div class="row row-equal">
            <div class="flex flex-col md3 xs3">
            <div style="display: flex; align-items: center;">
                <VaSkeleton  variant="text" :lines="2" height="5rem"/>
            </div>              
            </div>
            <div class="flex flex-col md3 xs3">
            <div style="display: flex; align-items: center;">
                <VaSkeleton  variant="text" :lines="2" height="5rem"/>
            </div>              
            </div>
            <div class="flex flex-col md3 xs2">
            <div style="display: flex; align-items: center;">
                <VaSkeleton  variant="text" :lines="2" height="5rem"/>
            </div>              
            </div>
            <div class="flex flex-col md3 xs3">
            <div style="display: flex; align-items: center;">
                <VaSkeleton  variant="text" :lines="2" height="5rem"/>
            </div>              
            </div>
        </div>
        </va-card-content>
        <va-divider class="mr-3 ml-3"/>
        <va-card-content style="display: flex; align-items: center;">
            <div class="row row-equal">
                <div class="flex flex-col md3 xs3">
                <div style="display: flex; align-items: center;">
                    <VaSkeleton  variant="text" :lines="2" height="5rem"/>
                </div>              
                </div>
                <div class="flex flex-col md3 xs2">
                <div style="display: flex; align-items: center;">
                    <VaSkeleton  variant="text" :lines="2" height="5rem"/>
                </div>              
                </div>
                <div class="flex flex-col md3 xs3">
                <div style="display: flex; align-items: center;">
                    <VaSkeleton  variant="text" :lines="2" height="5rem"/>
                </div>              
                </div>
                <div class="flex flex-col md3 xs3">
                <div style="display: flex; align-items: center;">
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