import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [{
                imageUrl: 'https://i0.wp.com/www.dilkashpakistan.com/wp-content/uploads/2016/09/Monal-Restruen-islamabad.jpg',
                id: 'dswewr1212',
                title: 'Meetup in Islamabad Monal',
                date: new Date(),
                location: 'Islamabad',
                description: 'Islamabad Meetup'
            },
            {
                imageUrl: 'https://c1.staticflickr.com/9/8650/15893075208_b07489f39d_b.jpg',
                id: 'dswsdfsf122132',
                title: 'Meetup in Islamabad Centaurus',
                date: new Date(),
                location: 'Islamabad',
                description: 'Islamabad Meetup'
            }
        ],
        user: {
            id: 'sdgjsdgk1',
            registeredMeetups: ['dswsdfsf122132']
        }
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
        }
    },
    actions: {
        createMeetup({ commit }, payload) {
            const meetup = {
                    title: payload.title,
                    location: payload.location,
                    imageUrl: payload.imageUrl,
                    description: payload.description,
                    date: payload.date,
                    id: 'iuwehfsdjb22'
                }
                //reachout to firebase and store it
            commit('createMeetup', meetup)
        }
    },
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