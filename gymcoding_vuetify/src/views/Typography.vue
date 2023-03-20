<template>
  <v-container>
  <v-card>
    <v-card-title>
        Typography
    </v-card-title>
    <v-contain class="grey lighten-3">
        <v-card class="pa-3" outlined>
        <p class="text-h1">Heading1 </p>
        <p class="text-h2">Heading2 </p>
        <!-- sm이상일때는 subtitle1으로변경 -->
        <p class="text-h3 text-sm-subtitle-1" >Heading3 </p>


                <!-- Heading 1
                Heading 2
                Heading 3
                Heading 4
                Heading 5
                Heading 6
                Subtitle 1
                Subtitle 2
                Body 1
                Body 2
                BUTTON
                Caption
                OVERLINE
         -->

    <p class="font-weight-black">
      Black text.
    </p>
    <p class="font-weight-bold">
      Bold text.
    </p>
    <p class="font-weight-medium">
      Medium weight text.
    </p>
    <p class="font-weight-regular">
      Normal weight text.
    </p>
    <p class="font-weight-light">
      Light weight text.
    </p>
    <p class="font-weight-thin">
      Thin weight text.
    </p>
    <p class="font-italic">
      Italic text.
    </p>

    <template>
  <p class="text-justify">
    Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.

    Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
  </p>
</template>

 <p class="text-left">
      Left aligned text on all viewport sizes.
    </p>
    <p class="text-center">
      Center aligned text on all viewport sizes.
    </p>
    <p class="text-right">
      Right aligned text on all viewport sizes.
    </p>

    <p class="text-sm-left">
      Left aligned text on viewports sized SM (small) or wider.
    </p>
    <p class="text-md-left">
      Left aligned text on viewports sized MD (medium) or wider.
    </p>
    <p class="text-lg-left">
      Left aligned text on viewports sized LG (large) or wider.
    </p>
    <p class="text-xl-left">
      Left aligned text on viewports sized XL (extra-large) or wider.
    </p>
        </v-card>
    </v-contain>
  </v-card>

  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>