<template>
  <v-container>
    <div>
      <v-carousel :cycle="cycle" :interval="interval" :height="height" v-model="model">
      <!-- interval은 말 그대로 인터발(HW에서 주로 사용하는 용어)인데
일정 시간을 기다렸다가 다시 반복되는 일종의 주기 같은 것이라 보면 되겠습니다.
그러므로 2.5초마다 넘어가는 것이죠. -->
        <v-carousel-item v-for="(picture, idx) in pictures" :key="idx">
          <v-sheet :height="height" tile>
          <!-- tile을 보면 해당 컴포넌트의 border-radius 속성을 제거한다 기본 값은 false
           -->
            <v-row class="fill-height"  align="center" justify="center">
              <div class="text-h2">
                <v-img :src="picture.img" :height="height"  contain/>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>

<script>
export default {
    name: "CarouselPage",
    data () {
        return {
            model: 0,
            pictures: [
                { img: require("@/assets/carousel/link.jpg") },
                { img: require("@/assets/carousel/mario_game.jpg") },
                { img: require("@/assets/carousel/mario.png") },
            ],
            cycle: true,
            interval: 2500, // ms 단위
            height: 1500,
        }
    }
}
</script>

<style>
</style>