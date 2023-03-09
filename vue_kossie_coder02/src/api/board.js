import axios from "axios";
const BASE_URL='https://jsonplaceholder.typicode.com/';

export default{
    //서버에서 원하는 게시물의 데이터만 가져오기
    //함수설정
    getArticle: function(id){
        return axios.get(BASE_URL+`posts/${id}`);
    },

    getArticles:function(page){
        console.log("page",page);
        return axios.get(BASE_URL+`posts`);
    },
    
    //게시물을 올리기
    postArticle:function(userId1,title1,body1){
        return axios.post(BASE_URL+`posts`, 
            {userId:userId1,
                title:title1,
                body:body1,

            });

    }

}