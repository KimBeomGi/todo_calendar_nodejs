const sel_time1 = document.querySelector('#sel_time1')
const sel_time2 = document.querySelector('#sel_time2')

const currentHour = today.getHours()
const currentMinutes = today.getMinutes()
let selectedHour1 = today.getHours()
let selectedMinutes1 = today.getMinutes()
let selectedHour2 = today.getHours()
let selectedMinutes2 = today.getMinutes()

let isSelected3 = false
let isSelected4 = false

sel_time1.innerText = `${currentHour}시 ${currentMinutes}분`
sel_time2.innerText = `${currentHour}시 ${currentMinutes}분`

hourBoundary = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
const minutesBoundary = [];
for (let i = 0; i <= 59; i++) {
  minutesBoundary.push(i);
}

const hour1 = document.querySelector('#hour1')
const minutes1 = document.querySelector('#minutes1')
const hour2 = document.querySelector('#hour2')
const minutes2 = document.querySelector('#minutes2')


// 시작 시간

function selectTime1() {
  updateHourOptions1();
  updateMinutesOptions1();
  sel_time1.innerText = `${selectedHour1}시 ${selectedMinutes1}분`
  timeInput1.value = `${selectedHour1}:${selectedMinutes1}`
}

function updateHourOptions1() {
  let hourOptions = '';
  for (let j = 0; j < hourBoundary.length; j++) {
    // hourOptions += `<p id="year-${hourBoundary[j]}" class="selectDateP ${selectedYear2 === hourBoundary[j] ? 'sel_ok' : ''}" onclick="clickYear2(${hourBoundary[j]})">${hourBoundary[j]}</p>`;
    hourOptions += `<p id="hour1-${hourBoundary[j]}" class="selectTimeP ${selectedHour1 === hourBoundary[j] ? 'sel_ok' : ''}" onclick="clickHour1(${hourBoundary[j]})">${hourBoundary[j]}</p>`;
  }
  hour1.innerHTML = hourOptions;
  const timeIndex = hourBoundary.indexOf(selectedHour1)
  if(timeIndex != -1){
    const movingY = ((timeIndex -1) * scrollingHeight)
    hour1.scroll({
      top: movingY,
      left: 0,
      behavior: "smooth",
    })
  } 
}
function updateMinutesOptions1() {
  let minutesOptions = '';
  for (let j = 0; j < minutesBoundary.length; j++) {
    minutesOptions += `<p id="minutes1-${minutesBoundary[j]}" class="selectTimeP ${selectedMinutes1 === minutesBoundary[j] ? 'sel_ok' : ''}" onclick="clickMinutes1(${minutesBoundary[j]})">${minutesBoundary[j]}</p>`;
  }
  minutes1.innerHTML = minutesOptions;
  const timeIndex = minutesBoundary.indexOf(selectedMinutes1)
  if(timeIndex != -1){
    const movingY = ((timeIndex -1) * scrollingHeight)
    minutes1.scroll({
      top: movingY,
      left: 0,
      behavior: "smooth",
    })
  } 
}
function clickHour1(sel_hour) {
  selectedHour1 = sel_hour;
  if(!isSelected3){
    isSelected3 = true
  }
  selectTime1();
}
function clickMinutes1(sel_minutes) {
  selectedMinutes1 = sel_minutes;
  if(!isSelected3){
    isSelected3 = true
  }
  selectTime1();
}
selectTime1()

// 종료 시간

function selectTime2() {
  updateHourOptions2();
  updateMinutesOptions2();
  sel_time2.innerText = `${selectedHour2}시 ${selectedMinutes2}분`
  timeInput2.value = `${selectedHour2}:${selectedMinutes2}`
}

function updateHourOptions2() {
  let hourOptions = '';
  for (let j = 0; j < hourBoundary.length; j++) {
    // hourOptions += `<p id="year-${hourBoundary[j]}" class="selectDateP ${selectedYear2 === hourBoundary[j] ? 'sel_ok' : ''}" onclick="clickYear2(${hourBoundary[j]})">${hourBoundary[j]}</p>`;
    hourOptions += `<p id="hour2-${hourBoundary[j]}" class="selectTimeP ${selectedHour2 === hourBoundary[j] ? 'sel_ok' : ''}" onclick="clickHour2(${hourBoundary[j]})">${hourBoundary[j]}</p>`;
  }
  hour2.innerHTML = hourOptions;
  const timeIndex = hourBoundary.indexOf(selectedHour2)
  if(timeIndex != -1){
    const movingY = ((timeIndex -1) * scrollingHeight)
    hour2.scroll({
      top: movingY,
      left: 0,
      behavior: "smooth",
    })
  } 
}
function updateMinutesOptions2() {
  let minutesOptions = '';
  for (let j = 0; j < minutesBoundary.length; j++) {
    minutesOptions += `<p id="minutes2-${minutesBoundary[j]}" class="selectTimeP ${selectedMinutes2 === minutesBoundary[j] ? 'sel_ok' : ''}" onclick="clickMinutes2(${minutesBoundary[j]})">${minutesBoundary[j]}</p>`;
  }
  minutes2.innerHTML = minutesOptions;
  const timeIndex = minutesBoundary.indexOf(selectedMinutes2)
  if(timeIndex != -1){
    const movingY = ((timeIndex -1) * scrollingHeight)
    minutes2.scroll({
      top: movingY,
      left: 0,
      behavior: "smooth",
    })
  } 
}
function clickHour2(sel_hour) {
  selectedHour2 = sel_hour;
  if(!isSelected3){
    isSelected3 = true
  }
  selectTime2();
}
function clickMinutes2(sel_minutes) {
  selectedMinutes2 = sel_minutes;
  if(!isSelected3){
    isSelected3 = true
  }
  selectTime2();
}

selectTime2()
