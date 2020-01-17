const list = new TodoList();
const ui = new UI();
const forms = document.getElementById('todoList');
forms.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Adding Todo instance to our TodoList object
  const task = document.getElementById('task');
  const dueDate = document.getElementById('dueDate');
  list.addToDo(task.value, dueDate.value);
  
  // paint create table base on new list data
  // ui.clearTable();
  ui.paintTable();
  
  
  // Clear task and dueDate inputs
  ui.clearForm();
});
  
const deleteForms = document.getElementsByClassName('deleteTask');

