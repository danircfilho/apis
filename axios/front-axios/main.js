//Url da API
const url = 'http://localhost:5500/api'

const newUser = {
  name: 'Pessoa 1',
  avatar: "http://lorempixel.com.br/300/200",
  city: "Santos"
}

const updateUser = {
  name: 'Pessoa 2',
  avatar: "http://lorempixel.com.br/300/200",
  city: "Campinas"
}

//Função GET (pegar) usuários 
function getUser() {
  axios.get(url)
  .then(response => {
    //Dados recebidos da API
    const data = response.data
    //Modificando o DOM (impressão do que receber de reponse - tranformando JSON em texto)
    renderResults.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error)) 
}
getUser() 

//Função POST (adicionar) usuários
function addNewUser() {
  axios.post(url, newUser)
  .then(response => {
    alert(JSON.stringify(response.data)) 
  })
  .catch(error => console.log(error))
}
addNewUser() 

//Função PUT (atualizar) usuários
function addUpdateUser() {
  //Na url, após a '/' o numero corresponde ao id a ser atualizado
  axios.put(`${url}/2`, updateUser)
  .then(response => {
    alert(JSON.stringify(response.data)) 
  })
  .catch(error => console.log(error))
}
//addUpdateUser() 

//Função DELETE (apagar) usuários
function deleteUser() {
  //Na url, após a '/' o numero corresponde ao id a ser apagado
  axios.delete(`${url}/8`, updateUser)
  .then(response => {
    alert(JSON.stringify(response.data)) 
  })
  .catch(error => console.log(error))
}
//deleteUser() 