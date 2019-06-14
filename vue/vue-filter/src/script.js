var app = new Vue({
  el: '#app',
  data: {
    company: '',
    phones: [
      {title:'iPhone 7', company:'Apple'}, 
      {title:'iPhone 6S', company:'Apple'},
      {title:'Galaxy S8', company:'Samsung'},
      {title:'Galaxy S7 Edge', company:'Samsung'},
      {title:'Nokia N8', company:'HMD Global'}]
  },
  computed:{
    filteredList: function(){
      var comp = this.company;
      return this.phones.filter(function (elem) {

        if(comp==='') return true;
        else return elem.company.indexOf(comp) > -1;
      })
    }
  }
});

var app2 = new Vue({
  el: '#app2',
  data: {
    sortParam: '',
    phones: [
      {title:'Galaxy S8', company:'Samsung', price: 45000},
      {title:'iPhone 7', company:'Apple', price: 49000}, 
      {title:'Nokia N8', company:'HMD Global', price: 25000},
      {title:'Galaxy Note 8', company:'Samsung', price: 50000},
      {title:'iPhone 8', company:'Apple', price: 60000}]
  },
  computed:{
    sortedList () {
      switch(this.sortParam){
        case 'title': return this.phones.sort(sortByTitle);
        case 'company': return this.phones.sort(sortByCompany);
        case 'price': return this.phones.sort(sortByPrice);
        default: return this.phones;
      }
    }
  }
});
var sortByTitle = function (d1, d2) {return (d1.title.toLowerCase() > d2.title.toLowerCase()) ? 1 : -1;};
var sortByCompany = function (d1, d2) { return (d1.company.toLowerCase() > d2.company.toLowerCase()) ? 1 : -1; };
var sortByPrice = function (d1, d2) { return (d1.price > d2.price) ? 1 : -1; };