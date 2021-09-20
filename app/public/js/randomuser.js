console.log("it's alive!");
const SomeApp = {
    data() {
      return {
        result: {},
        dob: []
      }
    },
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
    methods:{
      generate(){
        const app = Vue.createApp(SomeApp).mount('#someApp');
      }
    }

  }

const app = Vue.createApp(SomeApp).mount('#someApp');


