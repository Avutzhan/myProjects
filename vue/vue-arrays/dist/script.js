var app = new Vue({
  el: '#app',
  data: {
    newPhone: '',
    phones: ['iPhone 7', 'Galaxy S8', 'Nokia N8', 'Xiaomi Mi6']
  }
});
var app2 = new Vue({
  el: '#app2',
  data: {
    newPhone: '',
    phones: ['iPhone 7', 'Galaxy S8', 'Nokia N8', 'Xiaomi Mi6']
  },
  methods:{
    updateList: function(){
      Vue.set(this.phones, 1, 'Samsung Galaxy S8');
    }
  }
});

 var app3 = new Vue({
        el: '#app3',
        data: {
            start:0,
            end:3,
            phones: ['iPhone 7', 'Galaxy S8', 'Nokia N8', 'Xiaomi Mi6']
        },
        computed:{
            visibleList: function(){
                return this.phones.slice(this.start,this.end);
            }
        }
    });