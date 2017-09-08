<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" temporary>
      <v-list>
        <v-list-tile 
        v-for="item in menuItems" 
        :key="item.title"
        router
        :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
   <v-toolbar dark class="primary">
    
        <v-toolbar-side-icon
          @click.stop="sideNav = !sideNav"
          class="hidden-md-and-up">
        </v-toolbar-side-icon>
      
    <v-toolbar-title>
       <router-link to="/" tag="span" style="cursor: pointer"> DevMeetup </router-link> 
      </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat 
      v-for="item in menuItems" 
      :key="item.title"
      :to="item.link"
      >
        <v-icon left dark>{{ item.icon }}</v-icon>
        {{ item.title }}
        </v-btn>
    </v-toolbar-items>
   </v-toolbar>
    <main>
      <router-view></router-view>
    </main>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
          {icon: 'room', title: 'Organize Meetups', link: '/meetup/new'},
          {icon: 'person', title: 'Profile', link: '/profile'},
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
