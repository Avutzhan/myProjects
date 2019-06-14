Vue.component('light', { 
  template: `<div><h3>{{header}}</h3>
                <button v-on:click="toggle" v-show="state">{{on}}</button>
                <button v-on:click="toggle" v-show="!state">{{off}}</button>
                </div>`, 
  data: function(){
    return { state: true, on: "ON", off: "OFF"}
  },
  methods:{
    toggle: function(){
        this.state= !this.state;
    }
  },
  computed:{
    header(){
        return this.state==true?"Свет включен":"Свет выключен";
    }
  }
});
Vue.component('enabled', { 
  template: `<div>Включить функцию
                <button v-on:click="toggle" v-show="state">{{on}}</button>
                <button v-on:click="toggle" v-show="!state">{{off}}</button>
                </div>`, 
  data: function(){
    return { state: true, on: "ON", off: "OFF"}
  },
  methods:{
    toggle: function(){
        this.state= !this.state;
    }
  }
});
new Vue({
    el: "#app"
});

var toggleMixin = { 
    data: function(){
        return { state: true, on: "ON", off: "OFF"}
    },
    methods:{
        toggle: function(){
            this.state= !this.state;
        }
    },
};
Vue.component('light', { 
    template: `<div><h3>{{header}}</h3>
                <button v-on:click="toggle" v-show="state">{{on}}</button>
                <button v-on:click="toggle" v-show="!state">{{off}}</button>
                </div>`, 
    mixins:[toggleMixin],
    computed:{
        header(){
            return this.state==true?"Свет включен":"Свет выключен";
        }
    }
});
Vue.component('enabled', { 
  template: `<div>Включить функцию
                <button v-on:click="toggle" v-show="state">{{on}}</button>
                <button v-on:click="toggle" v-show="!state">{{off}}</button>
                </div>`, 
    mixins:[toggleMixin]
});
new Vue({
    el: "#app2"
});