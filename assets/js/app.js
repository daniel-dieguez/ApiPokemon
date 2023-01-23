const btn = document.getElementById("btnEnviar");
const div = document.getElementById("clone");

const input = document.getElementById("evento");
const tbody = document.getElementById('nombresForm');
const btnbuscar = document.getElementById('btnBuscar');

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
    <p>Nombre:
    ${datos.name}</p>
    <p>Experiencia:
    ${datos.base_experience}</p>
    `;
  div.appendChild(p);
}


const mostrar = async ()=>{
  try{
    const URL = `https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1279`;
    const api = await fetch(URL);
    const data = await api.json();
    const datapokemon= data.results.map(datapokem => datapokem);
    //const datos = data.name.map(datopoken => datopoken);
    //console.log(datos);
    console.log(datapokemon);
    lista(datapokemon);


  }catch(error){
    console.log(error);

  }
}
mostrar();



function lista (item){
  const p = document.createElement('p');
  p.innerHTML = `
            <tr>
              <td>${item.name}</td>
            </tr>
  `;
  tbody.appendChild(p);

}


