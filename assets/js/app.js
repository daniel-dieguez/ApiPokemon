const btn = document.getElementById('btnEnviar');
const div = document.getElementById('clone');

btn.addEventListener('click', ()=>{
  console.log('pokemon encontrado');
  
  const url= 'https://pokeapi.co/api/v2/pokemon/pikachu/';
  fetch(url)
  .then((respo) => respo.json())
  //.then((data) => console.log(data));
  .then((dato) => {
    listado(dato);
  });

});

function listado (datos) {

    const img = document.createElement('img');
    img.src = datos.sprites.front_default;

    const p = document.createElement('div');
    p.innerHTML = `
    <p>${datos.name}</p>
    <img src="${datos.sprites.front_default}" alt="">
    `
    div.appendChild(p);


}