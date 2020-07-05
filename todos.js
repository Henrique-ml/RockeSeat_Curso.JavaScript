var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');



var todos = JSON.parse(localStorage.getItem('list_todos')) || []; // pegaros items do localStorage savos anteriormente

// __ Armazenar esses Todos no js __

var todos = [ 
    'Fazer café', 
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos() {
    listElement.innerHTML = ''; // tudo queestiver dentro da <ul> é excluido

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        // __ Criar no metodo pois é ele que cria a lista __

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode(' Excluir');
        linkElement.appendChild(linkText);

        var pos = todos.indexOf(todo); // retorna a posição de acordo com o valor na lista
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

function addTodo() {
    var todoText = inputElement.value; // recuperar o valor do <input>

    todos.push(todoText); // adicionar o todoText no array de todos
    inputElement.value = ''; // apagar o que estiver escrito na caixinha do input
    renderTodos(); // renderizar a lista com o item/texto adicionado
    saveToStorage();
}

buttonElement.onclick = addTodo; // ao clicar no botão é acionado o método addTodo() 


function deleteTodo(pos) {
    todos.splice(pos, 1); // remove uma quantidade de items do array baseado na posição que passar
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos)); // "localStorage": não tem a habilidade de armazenas vetores e objetos, Sava chave e valor no formato string
}