const btn = document.getElementById("btnEnviar");
const div = document.getElementById("clone");

const input = document.getElementById("evento");
const tbody = document.getElementById('nombresForm');

btn.addEventListener("click", () => {
  event.preventDefault();
  console.log(input.value);
  busqueda(input.value);
});

function busqueda(pokemons) {
  console.log("pokemon encontrado");
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemons}/`; 
  fetch(url)
    .then((respo) => respo.json())
    //.then((data) => console.log(data))
    .then((dato) => {listado(dato);})
    
}

function listado(datos) {
  const img = document.createElement("img");
  img.src = datos.sprites.front_default;

  const p = document.createElement("div");
  p.innerHTML += `
    <img src="${datos.sprites.front_default}" alt="">
    <p>${datos.name}</p>
    <p>${datos.abilities.ability}</p>
    `;
  div.appendChild(p);
}


function mostrar (){  //mostrara el contenido directamente al iniciar el DOM
 
  const urls = `https://pokeapi.co/api/v2/pokemon/pikachu/`;
  fetch(urls)
  .then((respons) => respons.json())
  
 //.then((dom) => console.log(dom))
  .then((dom) => {lista(dom);})
  
}
mostrar();


function lista (e){
  
    
    const th = document.createElement('p');
    const img = document.createElement("img");
   img.src = e.sprites.front_default;
   console.log('todo bien');
   
  th.innerHTML += `
            <tr>
              <td>${e.name}</td>
              <td><img src="${e.sprites.front_default}" alt=""></td>
            </tr>
              `
  tbody.appendChild(th);
    
  ;
  
}
