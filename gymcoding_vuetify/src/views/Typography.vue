<template>
  <v-container>
    <v-card>
      <v-card-title> Typography </v-card-title>
      <v-container class="grey lighten-3">
      <!-- pa :padding all 3씩 추가 -->
        <v-card class="pa-3" outlined>
            <!-- d-none 뜻:  display:none; -->   <!-- sm이상일때는 block -->
          <p class="text-h1 d-none d-sm-block" >Heading1</p>

          
          <p class="text-h2 ">Heading2</p>


          <!-- sm이상일때는 subtitle1으로변경 -->
          <p class="text-h3 text-sm-subtitle-1">Heading3</p>

          <p class="font-weight-black">Black text.</p>
          <p class="font-weight-bold">Bold text.</p>
          <p class="font-weight-medium">Medium weight text.</p>
          <p class="font-weight-regular">Normal weight text.</p>
          <p class="font-weight-light">Light weight text.</p>
          <p class="font-weight-thin">Thin weight text.</p>
          <p class="font-italic">Italic text.</p>
            <p class="text-justify">
              Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut,
              faucibus non, euismod id, nulla. Fusce convallis metus id felis
              luctus adipiscing. Aenean massa. Vestibulum purus quam,
              scelerisque ut, mollis sed, nonummy id, metus. Nulla consequat
              massa quis enim. Praesent venenatis metus at tortor pulvinar
              varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus
              velit. Pellentesque ut neque.
            </p>
          </v-card>
          </v-container></v-card>
          <!-- 배경색변경 -->
              <p class="text-left primary">
              <!-- primary:배경 파랑색 -->
                Left aligned text on all viewport sizes.
                </p>
                <p class="text-center secondary lighten-5">
                <!-- secondary: 회색 -->
                <!-- lighten-1 :여리게 -->
                Center aligned text on all viewport sizes.
                </p>
                 <!-- darken-1 :어둡게 -->
                <p class="text-right error darken-2">
                <!-- error:레드 -->
                Right aligned text on all viewport sizes.
                </p>
            <!-- 글자색 변경 -->
                <p class="text-sm-left primary--text">
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
          </v-container>

</template>

<script>
export default {};
</script>

<style>
</style>