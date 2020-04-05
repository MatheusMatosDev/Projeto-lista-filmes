<template>
<div>
    

    

    
  
  <div class="filme-tela">
    
      <Filme  v-for ="filme in allFilmes" :filme="filme" :key="filme.name" class="filmes"
     >

      </Filme>
      

  

  </div>
  </div>
</template>

<script>
import Filme from './Filme'

import { mapGetters } from "vuex";
export default {
  
components:{
    Filme,
},

methods: {
    
    
  },
  computed: mapGetters(["allFilmes"]),
 
}
</script>

<style>
label{
  margin: 5px;
}
input{

  margin: 5px;
  padding: 5px;
}
.filme-tela{
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 10px;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
}
.filmes{
  margin: 10px;
  display: flex;
  
}
 


</style>