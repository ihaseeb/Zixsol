import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [{
                imageUrl: 'https://i0.wp.com/www.dilkashpakistan.com/wp-content/uploads/2016/09/Monal-Restruen-islamabad.jpg',
                id: 'dswewr1212',
                title: 'Meetup in Islamabad Monal',
                date: '2017-08-1'
            },
            {
                imageUrl: 'https://c1.staticflickr.com/9/8650/15893075208_b07489f39d_b.jpg',
                id: 'dswsdfsf122132',
                title: 'Meetup in Islamabad Centaurus',
                date: '2017-08-8'
            }
        ],
        user: {
            id: 'sdgjsdgk1',
            registeredMeetups: ['dswsdfsf122132']
        }
    },
    mutations: {},
    actions: {},
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        }
    }
})