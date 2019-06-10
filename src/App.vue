<template>
  <v-app>
    <Navbar class="mt-4"/>
    <v-content>
     <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components:{
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
