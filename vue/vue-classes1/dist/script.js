var app = new Vue({
        el: "#app",
        data: {
            isActive : false, 
            isBounded: false
        },
        computed: {
            classObj: function () {
                return {
                    active: this.isActive, bounded: this.isBounded
                }
            }
        }
    });