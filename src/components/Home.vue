<template>

  <div id="home">
   
    <Header/>
    <AddFilme style="margin:5px;" />
    
    <section class="Area-filmes">
      
    <FilmeTela />
      
    </section>
    
  </div>
</template>

<script>

import AddFilme from './AddFilme'
import Header from '../components/Header'
import FilmeTela from './FilmeTela'

export default {
  name: 'Home',
  components: {
    Header,
    FilmeTela,
    AddFilme,
    
  },
  props:{
    
},
 methods: {
   
    

  },
  
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>
