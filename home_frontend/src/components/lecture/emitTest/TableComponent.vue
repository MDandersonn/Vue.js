<template>
    <table>
        <tr-component
            v-for="(rowData, index) in tableData1" :key="index"
            :row-data2="rowData"
            :row-index2="index"
            :table-data2="tableData1"
            :current-turn-shape2="currentTurnShape1"
            @updateTurnShape="updateTurnShape"
            @updateWinner="updateWinner"
            @updateTableData="updateTableData"/>
    </table>
</template>

<script>

import TrComponent from './TrComponent.vue';

export default {
    name: "TableComponent",
    data () {
        return {

        }
    },
    components: {
        TrComponent
    },
    props: {
        tableData1: Array,
        currentTurnShape1: String,
    },
    methods: {
        updateTurnShape (passingValue) {
            console.log('TableComponent received TrComponent info: ' + passingValue)
            this.turnShape = passingValue
            this.$emit('updateTurnShape', this.turnShape)
        },
        updateWinner (receivedWinner) {
            console.log("Table Component: winner received")
            this.$emit('updateWinner', receivedWinner)
        },
        updateTableData () {
            this.$emit('updateTableData')
        }
    }
}

</script>