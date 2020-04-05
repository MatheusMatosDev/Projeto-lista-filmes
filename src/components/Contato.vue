<template>
<div>
  <Header/>
<div class="py-5 text-center text-white"  >
    <div class="container">
      <div class="row">
        <div class="mx-auto col-md-10 p-4">
          <h1 class="text-light">Fale Conosco</h1>
          
          <form>
            <div class="form-row">
              <div class="form-group col-md-4"> <input required type="text" class="form-control" id="form22" placeholder="Your Name*"> </div>
              <div class="form-group col-md-4"> <input required type="email" class="form-control" id="form23" placeholder="Email*"> </div>
              <div class="form-group col-md-4"> <input required type="number" class="form-control" id="form24" placeholder="Phone"> </div>
            </div>
            <div class="form-group"> <input required type="text" class="form-control" id="form25" placeholder="Subject"> </div>
            <div class="form-group"> <textarea required class="form-control" id="form26" rows="3" placeholder="Your message"></textarea> </div> <button type="submit" class="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


</template>

<script>


import Header from '../components/Header'
export default {
  name: 'Contato',
  components: {
    Header
  },
  props: {
    
  }
}
</script>

<style>

</style>