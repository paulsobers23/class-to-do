class TodoList{
  constructor(){
    this.list = {};
  }
  addToDo(task,dueDate){
    const todo = new ToDo(task,dueDate);
    this.list[todo.id]= todo;
    return todo;
  }
  deleteToDo(taskID){
    delete this.list[taskID];
  }
}