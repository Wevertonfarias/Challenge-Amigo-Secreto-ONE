let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const inputAmigo = document.querySelector('amigo');
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

    // Validação: verifica se o campo está vazio
    if (!nomeAmigo) {
        alert("Por favor, Digite um nome.");
        inputAmigo.focus();
        return; // Interrompe a execução da função se o campo estiver vazio
    }
    amigos.push(nomeAmigo);// Adiciona o nome ao array de amigos

    inputAmigo.value = "";// Limpa o campo de entrada
}
    atualizarListaAmigos();// Atualiza a lista de amigos exibida na página
    
// Função para atualizar a lista de amigos exibida na página
function atualizarListaAmigos() {
    const listaAmigos = document.querySelector('listaAmigos');// Obtém o elemento da lista usando querySelector

    listaAmigos.innerHTML = ""; // Limpa a lista existente

    // Percorre o array de amigos usando um loop for
    for (let i = 0; i < amigos.length; i++) {
        const itemLista = document.createElement('li');// Cria um novo elemento <li>
        itemLista.textContent = amigos[i];// Define o conteúdo do <li> como o nome do amigo
        listaAmigos.appendChild(itemLista);// Adiciona o <li> à lista
    }
}
