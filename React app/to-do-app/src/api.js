import * as Tasks from "./tasks.json";

export async function createApi() {
  localStorage.setItem("tasks", JSON.stringify(Tasks));
  return await true;
}

export async function getTasks() {
  return await JSON.parse(localStorage.getItem("tasks"));
}

export async function addTask(task) {
  // взяти таски з локалстораджа
  // перевести стрінгу в масив
  // додати нову в масив
  // перевести назад в стрінгу
  //  перезберегти в локалсторадж
  // вернути проміс про збереження true
}

export async function deleteTask(task) {
  // взяти таски з локалстораджа
  // перевести стрінгу в масив
  // видалити таски по айді
  // перевести назад в стрінгу
  //  перезберегти в локалсторадж
  // вернути масив новий без видаленої таски
}

export async function editTask(_task) {
  // взяти таски з локалстораджа
  // перевести стрінгу в масив
  // перезаписати таск по айді
  // перевести назад в стрінгу
  //  перезберегти в локалсторадж
  // вернути масив новий з поедітною таскою
}
