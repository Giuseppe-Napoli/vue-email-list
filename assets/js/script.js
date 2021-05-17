const app = new Vue({

  el:'#app',
  data:{
    eMails:[],
  },

  mounted(){

    for(let i = 0; i < 10; i++){

      axios.get(' https://flynn.boolean.careers/exercises/api/random/mail')
      .then (elem => {
       // console.log(elem.data.response);
        this.eMails.push(elem.data.response)
      })
    }
      console.log(this.eMails);

  },
  
  methods:{
    
  }


})