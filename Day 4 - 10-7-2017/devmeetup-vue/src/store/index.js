import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

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
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        setLoadMeetups(state, payload) {
            state.loadedMeetups = payload
        },
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser(state, payload) {
            state.user = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
        }
    },
    actions: {
        loadMeetups({ commit }) {
            commit('setLoading', true)
            firebase.database().ref('meetups').once('value')
                .then((data) => {
                    const meetups = []
                    const obj = data.val()
                    for (let key in obj) {
                        meetups.push({
                            id: key,
                            title: obj[key].title,
                            description: obj[key].description,
                            imageUrl: obj[key].imageUrl,
                            location: obj[key].location,
                            date: obj[key].date,
                            creatorId: obj[key].creatorId
                        })
                    }
                    commit('setLoadMeetups', meetups)
                    commit('setLoading', false)
                })
                .catch(
                    (error) => {
                        console.log(error)
                        commit('setLoading', false)

                    }
                )
        },
        createMeetup({ commit, getters }, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date.toISOString(),
                creatorId: getters.user.id
            }
            firebase.database().ref('meetups').push(meetup)
                .then((data => {
                    const key = data.key
                    commit('createMeetup', {
                        ...meetup,
                        id: key
                    })
                }))
                .catch((error) => {
                    console.log(error)
                })


        },
        signUserUp({ commit }, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.uid,
                            registeredMeetups: []
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )
        },
        signUserIn({ commit }, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', true)
                        const newUser = {
                            id: user.uid,
                            registeredMeetups: []
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )
        },
        autoSignIn({ commit }, payload) {
            commit('setUser', { id: payload.uid, registeredMeetups: [] })
        },
        logout({ commit }) {
            firebase.auth().signOut()
            commit('setUser', null)
        },
        clearError({ commit }) {
            commit('clearError')
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
        },
        user(state) {
            return state.user
        },
        loading(state) {
            return state.loading
        },
        error(state) {
            return state.error
        }
    }
})