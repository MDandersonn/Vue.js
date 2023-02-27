<template>
    <div>
        <table>
            <tr v-for="data in articles" :key="data.id">
                <td>{{ data.id }}</td>
                <td>{{ data.userId }}</td>
                <td>{{ data.title }}</td>
            <!-- :(v-bind:)는 외부의데이터를 바인딩해서 데이터가 달라질때 테이블에 표시될 내용도 다시 렌더링하겠다는의미  -->
            </tr>
        </table>
        
    </div>
    
</template>
<style scoped>
table{
    color:red;
}
</style>
<script>
import apiBoard from '@/api/board';
export default {
    data(){
        return{
            articles:null
        }
    },
    mounted(){
        apiBoard.getArticle(1)
        .then(function(response){
            console.log("getArticle",response);
        })//데이터를성공적으로 가져왔을때 코드  //response는 가져온데이터
        .catch(function(e){
            console.log(e);
        });//에러났을때 처리코드

// 화살표함수의 this는 뷰객체를 가르키는데 이를 이용하기위해서  아래의 함수들을 화살표함수로 바꾸는걸추천함

        apiBoard.getArticles(0)
        .then((response) => {
            console.log("getArticles",response);
            this.articles= response.data;// 서버에서 리턴받은 데이터를 데이터변수로 저장.
        })//데이터를성공적으로 가져왔을때 코드  //response는 가져온데이터
        .catch(function(e){
            console.log(e);

        });//에러났을때 처리코드

        apiBoard.postArticle("id","title","body")//status200번대면 성공한거
        .then(function(response){
            console.log("postArticle",response);
        })//데이터를성공적으로 가져왔을때 코드  //response는 가져온데이터
        .catch(function(e){
            console.log(e);
        });//에러났을때 처리코드
    }

}
</script>

<style>

</style>