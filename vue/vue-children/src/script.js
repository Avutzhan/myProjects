Vue.component('userdetails', {
    props: ["user"],
    template: `<div class="userdetails">
                    <p>Name: {{user.name}}</p>
                    <p>Age: {{user.age}}</p>
                </div>`
});
Vue.component('userslist', {
    props: ["users"],
    template: `<div>
                <userdetails v-for="user in users" :key="user.name" :user="user"></userdetails>
            </div>`
});
new Vue({
    el: "#app",
    data: {
        users: [{
            name: 'Tom',
            age: 18
        },{
            name: 'Bob',
            age: 23
        },{
            name: 'Alice',
            age: 21
        }]
    }
});