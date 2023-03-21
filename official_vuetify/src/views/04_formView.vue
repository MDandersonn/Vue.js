<template>
  <v-container>
    <!-- 오토컴플릿 -->
    <v-autocomplete rounded solo></v-autocomplete>
    <!-- 오토컴플릿 예시 -->
    <v-card class="overflow-hidden" color="purple lighten-1" dark>
      <v-toolbar flat color="purple">
        <v-icon>mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light">
          User Profile
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          color="purple darken-3"
          fab
          small
          @click="isEditing = !isEditing"
        >
          <v-icon v-if="isEditing"> mdi-close </v-icon>
          <v-icon v-else> mdi-pencil </v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-text-field
          :disabled="!isEditing"
          color="white"
          label="Name"
        ></v-text-field>
        <v-autocomplete
          :disabled="!isEditing"
          :items="states"
          :filter="customFilter"
          color="white"
          item-text="name"
          label="State"
        ></v-autocomplete>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!isEditing" color="success" @click="save">
          Save
        </v-btn>
      </v-card-actions>
      <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
        Your profile has been updated
      </v-snackbar>
    </v-card>

    <!--  checkbox-->

    <v-container class="px-0" fluid>
      <v-checkbox
        v-model="checkbox"
        :label="`Checkbox 1: ${checkbox.toString()}`"
      ></v-checkbox>
    </v-container>

    <!-- 체크박스 색상 -->
    <v-card flat>
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="red"
                color="red"
                value="red"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="red darken-3"
                color="red darken-3"
                value="red darken-3"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="indigo"
                color="indigo"
                value="indigo"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="indigo darken-3"
                color="indigo darken-3"
                value="indigo darken-3"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="orange"
                color="orange"
                value="orange"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="orange darken-3"
                color="orange darken-3"
                value="orange darken-3"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row class="mt-12">
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="primary"
                color="primary"
                value="primary"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="secondary"
                color="secondary"
                value="secondary"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="success"
                color="success"
                value="success"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="info"
                color="info"
                value="info"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="warning"
                color="warning"
                value="warning"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="error"
                color="error"
                value="error"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>

    <!-- 멀티플체크박스 -->
    <v-container fluid>
      <p>{{ selected }}</p>
      <v-checkbox v-model="selected" label="John" value="John"></v-checkbox>
      <v-checkbox v-model="selected" label="Jacob" value="Jacob"></v-checkbox>
    </v-container>

    <!-- 파일업로딩 -->
    <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Pick an avatar"
      prepend-icon="mdi-camera"
      label="Avatar"
    ></v-file-input>

    <!-- 오버플로우 버튼 -->
    <v-container>
      <v-overflow-btn
        class="my-2"
        :items="items"
        label="Overflow Btn - Dense"
        dense
      ></v-overflow-btn>
    </v-container>

    <!-- 라디오버튼 -->
    <v-container class="px-0" fluid>
      <v-radio-group v-model="radioGroup">
        <v-radio
          v-for="n in 3"
          :key="n"
          :label="`Radio ${n}`"
          :value="n"
        ></v-radio>
      </v-radio-group>
    </v-container>

    <!-- 방향있는 라디오 버튼 -->
    <v-container fluid>
      <v-radio-group v-model="column" column>
        <v-radio label="Option 1" value="radio-1"></v-radio>
        <v-radio label="Option 2" value="radio-2"></v-radio>
      </v-radio-group>
      <hr />
      <v-radio-group v-model="row" row>
        <v-radio label="Option 1" value="radio-1"></v-radio>
        <v-radio label="Option 2" value="radio-2"></v-radio>
      </v-radio-group>
    </v-container>

    <!-- 레인지 슬라이더 -->
    <v-range-slider dense hint="Im a hint" max="50" min="-50"></v-range-slider>
    <!-- selector -->
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items1" label="Standard"></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items1" filled label="Filled style"></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items1" label="Outlined style" outlined></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items1" label="Solo field" solo></v-select>
        </v-col>
      </v-row>
    </v-container>
    <!-- 슬라이더 -->
    <v-card flat color="transparent">
      <v-subheader>Media volume</v-subheader>
      <v-card-text>
        <v-slider
          v-model="media"
          prepend-icon="mdi-volume-high"
          thumb-label="always"
        ></v-slider>
      </v-card-text>

      <v-subheader>Alarm volume</v-subheader>

      <v-card-text>
        <v-slider v-model="alarm" append-icon="mdi-alarm"></v-slider>
      </v-card-text>

      <v-subheader>Icon click callback</v-subheader>

      <v-card-text>
        <v-slider
          v-model="zoom"
          append-icon="mdi-magnify-plus-outline"
          prepend-icon="mdi-magnify-minus-outline"
          @click:append="zoomIn"
          @click:prepend="zoomOut"
        ></v-slider>
      </v-card-text>
    </v-card>

    <!-- 스위치 -->
    <v-container class="px-0" fluid>
      <v-switch
        v-model="switch1"
        :label="`Switch 1: ${switch1.toString()}`"
      ></v-switch>
    </v-container>

    <!-- 인풋 -->
    <div>
      <v-text-field
        label="Main input"
        :rules="rules1"
        hide-details="auto"
      ></v-text-field>
      <v-text-field label="Another input"></v-text-field>
    </div>

    <!-- 텍스트에어리어 -->
    <v-container fluid>
      <v-textarea
        name="input-7-1"
        filled
        label="Label"
        auto-grow
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      ></v-textarea>
    </v-container>
    <!-- 텍스트필드 -->

    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Regular" color="success"></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Regular"
              placeholder="Placeholder"
              clearable
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Solo" solo></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Solo"
              placeholder="Placeholder"
              solo
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Filled" filled></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Filled"
              placeholder="Placeholder"
              filled
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Outlined" outlined></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Outlined"
              placeholder="Placeholder"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <!-- 비밀번호 -->
    <v-form>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules2.required, rules2.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Normal with hint text"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules2.required, rules2.min]"
              :type="show2 ? 'text' : 'password'"
              name="input-10-2"
              label="Visible"
              hint="At least 8 characters"
              value="wqfasds"
              class="input-group--focused"
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules2.required, rules2.min]"
              :type="show3 ? 'text' : 'password'"
              name="input-10-2"
              label="Not visible"
              hint="At least 8 characters"
              value="wqfasds"
              class="input-group--focused"
              @click:append="show3 = !show3"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules2.required, rules2.emailMatch]"
              :type="show4 ? 'text' : 'password'"
              name="input-10-2"
              label="Error"
              hint="At least 8 characters"
              value="Pa"
              error
              @click:append="show4 = !show4"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <!-- 아이콘포함 텍스트필드 -->
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Prepend"
              prepend-icon="mdi-map-marker"
            ></v-text-field>

            <v-text-field
              label="Prepend inner"
              prepend-inner-icon="mdi-map-marker"
            ></v-text-field>

            <v-text-field
              label="Append"
              append-icon="mdi-map-marker"
            ></v-text-field>

            <v-text-field
              label="Append outer"
              append-outer-icon="mdi-map-marker"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              solo
              label="Prepend"
              prepend-icon="mdi-map-marker"
            ></v-text-field>

            <v-text-field
              solo
              label="Prepend inner"
              prepend-inner-icon="mdi-map-marker"
            ></v-text-field>

            <v-text-field
              solo
              label="Append"
              append-icon="mdi-map-marker"
            ></v-text-field>

            <v-text-field
              solo
              label="Append outer"
              append-outer-icon="mdi-map-marker"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              filled
              label="Prepend"
              prepend-icon="mdi-map-marker"
            ></v-text-field>

            <v-text-field
              filled
              label="Prepend inner"
              prepend-inner-icon="mdi-map-marker"
            ></v-text-field>

            <v-text-field
              filled
              label="Append"
              append-icon="mdi-map-marker"
            ></v-text-field>

            <v-text-field
              filled
              label="Append outer"
              append-outer-icon="mdi-map-marker"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              outlined
              label="Prepend"
              prepend-icon="mdi-map-marker"
            ></v-text-field>

            <v-text-field
              outlined
              label="Prepend inner"
              prepend-inner-icon="mdi-map-marker"
            ></v-text-field>

            <v-text-field
              outlined
              label="Append"
              append-icon="mdi-map-marker"
            ></v-text-field>

            <v-text-field
              outlined
              label="Append outer"
              append-outer-icon="mdi-map-marker"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      rules2: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
      rules1: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      switch1: true,
      media: 0,
      alarm: 0,
      zoom: 0,
      items1: ["Foo", "Bar", "Fizz", "Buzz"],
      column: null,
      row: null,
      radioGroup: 1,
      items: ["Arial", "Calibri", "Courier", "Verdana"],
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      selected: ["John"],
      ex4: [
        "red",
        "indigo",
        "orange",
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
        "red darken-3",
        "indigo darken-3",
        "orange darken-3",
      ],
      checkbox: true,
      hasSaved: false,
      isEditing: null,
      model: null,
      states: [
        { name: "Florida", abbr: "FL", id: 1 },
        { name: "Georgia", abbr: "GA", id: 2 },
        { name: "Nebraska", abbr: "NE", id: 3 },
        { name: "California", abbr: "CA", id: 4 },
        { name: "New York", abbr: "NY", id: 5 },
      ],
    };
  },

  methods: {
    zoomOut() {
      this.zoom = this.zoom - 10 || 0;
    },
    zoomIn() {
      this.zoom = this.zoom + 10 || 100;
    },
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },
  },
};
</script>
<style>
</style>