//Funções
const getLocalStorage = () => {
  JSON.parse(localStorage.getItem('db_client')) ?? [];
};
const setLocalStorage = (dbClient) => {
  localStorage.setItem('db_client', JSON.stringify(dbClient));
};

const tempClient = {
  nome: 'Moises',
  email: 'Moises@gmail.com',
  celular: '87996820140',
  cidade: 'petrolina',
};

//Cadastrar
const cadastrar = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

//Eventos

//let hnome = document.getElementById("nome");
//let hemail = document.getElementById("email");
//let hcep = document.getElementById("cep");
//let cnpj = document.getElementById("cnpj");
//let hphone = document.getElementById("telefone");
//let end = document.getElementById("endereço");
//let hnumero = document.getElementById("ncomercial");
//let hcidade = document.getElementById("cidade");
//let huf = document.getElementById("uf");
//let hbairro = document.getElementById("bairro");

//const cadastroHospital = () =>{
// const hospital = {
//  hnome = document.getElementById("nome");
//hemail = document.getElementById("email");
//hcep = document.getElementById("cep");
//cnpj = document.getElementById("cnpj");
//hphone = document.getElementById("telefone");
//end = document.getElementById("endereço");
//hnumero = document.getElementById("ncomercial");
//hcidade = document.getElementById("cidade");
//huf = document.getElementById("uf");
//hbairro = document.getElementById("bairro");

//document.getElementById('concluir').addEventListener('click',cadastroHospital)
