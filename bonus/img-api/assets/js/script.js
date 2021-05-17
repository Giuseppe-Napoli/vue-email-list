const app = new Vue({

  el:'#app',
  data:{
    img:[],
  },

  mounted(){

    this.callApi('https://random.dog/woof.json')

  },
  
  methods:{
    
    callApi(url){
      axios.get(url)
      .then (elem => {
        this.img = elem.data
        console.log(this.img);
        
      })
      .catch(err =>{
        console.log(err);
      })
    }
  }


})