const Pokemons = document.querySelectorAll(".Pokemon")

const SearchBar = document.getElementById("allpokemon");

SearchBar.addEventListener("input", function () {
    Pokemons.forEach(function (unPokemon) {
        if (unPokemon.textContent.toLowerCase().includes(SearchBar.value.toLowerCase())) {
            unPokemon.style.display = "";
        } else {
            unPokemon.style.display = "none";
        }
    });
});

