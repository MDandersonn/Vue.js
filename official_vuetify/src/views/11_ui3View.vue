<template>
  <div>
    <!-- 타임라인 -->
    <v-timeline>
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="year.year"
          ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
            Lorem ipsum
          </h2>
          <div>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>

    <!-- 타임라인2 -->
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card :color="item.color" dark>
          <v-card-title class="text-h6"> Lorem Ipsum Dolor </v-card-title>
          <v-card-text class="white text--primary">
            <p>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.
            </p>
            <v-btn :color="item.color" class="mx-0" outlined> Button </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <br /><br />
    <!-- 툴팁 -->
    <div class="text-center d-flex align-center justify-space-around">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> Button </v-btn>
        </template>
        <span>Tooltip</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon color="primary" dark v-bind="attrs" v-on="on">
            mdi-home
          </v-icon>
        </template>
        <span>Tooltip</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">This text has a tooltip</span>
        </template>
        <span>Tooltip</span>
      </v-tooltip>
    </div>
    <hr />
    <br />
    <!-- 툴팁2 -->
    <div class="text-center d-flex align-center justify-space-around">
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> Left </v-btn>
        </template>
        <span>Left tooltip</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> Top </v-btn>
        </template>
        <span>Top tooltip</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> Bottom </v-btn>
        </template>
        <span>Bottom tooltip</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> Right </v-btn>
        </template>
        <span>Right tooltip</span>
      </v-tooltip>

      <hr />
      <br />
      <!-- 툴팁색깔 -->
      <div class="text-center d-flex align-center justify-space-around">
        <v-tooltip bottom color="primary">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              primary
            </v-btn>
          </template>
          <span>Primary tooltip</span>
        </v-tooltip>

        <v-tooltip bottom color="success">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" dark v-bind="attrs" v-on="on">
              success
            </v-btn>
          </template>
          <span>Success tooltip</span>
        </v-tooltip>

        <v-tooltip bottom color="warning">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="warning" dark v-bind="attrs" v-on="on">
              warning
            </v-btn>
          </template>
          <span>Warning tooltip</span>
        </v-tooltip>

        <v-tooltip bottom color="error">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="error" dark v-bind="attrs" v-on="on"> error </v-btn>
          </template>
          <span>Error tooltip</span>
        </v-tooltip>
      </div>
    </div>
    <!-- 트리뷰 -->
    <v-treeview activatable :items="items1"></v-treeview>

    <br /><br />
    <!-- 수직스크롤러-->
    <v-card class="mx-auto" max-width="400">
      <v-card-title class="white--text orange darken-4">
        User Directory

        <v-spacer></v-spacer>

        <v-btn color="white" class="text--primary" fab small>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis a
        at voluptates culpa optio amet! Inventore deserunt voluptatem maxime a
        veniam placeat, eos impedit nulla quos? Officiis, aperiam ducimus.
      </v-card-text>

      <v-divider></v-divider>

      <v-virtual-scroll :items="items3" :item-height="50" height="300">
        <template v-slot:default="{ item }">
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar :color="item.color" size="56" class="white--text">
                {{ item.initials }}
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.fullName }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn depressed small>
                View User

                <v-icon color="orange darken-4" right> mdi-open-in-new </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    colors: [
      "#2196F3",
      "#90CAF9",
      "#64B5F6",
      "#42A5F5",
      "#1E88E5",
      "#1976D2",
      "#1565C0",
      "#0D47A1",
      "#82B1FF",
      "#448AFF",
      "#2979FF",
      "#2962FF",
    ],
    names: [
      "Oliver",
      "Jake",
      "Noah",
      "James",
      "Jack",
      "Connor",
      "Liam",
      "John",
      "Harry",
      "Callum",
      "Mason",
      "Robert",
      "Jacob",
      "Jacob",
      "Jacob",
      "Michael",
      "Charlie",
      "Kyle",
      "William",
      "William",
      "Thomas",
      "Joe",
      "Ethan",
      "David",
      "George",
      "Reece",
      "Michael",
      "Richard",
      "Oscar",
      "Rhys",
      "Alexander",
      "Joseph",
      "James",
      "Charlie",
      "James",
      "Charles",
      "William",
      "Damian",
      "Daniel",
      "Thomas",
      "Amelia",
      "Margaret",
      "Emma",
      "Mary",
      "Olivia",
      "Samantha",
      "Olivia",
      "Patricia",
      "Isla",
      "Bethany",
    ],
    surnames: [
      "Smith",
      "Anderson",
      "Clark",
      "Wright",
      "Mitchell",
      "Johnson",
      "Thomas",
      "Rodriguez",
      "Lopez",
      "Perez",
      "Williams",
      "Jackson",
      "Lewis",
      "Hill",
      "Roberts",
      "Jones",
      "White",
      "Lee",
      "Scott",
      "Turner",
      "Brown",
      "Harris",
      "Walker",
      "Green",
      "Phillips",
      "Davis",
      "Martin",
      "Hall",
      "Adams",
      "Campbell",
      "Miller",
      "Thompson",
      "Allen",
      "Baker",
      "Parker",
      "Wilson",
      "Garcia",
      "Young",
      "Gonzalez",
      "Evans",
      "Moore",
      "Martinez",
      "Hernandez",
      "Nelson",
      "Edwards",
      "Taylor",
      "Robinson",
      "King",
      "Carter",
      "Collins",
    ],

    items1: [
      {
        id: 1,
        name: "Applications :",
        children: [
          { id: 2, name: "Calendar : app" },
          { id: 3, name: "Chrome : app" },
          { id: 4, name: "Webstorm : app" },
        ],
      },
      {
        id: 5,
        name: "Documents :",
        children: [
          {
            id: 6,
            name: "vuetify :",
            children: [
              {
                id: 7,
                name: "src :",
                children: [
                  { id: 8, name: "index : ts" },
                  { id: 9, name: "bootstrap : ts" },
                ],
              },
            ],
          },
          {
            id: 10,
            name: "material2 :",
            children: [
              {
                id: 11,
                name: "src :",
                children: [
                  { id: 12, name: "v-btn : ts" },
                  { id: 13, name: "v-card : ts" },
                  { id: 14, name: "v-window : ts" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: "Downloads :",
        children: [
          { id: 16, name: "October : pdf" },
          { id: 17, name: "November : pdf" },
          { id: 18, name: "Tutorial : html" },
        ],
      },
      {
        id: 19,
        name: "Videos :",
        children: [
          {
            id: 20,
            name: "Tutorials :",
            children: [
              { id: 21, name: "Basic layouts : mp4" },
              { id: 22, name: "Advanced techniques : mp4" },
              { id: 23, name: "All about app : dir" },
            ],
          },
          { id: 24, name: "Intro : mov" },
          { id: 25, name: "Conference introduction : avi" },
        ],
      },
    ],
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-star",
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant",
      },
      {
        color: "green lighten-1",
        icon: "mdi-airballoon",
      },
      {
        color: "indigo",
        icon: "mdi-buffer",
      },
    ],
    years: [
      {
        color: "cyan",
        year: "1960",
      },
      {
        color: "green",
        year: "1970",
      },
      {
        color: "pink",
        year: "1980",
      },
      {
        color: "amber",
        year: "1990",
      },
      {
        color: "orange",
        year: "2000",
      },
    ],
  }),
  computed: {
    items3() {
      const namesLength = this.names.length;
      const surnamesLength = this.surnames.length;
      const colorsLength = this.colors.length;

      return Array.from({ length: 10000 }, (k, v) => {
        const name = this.names[this.genRandomIndex(namesLength)];
        const surname = this.surnames[this.genRandomIndex(surnamesLength)];

        return {
          color: this.colors[this.genRandomIndex(colorsLength)],
          fullName: `${name} ${surname}`,
          initials: `${name[0]} ${surname[0]}`,
        };
      });
    },
  },

  methods: {
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    },
  },
};
</script>

<style>
</style>