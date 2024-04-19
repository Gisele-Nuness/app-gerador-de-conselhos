const botao = document.getElementById('botao');
const id = document.getElementById('id-conselho');
const descricao = document.getElementById('descricao');

botao.addEventListener('click', gerarConselho);

async function gerarConselho() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");

        if (!response.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }

        const resposta = await response.json();
        const novaDescricao = resposta.slip.advice;
        const novoId = resposta.slip.id;

        id.innerText = 'ADVICE #' + novoId;
        descricao.innerText = novaDescricao;
        
    } catch (error) {
        console.error('Erro ao tentar buscar as informações da API"', error);
    }

}

gerarConselho();

