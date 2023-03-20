<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card color="grey lighten-4">
          <v-card-title>
            <v-icon
              :color="checking ? 'red lighten-2' : 'indigo'"
              class="mr-12"
              size="64"
              @click="takePulse"
            >
              mdi-heart-pulse
            </v-icon>
            <v-row align="start">
              <div class="text-caption grey--text text-uppercase">
                Heart rate
              </div>
              <div>
                <span
                  class="text-h3 font-weight-black"
                  v-text="avg || '—'"
                ></span>
                <strong v-if="avg">BPM</strong>
              </div>
            </v-row>

            <v-spacer></v-spacer>

            <v-btn icon class="align-self-start" size="28">
              <v-icon>mdi-arrow-right-thick</v-icon>
            </v-btn>
          </v-card-title>

          <v-sheet color="transparent">
            <v-sparkline
              :key="String(avg)"
              :smooth="16"
              :gradient="['#f72047', '#ffd200', '#1feaea']"
              :line-width="3"
              :value="heartbeats"
              auto-draw
              stroke-linecap="round"
            ></v-sparkline>
          </v-sheet>
        </v-card>
      </v-col>

      <v-col v-for="count in 4" :key="count" cols="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto text-center" color="green" dark >
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="value"
                color="rgba(255, 255, 255, .7)"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth
              >
                <template v-slot:label="item"> ${{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4 font-weight-thin">Sales Last 24h</div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <v-btn block text> Go to Report </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
const exhale = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  data: () => ({
    checking: false,
    heartbeats: [],
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
  }),

  computed: {
    avg() {
      const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0);
      const length = this.heartbeats.length;

      if (!sum && !length) return 0;

      return Math.ceil(sum / length);
    },
  },

  created() {
    this.takePulse(false);
  },

  methods: {
    heartbeat() {
      return Math.ceil(Math.random() * (120 - 80) + 80);
    },
    async takePulse(inhale = true) {
      this.checking = true;

      inhale && (await exhale(1000));

      this.heartbeats = Array.from({ length: 20 }, this.heartbeat);

      this.checking = false;
    },
  },
};
</script>