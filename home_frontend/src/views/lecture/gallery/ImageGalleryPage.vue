<template>
  <v-container>
    <v-row>
      <v-col v-for="image in images" :key="image" cols="3">
      <!-- 한개가 12칸중 3칸을 차지하라는말 -->
        <v-img :src="image" aspect-ratio="1" class="grey lighten-2">
          <!-- 로딩중 뜨게하는 것 시작부(template내부) -->
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center"  justify="center" >
            <!-- align="center" : 로딩중(동그라미)가 사진의 세로정렬
             justify="center" 로딩중이 사진의 가로정렬-->
              <v-progress-circular indeterminate color="grey lighten-5"/>
            </v-row>
          </template>
          <!-- 로딩중뜨게하는것  종료부 -->
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: "ImageGalleryPage",
    data () {
        return {
            images: [
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),
                require('@/assets/uploadImgs/mario.png'),
                require('@/assets/uploadImgs/link.jpg'),
                require('@/assets/uploadImgs/mario_game.jpg'),

            ]
        }
    }
}
</script>

<style>
</style>