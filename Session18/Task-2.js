class TodoList{
  constructor() {
    this.todos = [];
  }
  addTodo(task) {
    this.todos.push(task);
    console.log(this.todos);
  }

  deleteTodo(task) {
    const index = this.todos.indexOf(task);
    console.log("index" , index);

    if (index > -1) {
        this.todos.splice(index, 1);
    }
    this.showAllTodos();
    console.log("afterdelete" ,this.todos);
  }

  showAllTodos() {
    var showtodoList = document.getElementById("showtodoList");
    showtodoList.innerHTML =""

    for (let val of this.todos) {
      var list = document.createElement("li");
      list.textContent = val;

      var taskSpan = document.createElement("span");
      taskSpan.textContent = " ";

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener("click", this.deleteButtonClick.bind(this , val));

      var brTag1 = document.createElement("br");
      var brTag2 = document.createElement("br");

      list.appendChild(taskSpan);

      list.appendChild(deleteButton);
      list.appendChild(brTag1);
      list.appendChild(brTag2);

      showtodoList.appendChild(list);
    }
  }
  deleteButtonClick(task) {
    console.log("task", task)
    this.deleteTodo(task);
    console.log("Deleted task: " + task);
   
    console.log("sdsdsdsdsdsd")

}
}
var todoList = new TodoList();

function submitFunction() {
    var getTask = document.getElementById("task");
    var taskValue = getTask.value;
    if (taskValue) {
      todoList.addTodo(taskValue);
      getTask.value = "";
      todoList.showAllTodos();
    }
}
