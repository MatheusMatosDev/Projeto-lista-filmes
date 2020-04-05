
const state = {
    filmes: [
    {name: "frozen 2", nota:6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR98_qi1DbdOmqsmqEUWpsAVaCyz0gg-cAtScmkXl8j9KoKvj'},
    {name: "vingadores ultimato", nota: 9, image: 'https://upload.wikimedia.org/wikipedia/pt/9/9b/Avengers_Endgame.jpg'},
    {name: "naruto",  nota: 10, image: 'https://upload.wikimedia.org/wikipedia/pt/f/f5/The_Last_Naruto_the_Movie.jpg'},
    ]
     
};
const getters = {
  allFilmes: state => state.filmes
};
const actions = { 
 
  deleteFilme({commit}, filme){
    commit ("removeFilme", filme)
  },
  
  addFilme({ commit }, filme_add) { 
    const response =  {
          "name": filme_add.name.toLowerCase(),
          "nota": filme_add.nota,
          "image": filme_add.image,
    }
    const mesmoNome = filmes => filmes.name === filme_add.name.trim().toLowerCase()
    const filtradoFilmes = state.filmes.filter(mesmoNome)
  
    if(filtradoFilmes.length==0 && filme_add.nota >= 0 && filme_add.nota <=10){
      commit("newFilme",response);
    }
    else return alert("esse nome já esta na lista! ou sua nota não está entre 0 e 10")
  }
};
   const mutations = {
     
     newFilme: (state, filme) => state.filmes.push(filme),
     removeFilme: (state, name) =>
     (state.filmes = state.filmes.filter(f => f.name !== name ))
   };
   
   export default {
     state,
     actions,
     getters,
     mutations
   };
   