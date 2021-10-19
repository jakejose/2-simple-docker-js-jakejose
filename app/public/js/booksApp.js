//in class with Pr. Gregory
const newApp = {
    data() {
      return {
        bookList: {},
        bookForm: {},
      }
    },
    computed: {},
    methods: {
      fetchBookData() {
        fetch('/api/books/index.php')
        .then( response => response.json() )
        .then( (responseJson) => {
            console.log(responseJson);
            this.bookList = responseJson;
            console.log(this.bookList)
        })
        .catch( (err) => {
            console.error(err);
        })
    },
    postNewOffer(evt) {   
      
      console.log("Posting!", this.bookForm);

      fetch('api/books/create.php', {
          method:'POST',
          body: JSON.stringify(this.bookForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.bookList = json;
          
          // reset the form
          this.bookForm = {};
        });
    }
    },
    created() {
        this.fetchBookData();
    }
  
  }
  
  Vue.createApp(newApp).mount('#bookApp');