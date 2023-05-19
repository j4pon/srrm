<template>
    <div class="form-elements">
    <div class="row">
      <div class="flex xs12">
        <va-card>
          <va-card-title>Filtros</va-card-title>
          <va-card-content>    
            <form>
            <div class="row">
                <div class="flex">
                    <va-date-input v-model="filtros.fecha_desde" manual-input label="Fecha Desde"/>
                </div>
                <div class="flex">
                    <va-select
                    v-model="filtros.id_moneda"
                    value-by="description"
                    label="Moneda"
                    text-by="description"
                    :options="data_moneda"
                  />
                </div>
            </div>
            <div class="row">
                <div class="flex">
                    <va-date-input v-model="filtros.fecha_hasta" manual-input label="Fecha Hasta"/>
                </div>
                <div class="flex">
                    <va-input v-model="filtros.nro_voucher" placeholder="" label="Nro Voucher"/>
                </div>
                <div class="flex">
                    <va-input v-model="filtros.glosa" placeholder="" label="Glosa"/>
                </div>
                <div class="flex">
                    <va-button style="margin-right: 0" small @click="_handleBuscar">Buscar</va-button>
                </div>
            </div>
            </form>
          </va-card-content>
          <va-divider />
          <va-card-content>

            <va-data-table :items="dataSource" :columns="columns" :striped="isTableStriped"/>


          </va-card-content>
        </va-card>
      </div>
    </div>
    </div>

</template>

<script setup lang="ts">
import {ref, reactive}from 'vue';
import axios from 'axios';
import '@vuestic/ag-grid-theme'


console.log("skjskjksjkksj")
const data_moneda = ref([
    {
      id: "USD",
      description: 'USD',
    },
  ]);
const filtros = ref({
    fecha_desde: new Date(),
    fecha_hasta: new Date(),
    id_moneda: "",
    nro_voucher: "",
    glosa: "",
});

const dataSource = ref([]);

const isTableStriped = true;

const url = "http://localhost:5000/api/contabilidad/LibroDiario";


const columns = [
    {key:"FECHADET", label:"Fecha Contable" },
    {key:"VOUCHERCAB", label:"Nro. Voucher"},
    {key:"NUMSECDET", label:"N° Secuencia"},
    {key:"CODMONDET", label:"Moneda"},
    {key:"VALCMBDET", label:"Tipo Cambio"},
    {key:"CODCTA", label:"Cuenta Contable"},
    {key:"DESCRIPCION_CUENTA", label:"Desc. Cuenta"},
    {key:"CONCEPDET", label:"Glosa"},
    {key:"DBEDET", label:"Debe" },
    {key:"HBEDET", label:"Haber"},
    {key:"EQUDBE", label:"Equiv. Debe"},
    {key:"EQUHBE", label:"Equi. Haber"},
    {key:"ORIGENDET", label:"Origen"},
    {key:"TRXCODE", label:"Codigo Transaccion"},
    {key:"TIPOPERADET", label:"Producto"},
    {key:"NUMCONDET", label:"Contrato"},
    {key:"CODCLIDET", label:"Cod. Cliente"},
    {key:"SERIE", label:"Serie"},
]

const _handleBuscar = function() {
    try {
        console.log(filtros.value);
        axios({
            method: 'post',
            url: url,
            data: filtros.value
        })
        .then((response)=>{
            console.log(response.data)
            console.log(dataSource)
            dataSource.value = response.data.cursor
        })
        .catch((error)=>{
            console.log(error)
        })
    } catch (error) {
        console.error(error);
    }
};

</script>

<style lang="scss" scoped>

</style>