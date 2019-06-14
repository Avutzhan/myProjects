Vue.component('userform', {
    props: ["users"],
    data: function () {
        return {
            user: {name:'', age:18}
        }
    },
    template: `<div>
                    <input type="text" v-model="user.name" />
                    <input type="number" v-model="user.age" />
                    <button  v-on:click="userAdd">Add</button>
                </div>`,
    methods: {
        userAdd: function(event){
            this.users.push({name:this.user.name, age: this.user.age});
        }
    }
});
Vue.component('useritem', {
    props: ["user", "index"],
    template: `<div>
                    <p>Name: {{user.name}} <br> Age: {{user.age}}</p>
                    <button  v-on:click="userDelete(index)">Delete</button>
                </div>`,
    methods: {
        userDelete: function(index){
            this.$emit('userdelete', index);
        }
    }
});
new Vue({
    el: "#app",
    data: {
        users:[
            {name: 'Tom', age: 23},
            {name: 'Bob', age: 26},
            {name: 'Alice', age: 28}
        ]
    },
    methods:{
        remove: function(index){
            this.users.splice(index, 1)
        }
    }
});

Vue.component('userform', {
    props: ["user"],
    template: `<div>
                    <input type="text" v-model="user.name" />
                    <input type="number" v-model="user.age" />
                </div>`,
});
Vue.component('useritem', {
    props: ["user", "index"],
    template: `<div>
                    <p>Name: {{user.name}} <br> Age: {{user.age}}</p>
                    <button  v-on:click="userChange(index)">Change</button>
                </div>`,
    methods: {
        userChange: function(index){
            this.$emit('userchange', index);
        }
    }
});
new Vue({
    el: "#app2",
    data: {
        users:[
            {name: 'Tom', age: 23},
            {name: 'Bob', age: 26},
            {name: 'Alice', age: 28}
        ],
        user:{}
    },
    methods:{
        change: function(index){
            this.user = this.users[index];
        }
    }
});