const app = new Vue({

  el:'#app',
  data:{
    eMails:[],
  },

  mounted(){

    this.callApi(' https://flynn.boolean.careers/exercises/api/random/mail')

  },
  
  methods:{
    
    callApi(url){
      axios.get(url)
      .then (elem => {
       // console.log(elem.data.response);
        this.eMails.push(elem.data.response)
        if(this.eMails.length < 10){
          this.callApi(url)
        }
      })
      .catch(err =>{
        console.log(err);
      })
    }
  }


})