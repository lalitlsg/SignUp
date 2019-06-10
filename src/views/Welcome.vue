<template>
    <v-container>
        <v-layout row>
        <h1>Welcome!</h1>
        <v-spacer></v-spacer>
        <v-btn @click="onSignout">Signout
        <v-icon>exit_to_app</v-icon>
        </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
import * as firebase from 'firebase'
export default {
    data(){
        return{

        }
    },
    methods:{
        onSignout(){
            firebase.auth().signOut().then(() => {
                this.$router.push('/')
            })
        }
    }
}
</script>
