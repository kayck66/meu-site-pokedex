/*
OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do
pokedev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
    PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de
    pokedevs
    PASSO 2 - Identificar o evento de clique no elemento da listagem
    PASSO 3 - remover a classe aberto só do cartão que tá aberto
    PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber
    qual cartão abrir
    PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
    PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
*/

// PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoPokedex = document.querySelectorAll(".pokemon") ;

// PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPokedex.forEach(pokemon =>{
    pokemon.addEventListener("click", () => {
        //PASSO 3 - remover a classe aberto só do cartão que tá aberto
        const cartaoPokemonAberto = document.querySelector(".aberto");
        cartaoPokemonAberto.classList.remove("aberto");

        //PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartao abrir
        const idPokemonSelecionado = pokemon.attributes.id.value;
        const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado;
        const cartaoPokemonParaAbrir = document.getElementById( idDoCartaoPokemonParaAbrir);
        cartaoPokemonParaAbrir.classList.add ("aberto");
            
            //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
            const pokemonAtivoNaListagem = document.querySelector(".ativo");
            pokemonAtivoNaListagem.classList.remove("ativo");

            //PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
            const pokemonSelecionadoNalistagem = document.getElementById(idPokemonSelecionado);
            pokemonSelecionadoNalistagem.classList.add("ativo");
    })
})