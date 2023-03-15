module.exports ={
  devServer:{
    proxy:{
      '/api':{//api로시작하면 여기로 요청하겟다는의미
        target: 'http://localhost:8080',
        changeOrigin:true,
        pathRewrite:{
          '^/':''
        }
      }
    }
  }
}