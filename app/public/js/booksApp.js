//in class with Pr. Gregory
const newApp = {
    data() {
      return {
        bookList: {},
        bookForm: {},
        currentBook:{},
        check:'NO'
        // submitButton:'<button type="submit" class="btn btn-primary">Submit</button>',
        // editButton:'<button type="submit" v-on:click="finishEdit" class="btn btn-primary">Edit</button>' 
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

        this.resetbookForm();
      
    },
    selectedBook(o) {
      this.bookForm = o
      this.check = 'YES';
      //console.log(this.bookForm)
      //delete newList.id;

      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
      // for (const x in newList){
      //   let cur = "#"+x;
      //   //console.log(x);
      //   let current = document.querySelector(cur);
      //   current.placeholder = o[x]
      // }

      //this.currentBook = null;
      // const submitter = document.querySelector('#submit');
      // submitter.innerHTML = '<button type="submit" v-on:click="finishEdit"class="btn btn-primary">Edit</button>';
    },
    postBook(evt){
      if (this.check === 'NO') {
        this.postNewBook(evt);
    } else {
        this.postEditBook(evt);
    }

    },
    postEditBook (evt){
      console.log('hello');    
        
        console.log("Updating!", this.bookForm);

        fetch('api/books/update.php', {
            method:'POST',
            body: JSON.stringify(this.bookForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          // .then( response => response.json() )
          .then( json => {
            //console.log("Returned from post:", json);
            // TODO: test a result was returned!
            //this.bookList = json;
            
            this.resetbookForm();
          });
    },

    resetbookForm(){
      this.currentBook = null;
      this.bookForm = {};
      this.check = 'NO';
    },

    deleteBook(o){
      fetch('api/books/delete.php', {
        method:'POST',
        body: JSON.stringify(o),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      // .then( response => response.json() )
      .then( json => {
        // console.log("Returned from post:", json);
        // // TODO: test a result was returned!
        // //this.offers = json;
        
        this.resetbookForm();
        this.fetchBookData();
      });
    }

    
    },
    created() {
        this.fetchBookData();
    }
  
  }
  
  Vue.createApp(newApp).mount('#bookApp');