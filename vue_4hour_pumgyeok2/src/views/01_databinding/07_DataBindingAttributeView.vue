<template>
<div>
   읽기전용:<input type="text"  v-bind:value="userId" readonly />
   <!-- 읽기전용이면 v-model로 양방향바인딩할필요없음
    value속성에 단방향데이터바인딩가능(양방향쓰면 위험함)
    v-bind키워드는 생략이 가능하다. 아래랑 똑같은 의미 
    -->
    <input type="text"  :value="userId" readonly />
    <br>
    단방향바인딩: <input type="text"  :value="userId" />{{userId}}
    <img :src="imgSrc" alt="" style="width:100px; height:auto;">
    <br>
    양방향바인딩:<input type="search" v-model="txt1" />{{txt1}}<br>
    값이없으면 비활성화:<button :disabled="txt1 ===''">조회</button> <br>
    <button>버튼1</button>
    <button disabled>버튼2</button>
    <button disabled="true">버튼3</button>
    <button disabled="false">버튼4</button>
    <button disabled=false>버튼5</button>
    <button disabled=true>버튼6</button>

    <button :disabled=true>버튼7</button>
    <button :disabled="false">버튼8</button>
    <button :disabled=false>버튼9</button>
    <button :disabled="true">버튼10</button>
<!-- v-bind를 해줘야 disabled스위치가 작동하는구나. -->

    <!-- 값이없으면 비활성화시키기 
    txt1값이 비어있으면 true값이 들어감-->
</div>
</template>

<script>
export default {
    data(){
        return{
            userId:'kimyj1215',
            imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAACeCAMAAABw3aRnAAAAxlBMVEVNuof////u7u5DVGbs7Ozt7e38/Pz19fX4+Pjx8fFNvYhDUGVDUmVFuINJuYVNwIlDTWRMs4RCSWNFbG1CRmJLrYJJk3k7tn5EXmlHh3V2xqBGeXFGdHBjwJSByqdKnn1LpoBHf3Pg8OhIjniS0LJDWWhXvI0pN1SIsaNEZGs2RFzP6dzu9/O84c83UmBbcnpCQGGvycDG1NFXenul1r6PpKOkyLokOlJumY14mZW7xsU0Vl/R4duBlZfB2dBqh4imuLaJqqMFos1xAAAM7ElEQVR4nN1d63raOBC1Bb6BbUhIQkICSRzCNrG9vdFu26Vp9/1fan2Tb7I9B+MQqL7+CFRIcxj56Gg0EpKcFLXPGDOWU4kqg7ux2Wsq5r8fdUXj7WoKi4qhJm/o8Wum6LL86ZJoanw3IA2aLvWwXSNpl0lFSM7cIpuQJuNGO3rjG88oQ1KqIOmfn4mWJrQ19tyRGyAxY20Dbnps/m57z19kCNLXf5rbMR8BJ0lruRmSArhpdHVGmNLryyVIFQNP7T8Nm9s5uxoBTtKaISm6Tz9N0smEsGX8zSMhMfUbMYCHkxPalqkjN0MKMM2Ap+mCGHrm4ws58PSXx2ZE5uMFbYk1kylIAUOsaEyDa8JNw+9eHSSV9/OdeCKH1/SDZK9cGpKirwEivyXGjPn0o9ZLStzND4LAe+NbhMDVFJLCIam8GEnRnTnNeqNrmsjlqFktaVbj/ejJGzdUC9c0N1grJ7Wfd2RI/aQY6eBna4nENDgnSK/31zs5bFbR+Sgwko4Sgnr3V/Pnzcdz0km27csaB5C6S+IjMAepPwPcdGNSGmITjbkMUjKwY0ibf8lhBxD4zAsgxe02QlI0FyFyalJ5/hmhyCApeUg/Cd0wfDqnbZgG3IBBYsYCIL0Lyk2XLyETVEN6ocSdeQFww0LGITn0NzQg59vhL8eogeT9oj47OaGfJMnBIQVSD3DTOfVNP/7WaiD9oKbqS5obpGkk7mBIkCKniHz4vm+wdIbN0UP/PaXAr+nerViBV0BS4pIj8X74ygeI/IQi8uevcj9H4nFHAaR3BCLTRIadn5obtZtB0njReYleeIDUG92cUqZ9UgvNRkV1/iYI/MMdMMsuPLXQbNpRThAVp0LXpicn6YYk8nQqzASR950asDd0z8Esq+XNDQQRByBovLTOApB6FJH3nj+p/FlNB8YPatj1AAK3FrqRm+bkJtmaQgKInHaT+cszSpAcisDHiJMkJ2bQrSDJSGiFJPLe7zKkj8STZA6RWXatFfQVCMlDiPyBnDM38QDhkPqfqWXSA8ANc4+1gaT5NKLBCfk0fZELkL5QIRSAwCXJVZVWkJwFoMivKCK/dI3cwHMuCbeeIiGUgMAhSEUSD+oYLwCPS9RSbvhLz5H4zw64QbLdKnNTEs9mQL7qTOcuVUZCK7eUXnt+ida3YZPyyzOlC4HVubVQK81NSiKIgrGejrc+i94JFYYn0ZhOSDe9D0MrgWxVDOc9tfC7QeJcntavNDcu1bI1GqVhHSC0MrrtUd/8xxgS875SHu0Ba9npMniQtBwkSImnkBCpN6CI3Py8iSAZG5rAgWE3C2fv9pBkfwoocip89fyfGipx9T9KCl0CCtzyQ27bAZK67IDIe/9sAkj6C4VoCBC4tYgw7ABJdldkL9KAeJp6w28BJO87SeA0omCWNXaFpC67IPK/AyInxR2y9WItY3HXBEkMTZZifd4KmHDvaSL33lNOuqf7saeu0WxuAIn/ofIFbzYdx29oEJFTu2jm798UL5oIga+5uTzAoJfMVZQmjcd3hiAiJyD1JhOiArJRESjwFFIr2co/BCnyJ8pNlJOeAN2QhFB2hcSYBzDE6IIicqKcXiAErnQECSLy0Sk19JqddAoQ+Mo3uoIkQ8FXiiEaEQFbLwGB691B8oDNTpLImwpC4NZqo7EdISkppECR01KPTIdocNIlPcvaUz+waDtI5XlJS3g+bEZFiJycnGrLKbCWtSSD5SHVz0ukepDDDUrtBYB0MmkJyZxIwCZmtHeu0OaSGi8oEZEjoZVbKu5fU84A3WAtPW5LWHaRrUkzhjsne5VG1MKpugwfkbwaV+4YErTZOXr40AIRwg2Bk+SuISkakg4xuGpB5OMrIAtlrncOKZR6SIx8e9KDZtmpL3cPKagBxMhbuAlxUpb8hEBqjOMlzQT/HfwLiJweeifU9ky5DIHInW25mS2kuY3RVp6dkxQDUeRUwpTgJITAF1rZlqZoK8dWH2ROZ2x5g6RUUnH8kpMuka0XJw140+Y2bGzmZWtSxQAiYIO7bVYZ5ilC4OtMwKW27KrEOSTETdLVNpCu6PbCFONXg9SH0g+pzc48IigLxZdfERLTECJ/gBliDMXA5deF5NILJ0m6Bt00fELWsu7rQjI0JK/tDh13t/TXM13K7SGRJB5WYRCRU3ltiZMmEIHX2kJubArJPmL2T/hChUIr0MLpAzLs1mq9LTU5RJWZXsXUKdbPV4F20ai8trBg3OCFGWJ5cUaau4Vs5VV8WuoN7qjM15AbSEDh/lhkTl+wpRslzqtAoRWayCEnzeMUpNeGJAMJyoNzyk0QgU9dne0FkgwocioChiU4LPX+niA5wC7aqDn4Or6HCJyV7X0tSPqaTqkcnDdtZZgAgds2z1DbEhIWmixW0fvIfNuU+YpktgfcINrCgNCkeDJGOGoiVpF9IPO1gSEgApd8XS/3XGGLeDKGY2sO8xeqhLoKierVnlaFzpZaC5YPeMc9Cxovv7WcmLulbE0HsrPLkUHskJ+r5SAJtnSmxLNnE8l8rUlQxs6ILFWm7BcSQuRS9VaGCRwAtlYO2zckGdlnH1W5yTRHyPkxY/+QPIQhqhKmkOxVa+a8ASTITeciQwwngLiT/LD3nSHVLROVuioIQ9wK2zMfEHE3i2dQvWwLFJqskAaAeoheOkCMfFCWeuN7YOvFSvJqRGnQ4cZmoUp82pfpgJukUuar2UNCKDz5qZ3G2wESg86i3RchIRlqafLT/iFp259FOwOOH1hr3vX+ITGIyC9ymM6Q5KdZdrPC/iGpLu0m6STbnhleAvtjkpv2/BaQdCT4+sAZwuwhIZSFODW2glTYKSxDUkpVdD7nqrIHEER60gQ6IzJ1hbtkREhKEyS+cBIuLxBXW4ZQRVdlZJ/9Lt6egRIcpr6G2NJQZduYeLFKMM8xnMgxAtdCtZN01E49ZHUSB8IaLxoYio5IvUGY+Wo+DRBxJ6d3kexftiZjHTpU/BAQ+RlyyG/hHQAkZL6VAjcNnwBxZ0dZKG8NiSH77KOL0zEyy8bJT28PySVNDcolkvy0cg4DEkP22aVz5OKQJPmpM0jCmYt+lttaqJKf58JPMCT4CrCdNVc5JCFxNdm1E2wRzVWkbbYMhTeSd/Q1sBiki+WrdR1ts/2KxMSFODRf+KaaCVHkNKIlY+JUTtnS7aqWpbeIyAiREyVQ4Hr5+XgLJZ5+CCByCtJSL96+9LaQVA1ZODUjWqXJT4cByYCIvKmEIZTDgqSoyEmT+mKt5EODxAxAkdcX2/K7gwSQeE1oMkfi4U1xyFm0eidFV/eV7ptrS+J0lm66gFSFKnquirwDQ9grV29MwRVsaaiS13hxcnJ+p7AsiOIqhatzoyrRd6YCd77WOkkLGsquo0yUmHiSR7BFNLfxECoft+UqZdnKnzLkCEO1k+bh1gsr37D5hko8S5hqSeTTaOvlICGpViuGsG09f2PMQUGS3TaKPDx3zg4WktpGkVuz5J6kg4Qku8g+ewnRytVeC1JdrK92YzOb57JJePv5dro0yq3sGJrkRzdz0iB5p5xPKlbJa7xkCb81kdvzjdhKNgqEPNuyLZ3ktlbLVj4MtiXygMDTjnCN1xjm7whS2pOOxMhzTlpprPzEHIoST42BjjCkiKZrvd/CS/uFhGS+psVaGiKvHR4k5I517iTJOQpI0DU/MSJ7XZUpdCCQ8nc2e8Dl3TGkeWXy066M1+28FFfxQTdZa6N6dsu+3rp5qRjDLs5L/I9u1ENUhWnIVYHZAWCxlTfd2Kwckhrmpumm1MpBytbk5xEghuCXAxwFJGZs6NCKbTvlVg4ZEtPI7RnbWgutHDQkw6GIPDnkdzyQgH12XxVa6R7SjnG8CFK239i8cLLnmQCPZ5/Cz8rsFMfrLNpaqkIcYZi6aqtQKhJt7ZfnubYx8eLEp/cb1+whgYsddRQT5yOwO9maVDHc+sWgFSY4pB0dqGwVITUQeUzgRwip/scyYgI/Qkis7scybMmt7ugIINWkQ8QZakfpJUVzqyG5xY66hgSQOJ2dUkXi0Xqnyk3TZV1HHZF4FzlE9VU88Wmypb5e/Rn0fgYqh4hja5/plb+qQGhFXAxO/fhTmdpJWykJoraZXlmdZEx2IltT1EJoxZo55UfoOJR42pNaInJ75fNbe48VUvkSj/ga+uOGVN7sdER7jw2SVrjmJyDw/K8KHymk/O+Qhtdz7RNSXayv+cxFceKrqmJkeW1hirEuxB27Dk3ueDKmVEVsRVczhgi5IauibdGKYEvTyRju45bnl5LvrPhrk3JOBoZfNN9nX/msGLgodSS00u78Eh+BryBb0ypavGYPU4yrIB2REk+9lFw7YG+0PwdSdPY7+vmaPweSvLLtlVKy98gh+dPkR+L+HEj6bOb9YV6Sfd8o2/tKkP4HBoGYSN2MzcAAAAAASUVORK5CYII=',
            txt1:''

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
 