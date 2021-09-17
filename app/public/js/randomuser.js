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
    }

  }
  
Vue.createApp(SomeApp).mount('#someApp');

//refresh data attempt 1
// function refresher (){
//   let button = document.querySelector('#button')
//   button.addEventListener('click',()=>{
//     Vue.createApp(SomeApp).mount('#someApp');
//   })
// }


        