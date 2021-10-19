//in class with Pr. Gregory
const newApp = {
    data() {
      return {
        commentsList: {},
      }
    },
    computed: {},
    methods: {
      fetchCommentData() {
        fetch('/api/comments/index.php')
        .then( response => response.json() )
        .then( (responseJson) => {
            console.log(responseJson);
            this.commentsList = responseJson;
            console.log(this.commentsList)
        })
        .catch( (err) => {
            console.error(err);
        })
    }
    },
    created() {
        this.fetchCommentData();
    }
  
  }
  
  Vue.createApp(newApp).mount('#commentsApp');