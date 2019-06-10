<template>

  <div class="about">
     <v-card class="ma-5">
       <v-card-title>
         <h2>Fill the form to SignUp</h2>
       </v-card-title>
       <v-card-text>
         <v-form class="px-3">
 
           <v-text-field label="Email" v-model="email" prepend-icon="email"></v-text-field>
           <v-text-field label="Password" v-model="password" prepend-icon="lock" type="password"></v-text-field>
           <v-text-field label="Confirm Password" v-model="confirmPassword" type="password" prepend-icon="lock" :rules="[comparePasswords]"></v-text-field>
          <v-btn class="success" @click.prevent="onSignup">Signup</v-btn>
         </v-form>
       </v-card-text>
     </v-card>
  </div>

</template>

<script>
import * as firebase from 'firebase';
export default {
  data(){
    return{
     
      email:'',
      password:'',
      confirmPassword:''
    }
  },
  computed:{
    comparePasswords(){
      return this.password !== this.confirmPassword ? 'Passwords don not match':''
    }
  },
  methods:{
    onSignup(){
         firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
         .then(
           user => {
             alert('Account Created Successfully!');
             this.$router.push('/');
           },
           err => {
             alert(err.message);
           }
         );            
    }
  }
}
</script>

