import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/ALert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCTf3BvGyzXSJYiPVtc3IF2wRxHj0yd17M',
            authDomain: 'devmeetup-ef986.firebaseapp.com',
            databaseURL: 'https://devmeetup-ef986.firebaseio.com',
            projectId: 'devmeetup-ef986',
            storageBucket: 'devmeetup-ef986.appspot.com',
        })
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.$store.dispatch('autoSignIn', user)
            }
        })
        this.$store.dispatch('loadMeetups')
    }
})