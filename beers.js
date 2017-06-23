
 var allBeersApi = [{ //get.JSON
     marque: "Jupiler",
     type: "Pils"
 },
 {
     marque: "Maes",
     type: "Pils"
 },
  {
     marque: "Pils & Love",
     type: "Blonde"
 }];
 

  var beerItem = Vue.extend({
        template: '#beer-item',
        props: ['infobeer']
});

 var beerList = Vue.extend({
        template: '#beer-list',
        components: {
            'beer-item': beerItem
        },
        props: ['collection']
});



var beer = new Vue({
    el: "#app",
    data: {
        site: "Beers",
        allBeers: allBeersApi
    },
    components: {
            'beer-list': beerList
        }
});

