new Vue({
    el: '#app',
    data: {
        title: 'hello world!',
        cssClass: '',
        // counter: 0,
        clicks: 0
    },
    methods: {
        changeTitle() {
            this.title = 'hello Haseeb!'
        },
        increment() {
            this.clicks++;
            // this.counter = this.clicks * 2;
        }
    },
    computed: {
        counter() {
            return this.clicks * 2;
        }
    }
});
new Vue({
    el: '#app2',
    data: {
        show: true,
        person: [{
                name: 'Haseeb',
                age: 24
            },
            {
                name: 'Saif',
                age: 25
            },
            {
                name: 'Adil',
                age: 19
            }
        ]
    },
    methods: {

    }
});
Vue.filter('uppercase', function(value) {
    return value.toUpperCase();
});
new Vue({
    el: '#app3',
    data: {
        title: 'Hi, my name is Haseeb',
        message: 'Laurel Ipsum'
    },
    filters: {
        lowercase: function(value) {
            return value.toLowerCase();
        }
    }
});
Vue.component('app-user', {
    data: function() {
        return {
            users: [{
                    username: 'Haseeb'
                },
                {
                    username: 'Saif'
                },
                {
                    username: 'Ahmed'
                }
            ]
        };
    },
    template: '<div><div class="user" v-for="user in users"><p>Username: {{ user.username}}</p></div></div>'
});
new Vue({
    el: '#app4',
    data: {
        title: 'Hi',
        users: [{
                username: 'Haseeb'
            },
            {
                username: 'Saif'
            },
            {
                username: 'Ahmed'
            }
        ]
    }
});