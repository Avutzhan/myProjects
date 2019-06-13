var vm1 = new Vue({
    el: '#app1',
    data: {name:'Tom', age: 22},
    methods: {
        setName: function(value){
            this.name = value;
        }
    }
});
// установка свойств объекта Vue в обычном коде JS
vm1.name = "Sam";
vm1.setName("Mike");
 
// установка свойств объекта Vue в другом объекте Vue
var vm2 = new Vue({
    el: '#app2',
    data: {title:''},
    methods: {
        onClick: function(){
            vm1.setName(this.title);
            //vm1.name = this.title;  // или так
        }
    }
});