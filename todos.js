var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// Armazenar esses todos no js

var todos = [ 
    'Fazer café', 
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos() {
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todosText = document.createTextNode(todo);

        todoElement.appendChild(todosText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();