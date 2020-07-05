var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

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
        var todosText = document.createTextNode(todo);

        todoElement.appendChild(todosText);
        listElement.appendChild(todoElement);
    }
}

function addTodo() {
    var todoText = inputElement.value; // recuperar o valor do <input>

    todos.push(todoText); // adicionar o todoText no array de todos
    inputElement.value = ''; // apagar o que estiver escrito na caixinha do input
    renderTodos(); // renderizar a lista com o item/texto adicionado
}

buttonElement.onclick = addTodo; // ao clicar no botão é acionado o método addTodo() 