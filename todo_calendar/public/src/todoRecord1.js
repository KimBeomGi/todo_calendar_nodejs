// 년월일, 요일 정의
let selectedYear;
let selectedMonth;
let selectedDate;
let selectedDay;

// 처음에는 오늘을 기입
const today = new Date();
const currentYear = today.getFullYear();
selectedYear = today.getFullYear();
selectedMonth = today.getMonth() + 1;  // 그냥 getMonth 하면 1월부터 12월까지 0~11임
selectedDate = today.getDate();
selectedDay = today.getDay();

// 각 년,월,일의 바운더리 제공
const yearBoundary = [];
for (let i = currentYear - 20; i <= currentYear + 50; i++) {
  yearBoundary.push(i);
}

const monthBoundary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let dateBoundary; // 달마다 매번 달라짐

// 선택 Input을 생성하기 위해 가져옴
const cs_year = document.querySelector('#cs_year');
const cs_month = document.querySelector('#cs_month');
const cs_date = document.querySelector('#cs_date');
const sel_sdate = document.querySelector('#sel_sdate');

let isSelected = false

// 년월일 선택 시에 실행되는 함수
function selectDate() {
  updateYearOptions();
  updateMonthOptions();
  updateDateOptions();

  selectedDay = new Date(selectedYear, selectedMonth - 1, selectedDate).toLocaleDateString('ko-KR', { weekday: 'short' });
  sel_sdate.innerText = `${selectedYear}년 ${selectedMonth}월 ${selectedDate}일 (${selectedDay})`;
}

function updateYearOptions() {
  let yearOptions = '';
  for (let j = 0; j < yearBoundary.length; j++) {
    yearOptions += `<p id="year-${yearBoundary[j]}" class="selectDateP ${selectedYear === yearBoundary[j] ? 'sel_ok' : ''}" onclick="clickYear(${yearBoundary[j]})">${yearBoundary[j]}</p>`;
  }
  cs_year.innerHTML = yearOptions;
  const initialSelectedElement = document.getElementById(`year-${selectedYear}`)
  setTimeout(() => {
    if(initialSelectedElement){
      initialSelectedElement.scrollIntoView({
        behavior: !isSelected?'auto':"smooth",
        block: 'center'
      })
    }

  }, 0)
}

function updateMonthOptions() {
  let monthOptions = '';
  for (let k = 0; k < monthBoundary.length; k++) {
    monthOptions += `<p id="month-${monthBoundary[k]}" class="selectDateP ${selectedMonth === monthBoundary[k] ? 'sel_ok' : ''}" onclick="clickMonth(${monthBoundary[k]})">${monthBoundary[k]}</p>`;
  }
  cs_month.innerHTML = monthOptions;
  const initialSelectedElement = document.getElementById(`month-${selectedMonth}`)
  if(initialSelectedElement){
    initialSelectedElement.scrollIntoView({
      behavior: !isSelected?'auto':"smooth",
      block: 'center'
    })
  }
}

function updateDateOptions() {
  dateBoundary = [];
  const lastdate = new Date(selectedYear, selectedMonth, 0).getDate(); // 선택한 달의 마지막 날 확인
  for (let i = 1; i <= lastdate; i++) {
    dateBoundary.push(i);
  }
  if(selectedDate > dateBoundary.length){
    selectedDate = dateBoundary.length
  }

  let dateOptions = '';
  for (let l = 0; l < dateBoundary.length; l++) {
    dateOptions += `<p id="date-${dateBoundary[l]}" class="selectDateP ${selectedDate === dateBoundary[l] ? 'sel_ok' : ''}" onclick="clickDate(${dateBoundary[l]})">${dateBoundary[l]}</p>`;
  }
  cs_date.innerHTML = dateOptions;
  const initialSelectedElement = document.getElementById(`date-${selectedDate}`)
  if(initialSelectedElement){
    initialSelectedElement.scrollIntoView({
      behavior: !isSelected?'auto':"smooth",
      block: 'center'
    })
  }
}

function clickYear(sel_year) {
  selectedYear = sel_year;
  if(!isSelected){
    isSelected = true
  }
  selectDate();
}

function clickMonth(sel_month) {
  selectedMonth = sel_month;
  if(!isSelected){
    isSelected = true
  }
  selectDate();
}

function clickDate(sel_date) {
  selectedDate = sel_date;
  if(!isSelected){
    isSelected = true
  }
  selectDate();
}

selectDate();
