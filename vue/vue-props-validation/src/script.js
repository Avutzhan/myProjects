Vue.component('user', {
  props: {
      name: {
        type: String,
        required: true,
        default: 'Tom',
        validator: function(value){
            return value!='admin' && value!='';
        }
      }, 
      age: {
        type: Number,
        required: true,
        default: 18,
        validator: function(value){
            return value >= 0 && value < 100;
        }
      }
  },
  template: '<div><h2>User</h2><p>Name: {{name}}</p><p>Age: {{age}}</p></div>'
})
new Vue({
    el: "#app",
    data: {
        user: {
            name: '',
            age: 0
        }
    }
});