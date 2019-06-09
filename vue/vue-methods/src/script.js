var app = new Vue({
        el: '#app',
        data:{name: 'Tom', age:25},
        methods:{
            welcome: function(){
                return "Welcome";
            },
            displayName: function() {
                return this.name;
            },
            factorial:function(n){
                var result=1;
                for(var i=1; i<=n;i++){
                    result = result * i;
                }
                return result;
            }
        }
    })