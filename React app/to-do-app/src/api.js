import * as Tasks from "./tasks.json";


export async function createApi() {
  localStorage.setItem("tasks", JSON.stringify(Tasks));
  return await true;
}

export async function getTasks() {
 return await JSON.parse(localStorage.getItem("tasks"));
}

export async function addTask(task) {
  // взяти таски з 
  let tasks = [];
  let stringTasks = localStorage.getItem("tasks");
  
    // перевести стрінгу в масив]
  let tasksIntermid = JSON.parse(stringTasks);
  tasks = (tasksIntermid.default===undefined) ? tasksIntermid : tasksIntermid.default;
   //дізнаємось максимальне ІД
  let maxId =  (tasks.length === 0)? 0 : Math.max.apply(Math, tasks.map(function(o) { return o.id; }));
  //Новому таску присвоюємо нове ід
  task.id = maxId + 1;
  // додати нову в масив
  tasks.push(task);
  // перевести назад в стрінгу
  stringTasks = JSON.stringify(tasks);
  //  перезберегти в локалсторадж
  localStorage.setItem("tasks",stringTasks);
  //asyncLocalStorage.setItem("tasks",ingTasksstr).then(result=>{return true});
  return await tasks;
  }
  // вернути проміс про збереження true
  // Сформувати масив для показу по фільтрах
  //Намалювати


export async function deleteTasks(arrTaskId) {
  let stringTasks = localStorage.getItem("tasks");
  
    // перевести стрінгу в масив]
  let tasksIntermid = JSON.parse(stringTasks);
  let tasks = (tasksIntermid.default===undefined) ? tasksIntermid : tasksIntermid.default;
   
   for (let currId of arrTaskId){
     
    let objIndex = tasks.findIndex((obj => obj.id === currId));
    if (objIndex >=0){
     tasks.splice(objIndex,1);
    }
   }
  // перевести назад в стрінгу
  stringTasks = JSON.stringify(tasks);
  //  перезберегти в локалсторадж
  localStorage.setItem("tasks",stringTasks);
  //asyncLocalStorage.setItem("tasks",ingTasksstr).then(result=>{return true});
  return await tasks;
}

export async function editTasks(arrTaskId, currAction) {

  let stringTasks = localStorage.getItem("tasks");
  
    // перевести стрінгу в масив]
  let tasksIntermid = JSON.parse(stringTasks);
  let tasks = (tasksIntermid.default===undefined) ? tasksIntermid : tasksIntermid.default;
   
   let arrOfIndexes = [];
   for (let currId of arrTaskId){
    let objIndex = tasks.findIndex((obj => obj.id === currId));
    if (objIndex >=0){
      arrOfIndexes.push(objIndex);
    }
   }
   for (let currIndex of arrOfIndexes){
    tasks[currIndex].status = (currAction==="check")?"Done":"Active";
  }
  // перевести назад в стрінгу
  stringTasks = JSON.stringify(tasks);
  //  перезберегти в локалсторадж
  localStorage.setItem("tasks",stringTasks);
  //asyncLocalStorage.setItem("tasks",ingTasksstr).then(result=>{return true});
  return await tasks;
  
}
