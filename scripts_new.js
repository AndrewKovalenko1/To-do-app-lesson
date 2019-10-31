(function () {
  const state = {
    period: 'Today',
    status: 'All',
    greeting: "Nothing to do yet? Think about let's start!",
    noTaskLabel: 'No tasks for today',
    counterFilter: '0 of 0',
    counterForToday: '0 tasks for today',
    tasks: [],
    tasksToView: [],
    lastId: 0,
  };

  const firstPageLeft = document.getElementById('page1-left');
  const firstPageRight = document.getElementById('page1-right');
  const secondPageLeft = document.getElementById('page2-left');
  const secondPageRight = document.getElementById('page2-right');
  const mainTaskSection = document.getElementById('main-task-section');
  const taskIcon = document.getElementById('task-icon');
  const taskCounter = document.getElementById('task-counter');
  const taskIconRound = document.getElementById('task-icon-round');
  const additionalButton = document.getElementById('dropdown-additional-button');
  const inputTypeOfTask = document.getElementById('input-type-of-task');
  const currTypeOfTaskIcon = document.getElementById('curr-type-of-task-icon');
  const buttonAddTask = document.getElementById('button-add-task');
  const onTodayCounter = document.getElementById('tasks-for-today2');
  const hiDescription = document.getElementById('hi-description');
  const labelNoTasks = document.getElementById('label-no-tasks');
  const noTaskSection = document.getElementById('no-task-section');
  const inputWhatToDo = document.getElementById('input-what-to-do');
  const inputWhere = document.getElementById('input-where');
  const inputWhen = document.getElementById('input-when');
  const inputTime = document.getElementById('input-when-time');
  const allDayChecker = document.getElementById('all-day-checker');
  const dropdwnToday = document.getElementById('dropdown-today');
  const dropdwnFuture = document.getElementById('dropdown-future');
  const dropdwnPast = document.getElementById('dropdown-past');

  function CheckFormFilling() {
    if (inputWhatToDo.value === '' || inputWhere.value === '' || inputWhen.value === ''
      || taskIconRound.classList.contains('gray-border-color')
      || (allDayChecker.checked ? false : inputTime.value === '')) {
      buttonAddTask.setAttribute('disabled', 'disabled');
      if (buttonAddTask.classList.contains('button-form-add-task-active')) {
        buttonAddTask.classList.remove('button-form-add-task-active');
        buttonAddTask.classList.add('button-form-add-task');
      }
      if (inputWhen.value === '') {
        inputWhen.type = 'text';
      }
      if (inputTime.value === '') {
        inputTime.type = 'text';
      }
    } else {
      buttonAddTask.removeAttribute('disabled');
      buttonAddTask.classList.remove('button-form-add-task');
      buttonAddTask.classList.add('button-form-add-task-active');
    }
  }

  inputWhatToDo.removeEventListener('change', CheckFormFilling);
  inputWhatToDo.addEventListener('change', CheckFormFilling);

  inputWhere.removeEventListener('change', CheckFormFilling);
  inputWhere.addEventListener('change', CheckFormFilling);

  inputWhen.removeEventListener('change', CheckFormFilling);
  inputWhen.addEventListener('change', CheckFormFilling);

  inputTime.removeEventListener('change', CheckFormFilling);
  inputTime.addEventListener('change', CheckFormFilling);

  function AllDayCheckerChange() {
    if (allDayChecker.checked) {
      inputTime.value = '';
      inputTime.style.display = 'none';
    } else {
      inputTime.style.display = 'initial';
    }
    CheckFormFilling();
  }

  function onSummaryUpdate() {
    document.getElementById('all-type-quantity').innerHTML = state.tasks.length;
    document.getElementById('business-type-quantity').innerHTML = state.tasks.filter((task) => task.type === 'Business').length;
    document.getElementById('personal-type-quantity').innerHTML = state.tasks.filter((task) => task.type === 'Personal').length;
    document.getElementById('family-type-quantity').innerHTML = state.tasks.filter((task) => task.type === 'Family').length;
    document.getElementById('work-type-quantity').innerHTML = state.tasks.filter((task) => task.type === 'Work').length;
  }

  function onTodayCounterUpdate() {
    const currDate = new Date();

    const countFoToday = state.tasks.filter((task) => (task.date.getDate() === currDate.getDate()
      && task.date.getMonth() === currDate.getMonth()
      && task.date.getFullYear() === currDate.getFullYear())).length;
    state.counterForToday = `${countFoToday} tasks for today`;
    onTodayCounter.innerHTML = state.counterForToday;
  }

  function onGreetingMessageUpdate() {
    state.greeting = (state.tasks.length > 0) ? 'Nice! Look like you have somee stuff to do, but you can have more!'
      : "Nothing to do yet? Think about let's start!";
    hiDescription.innerHTML = state.greeting;
  }

  function getCurrentTime(dateToCompare) {
    let currTime = '';
    const currDate = new Date();
    if (dateToCompare.getDate() === currDate.getDate()
      && dateToCompare.getMonth() === currDate.getMonth()
      && dateToCompare.getFullYear() === currDate.getFullYear()) {
      currTime = 'Today';
    } else if ((dateToCompare.getFullYear() > currDate.getFullYear())
      || ((dateToCompare.getFullYear() === currDate.getFullYear())
        && (dateToCompare.getMonth() > currDate.getMonth()))
      || ((dateToCompare.getFullYear() === currDate.getFullYear())
        && (dateToCompare.getMonth() === currDate.getMonth())
        && (dateToCompare.getDate() > currDate.getDate()))) {
      currTime = 'Future';
    } else {
      currTime = 'Past';
    }
    return currTime;
  }

  function onPeriodCounterUpdate() {
    dropdwnToday.innerHTML = `${dropdwnToday.dataset.name} ${
      state.tasks.filter((task) => getCurrentTime(task.date) === dropdwnToday.dataset.name).length}`;
    dropdwnPast.innerHTML = `${dropdwnPast.dataset.name} ${
      state.tasks.filter((task) => getCurrentTime(task.date) === dropdwnPast.dataset.name).length}`;
    dropdwnFuture.innerHTML = `${dropdwnFuture.dataset.name} ${
      state.tasks.filter((task) => getCurrentTime(task.date) === dropdwnFuture.dataset.name).length}`;
  }

  function onTaskUpdate() {
    onSummaryUpdate();
    onTodayCounterUpdate();
    onGreetingMessageUpdate();
    onPeriodCounterUpdate();
    // eslint-disable-next-line no-use-before-define
    onFiltersUpdate();
  }

  function onEmptyTasksMessage() {
    state.counterFilter = `No ${state.status !== 'All' ? state.status : ''} tasks for ${state.period}`;
    labelNoTasks.innerHTML = state.counterFilter;
  }

  function onFilterCounterUpdate() {
    const activeTasks = state.tasksToView.filter((task) => task.done === false).length;
    state.counterFilter = `${activeTasks} of ${state.tasksToView.length}`;
    taskCounter.innerHTML = state.counterFilter;
  }

  function ActionTask(isSingle = true) {
    const leftTaskSection = document.getElementById(`leftTS${this.id}`);
    const icon = document.getElementById(`icon${this.id}`);
    const textTask = document.getElementById(`textTask${this.id}`);
    const placeTask = document.getElementById(`placeTask${this.id}`);
    const timeTask = document.getElementById(`timeTask${this.id}`);
    const btnTaskAction = document.getElementById(`btnTaskAction${this.id}`);

    if (this.done) {
      this.done = false;
      leftTaskSection.classList.remove('red-border-color');
      leftTaskSection.classList.add('gray-border-color');
      icon.classList.remove('vertical-align-middle');
      icon.classList.remove('red-color');
      icon.classList.add('gray-icon');
      textTask.classList.remove('gray-color');
      textTask.classList.remove('line-through');
      textTask.classList.add('black-color');
      placeTask.classList.remove('light-gray-color');
      placeTask.classList.add('gray-color');
      timeTask.classList.remove('line-through');
      btnTaskAction.classList.remove('fa-redo-alt');
      btnTaskAction.classList.add('fa-check');
    } else {
      this.done = true;
      leftTaskSection.classList.remove('gray-border-color');
      leftTaskSection.classList.add('red-border-color');
      icon.classList.remove('gray-icon');
      icon.classList.add('vertical-align-middle');
      icon.classList.add('red-color');
      textTask.classList.remove('black-color');
      textTask.classList.add('gray-color');
      textTask.classList.add('line-through');
      placeTask.classList.remove('gray-color');
      placeTask.classList.add('light-gray-color');
      timeTask.classList.add('line-through');
      btnTaskAction.classList.remove('fa-check');
      btnTaskAction.classList.add('fa-redo-alt');
    }
    if (isSingle) {
      onTaskUpdate();
    }
  }

  function DeleteTask(isSingle = true) {
    const taskIndex = state.tasks.indexOf(this);
    if (taskIndex > -1) {
      state.tasks.splice(taskIndex, 1);
    }
    if (isSingle) {
      onTaskUpdate();
    }
  }
  function DrawTask(task) {
    const taskSection = document.createElement('div');
    taskSection.className = 'task-section';
    taskSection.id = task.id;

    const leftTaskSection = document.createElement('div');
    leftTaskSection.className = `icon-round text-center margin7 ${task.done === true ? 'red-border-color' : 'gray-border-color'}`;
    leftTaskSection.id = `leftTS${task.id}`;

    const spanRound1 = document.createElement('span');
    spanRound1.className = 'span-center';

    const spanRound2 = document.createElement('span');
    spanRound2.className = 'span-center';

    const icon = document.createElement('i');
    icon.className = `fas ${task.icon} fa-2x ${task.done === true ? 'vertical-align-middle red-color' : 'gray-icon'}`;
    icon.id = `icon${task.id}`;

    const middleTaskSection = document.createElement('div');
    middleTaskSection.className = 'width100  task-text';

    const textTask = document.createElement('p');
    textTask.className = `margin-2-0 ${task.done === true ? 'gray-color line-through' : 'black-color'}`;
    textTask.id = `textTask${task.id}`;
    textTask.innerHTML = task.text;

    const placeTask = document.createElement('p');
    placeTask.className = `margin-2-0 ${task.done === true ? 'light-gray-color' : 'gray-color'}`;
    placeTask.id = `placeTask${task.id}`;
    placeTask.innerHTML = task.place;

    const rightTaskSection = document.createElement('div');
    rightTaskSection.className = 'flex-center right-task-section';

    const timeTask = document.createElement('p');
    timeTask.className = `gray-color ${task.done === true ? 'line-through' : ''}`;

    if (state.period === 'Today') {
      timeTask.innerHTML = (task.isAllDay === true ? 'All day' : task.time);
    } else {
      const strDate = task.date.toISOString().slice(0, 10);
      timeTask.innerHTML = `${strDate} ${task.isAllDay === true ? 'All day' : task.time}`;
    }
    timeTask.id = `timeTask${task.id}`;

    const taskActionContainer1 = document.createElement('div');
    taskActionContainer1.className = 'task-icon';

    const taskActionContainer2 = document.createElement('div');
    taskActionContainer2.className = 'task-icon';

    const btnTaskAction = document.createElement('i');
    btnTaskAction.className = (task.done === true ? 'fas fa-redo-alt' : 'fas fa-check');
    btnTaskAction.id = `btnTaskAction${task.id}`;

    btnTaskAction.addEventListener('click', ActionTask.bind(task));

    const btnTaskTrash = document.createElement('i');
    btnTaskTrash.className = 'fas fa-trash-alt';
    btnTaskTrash.id = `btnTaskTrash${task.id}`;

    btnTaskTrash.addEventListener('click', DeleteTask.bind(task));

    leftTaskSection.appendChild(spanRound1);
    leftTaskSection.appendChild(icon);
    leftTaskSection.appendChild(spanRound2);

    middleTaskSection.appendChild(textTask);
    middleTaskSection.appendChild(placeTask);

    rightTaskSection.appendChild(timeTask);
    rightTaskSection.appendChild(taskActionContainer1);
    taskActionContainer1.appendChild(btnTaskAction);
    rightTaskSection.appendChild(taskActionContainer2);
    taskActionContainer2.appendChild(btnTaskTrash);

    taskSection.appendChild(leftTaskSection);
    taskSection.appendChild(middleTaskSection);
    taskSection.appendChild(rightTaskSection);

    mainTaskSection.appendChild(taskSection);
  }

  function fActionAllTasks() {
    state.tasksToView.forEach((task) => {
      if (!(state.status === 'All' && task.done === true)) {
        ActionTask.call(task, false);
      }
    });
    onTaskUpdate();
  }

  function DeleteAllTasks() {
    state.tasksToView.forEach((task) => {
      DeleteTask.call(task, false);
    });
    onTaskUpdate();
  }

  const actionAllTasks = document.getElementById('action-all-tasks');
  actionAllTasks.removeEventListener('click', fActionAllTasks);
  actionAllTasks.addEventListener('click', fActionAllTasks);

  function onTaskListUpdate() {
    if (state.tasksToView.length) {
      mainTaskSection.style.display = 'flex';
      noTaskSection.style.display = 'none';
      mainTaskSection.innerHTML = '';
      state.tasksToView.forEach(DrawTask);

      if (mainTaskSection.scrollHeight > mainTaskSection.clientHeight) {
        // if 'true', the content overflows the tab: we show the hidden link
        mainTaskSection.style.justifyContent = 'flex-start';
      } else {
        mainTaskSection.style.justifyContent = 'center';
      }
    } else {
      mainTaskSection.style.display = 'none';
      noTaskSection.style.display = 'flex';
    }
    if (state.status === 'Done') {
      if (actionAllTasks.classList.contains('fa-check')) {
        actionAllTasks.classList.remove('fa-check');
      }
      actionAllTasks.classList.add('fa-redo-alt');
    } else {
      if (actionAllTasks.classList.contains('fa-redo-alt')) {
        actionAllTasks.classList.remove('fa-redo-alt');
      }
      actionAllTasks.classList.add('fa-check');
    }
  }

  function onFiltersUpdate() {
    const radios = document.getElementsByName('filtask');
    for (let i = 0; i < radios.length; i += 1) {
      if (radios[i].checked) {
        state.status = radios[i].value;
      }
    }
    switch (state.status) {
      case 'All':
        state.tasksToView = state.tasks.filter((task) => getCurrentTime(task.date)
          === state.period);
        break;
      case 'Done':
        state.tasksToView = state.tasks.filter((task) => getCurrentTime(task.date)
          === state.period && task.done === true);
        break;
      default:
        state.tasksToView = state.tasks.filter((task) => getCurrentTime(task.date)
          === state.period && task.done === false);
    }
    if (state.tasksToView.length === 0) {
      onEmptyTasksMessage();
    }
    onFilterCounterUpdate();
    onTaskListUpdate();
  }

  function ChooseTypeOfTask(value, color) {
    inputTypeOfTask.value = value;
    currTypeOfTaskIcon.className = `fas fa-circle fa-xs circle-position ${color} errspan`;
  }

  function ChooseIcon(target) {
    let iconName = '';
    switch (target.tagName) {
      case 'A': {
        iconName = target.dataset.name;
        break;
      }
      default: {
        const aTag = target.closest('A');
        if (aTag) {
          iconName = aTag.dataset.name;
        }
      }
    }
    if (iconName !== taskIcon.value && iconName > '') {
      taskIcon.className = `fas ${iconName} fa-2x vertical-align-middle red-color`;
      taskIcon.value = iconName;
      if (taskIconRound.classList.contains('gray-border-color')) {
        taskIconRound.classList.remove('gray-border-color');
        taskIconRound.classList.add('red-border-color');
        additionalButton.style.display = 'inherit';
      }
      CheckFormFilling();
    }
  }

  function DropdownWhenOnClick(when) {
    state.period = when;
    document.getElementById('dropbtn-when-tasks').innerText = state.period;
    onFiltersUpdate();
  }

  function ToPageAddTask() {
    firstPageLeft.style.display = 'none';
    firstPageRight.style.display = 'none';
    secondPageLeft.style.display = 'flex';
    secondPageRight.style.display = 'flex';
  }
  function ViewTasks() {
    firstPageLeft.style.display = 'flex';
    firstPageRight.style.display = 'flex';
    secondPageLeft.style.display = 'none';
    secondPageRight.style.display = 'none';
  }

  function AddTask() {
    const task = {
      icon: taskIcon.value,
      type: inputTypeOfTask.value,
      place: inputWhere.value,
      text: inputWhatToDo.value,
      date: inputWhen.valueAsDate,
      done: false,
      isAllDay: allDayChecker.checked,
      time: inputTime.value,
    };
    state.lastId += 1;
    task.id = `${state.lastId}`;
    state.tasks.push(task);
    // we need to clear fields
    taskIcon.className = 'fas fa-plus fa-2x gray-icon';
    taskIcon.value = '';
    if (taskIconRound.classList.contains('red-border-color')) {
      taskIconRound.classList.remove('red-border-color');
      taskIconRound.classList.add('gray-border-color');
      additionalButton.style.display = 'none';
    }
    inputWhatToDo.value = '';
    inputWhere.value = '';
    inputWhen.value = '';
    inputTypeOfTask.value = 'Business';
    currTypeOfTaskIcon.className = 'fas fa-circle fa-xs circle-position turquoise-color errspan';
    allDayChecker.checked = true;
    AllDayCheckerChange();
    onTaskUpdate();
  }

  const formAddTask = document.getElementById('form-add-task');
  formAddTask.removeEventListener('submit', AddTask);
  formAddTask.addEventListener('submit', AddTask);

  mainTaskSection.style.display = 'none';

  const btnToPageAddTask = document.getElementById('button-to-page-add-task');
  btnToPageAddTask.removeEventListener('click', ToPageAddTask);
  btnToPageAddTask.addEventListener('click', ToPageAddTask);

  const btnViewTasks = document.getElementById('button-view-tasks');
  btnViewTasks.removeEventListener('click', ViewTasks);
  btnViewTasks.addEventListener('click', ViewTasks);

  allDayChecker.removeEventListener('change', AllDayCheckerChange);
  allDayChecker.addEventListener('change', AllDayCheckerChange);

  const trashAllTasks = document.getElementById('trash-all-tasks');
  trashAllTasks.removeEventListener('click', DeleteAllTasks);
  trashAllTasks.addEventListener('click', DeleteAllTasks);

  document.querySelector('.filter-task').addEventListener('change', () => { onFiltersUpdate(); });
  document.querySelector('.dropdown-content').addEventListener('click', (event) => {
    DropdownWhenOnClick(event.target.dataset.name);
  });
  document.querySelector('#icon-list').addEventListener('click', (event) => {
    ChooseIcon(event.target);
  });
  document.querySelector('#type-task-dropdown').addEventListener('click', (event) => {
    ChooseTypeOfTask(event.target.dataset.name, event.target.dataset.color);
  });
  // ////////////////////Form navigation///////////////////////
  //Some new
}());
