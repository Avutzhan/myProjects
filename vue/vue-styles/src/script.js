var app = new Vue({
        el: '#app',
        data: {
            color: 'red',
            width: 75,
            height: 75
        },
        computed:{
            colorStyle: function(){
                return {
                    'background-color': this.color
                }
            },
            sizeStyle: function(){
                return {
                    height: this.height + 'px', 
                    width: this.width+'px'
                }
            }
        }
    });