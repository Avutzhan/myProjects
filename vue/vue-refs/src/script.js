var vm1 = new Vue({
    el: "#app",
    methods:{
        change: function(){
            this.$refs.header.innerText = "Welcome to Vue.js";
        }
    }
});