const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon =>{
    pokemon.addEventListener('click', () => {
        console.log(pokemon)

        //removendo a classe ABERTO só do cartão aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //buscando o valor do id do cartão-pokemon
        const idPokemonSelecinado = pokemon.attributes.id.value

        //pondo o valor em uma variável
        const idCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecinado
        //usando a var com o valor do ID para trocar o cartao
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //removendo o ativado da lista
        const listaPokemonAtivo = document.querySelector('.ativo')
        listaPokemonAtivo.classList.remove('ativo')

        const listaPokemonAtivado = document.getElementById(idPokemonSelecinado)
        listaPokemonAtivado.classList.add('ativo')

    })
})