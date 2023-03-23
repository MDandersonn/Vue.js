<template>
  <div>
    <!-- 색상 -->
    <div class="purple darken-2 text-center">
      <span class="white--text">Lorem ipsum</span>
    </div>
    <!--인라인 -->
    <div>
      <div class="d-inline pa-2 deep-purple accent-4 white--text">d-inline</div>
      <div class="d-inline pa-2 black white--text">d-inline</div>
    </div>
    <!-- 블록 -->
    <div>
      <div class="d-block pa-2 deep-purple accent-4 white--text">d-block</div>
      <div class="d-block pa-2 black white--text">d-block</div>
    </div>
    <br />
    <!-- elevation -->
    <v-container>
      <v-row justify="center">
        <v-col v-for="n in 25" :key="n" cols="auto">
          <v-card :elevation="n - 1" height="100" width="100" class="secondary">
            <v-row
              class="fill-height"
              align="center"
              justify="center"
              v-text="n - 1"
            ></v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <br />
    <!-- flex -->
    <div>
      <v-card
        class="d-flex flex-row mb-6"
        :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
        flat
        tile
      >
        <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
          Flex item {{ n }}
        </v-card>
      </v-card>
      <v-card
        class="d-flex flex-row-reverse"
        :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
        flat
        tile
      >
        <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
          Flex item {{ n }}
        </v-card>
      </v-card>
      <br />
      felx justify
      <!-- felx justify -->
      <div>
        <v-card
          class="d-flex justify-start mb-6"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
        >
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
            justify-start
          </v-card>
        </v-card>

        <v-card
          class="d-flex justify-end mb-6"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
        >
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
            justify-end
          </v-card>
        </v-card>

        <v-card
          class="d-flex justify-center mb-6"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
        >
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
            justify-center
          </v-card>
        </v-card>

        <v-card
          class="d-flex justify-space-between mb-6"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
        >
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
            justify-space-between
          </v-card>
        </v-card>

        <v-card
          class="d-flex justify-space-around mb-6"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
        >
          <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
            justify-space-around
          </v-card>
        </v-card>
      </div>
    </div>

    <!-- flex align -->
    <br />
    flex align
    <div>
      <v-card
        class="d-flex align-start mb-6"
        color="grey lighten-2"
        flat
        height="100"
        tile
      >
        <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
          align-start
        </v-card>
      </v-card>

      <v-card
        class="d-flex align-end mb-6"
        color="grey lighten-2"
        flat
        height="100"
        tile
      >
        <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
          align-end
        </v-card>
      </v-card>

      <v-card
        class="d-flex align-center mb-6"
        color="grey lighten-2"
        flat
        height="100"
        tile
      >
        <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
          align-center
        </v-card>
      </v-card>

      <v-card
        class="d-flex align-baseline mb-6"
        color="grey lighten-2"
        flat
        height="100"
        tile
      >
        <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
          align-baseline
        </v-card>
      </v-card>

      <v-card
        class="d-flex align-stretch mb-6"
        color="grey lighten-2"
        flat
        height="100"
        tile
      >
        <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
          align-stretch
        </v-card>
      </v-card>
    </div>
    <br />
    <!-- flex self align -->
    flex self align
    <div>
      <v-card class="d-flex mb-6" color="grey lighten-2" flat height="100" tile>
        <v-card class="pa-2" outlined tile> flex item </v-card>

        <v-card class="pa-2 align-self-start" outlined tile>
          Aligned start
        </v-card>

        <v-card class="pa-2" outlined tile> flex item </v-card>
      </v-card>

      <v-card class="d-flex mb-6" color="grey lighten-2" flat height="100" tile>
        <v-card class="pa-2" outlined tile> flex item </v-card>

        <v-card class="pa-2 align-self-center" outlined tile>
          Aligned center
        </v-card>

        <v-card class="pa-2" outlined tile> flex item </v-card>
      </v-card>

      <v-card class="d-flex mb-6" color="grey lighten-2" flat height="100" tile>
        <v-card class="pa-2" outlined tile> flex item </v-card>

        <v-card class="pa-2 align-self-end" outlined tile> Aligned end </v-card>

        <v-card class="pa-2" outlined tile> flex item </v-card>
      </v-card>

      <v-card class="d-flex mb-6" color="grey lighten-2" flat height="100" tile>
        <v-card class="pa-2" outlined tile> flex item </v-card>

        <v-card class="pa-2 align-self-baseline" outlined tile>
          Aligned baseline
        </v-card>

        <v-card class="pa-2" outlined tile> flex item </v-card>
      </v-card>

      <v-card class="d-flex mb-6" color="grey lighten-2" flat height="100" tile>
        <v-card class="pa-2" outlined tile> flex item </v-card>

        <v-card class="pa-2 align-self-auto" outlined tile>
          Aligned auto
        </v-card>

        <v-card class="pa-2" outlined tile> flex item </v-card>
      </v-card>

      <v-card class="d-flex mb-6" color="grey lighten-2" flat height="100" tile>
        <v-card class="pa-2" outlined tile> flex item </v-card>

        <v-card class="pa-2 align-self-stretch" outlined tile>
          Aligned stretch
        </v-card>

        <v-card class="pa-2" outlined tile> flex item </v-card>
      </v-card>
    </div>
    <br />
    auto margin
    <!-- auto margin-->
    <div>
      <v-card class="d-flex mb-6" color="grey lighten-2" flat tile>
        <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
          Flex item
        </v-card>
      </v-card>

      <v-card class="d-flex mb-6" color="grey lighten-2" flat tile>
        <v-card class="pa-2 mr-auto" outlined tile> Flex item </v-card>

        <v-card class="pa-2" outlined tile> Flex item </v-card>

        <v-card class="pa-2" outlined tile> Flex item </v-card>
      </v-card>

      <v-card class="d-flex" color="grey lighten-2" flat tile>
        <v-card class="pa-2" outlined tile> Flex item </v-card>

        <v-card class="pa-2" outlined tile> Flex item </v-card>

        <v-card class="pa-2 ml-auto" outlined tile> Flex item </v-card>
      </v-card>
    </div>
    <!-- overflow -->
      <v-row>
    <v-col cols="auto">
      <v-card width="200" height="200" class="overflow-auto">
        <v-card-text>
          <h3>Overflow Auto</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          facilis dicta esse molestias vero hic laudantium provident nisi eos
          quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum
          voluptates?
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="auto">
      <v-card width="200" height="200" class="overflow-hidden">
        <v-card-text>
          <h3>Overflow Hidden</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          facilis dicta esse molestias vero hic laudantium provident nisi eos
          quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum
          voluptates?
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="auto">
      <v-card width="200" height="200" class="overflow-visible">
        <v-card-text>
          <h3>Overflow visible</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          facilis dicta esse molestias vero hic laudantium provident nisi eos
          quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum
          voluptates?
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
<br><br>
  <!-- helper class -->
  <!-- 
t - applies the spacing for margin-top and padding-top
b - applies the spacing for margin-bottom and padding-bottom
l - applies the spacing for margin-left and padding-left
r - applies the spacing for margin-right and padding-right
s - applies the spacing for margin-left/padding-left (in LTR mode) and margin-right/padding-right (in RTL mode)
e - applies the spacing for margin-right/padding-right (in LTR mode) and margin-left/padding-left (in RTL mode)
x - applies the spacing for both *-left and *-right
y - applies the spacing for both *-top and *-bottom
a - applies the spacing for the property in all directions -->


<!-- 트랜지션 -->
 <v-row justify="center">
    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          class="ma-2"
          v-bind="attrs"
          v-on="on"
        >
          Slide X Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          link
        >
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <div class="mx-6 hidden-sm-and-down"></div>

    <v-menu transition="scroll-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          class="ma-2"
          v-bind="attrs"
          v-on="on"
        >
          Scroll Y Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          link
        >
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>


  <!-- 트랜지션2 -->
   <v-row
    justify="center"

    style="min-height: 160px;"
  >
    <v-col class="shrink">
      <v-btn
        class="ma-2"
        color="primary"
        @click="expand = !expand"
      >
        Expand Transition
      </v-btn>

      <v-expand-transition>
        <v-card
          v-show="expand"
          height="100"
          width="100"
          class="mx-auto secondary"
        ></v-card>
      </v-expand-transition>
    </v-col>

    <div class="mx-4 hidden-sm-and-down"></div>

    <v-col class="shrink">
      <v-btn
        class="ma-2"
        color="secondary"
        @click="expand2 = !expand2"
      >
        Expand X Transition
      </v-btn>

      <v-expand-x-transition>
        <v-card
          v-show="expand2"
          height="100"
          width="100"
          class="mx-auto secondary"
        ></v-card>
      </v-expand-x-transition>
    </v-col>
  </v-row>
  </div>

  
</template>

<script>
  export default {
    data: () => ({
      expand: false,
      expand2: false,
    }),
  }
</script

<style>
</style>