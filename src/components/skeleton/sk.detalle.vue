<template>
    <div class="row row-equal">
        <div class="flex md12 xs12">
            <VaCard>
                <VaSkeleton variant="squared" height="3rem" />
                <va-card-content style="display: flex; align-items: center;">
                <div class="row row-equal">
                    <div class="flex flex-col md4 xs4">
                    <div style="display: flex; align-items: center;">
                        <VaSkeleton  variant="text" :lines="2" height="5rem"/>
                    </div>              
                    </div>
                    <div class="flex flex-col md4 xs4">
                    <div style="display: flex; align-items: center;">
                        <VaSkeleton  variant="text" :lines="2" height="5rem"/>
                    </div>              
                    </div>
                    <div class="flex flex-col md4 xs4">
                    <div style="display: flex; align-items: center;">
                        <VaSkeleton  variant="text" :lines="2" height="5rem"/>
                    </div>              
                    </div>

                </div>
                </va-card-content>
            </VaCard>
        </div>

        <div class="flex md12 xs12">
            <va-card>
                <VaSkeleton variant="squared" height="3rem" />
                <va-card-content>
                    <VaSkeleton  variant="text" :lines="3" height="5rem"/>
                    <div class="row row-equal">
                        <div class="flex md4 xs4">
                            <va-card gradient color="backgroundPrimary">
                                <va-card-content>
                                    <VaSkeleton  variant="text" :lines="2" height="5rem"/>
                                </va-card-content>
                            </va-card>  

                        </div>
                        <div class="flex md8 xs8">
                            <va-card gradient color="backgroundPrimary">
                                <va-card-content>
                                    <VaSkeleton  variant="text" :lines="3" height="5rem"/>
                                </va-card-content>
                            </va-card>  
                        </div>
                    </div>
        
                </va-card-content>
            </va-card>
        </div>

        <div class="flex md6 xs12">
            <va-card>
                <VaSkeleton variant="squared" height="3rem" />
                <va-card-content>
                    <va-card-content style="display: flex; align-items: center;">
                        <VaSkeleton variant="squared" height="10rem" />
                    </va-card-content>                            
                </va-card-content>
            </va-card>
        </div>

        <div class="flex md6 xs12">
            <va-card>
                <VaSkeleton variant="squared" height="3rem" />
                <va-card-content>
                    <va-card-content style="display: flex; align-items: center;">
                        <VaSkeleton variant="squared" height="10rem" />
                    </va-card-content>
                </va-card-content>
            </va-card>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>