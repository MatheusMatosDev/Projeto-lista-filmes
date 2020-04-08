<template>
  <div>
    <h3>Add Filme</h3>
    <div>
      <form @submit.prevent="onSubmit">
        <div><h2>Nome do filme:</h2></div>
        <div><input type="text" required v-model="filme_add.name" placeholder="Nome do filme"></div>
        <div><h2>Nota:</h2></div>
        <div><input type="number" required v-model="filme_add.nota" placeholder=" Nota do filme"></div>
        <div><h2>Imagem:</h2></div>
        <div><input type="text" required v-model="filme_add.image" placeholder="URL da imagem do filme"></div>
         <b-form-group id="input-group-3" style="color:white;" label="Genero:" label-for="input-3">
                        <b-form-select
                          id="filme.genero"
                          v-model="filme_add.genero"
                          :options="filme_add.generos"
                          required
                        ></b-form-select>
                      </b-form-group>
        <div><input type="submit" value="Submit"></div>
       
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddFilme",
  data() {
    return {
      filme_add :{
        name: "",
        nota: "",
        image:"",
        genero:"",
        generos: [
          { value: null, text: 'Selecione uma opção' },"infantil","Comédia", "Ação", "suspense","drama"]
      }
    };
  },
  methods: {
    ...mapActions(["addFilme"]),
    onSubmit() {
      this.addFilme(this.filme_add);
    }
  }
};
</script>

<style scoped>
h3{
 
    color: white;
}
h2{
  
    color: white;
}
form {
  display: block;
}
input[type="text"] {
  width: 70%;
  flex: 10;
  padding: 10px;
  border: 1px solid #1BBC9B;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #1BBC9B;
  border: 1px solid #1BBC9B;
  color: #fff;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px;
}
</style>
