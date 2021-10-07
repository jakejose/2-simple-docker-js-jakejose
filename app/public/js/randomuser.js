console.log("it's alive!");
const SomeApp = {
  //data
    data() {
      return {
        result: {},
        dob: []
      }
    },
    //CODE FROM CLASS SESSION (Professor Tom Gregroy)
    created() {

        //fetching
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((json) => {
            console.log("Got json back:", json);
            this.result = json.results[0];
            this.dob=this.result.dob.date.slice(0,10)
        })
        .catch( (error) => {
            console.error(error);
        });   
    },
    //methods for app
    //Source for methods:
  //https://v3.vuejs.org/guide/data-methods.html#data-properties
    methods:{
      generate(){
        const app = Vue.createApp(SomeApp).mount('#someApp');
      }
    }

  }
//mounting app
const app = Vue.createApp(SomeApp).mount('#someApp');


