
  export function getCurrentDate(inputDate) {
    let currTime = '';
    let currDate = new Date();
    let dateToCompare = new Date(inputDate);
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