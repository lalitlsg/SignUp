<template>
  <v-layout class="ma-5">
      <v-card>
        <v-card-text>
          <v-layout row>
            <v-flex>
               <Signin />
            </v-flex>
            <v-flex>
               <v-btn flat dark class="indigo" @click="$router.push('signup')">
                  <span>Signup</span>
                 <v-icon>person</v-icon>
                </v-btn>
            </v-flex>
          </v-layout>  
        </v-card-text>    
       </v-card>     
 </v-layout>
</template>

<script>
import Signin from './Signin.vue'

export default {
      components:{Signin}
  }
</script>
