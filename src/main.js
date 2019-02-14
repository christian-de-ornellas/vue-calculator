import Vue from 'vue'
import App from './App'

/**
 * O código comentado ou o abaixo, fazem a mesma coisa, pois o Vuejs tem * diversas formas de fazer a mesma função.
*/

// new Vue({
//     el: '#app',    
//     render(createElement){
//         return createElement(App)
//     }
// })

new Vue({
    render: h => h(App)   
}).$mount("#app");