// Array com os salarios
let sal =  [1400, 2023, 1800, 2500, 1666, 6900, 17200, 2800, 2100, 3200]

//(map usa pra  transformar os elementos no array mantendo a ordem)

let salaumentado = sal.map((sal) => {

    //auementa o salario do ricao que ganha mais

    if(sal <= 2000){
        return sal * 1.15 
    }

    //aumenta um poquinho o salario do fudido que ganha poco

    else{
        return sal * 1.10 
    }


})
// array com os salarios dos ricao

//filter cria um array com base em algo específico de outro array

let ricasso = salaumentado.filter((sal) => sal > 2500)



//reduce é usado para acumular valores de um array em um unico valor final


let somadosrico = ricasso.reduce((acumulador, sal) => acumulador + sal,0)
console.log(sal)
console.log("Salários com aumento:", salaumentado);
console.log("Salários superiores a 2500:", ricasso);
console.log("Soma dos salários superiores a 2500:", somadosrico);





// Seleciona os elementos HTML onde os resultados serão exibidos
const salariosOriginaisList = document.getElementById("salariosOriginais");
const salariosAumentadosList = document.getElementById("salariosAumentados");
const salariosRicosList = document.getElementById("salariosRicos");
const somaRicosElement = document.getElementById("somaRicos");

// Função para adicionar valores em uma lista
function addValuesToList(listElement, values) {
  values.forEach(value => {
    const listItem = document.createElement("li");
    listItem.textContent = value;
    listElement.appendChild(listItem);
  });
}

// Exibe os resultados nos elementos HTML
addValuesToList(salariosOriginaisList, sal);
addValuesToList(salariosAumentadosList, salaumentado);
addValuesToList(salariosRicosList, ricasso);
somaRicosElement.textContent = "Soma dos salários superiores a 2500: " + somadosrico;




// ⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿ 
// ⣿⣯⡟⣿⣿⢫⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
// ⣿⣿⡟⠁⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
// ⣿⢿⠇⠀⠀⠉⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
// ⣿⣮⣗⠀⠀⠈⠘⣼⢡⣻⣯⢿⣿⣿⣿⣿ 
// ⣿⣿⣟⣣⡀⠀⠀⠀⠈⠀⠛⠸⣿⢟⣿⣿ 
// ⣿⣿⣿⣿⣵⣷⢠⡆⡄⠀⠀⠀⠈⢾⣿⢿ 
// ⣿⣿⣿⣿⣿⣿⡾⡸⢀⣁⠆⠀⠀⢈⣶⣿ 
// ⣿⣿⣿⣿⣿⣿⡿⡿⢷⣛⠃⠀⠀⢈⣥⣾ 
// ⣿⣿⣿⣿⣿⠻⣇⢧⡑⠀⠀⠀⢀⠻⣿⣿ 
// ⡿⣿⣷⣝⠻⠷⠙⠀⠀⠀⠀⣄⠺⣷⣿⣿ 
// ⣿⣦⡍⠉⠀⠀⢀⢀⣄⢴⡎⣿⣿⣿⣿⣿ 
// ⡟⢉⠀⡀⣰⢄⣏⣼⣿⣼⣿⣿⣿⣿⣿⣿ 
// ⣠⡿⢀⣣⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
// ⣿⣧⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿