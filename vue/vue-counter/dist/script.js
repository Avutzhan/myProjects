var app = new Vue({
  el: '#app',
  data: {counter:0},
  methods: {
    increase: function() {
      this.counter++;
    },
    decrease: function() {
        if(this.counter>0) {
          this.counter--;
        }
    },
    reset: function() {
      this.counter = 0;
    }
  }
});