const prompt = require("prompt-sync")();
const {
    criar,
    atualizar,
    listar,
    remover,
} = require("./jogo.js")

while (true) {
    
    console.log(`
    1. Para criar jogo
    2. Para listar jogos
    3. Para atualizar
    4. Para remover
    5. Para sair
    `)

    const opcao = parseInt(prompt("Escolha uma opção acima: "))

    switch (opcao) {
            case 1: 
                criar()
            break
            case 2:
                atualizar()
            break
            case 3:
                listar()
            break
            case 4:
                remover()
            break
            case 5:
                process.exit()
        default:
            console.log("Opção inválida")
            break;
    }
}