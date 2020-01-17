class UI {
  constructor(){
    this.tbody = document.getElementById('tbody');
    this.dueDateInput = document.getElementById('dueDate');
    this.taskInput = document.getElementById('task');
  }
  paintTable(){
    for (let todo of Object.values(list.list)){
      let row = document.createElement('tr');
      let deleteButton = `
      <form action = '#' class ='deleteTask' method = 'delete'>
        <input type='submit' id =${todo.id} class='button button-clear' value='Delete Task'/>
      </form>
      `;
      
      row.innerHTML = `
      <td>${todo.task}</td>
      <td>${todo.dueDate.toLocaleString()}</td>
      <td>Complete</td>
      <td>${deleteButton}</td>
      `;
      this.tbody.appendChild(row);
      
      // Adds event listeners to delete button
      for (let deleteForm of deleteForms){
        deleteForm.addEventListener('submit',(e) => {
            e.preventDefault();
            list.deleteToDo(deleteForm[0].id);
            this.clearTable();
            this.paintTable();
  });
}
    }
  }
  
  clearForm() {
    this.dueDateInput.value = "";
    this.taskInput.value = "";
  }
  clearTable(){
    this.tbody.innerHTML = "";
  }
}