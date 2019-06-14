Vue.component('useredit', {
  props: ["user"],
  data: function () {
    return { userName: this.user}
  },
  template: '<div><input type="text" v-model="userName" v-on:input="onUserChange" /><p>Name: {{userName}}</p></div>',
  methods: {
    onUserChange: function(){
      this.$emit('userchange', this.userName);
    }
  }
});
new Vue({
  el: "#app",
  data: {
    name: 'Tom'
  },
  methods:{
    change: function(value){
      this.name = value;
    }
  }
});

Vue.component('useredit', {
    props: ["user"],
    data: function () {
      return { userName: this.user}
    },
    template: '<div><input type="text" v-model="userName" v-on:input="onUserChange" /><p>Name: {{userName}}</p></div>',
    methods: {
        onUserChange: function(){
            this.$emit('update:user', this.user)
        }
    }
});
new Vue({
    el: "#app2",
    data: {
        name: 'Tom'
    }
});