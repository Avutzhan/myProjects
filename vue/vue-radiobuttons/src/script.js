var app = new Vue({
  el: '#app',
  data: {
    user:''
  }
});

var app2 = new Vue({
  el: '#app2',
  data: {
    user:{}
  }
});

var app3 = new Vue({
  el: '#app3',
  data: {
    users:[
      {name:'Tom', age:22},
      {name:'Bob', age:25},
      {name:'Sam', age:28},
      {name:'Alice', age:26}
    ],
    selectedUser:null
  }
});