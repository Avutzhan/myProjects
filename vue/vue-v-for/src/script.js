//simple items
var app = new Vue({
  el: '#app',
  data: {
    phones: ['iPhone 7', 'Galaxy S8', 'Nokia N8', 'Xiaomi Mi6']
  },
})
//array of objects
var app2 = new Vue({
  el: '#app2',
  data: {
    users: [
      {name: 'Tom', age: 18},
      {name: 'Jerry', age: 15},
      {name: 'Timon', age: 20},
    ]
  },
})
//indexes
var app3 = new Vue({
  el: '#app3',
  data: {
    phones: ['iPhone 7', 'Galaxy S8', 'Nokia N8', 'Xiaomi Mi6']
  }
})
//objects
var app4 = new Vue({
  el: '#app4',
  data: {
    users: [
      {name: 'Tom', age: 18},
      {name: 'Jerry', age: 15},
      {name: 'Timon', age: 20},
    ]
  }
})
//template
var app5 = new Vue({
  el: '#app5',
  data: {
    users: [
      {name: 'Tom', age: 18},
      {name: 'Jerry', age: 15},
      {name: 'Timon', age: 20},
    ]
  }
})