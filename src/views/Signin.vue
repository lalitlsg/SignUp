<template>
    <v-dialog max-width="600">
        <v-btn dark flat slot="activator" class="indigo">Signin
            <v-icon>arrow_forward_ios</v-icon>
        </v-btn>
        <v-card>
            <v-card-title>
                <h2 class="ml-3">SignIn</h2>
            </v-card-title>
             <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Email" v-model="email" prepend-icon="email"></v-text-field>
                    <v-text-field label="Password" v-model="password" prepend-icon="lock" type="password"></v-text-field>
                    <v-btn class="primary mb-3" @click.prevent="onSignin">Signin</v-btn>
                    <v-divider></v-divider>
                    <h2 class="my-2">Other Sign In Options</h2>       
                    <v-btn dark class="red" @click="onGoogleSignin">Google</v-btn>
                    <v-btn dark class="blue" @click="onFacebookSignin">Facebook</v-btn>
                </v-form>
             </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import * as firebase from 'firebase';
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        onSignin(){
            firebase.auth().signInWithEmailAndPassword(this.email,this.password)
            .then(
                user => {
                    alert('Sign In Successful');
                    this.$router.push('/welcome');
                },
                err => {
                    alert(err.message);
                }
            );
        },
        onGoogleSignin(){
            var provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider).then(
                result => {
                    alert('Sign In Successful');
                    this.$router.push('/welcome');
                },
                err => {
                    alert(err.message);
                }
            )
        },
        onFacebookSignin(){
            var provider = new firebase.auth.FacebookAuthProvider()
            firebase.auth().signInWithPopup(provider).then(
                result => {
                    alert('Sign In Successful');
                    this.$router.push('/welcome');
                },
                err => {
                    alert(err.message);
                }
            )
        }
    }
}
</script>
