class ToDo{
  constructor(task,dueDate, isComplete = false){
    this.task = task;
    this.dueDate = new Date(dueDate);
    this.isComplete = isComplete;
    this.id = ToDo.idGenerator();
  }
  
  markComplete(){
    this.isComplete = true;
  }
  markIncomplete(){
    this.isComplete = false;
  }
}

ToDo.idGenerator = (function(){
  let id = 0;
  return function(){
    return ++id;
  };
})();