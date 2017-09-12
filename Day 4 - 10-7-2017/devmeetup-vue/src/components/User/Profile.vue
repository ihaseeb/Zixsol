<template>

  <v-container v-if="userIsRegistered && userIsAuthenticated">
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <h4 class="primary--text" style="text-align: center">Your Registered Meetups</h4>
      </v-flex>
    </v-layout>
    <v-layout row wrap  v-for="meetup in meetups" :key="meetup.id" class="mb-2" >
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <v-container fluid >
            <v-layout row> 
              <v-flex xs5 sm4 md3>
                <v-card-media
                      :src="meetup.imageUrl"
                      height="130px"
                      
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text mb-0">{{meetup.title}}</h5>
                    <div>{{ meetup.date | date }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat :to="'/meetups/' + meetup.id">
                    <v-icon left>arrow_forward</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  export default {
    props: ['meetupId'],
    computed: {
      userIsAuthenticated () {
                return this.$store.getters.user !==null && this.$store.getters.user !== undefined
      },
      meetups () {
        return this.$store.getters.loadedMeetups
      },
      userIsRegistered() {
            return this.$store.getters.user.registeredMeetups.id === this.$store.getters.loadedMeetups.id
            
            
            
        }
    }
  }
  
  
</script>