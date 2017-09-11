import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/ALert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog.vue'
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog.vue'
import RegisterDialog from './components/Meetup/Registration/RegisterDialog.vue'


Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-register-dialog', RegisterDialog)


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
            storageBucket: 'gs://devmeetup-ef986.appspot.com',
        })
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.$store.dispatch('autoSignIn', user)
                this.$store.dispatch('fetchUserData')

            }
        })
        this.$store.dispatch('loadMeetups')
    }
})