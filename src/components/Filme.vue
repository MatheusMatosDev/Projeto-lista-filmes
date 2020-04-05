<template>
<div>
    
  <div class="filme" :class="selectClass()">
     
      <b-card
        :title="filme.name"
        :img-src="filme.image"
        :img-alt="filme.name"
        img-top
        tag="article"
        style="max-width: 13rem;"
        class="md-2"
      >
        

       

         <div id='info_card'>        
          <b-card
            img-top
            tag="article"
            style="max-width: 13rem; "
            class="md-2"
          >
             <b-card-text>
             Nota:{{filme.nota}}
            </b-card-text>
          </b-card>
          </div>
<b-button style="margin:5px" @click="deleteFilme(filme.name)" variant="danger">Delete</b-button>        
        
      </b-card>  
      
    </div>
   
    </div>
</template>

<script>
 import {  mapActions } from "vuex";
export default {
 
    methods: {
      ...mapActions([ "deleteFilme"]),
    
    selectClass(){
      const filme = this.$props.filme
     
     
     if (filme.nota >=8 ){
       return 'ouro'
     }
     if (filme.nota < 8 && filme.nota >= 5 ){
       return 'prata'
     }
     else return "bronze"
  
   
     
     }
     

  },
  
    
props:{
        filme:{ type: Object, required: true}
    },

}
</script>

<style>

.ouro{
   border: 8px solid rgb(217, 255, 0);
}
.prata{
   border: 8px solid #c0c0c0;
}
.bronze{
  border: 8px solid#cd7f32
}
  #info_card{
  display:flex;
  justify-content:center;
  font-family:"Conversation" ;
  font-size:1.5EM;
}
</style>