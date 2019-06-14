var app = new Vue({
  el: '#app',
  data: {
    checked: true
  }
});
var app2 = new Vue({
  el: '#app2',
  data: {
    on: true,
    off:false,
    light: true
  }
});
var app3 = new Vue({
  el: '#app3',
  data: {
    selectedUsers:[]
  }
});
var app4 = new Vue({
  el: '#app4',
  data: {
    users:[
      {name:'Tom', age:22},
      {name:'Bob', age:25},
      {name:'Sam', age:28},
      {name:'Alice', age:26}
    ],
    selectedUsers:[]
  }
});