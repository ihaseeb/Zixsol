<template>
  <v-container>
      <v-layout row wrap>
          <v-flex xs12>
              <v-card>
                  <v-card-title>
                     <h6 class="primary--text">{{ meetup.title }}</h6> 
                  </v-card-title>
                  <v-card-media
                      :src="meetup.imageUrl"
                      height="400px"
                ></v-card-media>
                <v-card-text>
                <div class="info--text">{{ meetup.date }} - Where the meetup will be held</div>                    
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, amet laboriosam quas mollitia debitis atque cum quia, dolorum harum esse libero id tempora molestiae voluptate possimus eaque labore vero dolor?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="primary">
                        Register
                    </v-btn>
                </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            meetup() {
                return this.$store.getters.loadedMeetup(this.id)
            }
        }
    }
</script>