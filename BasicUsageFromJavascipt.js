// TODO

ele.addEventListener('click', () => {
    const pokelist = ele.lastElementChild;

    // if trainer has pokemon
    if (pokelist.children.length > 0) {
        if (pokelist.style.maxHeight) {
            pokelist.style.maxHeight = null;
        } else {
            pokelist.style.maxHeight = pokelist.scrollHeight + "px";
        }
        /*if (pokelist.classList.contains('collapsed')) {
            pokelist.classList.remove('collapsed');
        } else {
            pokelist.classList.add('collapsed');
        }*/
    }
})

ele.appendChild(createPokemonListEle(trainer.pokemons));
return ele;