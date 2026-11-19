const Pokemons = document.querySelectorAll(".Pokemon")

const SearchBar = document.getElementById("allpokemon");

SearchBar.addEventListener("input", function () {
    console.log(SearchBar.value);
    Pokemons.forEach(function (unPokemon) {
    console.log(unPokemon.textContent);
});
});
 
