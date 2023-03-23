<template>
  <v-container>
    <!-- 호버 딜레이 -->
    <v-row>
      <v-col cols="12" sm="6">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
            height="350"
            max-width="350"
          >
            <v-card-text
              class="font-weight-medium mt-12 text-center text-subtitle-1"
            >
              Open Delay (Mouse enter)
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" sm="6">
        <v-hover v-slot="{ hover }" close-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
            height="350"
            max-width="350"
          >
            <v-card-text
              class="font-weight-medium mt-12 text-center text-subtitle-1"
            >
              Close Delay (Mouse leave)
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <!-- 호버1 -->

    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items">
          <v-col :key="i" cols="12" md="4">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="item.img" height="225px">
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left">
                        {{ item.title }}
                      </p>

                      <div>
                        <p
                          class="ma-0 text-body-1 font-weight-bold font-italic text-left"
                        >
                          {{ item.text }}
                        </p>
                        <p
                          class="text-caption font-weight-medium font-italic text-left"
                        >
                          {{ item.subtext }}
                        </p>
                      </div>

                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                          icon
                        >
                          <v-icon
                            :class="{ 'show-btns': hover }"
                            :color="transparent"
                          >
                            {{ icon }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>

    <!-- 호버2 -->
    <v-hover v-slot="{ hover }">
      <v-card class="mx-auto" color="grey lighten-4" max-width="600">
        <v-img
          :aspect-ratio="16 / 9"
          src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
              style="height: 100%"
            >
              $14.99
            </div>
          </v-expand-transition>
        </v-img>
        <v-card-text class="pt-6" style="position: relative">
          <v-btn
            absolute
            color="orange"
            class="white--text"
            fab
            large
            right
            top
          >
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <div class="font-weight-light grey--text text-h6 mb-2">
            For the perfect meal
          </div>
          <h3 class="text-h4 font-weight-light orange--text mb-2">
            QW cooking utensils
          </h3>
          <div class="font-weight-light text-h6 mb-2">
            Our Vintage kitchen utensils delight any chef.<br />
            Made of bamboo by hand
          </div>
        </v-card-text>
      </v-card>
    </v-hover>

    <!-- 아이콘 -->

    <div class="text-center">
      <div>
        <v-btn class="ma-2" color="primary" dark>
          Accept
          <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
        </v-btn>

        <v-btn class="ma-2" color="red" dark>
          Decline
          <v-icon dark right> mdi-cancel </v-icon>
        </v-btn>

        <v-btn class="ma-2" dark>
          <v-icon dark left> mdi-minus-circle </v-icon>Cancel
        </v-btn>
      </div>

      <div>
        <v-btn class="ma-2" color="orange darken-2" dark>
          <v-icon dark left> mdi-arrow-left </v-icon>Back
        </v-btn>

        <v-btn class="ma-2" color="purple" dark>
          <v-icon dark> mdi-wrench </v-icon>
        </v-btn>

        <v-btn class="ma-2" color="indigo" dark>
          <v-icon dark> mdi-cloud-upload </v-icon>
        </v-btn>
      </div>

      <div>
        <v-btn class="ma-2" text icon color="blue lighten-2">
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>

        <v-btn class="ma-2" text icon color="red lighten-2">
          <v-icon>mdi-thumb-down</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- 이미지-->
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="300"
      max-width="500"
      src="https://picsum.photos/id/11/500/300"
    ></v-img>

    <!-- 여러 이미지 비교 -->
    <v-container fluid>
      <v-row justify="space-around">
        <v-col cols="5">
          <div class="text-h6 mb-1">Default (cover)</div>
          <div class="subheading">Matching</div>
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="1.7"
          ></v-img>
          <div class="subheading pt-4">Too high</div>
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="2"
          ></v-img>
          <div class="subheading pt-4">Too low</div>
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="1.4"
          ></v-img>
        </v-col>

        <v-col cols="5">
          <div class="text-h6 mb-1">Contain</div>
          <div class="subheading">Matching</div>
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="1.7"
            contain
          ></v-img>
          <div class="subheading pt-4">Too high</div>
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="2"
            contain
          ></v-img>
          <div class="subheading pt-4">Too low</div>
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="1.4"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <!-- contain -->
    <v-container class="fill-height" fluid style="min-height: 434px">
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col cols="6">
            <v-card>
              <v-img
                src="https://picsum.photos/350/165?random"
                height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6"> height </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card>
              <v-img
                src="https://picsum.photos/350/165?random"
                height="125"
                contain
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6"> height with contain </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card>
              <v-img
                src="https://picsum.photos/350/165?random"
                max-height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6"> max-height </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card>
              <v-img
                src="https://picsum.photos/350/165?random"
                max-height="125"
                contain
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                max-height with contain
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>

    <!-- 슬롯      로딩중! -->
    <v-row justify="center">
      <v-img
        src="https://bad.src/not/valid"
        lazy-src="https://picsum.photos/id/11/100/60"
        max-width="500"
        max-height="300"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-row>

    <!-- 여러 사진 그리드 -->

    <v-row>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>

    <!-- menus  드롭다운!!!!!!!!!!!!!!!!-->
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Dropdown
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items1" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- 네비게이션 드로워 -->
      <v-card height="400" width="256" class="mx-auto">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Application
              </v-list-item-title>
              <v-list-item-subtitle> subtext </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="item in items2" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
    <!-- 버튼드로워 -->
    <v-card class="mx-auto overflow-hidden" height="400" width="344">
      <v-system-bar color="deep-purple darken-3"></v-system-bar>

      <v-app-bar color="deep-purple accent-4" dark prominent>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size
        screens.
      </v-card-text>
    </v-card>

    <!-- 오버레이 -->
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
          ></v-img>

          <v-card-text>
            <h2 class="text-h6 primary--text">Magento Forests</h2>
            Travel to the best outdoor experience on planet Earth. A vacation
            you will never forget!
          </v-card-text>

          <v-card-title>
            <v-rating
              :value="4"
              dense
              color="orange"
              background-color="orange"
              hover
              class="mr-2"
            ></v-rating>
            <span class="primary--text text-subtitle-2">64 Reviews</span>
          </v-card-title>

          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#036358">
              <v-btn>See more info</v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>

    <!-- 페이지네이션 -->
    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination
                v-model="page"
                class="my-4"
                :length="15"
                circle
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- parallax  시차-->
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">Vuetify</h1>
          <h4 class="subheading">Build your application today!</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- 달력피커 pickers- date pickers-->
    <v-row justify="center">
      <v-date-picker v-model="picker"></v-date-picker>
    </v-row>

    <!-- 가능한 일자 선택 달력 -->
    <v-card>
      <v-row justify="center">
        <v-date-picker
          v-model="date"
          :allowed-dates="allowedDates"
          class="mt-4"
          min="2016-06-15"
          max="2018-03-20"
        ></v-date-picker>
      </v-row>
    </v-card>

    <!-- 월선택 -->

    <v-row justify="center">
      <v-date-picker v-model="picker" type="month"></v-date-picker>
    </v-row>

    <!-- 가능한 월 선택 -->
    <v-row justify="center">
      <v-date-picker
        v-model="date"
        :allowed-dates="allowedMonths"
        type="month"
        class="mt-4"
        min="2017-06"
        max="2019-10"
      ></v-date-picker>
    </v-row>

    <!-- 로딩중 -->
    <v-card class="mx-auto" max-width="344">
      <v-toolbar color="deep-purple accent-4" dark prominent>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>My Files</v-toolbar-title>

        <v-btn absolute bottom color="white" fab left light>
          <v-icon>mdi-plus</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container style="height: 400px">
        <v-row class="fill-height" align-content="center" justify="center">
          <v-col class="text-subtitle-1 text-center" cols="12">
            Getting your files
          </v-col>
          <v-col cols="6">
            <v-progress-linear
              color="deep-purple accent-4"
              indeterminate
              rounded
              height="6"
            ></v-progress-linear>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <!-- 로딩중2 -->
    <v-card class="mx-auto mt-6" width="344">
      <v-system-bar>
        <v-spacer></v-spacer>
        <v-icon>mdi-square</v-icon>
        <v-icon>mdi-circle</v-icon>
        <v-icon>mdi-triangle</v-icon>
      </v-system-bar>

      <v-toolbar>
        <v-btn icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title>My Recipes</v-toolbar-title>

        <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          absolute
          bottom
          color="deep-purple accent-4"
        ></v-progress-linear>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container style="height: 282px">
        <v-row class="fill-height" align="center" justify="center">
          <v-scale-transition>
            <div v-if="!loading" class="text-center">
              <v-btn color="primary" @click="loading = true">
                Start loading
              </v-btn>
            </div>
          </v-scale-transition>
        </v-row>
      </v-container>
    </v-card>

    <!-- 별점주기!!!!!!!!!!!!!! -->
    <v-rating
      background-color="grey lighten-1"
      color="warning"
      empty-icon="$mdiStarOutline"
      full-icon="$mdiStar"
      hover
      length="5"
      size="44"
      value="3.5"
    ></v-rating>

    <!-- 별점카드 -->
    <v-card class="elevation-16 mx-auto" width="300">
      <v-card-title class="text-h5"> Rate Our Framework </v-card-title>
      <v-card-text>
        If you enjoy using Vuetify, please take a few seconds to rate your
        experience with the framework. It really helps!

        <div class="text-center mt-12">
          <v-rating
            v-model="rating1"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            large
          ></v-rating>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-space-between">
        <v-btn text> No Thanks </v-btn>
        <v-btn color="primary" text> Rate Now </v-btn>
      </v-card-actions>
    </v-card>
    <!-- 별점 고급 활용 -->
    <v-card class="mx-auto overflow-hidden" style="max-width: 600px">
      <v-row>
        <v-col class="d-flex" cols="6">
          <v-img
            src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png"
          ></v-img>
        </v-col>
        <v-col cols="6">
          <v-container class="pa-0 pl-2" style="margin: -4px 0">
            <v-row>
              <v-col class="d-flex" cols="7">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/ratings/fortnite2.png"
                ></v-img>
              </v-col>
              <v-col class="d-flex" cols="5">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/ratings/fortnite3.png"
                ></v-img>
              </v-col>
              <v-col class="d-flex" cols="5">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/ratings/fortnite4.png"
                ></v-img>
              </v-col>
              <v-col class="d-flex" cols="7">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/ratings/fortnite5.png"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-card-title class="align-start">
        <div>
          <span class="text-h5">FORTNITE</span>
          <div class="grey--text font-weight-light">Video game</div>
        </div>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" width="400">
          <template v-slot:activator="{ on }">
            <v-icon v-on="on"> mdi-share-variant </v-icon>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h6 font-weight-bold">Share</span>
              <v-spacer></v-spacer>
              <v-btn class="mx-0" icon @click="dialog = false">
                <v-icon>mdi-close-circle-outline</v-icon>
              </v-btn>
            </v-card-title>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon color="indigo"> mdi-facebook </v-icon>
                </v-list-item-action>
                <v-card-title>Facebook</v-card-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon color="cyan"> mdi-twitter </v-icon>
                </v-list-item-action>
                <v-card-title>Twitter</v-card-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-action>
                <v-card-title>Email</v-card-title>
              </v-list-item>
            </v-list>
            <v-text-field
              ref="link"
              :label="copied ? 'Link copied' : 'Click to copy link'"
              class="pa-4"
              readonly
              value="https://g.co/kgs/nkrK43"
              @click="copy"
            ></v-text-field>
          </v-card>
        </v-dialog>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <span
          class="pl-2 grey--text text--darken-2 font-weight-light text-caption"
          >16,544 reviews</span
        >
        <v-spacer></v-spacer>
        <v-rating v-model="rating" length="10" readonly>
          <template v-slot:item="props">
            <v-icon
              large
              :color="props.isFilled ? 'purple darken-4' : ''"
              v-text="`mdi-numeric-${props.index}-box`"
            ></v-icon>
          </template>
        </v-rating>
      </v-card-actions>
      <div class="pa-4 pt-0 text-caption">
        <em
          >Portions of the materials used are trademarks and/or copyrighted
          works of Epic Games, Inc. All rights reserved by Epic. This material
          is not official and is not endorsed by Epic.</em
        >
      </div>
    </v-card>
    <br />

    <!-- 별젘카드 -->
    <v-card
      class="mx-auto elevation-20"
      color="purple"
      dark
      style="max-width: 400px"
    >
      <v-row justify="space-between">
        <v-col cols="8">
          <v-card-title>
            <div>
              <div class="text-h5">Halycon Days</div>
              <div>Ellie Goulding</div>
              <div>(2013)</div>
            </div>
          </v-card-title>
        </v-col>
        <v-img
          class="shrink ma-2"
          contain
          height="125px"
          src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
          style="flex-basis: 125px"
        ></v-img>
      </v-row>
      <v-divider dark></v-divider>
      <v-card-actions class="pa-4">
        Rate this album
        <v-spacer></v-spacer>
        <span class="grey--text text--lighten-2 text-caption mr-2">
          ({{ rating1 }})
        </span>
        <v-rating
          v-model="rating1"
          background-color="white"
          color="yellow accent-4"
          dense
          half-increments
          hover
          size="18"
        ></v-rating>
      </v-card-actions>
    </v-card>
    <br />

    <!-- 스테퍼 -->
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          Name of step 1
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          Name of step 2
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> Name of step 3 </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <br />
    <!-- 서브헤더 -->
    <v-card flat tile>
      <v-toolbar color="cyan" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container
        v-for="type in types"
        :key="type"
        class="grey lighten-4"
        fluid
      >
        <v-subheader>{{ type }}</v-subheader>

        <v-row>
          <v-spacer></v-spacer>
          <v-col v-for="card in cards" :key="card" cols="12" sm="6" md="4">
            <v-card>
              <v-img
                :src="`https://picsum.photos/200/300?image=${getImage()}`"
                height="300px"
              >
                <span
                  class="text-h5 white--text pl-4 pt-4 d-inline-block"
                  v-text="card"
                ></span>
              </v-img>

              <v-card-actions class="white justify-center">
                <v-btn
                  v-for="(social, i) in socials"
                  :key="i"
                  :color="social.color"
                  class="white--text"
                  fab
                  icon
                  small
                >
                  <v-icon>{{ social.icon }}</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <!-- 앨범 서브헤더 -->

    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-toolbar color="white" flat>
            <v-btn icon light>
              <v-icon color="grey darken-2"> mdi-arrow-left </v-icon>
            </v-btn>

            <v-toolbar-title class="grey--text text--darken-4">
              Albums
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon light>
              <v-icon color="grey darken-2"> mdi-magnify </v-icon>
            </v-btn>
          </v-toolbar>

          <v-subheader>May</v-subheader>
          <v-container fluid>
            <v-row>
              <v-col v-for="i in 6" :key="i" cols="4">
                <img
                  :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`"
                  alt="lorem"
                  class="image"
                  height="100%"
                  width="100%"
                />
              </v-col>
            </v-row>
          </v-container>

          <v-subheader>June</v-subheader>
          <v-container fluid>
            <v-row>
              <v-col v-for="i in 6" :key="i" cols="4">
                <img
                  :src="`https://randomuser.me/api/portraits/women/${
                    i + 5
                  }.jpg`"
                  alt="lorem"
                  class="image"
                  height="100%"
                  width="100%"
                />
              </v-col>
            </v-row>
          </v-container>

          <v-footer class="mt-12"></v-footer>
        </v-card>
      </v-col>
    </v-row>

    <!-- 드로워 바 서브헤더 -->
     <v-row>
    <v-col
      cols="12"
      sm="6"
      offset-sm="3"
    >
      <v-card>
        <v-toolbar
          color="teal"
          dark
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Manage</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list>
          <template v-for="(item, index) in items3">
            <v-list-item
              v-if="item.action"
              :key="item.title"
            >
              <v-list-item-action>
                <v-icon>{{ item.action }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider
              v-else-if="item.divider"
              :key="index"
            ></v-divider>

            <v-subheader
              v-else-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
// import { mdiAccount, mdiPencil, mdiShareVariant, mdiDelete } from "@mdi/js";
export default {
  watch: {
    group() {
      this.drawer = false;
    },
    loading(val) {
      if (!val) return;

      setTimeout(() => (this.loading = false), 3000);
    },
  },

  data: () => ({
     items3: [
          {
            action: 'mdi-inbox-arrow-down',
            title: 'Inbox',
          },
          {
            action: 'mdi-send',
            title: 'Sent',
          },
          {
            action: 'mdi-delete',
            title: 'Trash',
          },
          {
            action: 'mdi-alert-octagon',
            title: 'Spam',
          },
          { divider: true },
          { header: 'Labels' },
          {
            action: 'mdi-label',
            title: 'Family',
          },
          {
            action: 'mdi-label',
            title: 'Friends',
          },
          {
            action: 'mdi-label',
            title: 'Work',
          },
        ],
      
    types: ["Places to Be", "Places to See"],
    cards: ["Good", "Best", "Finest"],
    socials: [
      {
        icon: "mdi-facebook",
        color: "indigo",
      },
      {
        icon: "mdi-linkedin",
        color: "cyan darken-1",
      },
      {
        icon: "mdi-instagram",
        color: "red lighten-3",
      },
    ],
    e1: 1,
    copied: false,
    dialog: false,
    rating: 10,
    rating1: 4.5,
    loading: false,
    date: "2018-03-02",
    // 위에껀 월선택
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    page: 1,
    overlay: false,
    drawer: false,
    group: null,
    items2: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
    right: null,
    items1: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
    items: [
      {
        title: "New Releases",
        text: `It's New Release Friday`,
        subtext: "Newly released songs. Updated daily.",
        img: "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80",
      },
      {
        title: "Rock",
        text: "Greatest Rock Hits",
        subtext: "Lose yourself in rock tunes.",
        img: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      },
      {
        title: "Mellow Moods",
        text: "Ambient Bass",
        subtext: "Chill beats to mellow you out.",
        img: "https://images.unsplash.com/photo-1542320868-f4d80389e1c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80",
      },
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),
  methods: {
    allowedMonths: (val) => parseInt(val.split("-")[1], 10) % 2 === 0,
    allowedDates: (val) => parseInt(val.split("-")[2], 10) % 2 === 0,
    copy() {
      const markup = this.$refs.link;
      markup.focus();
      document.execCommand("selectAll", false, null);
      this.copied = document.execCommand("copy");
    },
    getImage() {
      const min = 550;
      const max = 560;

      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>


<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
    background-color: rgba(#FFF, 0.8)
>.v-card__text
    color: #000
</style>