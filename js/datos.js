const listaCoders = [
  {
    nombre: "Ceci",
  },
  {
    nombre: "Miquel",
  },
  {
    nombre: "Sol",
  },
  {
    nombre: "Mayu",
  },
  {
    nombre: "Ludmila",
  },
  {
    nombre: "Abde",
  },
];
const deathCoders = [];

let boton = document.querySelector("#boton_inicio");
//reiniciar
let reset = document.getElementById("boton_reiniciar");


printListaCoders();

boton.addEventListener("click", killCoder);//REVISAR

reset.addEventListener("click", (_) => {
  location.reload();
});


function printListaCoders() {
  let listaCoder = ''
  listaCoders.forEach(item => {
    listaCoder += `<li>${item.nombre}</li>`
  })
  document.getElementById("pac-coders").innerHTML = listaCoder
  /*let listaCoder = document.querySelector(".pac-coders");
  listaCoder.innerHTML = " ";

  listaCoders.forEach(function (object) {
    listaCoder.innerHTML += `<li>${object.nombre}</li>`;
  });*/
}

function printMuertos() {

  /*let listaMuerto = ''
  deathCoders.forEach(item => {
    listaMuerto += `<li>${object.nombre}</li>`
  })
  document.getElementById("pacoders_muertos").innerHTML = listaMuerto*/
  let listaMuerto = document.querySelector("#pacoders_muertos");
  listaMuerto.innerHTML = " ";

  deathCoders.forEach(function (object) {
    listaMuerto.innerHTML += `<li>${object.nombre}</li>`;
  });
}



function killCoder() {

  let randomKill = Math.floor(Math.random() * listaCoders.length);
  console.log(randomKill)
  if (listaCoders.length > 0) {
    let programadorMuerto = listaCoders.splice(randomKill, 1).pop();
    console.log(programadorMuerto);
    deathCoders.push(programadorMuerto);
    console.log(deathCoders);
    printListaCoders();
    printMuertos();
  }
}

/*function agregarDeathCoders(randomkill){
  deathCoders.unshift(randomkill)

}*/










