<template>
    <tr>
        <td-component
            v-for="(cellData, index) in rowData2" :key="index"
            :cell-data3="cellData"
            :cell-index3="index"
            :row-index3="rowIndex2"
            :table-data3="tableData2"
            :current-turn-shape3="currentTurnShape2"
            @updateTurnShape="updateTurnShape"
            @updateWinner="updateWinner"
            @updateTableData="updateTableData"/>
            <!-- @updateTurnShape은 v-on:updateTurnShape와 동의어
                 updateTurnShape이라는 이벤트가 발생하면
                 updateTurnShape 매서드를 동작시키라는 의미
                 만약 @updateTurnShape="testFunction" 이라면
                 updateTurnShape 이벤트 발생시 testFunction 매서드 동작 -->
    </tr>
</template>

<script>

import TdComponent from './TdComponent.vue';

export default {
    name: "TrComponent",
    components: {
        TdComponent
    },
    props: {
        rowData2: Array,
        rowIndex2: Number,
        tableData2: Array,
        currentTurnShape2: String,
    },
    methods: {
        updateTurnShape (receivedTurnShape) {
            console.log('TrComponent received TdComponent info: ' + receivedTurnShape)
            this.turnShape = receivedTurnShape
            this.$emit('updateTurnShape', this.turnShape)
        },
        updateWinner (receivedWinner) {
            console.log("Tr Component: winner received")
            this.$emit('updateWinner', receivedWinner)
        },
        updateTableData () {
            this.$emit('updateTableData')
        }
    }
}

</script>