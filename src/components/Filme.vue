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
        <b-button  @click="$bvModal.show(filme.name)" id='bot_detalhes'>Editar</b-button>
        <b-modal  :key="filme.name" :id="filme.name" :title='filme.name' centered ok-only ok-title="Fechar" ok-variant="danger " auto-focus-button="ok">
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
             
    <b-form @submit.prevent="onSubmit" id="form">
        <b-input type="text" class="inputnome" id="filme.name" style="display:none;"   v-model="filmeEdit.name" readonly/>
        <label for="filme.nota">Nota:</label><b-input type="number" min="0" max="10" id="filme.nota"  :placeholder="filme.nota" v-model="filmeEdit.nota" required/>
        <b-input type="text"  id="filme.image"  placeholder="URL da imagem" v-model="filmeEdit.image" required/>
        <button type='submit' id="btn_add">Submit </button>
    </b-form>
            </b-card-text>
          </b-card>
          </div>
          </b-card>
        </b-modal>
      </b-card>  
      
    </div>
   
    </div>
</template>

<script>
 import {  mapActions } from "vuex";
export default {
 
    methods: {
      ...mapActions([ "deleteFilme","editarFilme"]),
       onSubmit() {
      this.editarFilme(this.filmeEdit);
      
    },
    
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
  data() {
    return {
      filmeEdit :{
        name: this.filme.name,
        nota: "",
        image:""
      }
    }
    
  },
  
    
props:{
        filme:{ type: Object, required: true}
    }
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