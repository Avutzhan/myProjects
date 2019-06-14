Vue.component('userdetails', {
    props: ["user"],
    template: `<div>
                <h2>Информация о пользователе</h2>
                <div v-if="visible">
                    <p>Name: {{user.name}}</p>
                    <p>Age: {{user.age}}</p>
                </div>
            </div>`,
    data: function(){
        return{
            visible: false
        }
    }
});
new Vue({
    el: "#app",
    data: {
        user:{
            name: 'Tom',
            age: 18
        }
    },
    methods: {
        toggle: function(){
            this.$refs.details.visible = !this.$refs.details.visible;
        }
    }
});