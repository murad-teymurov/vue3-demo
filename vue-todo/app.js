// import { createApp } from 'vue'
// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const app = Vue.createApp({
    data() {
        return {
            title: "The Final Empire",
            author: "brandon Sanderson",
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'word of Randlance'
            this.title = title
        }
    }
});

app.mount('#app');

// const app = Vue.createApp({
//     data() {
//         return {
//             count: 0
//         };
//     }
// });

// app.mount('#app');
