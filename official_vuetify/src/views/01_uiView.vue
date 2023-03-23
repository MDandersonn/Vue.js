<template>
  <v-container>
    <v-alert dense outlined prominent shaped text type="success">
      이것은 alert입니다.</v-alert
    >

    <div>
      <v-card>
        <v-responsive :aspect-ratio="16 / 9">
          <v-card-text>
            이곳은 aspect ratio 입니다. This card will always be 16:9 (unless
            you put more stuff in it)
          </v-card-text>
        </v-responsive>
      </v-card>
    </div>

    <v-avatar color="primary" size="38">아바타</v-avatar>

    <v-badge>뱃지</v-badge>
    <v-banner color="primary" dark elevation="24" icon="$mdiAccount"
      >배너</v-banner
    >
    <br /><br />
    <!-- 버튼 -->
    <v-btn color="accent" elevation="11">버튼입니다</v-btn>

    <!-- 아이콘 -->

    <div class="text-center">
      <v-btn class="mx-2" fab dark small color="primary">
        <v-icon dark> mdi-minus </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark small color="pink">
        <v-icon dark> mdi-heart </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark color="indigo">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark color="teal">
        <v-icon dark> mdi-format-list-bulleted-square </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark large color="cyan">
        <v-icon dark> mdi-pencil </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark large color="purple">
        <v-icon dark> mdi-android </v-icon>
      </v-btn>
    </div>
    <!-- 아이콘2 -->
    <v-card flat>
      <v-card-text>
        <v-container fluid class="pa-0">
          <v-row>
            <v-col cols="12">
              <p>Normal</p>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon color="pink">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon color="indigo">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon color="green">
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon color="deep-orange">
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row class="mt-12">
            <v-col cols="12">
              <p>Disabled</p>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon disabled>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon disabled>
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon disabled>
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon disabled>
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>

    <!-- 카드입니다 -->
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

        <div>
          Small plates, salads & sandwiches - an intimate setting with 12 indoor
          seats plus patio seating.
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="reserve">
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- 캐러우셀 -->
    <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!-- Chips -->

    <v-card class="mx-auto" max-width="450">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
        :aspect-ratio="16 / 9"
      >
      </v-img>
      <v-card-title>
        <div class="text-h4 mb-2">Welcome Home...</div>
        <div class="text-h6 font-weight-regular grey--text">
          Monday, 12:30 PM, Mostly Sunny
        </div>
      </v-card-title>
      <v-row class="px-4 grey--text" align="center">
        <v-avatar size="24" class="mr-4">
          <v-img
            src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
            contain
          ></v-img>
        </v-avatar>

        <span>81° / 62°</span>
      </v-row>

      <v-divider class="mt-6 mx-4"></v-divider>

      <v-card-text>
        <v-chip class="mr-2" @click="lights">
          <v-icon left> mdi-brightness-5 </v-icon>
          Turn on Lights
        </v-chip>
        <v-chip class="mr-2" @click="alarm">
          <v-icon left> mdi-alarm-check </v-icon>
          Set alarm
        </v-chip>
        <v-chip @click="blinds">
          <v-icon left> mdi-blinds </v-icon>
          Close blinds
        </v-chip>
      </v-card-text>
    </v-card>

    <!-- dialog -->
    <br /><br />
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            Click Me
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Privacy Policy
          </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <br /><br />
    <!-- 스크롤 dialog -->
    <div>
      <v-row justify="center">
        <v-dialog v-model="dialog2" scrollable max-width="300px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Open scroll dialog
            </v-btn>
          </template>
          <v-card>
            <v-card-title>Select Country</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 300px">
              <v-radio-group v-model="dialogm1" column>
                <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                <v-radio label="Bahrain" value="bahrain"></v-radio>
                <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                <v-radio label="Barbados" value="barbados"></v-radio>
                <v-radio label="Belarus" value="belarus"></v-radio>
                <v-radio label="Belgium" value="belgium"></v-radio>
                <v-radio label="Bulgaria" value="bulgaria"></v-radio>
                <v-radio label="Burkina Faso" value="burkina"></v-radio>
                <v-radio label="Burma" value="burma"></v-radio>
                <v-radio label="Burundi" value="burundi"></v-radio>
              </v-radio-group>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="dialog2 = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog2 = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
    <br /><br />
    <!-- form dialog -->
    <div>
      <v-row justify="center">
        <v-dialog v-model="dialog3" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Open Dialog Form
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal first name*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal middle name"
                      hint="example of helper text only on focus"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal last name*"
                      hint="example of persistent helper text"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Password*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age*"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-autocomplete
                      :items="[
                        'Skiing',
                        'Ice hockey',
                        'Soccer',
                        'Basketball',
                        'Hockey',
                        'Reading',
                        'Writing',
                        'Coding',
                        'Basejump',
                      ]"
                      label="Interests"
                      multiple
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog3 = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog3 = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>

    <!--      dividers -->
    <div>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card>
            <v-list two-line>
              <template v-for="(item, index) in items1.slice(0, 6)">
                <v-subheader v-if="item.header" :key="item.header">
                  {{ item.header }}
                </v-subheader>
                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>
                <v-list-item v-else :key="item.title">
                  <v-list-item-avatar>
                    <img :src="item.avatar" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- expansion panels -->
    <div>
      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>


      
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialog1: "",
    dialog2: false,
    dialog3: false,
    loading: false,
    selection: 1,
    items1: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="font-weight-bold">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
    ],
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    alarm() {
      alert("Turning on alarm...");
    },
    blinds() {
      alert("Toggling Blinds...");
    },
    lights() {
      alert("Toggling lights...");
    },
  },
};
</script>