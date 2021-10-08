//in class with Pr. Gregory
const newApp = {
    data() {
      return {
        bookList: {},
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
    }
    },
    created() {
        this.fetchBookData();
    }
  
  }
  
  Vue.createApp(newApp).mount('#bookApp');