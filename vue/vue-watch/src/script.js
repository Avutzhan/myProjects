 var app = new Vue({
        el: '#app',
        data:{
            number: '',
            result: ''
        },
        watch: {
            number: function (newNumber) {
                if(newNumber>0){
                    this.factorial(newNumber);
                }
            }
        },
        methods:{
            factorial: function(newNumber){
                this.result = 'Идет вычисление факториала...';
                var vm = this;
                setTimeout(function(){
                    var res = 1;
                        for(var i = 1; i<=newNumber; i++){
                            res = res * i;
                        }
                        vm.result = 'Факториал числа ' + newNumber + ' равен ' + res;
                }, 2000);
            }
        }
    });