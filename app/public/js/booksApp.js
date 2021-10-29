//in class with Pr. Gregory
const newApp = {
    data() {
      return {
        bookList: {},
        bookForm: {}
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
            console.log(this.bookList.length)
        })
        .catch( (err) => {
            console.error(err);
        })
    },
    postNewBook(evt) {   
      
      this.bookForm.id = this.bookList.length+1;
      
      console.log("Posting!", this.bookForm);

      fetch('api/books/create.php', {
          method:'POST',
          body: JSON.stringify(this.bookForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            'Accept': 'application/json'
          }
        }).then(next =>{this.fetchBookData();})
      
    },
    editBook(o) {
      console.log(o)
    }
    },
    created() {
        this.fetchBookData();
    }
  
  }
  
  Vue.createApp(newApp).mount('#bookApp');