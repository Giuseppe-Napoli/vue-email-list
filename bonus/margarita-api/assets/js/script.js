const app = new Vue({

  el:'#app',
  data:{
    drinks:[],
  },

  mounted(){

    this.callApi('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')

  },
  
  methods:{
    
    callApi(url){
      axios.get(url)
      .then (elem => {
        this.drinks = elem.data.drinks
        console.log(this.drinks);
        
      })
      .catch(err =>{
        console.log(err);
      })
    }
  }


})