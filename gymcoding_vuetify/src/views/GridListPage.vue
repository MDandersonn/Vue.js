<template>
<v-container >
    <v-row>
        <v-col v-for="count in 12" :key="count" cols="6" sm="6" md="4" lg="3">
        <!-- sm md lg 사이즈 일때 한 한 컴포넌트가 몇칸을 차지하냐는 의미. -->
        <!-- 이 컬럼의 크기를 몇개만큼 지정할것인지 최대가 12 -->
            <v-card class="pa-3" outlined>
                col
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>