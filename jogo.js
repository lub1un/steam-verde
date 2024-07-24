// Chama a função prompt para o cmd
const prompt = require("prompt-sync")();

// Local onde será armazenado os games
const jogos = [];

// Função de criação de jogo
const criar = () => {
    const nome = prompt("Nome do jogo: ")
    const ano_lancamento = prompt("Ano de lançamento: ")
    const duracao = prompt("Duração média: ")
    const preco = prompt("Preço: ")
    const estudio  = prompt("Qual o estúdio do jogo: ")
    const sequencia = prompt("Qual a sequência do jogo?: ")

// Validação do cmd
    if(
        nome != "" &&
        ano_lancamento >= 1962 && ano_lancamento <= 2024 &&
        duracao > 0 && 
        preco == 0 &&
        estudio != "" &&
        ((sequencia > 0 && sequencia < jogos.length) || jogos.length ==0)
    ) {
        jogos.push({
            nome, ano_lancamento, duracao, preco, estudio, sequencia
        })

        console.log("Jogo cadastrado com sucesso")
    } else {
        console.log("Dados Inválidos")
    }
};


