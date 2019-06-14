Vue.component('userinfo', {
  //props: ["user"],  как альтернатива  props: {user: Object}
  props: {
    user: {
      type: Object,
      default: function(){
        return  {
          name: 'Bob',
          age: 22
        }
      }
    }
  },
  template: `<div>
               <h2>User</h2>
               <p>Name: {{user.name}}</p>
               <p>Age: {{user.age}}</p>
             </div>`
});
new Vue({
  el: "#app",
  data: {
    user: {
      name: 'Tom',
      age: 18
    }
  }
});


Vue.component('userslist', {
  // props: ["users"],
  // better configuration
  props: {
    users:{
      type: Array,
      default: function(){
        return []
      }
    }
  },
  template: `<ul>
              <li v-for="user in users">
                <p>Name: {{user.name}}</p>
                <p>Age: {{user.age}}</p>
              </li>
            </ul>`
});
new Vue({
  el: "#app2",
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