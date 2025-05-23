//criando array de amigos
let amigos = []

//funcao adicionar amigo
function adicionar(){
    //recuperando nome 
    let amigo = document.getElementById('nome-amigo');

    //validando se há um nome escrito
    if (amigo.value == ''){
        alert('Informe um nome válido!');
        return;
    }

    //validando se há nomes repetidos
    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado!');
        return;
    }

    //recuperando lista
    let lista = document.getElementById('lista-amigos');

    //adicionando nome a lista
    amigos.push(amigo.value);
    if (lista.textContent == ''){
    lista.textContent = amigo.value;
    } else{
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    //resetando caixa
    amigo.value = '';
}

//funcao sorteio
function sortear(){

    //verificando se há o mínimo de amigos necessário
    if(amigos.length <= 4){
        alert('Adicione pelo menos 4 amigos.');
        return;
    }

    //embaralhando ordem de nomes
    embaralhar(amigos);

    //recuperando lista sorteada
    let sorteio = document.getElementById('lista-sorteio');

    //ordenando qual amigo tira qual
    for (let i = 0; i < amigos.length; i++){

        //garantindo que o último tira o primeiro
        if(i == amigos.length-1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }
}

//funcao para embaralhar dentro do array
function embaralhar(lista){
    
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }   
}

//funcao para fazer novo sorteio
function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}