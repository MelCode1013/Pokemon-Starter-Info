document.getElementById("bulbasaur").onclick = pokeBulbasaur;
document.getElementById("charmander").onclick = pokeCharmander;
document.getElementById("squirtle").onclick = pokeSquirtle;
document.getElementById("chikorita").onclick = pokeChikorita;
document.getElementById("cyndaquil").onclick = pokeCyndaquil;
document.getElementById("totodile").onclick = pokeTotodile;
document.getElementById("treecko").onclick = pokeTreecko;
document.getElementById("torchic").onclick = pokeTorchic;
document.getElementById("mudkip").onclick = pokeMudkip;


function pokeBulbasaur() {
    document.querySelector("#pokeImage").src = "img/bulbainfo.PNG";
    document.querySelector("#pokeName").innerText = "Bulbasaur";
  }

  function pokeCharmander() {
    document.querySelector("#pokeImage").src = "img/charinfo.PNG";
    document.querySelector("#pokeName").innerText = "Charmander";
  }

  function pokeSquirtle() {
    document.querySelector("#pokeImage").src = "img/Squirinfo.PNG";
    document.querySelector("#pokeName").innerText = "Squirtle";
  }

  function pokeChikorita() {
    document.querySelector("#pokeImage").src = "img/chikinfo.PNG";
    document.querySelector("#pokeName").innerText = "Chikorita";
  }

  function pokeCyndaquil() {
    document.querySelector("#pokeImage").src = "img/cyninfo.PNG";
    document.querySelector("#pokeName").innerText = "Cyndaquil";
  }

  function pokeTotodile() {
    document.querySelector("#pokeImage").src = "img/totoinfo.PNG";
    document.querySelector("#pokeName").innerText = "Totodile";
  }
  
  function pokeTreecko() {
    document.querySelector("#pokeImage").src = "img/treeinfo.PNG";
    document.querySelector("#pokeName").innerText = "Treecko";
  }

  function pokeTorchic() {
    document.querySelector("#pokeImage").src = "img/torinfo.PNG";
    document.querySelector("#pokeName").innerText = "Torchic";
  }

  function pokeMudkip() {
    document.querySelector("#pokeImage").src = "img/mudinfo.PNG";
    document.querySelector("#pokeName").innerText = "Mudkip";
  }
