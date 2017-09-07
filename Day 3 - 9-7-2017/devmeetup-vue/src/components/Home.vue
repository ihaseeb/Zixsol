<template>
 <v-container>
   <v-layout row wrap>
     <v-flex xs12 sm6 class="text-xs-center text-sm-right">
       <v-btn large route to="/meetups" class="info">Explore Meetups</v-btn>
     </v-flex>
     <v-flex xs12 sm6 class="text-xs-center text-sm-left">
       <v-btn large route to="/meetup/new" class="info">Organize Meetups</v-btn>
     </v-flex>
   </v-layout>
   <v-layout row wrap class="mt-2">
     <v-flex xs12>
      <v-carousel style="cursor: pointer">
       <v-carousel-item 
       v-for="meetup in meetups" 
       :src="meetup.imageUrl" 
       :key="meetup.id"
       @click="OnLoadMeetup(meetup.id)"
       >
       <div class="title">
         {{meetup.title}}
       </div>
       </v-carousel-item>
      </v-carousel>
     </v-flex>
   </v-layout>
      <v-layout row wrap class="mt-2">
        <v-flex xs12 class="text-xs-center">
          <p>Join our Meetups</p>
        </v-flex>
      </v-layout>
 </v-container>
</template>

<script>
  export default {
    data() {
      return {
        meetups: [
          { imageUrl: 'https://i0.wp.com/www.dilkashpakistan.com/wp-content/uploads/2016/09/Monal-Restruen-islamabad.jpg', id: 'dswewr1212', title: 'Meetup in Islamabad Monal' },
          { imageUrl: 'https://c1.staticflickr.com/9/8650/15893075208_b07489f39d_b.jpg', id: 'dswsdfsf122132', title: 'Meetup in Islamabad Centaurus' }
        ]
      }
    },
    methods: {
      OnLoadMeetup(id) {
        this.$router.push('/meetups/' +id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
