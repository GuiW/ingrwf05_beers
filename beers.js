//Simulation de récupération de données en dehors de l'app
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
 
// ************************************************************************** //

//Component beer-item
  var beerItem = Vue.extend({
        template: '#beer-item',
        props: ['infobeer']
});

//Component beer-list
 var beerList = Vue.extend({
        template: '#beer-list',
      //Le component beer-list reçoit le compoment beer-item
        components: {
            'beer-item': beerItem
        },
        props: ['collection']
});

// ************************************************************************** //

//Application principale
var beer = new Vue({
    el: "#app",
    data: {
        site: "Beers",
        allBeers: allBeersApi
    },
  //L'application principale reçoit le compoment beer-list
    components: {
            'beer-list': beerList
        }
});

