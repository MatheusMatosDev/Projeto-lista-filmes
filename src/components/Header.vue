<template>
   <nav class="navbar navbar-expand-md navbar-dark bg-dark" >
    <div class="container"> <router-link to="/" ><a class="navbar-brand" href="#">
        <i class="fa d-inline fa-lg fa-stop-circle"></i>
        <b> Lista de filmes</b>
      </a> </router-link><button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar10">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar10">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><router-link  to="/"> <a class="nav-link" >Home</a> </router-link></li>
        </ul> <router-link to="/Contato" ><a class="btn navbar-btn ml-md-2 btn-light text-dark">Fale conosco<br></a></router-link>
      </div>
    </div>
  </nav>
  

</template>

<script >
export default {
     name: 'Header'

}


</script>

<style>


</style>