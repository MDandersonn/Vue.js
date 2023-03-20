<template>
  <v-container class="red" fluid>
  <!-- 늘리고싶다면fluid -->
    <v-card class="yellow pa-3">
      <v-row dense>
      <!-- dense: 사이즈가 쫍아짐 -->
        <v-col>
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
        <!-- 컴퍼넌트간 여백주기 -->
        <v-spacer></v-spacer>
        <v-col>
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
      </v-row>
      
      <v-row no-gutters>
      <!-- gap 인 gutters가 없게 -->
        <v-col>
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
        <!-- cols="auto" 해당텍스트만큼의 사이즈를차지. -->
        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
      </v-row>  
    </v-card>
 
    <v-card class="yellow mt-5 pa-5">
    <!-- align: v-row에올수있으며 자식들간의 수직정렬 -->
      <v-row :style="{height:'160px'}" class='green' align="end">
        <v-col>
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
      </v-row>  

      <v-row :style="{height:'160px'}" class='yellow' align="center">
      <!-- align-self : v-col에적용되는 자기자신만 정렬시킴 -->
        <v-col align-self="end">
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
        <v-col align-self="start">
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            Col  
          </v-card>
        </v-col>
      </v-row>  

    </v-card>

    <v-card class="mt-5 pa-3">
      <!-- justify : v-row에서 자식컴퍼넌트들 가로정렬 
      space-around /space-between  균등분할-->
      <v-row justify="end">
    
        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            col 
          </v-card>
        </v-col>

         <v-col cols="auto">
          <v-card class="pa-3" outlined>
            col 
          </v-card>
        </v-col>

         <v-col cols="auto">
          <v-card class="pa-3" outlined>
            col 
          </v-card>
        </v-col>
      </v-row>
    </v-card>


  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>