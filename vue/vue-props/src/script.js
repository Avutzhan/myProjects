Vue.component('message-comp', {
  props: ['message'],
  template: '<h2>{{message}}</h2>'
})
new Vue({
    el: "#app",
    data: {
        welcome:''
    }
});

Vue.component('user', {
  props: ['name', 'age'],
  template: '<div><h2>User</h2><p>Name: {{name}}</p><p>Age: {{age}}</p></div>'
})
new Vue({
    el: "#app2",
    data: {
        name: '',
        age: 18
    }
});

Vue.component('user', {
  props: ['name', 'age'],
  template: '<div><h2>User</h2><p>Name: {{name}}</p><p>Age: {{age}}</p></div>'
})
new Vue({
    el: "#app3",
    data: {
        user: {
            name: '',
            age: 18
        }
    }
});