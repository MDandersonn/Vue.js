<template>
<div>
    <div>
        <select name="" id="">
            <!-- 기본값은 빈칸으로. -->
            <option value=""></option>
            <!-- for문 이용 배열수만큼 자동적으로 반복문이 돈다-->
            <option value="city.code" :key="city.code" v-for="city in cities">
                {{city.title}}
            </option>
<!-- key를 바인딩시켜줌 key는 유일한키값이 와야함 -->
        </select>
    </div>
    <div>
        <table>
            <table>
                <thead>
                    <tr>
                        <th>도시</th>
                        <th>코드</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="idx" v-for="(city,idx) in cities">
                        <td>{{city.title}}</td>
                        <td>{{city.code}}</td>
                    </tr>
                </tbody>
            </table>
        </table>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            cities:[
                {title:'서울', code:'02'},
                {title:'부산', code:'051'},
                {title:'제주', code:'064'}
            ]
        }
    },
    methods: {

    }
}
</script>


<style scoped>
input{
    border:1px solid red;
}
</style>
 