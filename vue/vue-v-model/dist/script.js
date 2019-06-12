var app = new Vue({
        el: '#app',
        data: {name: 'Tom', age:99}
    });

var app2 = new Vue({
        el: '#app2',
        data: {number:1},
        methods:{
            factorial: function(n){
                var result = 1;
                for(var i=1;i<=n;i++)
                    result *=i;
                return result;
            }
        }
    });