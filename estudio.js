// Chama a função prompt para o cmd
const prompt = require("prompt-sync")();

// Local onde será armazenado os games
const estudio = [];

const validarIndice = indice => indice >= 0 && indice < estudio.length
// Função de criação de jogo
const modelo = () => {
    const nome = prompt("Nome do jogo: ")
    const pais_origem = prompt("País de origem: ")
    const ano_criacao = prompt("Ano de criação: ")
    if(listar()) {
        sequencia = prompt("Qual a sequência do jogo? Digite 0 se não houver ") - 1;
    }
// Validação do cmd
    if(
        nome != "" &&
        pais_origem != "" &&
        ano_criacao >
    ) {
        return {
        nome, 
        ano_lancamento, 
        duracao, 
        preco, 
        estudio, 
        sequencia,
    }
} else {
    console.log("Dados inválidos")
}
};

const criar = () => {
const jogo = modelo()

if (jogo != undefined) {
    estudio.push(jogo);
    console.log("Jogo cadastrado com sucesso")
}

console.log("Jogo cadastrado com sucesso")
}
// Listagem a respeito do game
const listar = () => {
    if(estudio.length == 0) {
        console.log("Nenhum jogo encontrado")
        return false
    } else {
        estudio.forEach((jogo, indice) => {
            console.log(`
            ${indice + 1}.
            Nome: ${jogo.nome}
            Ano de lançamento: ${jogo.ano_lancamento}
            Duração: ${jogo.duracao}
            Preço: ${jogo.preco}
            Estudio: ${jogo.estudio}
            Sequência: ${jogo.sequencia}
            `)
        })
        return true
    }
}

// Função de atualizar dados
const atualizar = () => {
    listar()
    if(!listar()) {
        return 
    }
    const indice = prompt("Qual o indice que deseja atualizar? ") - 1;

    const jogo = modelo()

    if (
        jogo != undefined &&
        indice >= 0 &&
        indice < estudio.length

    ) {
        estudio[indice] = jogo

        console.log("Jogo atualizado com sucesso")
    } else {
        console.log("Indice Inválido")
    }
}

const remover = () => {
    if(!listar()) {
        return 
    }
    const indice = prompt("Qual o indice que deseja remover? ") - 1;

    if(validarIndice(indice)){
        estudio.splice(indice, 1)
        console.log("Jogo removido com sucesso")
    } else {
        console.log("Falha na remoção")
    }
}
