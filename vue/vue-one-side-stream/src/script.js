Vue.component('useredit', {
    props: ["user"],
    template: '<div><input type="text" v-model="user" /><p>Name: {{user}}</p></div>'
});
new Vue({
    el: "#app",
    data: {
        name: 'Tom'
    },
    methods:{
        resetName: function(){
            this.name = 'Bob';
        }
    }
});

Vue.component('useredit', {
    props: ["user"],
    data: function () {
      return { userName: this.user}
    },
    template: '<div><input type="text" v-model="userName" /><p>Name: {{userName}}</p></div>'
});
new Vue({
    el: "#app2",
    data: {
        name: 'Tom'
    },
    methods:{
        resetName: function(){
            this.name = 'Bob';
        }
    }
});