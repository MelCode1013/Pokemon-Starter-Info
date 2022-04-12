document.getElementById("bulbasaur").onclick = pokeBulbasaur;
document.getElementById("charmandar").onclick = pokeCharmandar;
document.getElementById("squirtle").onclick = pokeSquirtle;
document.getElementById("chikorita").onclick = pokeChikorita;
document.getElementById("cyndaquil").onclick = pokeCyndaquil;
document.getElementById("totodile").onclick = pokeTotodile;
document.getElementById("treecko").onclick = pokeTreecko;
document.getElementById("torchic").onclick = pokeTorchic;
document.getElementById("mudkip").onclick = pokeMudkip;

function pokeBulbasaur() {
    const imageBulba = document.createElement('img'); 
    imageBulba.src  = 'img/bulbainfo.PNG';
    document.querySelector('#pokedex').appendChild(imageBulba);
    document.querySelector('#pokeName').innerText = "Bulbasaur";

}
