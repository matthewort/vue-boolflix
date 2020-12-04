// Milestone 2:
// Trasformiamo il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).
// Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene (o mezze vuote :P)
// Trasformiamo poi la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).
//
// Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)



const dischi = 'https://flynn.boolean.careers/exercises/api/array/music';
// const email = 'https://flynn.boolean.careers/exercises/api/random/mail';

var mioInput = '';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=adb9c0293cfa47b8f7f8199da349031d&language=it-IT&query=';
let score = '0.929304045';

var app = new Vue({
  el: '#app',
  data: {
    film: [],
    message: ''
  },
  methods: {
    greet: function () {
      alert('eey');
    },
    addfilm: function () {
      axios.get(url + this.message)
      .then((response) => {
      const content = response.data.results;
      this.film = content
      });
    },
    getScore: function (val) {
      return val.toFixed(0);
    },
    addthing: function () {
      if (this.message === '') {
        this.message = ''
      } else {
      this.film.push(this.message)  //faccio in modo che quando qualcuno scrive qualcosa nell'input venga poi pushato nell'array film
      this.message = ''  //faccio in modo che una volta scritta la parola nell'input e poi cliccata, venga poi rimossa dalla barra di input
      }
    }
  }
});

// var app = new Vue({
//   el: '#app',
//   data: {
//     film: []
//   },
//   mounted: function () {
//     axios.get(url)
//     .then((response) => {
//     const content = response.data.results;
//     this.film = content
//     });
//   },
//   methods: {
//     greet: function () {
//       alert('eey');
//     },
//     // addfilm: function () {
//     //
//     // }
//   }
// });
