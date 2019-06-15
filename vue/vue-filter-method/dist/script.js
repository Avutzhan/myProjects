Vue.filter('capitalize', function (value) { 
          var capitalFirst = value.charAt(0).toUpperCase() 
          var noCaseTail = value.slice(1, value.length) 
            return capitalFirst + noCaseTail;
});
new Vue({
    el:'#app',
    data: { 
        message: "hello word!"
    }
})

Vue.component('message', {
    template: '<h2>{{text | uppercase}}</h2>',
    data: function(){
        return {
            text: 'vue filters'
        }
    },
    filters: {
        uppercase(value) { 
            return value.toUpperCase();
        }
    }
});
new Vue({
    el:'#app2',
    data: { 
        header: "hello word!"
    }
})