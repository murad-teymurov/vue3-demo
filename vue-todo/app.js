// import { createApp } from 'vue'
// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: "The Final Empire",
            author: "brandon Sanderson",
            age: 45,
            x:0,
            y:0
        }
    },
    methods: {
      toggleShowBooks() {
        this.showBooks = !this.showBooks
      },
      handleEvent(e, data) {
        console.log(e);
        if(data) {
            console.log(data);
        }
      },
      handleMouseMove(e) {
        this.x = e.offsetX
        this.y = e.offsetY
      }
    }
});

app.mount('#app');
