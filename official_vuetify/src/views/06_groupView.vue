<template>
  <div>
    <!-- Groups/ Chip group -->
    <v-card class="mx-auto" max-width="400">
      <v-card-title>
        <h2 class="text-h4">Shirt Blouse</h2>
        <v-spacer></v-spacer>
        <span class="text-h6">$44.50</span>
      </v-card-title>

      <v-card-text>
        Our blouses are available in 8 colors. You can custom order a built-in
        arch support for any of the models.
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <span class="subheading">Select size</span>

        <v-chip-group
          v-model="selection"
          active-class="deep-purple--text text--accent-4"
          mandatory
        >
          <v-chip v-for="size in sizes" :key="size" :value="size">
            {{ size }}
          </v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn block class="white--text" color="deep-purple accent-4">
          Add to Cart
        </v-btn>
      </v-card-actions>
    </v-card>
    <!--  radio control card       쓰면 써버 렉걸림-->
    <!-- <v-card class="mx-auto" max-width="400">
      <v-card-title>
        <h2 class="text-h4">Toothbrush</h2>
        <v-spacer></v-spacer>
        <span class="text-h6">$4.99</span>
      </v-card-title>

      <v-card-text>
        Our company takes pride in making handmade brushes. Our toothbrushes are
        available in 4 different bristel types, from extra soft to hard.
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <span class="subheading">Select type</span>

        <v-chip-group
          v-model="selection"
          active-class="deep-purple--text text--accent-4"
          mandatory
        >
          <v-chip>Extra Soft</v-chip>
          <v-chip>Soft</v-chip>
          <v-chip>Medium</v-chip>
          <v-chip>Hard</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn block class="white--text" color="deep-purple accent-4">
          Add to Cart
        </v-btn>
      </v-card-actions>
    </v-card> -->

    <!-- item group -->
    <v-item-group active-class="primary">
      <v-container>
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-item v-slot="{ active, toggle }">
              <v-card
                class="d-flex align-center"
                dark
                height="200"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div v-if="active" class="text-h2 flex-grow-1 text-center">
                    Active
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>

    <!-- 필수선택 item group -->
    <v-item-group mandatory>
      <v-container>
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                dark
                height="200"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div v-if="active" class="text-h2 flex-grow-1 text-center">
                    Active
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>

    <br />

    <!-- selection controll -->
    <v-card class="mx-auto" max-width="500">
      <v-list shaped>
        <v-list-item-group v-model="model" multiple>
          <template v-for="(item, i) in items">
            <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>

            <v-list-item
              v-else
              :key="`item-${i}`"
              :value="item"
              active-class="deep-purple--text text--accent-4"
            >
              <template v-slot:default="{ active }">
                <v-list-item-content>
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-checkbox
                    :input-value="active"
                    color="deep-purple accent-4"
                  ></v-checkbox>
                </v-list-item-action>
              </template>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>

    <br />

    <!-- 슬라이드 그룹 -->
    <v-sheet class="mx-auto" max-width="700">
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="n in 25" :key="n" v-slot="{ active, toggle }">
          <v-btn
            class="mx-2"
            :input-value="active"
            active-class="purple white--text"
            depressed
            rounded
            @click="toggle"
          >
            Options {{ n }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <br />

    <!-- slide card -->
    <v-sheet class="mx-auto" elevation="8" max-width="800">
      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <v-card
            :color="active ? undefined : 'grey lighten-1'"
            class="ma-4"
            height="200"
            width="100"
            @click="toggle"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <!-- window -->
    <v-row align="center">
      <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
        <v-item v-for="n in length" :key="n" v-slot="{ active, toggle }">
          <div>
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </div>
        </v-item>
      </v-item-group>

      <v-col>
        <v-window v-model="window" class="elevation-1" vertical>
          <v-window-item v-for="n in length" :key="n">
            <v-card flat>
              <v-card-text>
                <v-row class="mb-4" align="center">
                  <v-avatar color="grey" class="mr-4"></v-avatar>
                  <strong class="text-h6">Title {{ n }}</strong>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </v-row>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>

    <!-- 슬라이드쇼 -->
    <v-card flat tile>
      <v-window v-model="onboarding" reverse>
        <v-window-item v-for="n in length1" :key="`card-${n}`">
          <v-card color="grey" height="200">
            <v-row class="fill-height" align="center" justify="center">
              <h1 style="font-size: 5rem" class="white--text">Slide {{ n }}</h1>
            </v-row>
          </v-card>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between">
        <v-btn text @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group v-model="onboarding" class="text-center" mandatory>
          <v-item
            v-for="n in length1"
            :key="`btn-${n}`"
            v-slot="{ active, toggle }"
          >
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn text @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <br>
     <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Email"
            value="john@vuetifyjs.com"
          ></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
          ></v-text-field>
          <span class="text-caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="text-h6 font-weight-light mb-2">
            Welcome to Vuetify
          </h3>
          <span class="text-caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="primary"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    selection: 2,
    selection: "08",
    sizes: ["04", "06", "08", "10", "12", "14"],
    //
    items: ["Dog Photos", "Cat Photos", "", "Potatoes", "Carrots"],
    model: ["Carrots"],
    model1: null,
    length: 3,
    window: 0,
    length1: 3,
    onboarding: 0,
      step: 1,
  }),

     methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Sign-up'
          case 2: return 'Create a password'
          default: return 'Account created'
        }
      },
    },
};
</script

<style>

</style>