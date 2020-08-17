var todos = [];

var show_todo = document.querySelector('.show_todo');

function updateTODOlist() {

    if(todos.length==0)
    {
        show_todo.textContent = "No TODO";
    }
    
}

updateTODOlist(todos);