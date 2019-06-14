Vue.component('useredit', { 
    props: ["name"],
    template: '<div><input v-model="name" /><button @click="save">Save</button></div>',
    methods:{
        save(){
            this.$emit("userchange", this.name);
        }
    }
});
Vue.component('userinfo', { 
    props: ["name"],
    template: `<div><p>Имя: {{name}}</p><button @click="reset">Reset</button></div>`,
    methods:{
        reset(){
            this.$emit("userreset");
        }
    }
});
new Vue({
    el: "#app",
    data:{
        user:'Tom'
    },
    methods:{
        change(name){
            this.user = name;
        },
        reset(){
            this.user = 'Tom';
        },
    }
});

var eventBus = new Vue();
 
Vue.component('useredit', { 
    props: ["user"],
    template: `<div>
                    <input v-model="userName" />
                    <button @click="save">Save</button>
                </div>`,
    data: function () {
      return { userName: this.user}
    },
    methods:{
        save(){
            eventBus.$emit("userchange", this.userName);
        }
    }
});
Vue.component('userinfo', { 
    props: ["user"],
    template: '<div><p>Имя: {{userName}}</p></div>',
    data: function () {
      return { userName: this.user}
    },
    created(){
        eventBus.$on("userchange", (name)=>{
            this.userName = name;
        });
    }
});
new Vue({
    el: "#app2",
    data:{
        user:'Tom'
    }
});