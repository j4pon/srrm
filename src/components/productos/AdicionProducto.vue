<template>
    <div class="flex md12">
        <h3>Detalle de la Compra</h3>
        <va-divider/>
        <div class="row">
            <va-spacer/>
            <va-button icon="material-icons-add" @click="agregarFila()" />
        </div>
        <div class="row">
            <table class="va-table" width="100%">
            <thead>
                <tr>
                <th width="15%">Nombre Fabricante</th>
                <th width="15%">Nombre del producto</th>
                <th width="5%">Cantidad</th>
                <th width="5%">Precio S/</th>
                <th width="5%">Cantidad S/</th>
                <th width="10%" style="text-align: right;">Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(fila, index) in filas" :key="index">

                <td>
                    <div style="max-width: 200px;">
                    <va-select
                    v-model="props.filas[index].fabricante"
                    :options="fabricanteOptions"
                    label="Fabricante"
                    />
                    </div>
                </td>
                <td>
                    <div style="max-width: 200px;">
                    <va-select
                    v-model="filas[index].producto"
                    :options="fabricanteOptions"
                    label="Producto"
                    />
                    </div>
                </td>
                <td>
                    <div style="max-width: 100px;">
                    <va-input v-model="props.filas[index].cantidad" label="" mask="numeral"/>
                    </div>
                    
                </td>
                <td>
                    <div style="max-width: 100px;">
                    <va-input v-model="props.filas[index].precio" label="" mask="numeral"/>
                    </div>
                    
                </td>
                <td>
                    <div style="max-width: 100px;">
                    <va-input v-model="props.filas[index].monto" readonly label="" mask="numeral"/>
                    </div>
                </td>
                <td style="text-align: right;">
                    <va-button icon="material-icons-close" @click="eliminarFila(index)"/>
                </td>

                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>

    import { ref } from 'vue'
    import Producto from '../../interfaces/Model'
    
    const fabricanteOptions = ref([])

    const props = withDefaults(
      defineProps<{
        eliminarFila?: Function,
        filas?:Array<Producto>,
        defaultItem?:Producto
      }>(),
      {
        filas: () => [],
      },
    )

    
    const agregarFila = () => {
      props.filas.push(Object.assign({}, props.defaultItem));
    };

    const eliminarFila = (index: number) => {
      props.filas.splice(index, 1);
    };
</script>

<style lang="scss" scoped>

</style>