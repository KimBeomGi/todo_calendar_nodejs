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

let isSelected1 = false

// 사이즈 변경될 때 이게 변경되야할 텐데...
let scrollingHeight = 48 // 3rem

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
  const yearIndex = yearBoundary.indexOf(selectedYear)
  if(yearIndex != -1){
    const movingY = ((yearIndex -1) * scrollingHeight)
    cs_year.scroll({
      top: movingY,
      left: 0,
      behavior: "smooth",
    })
  }
  // const initialSelectedElement = document.getElementById(`year-${selectedYear}`)
}

function updateMonthOptions() {
  let monthOptions = '';
  for (let k = 0; k < monthBoundary.length; k++) {
    monthOptions += `<p id="month-${monthBoundary[k]}" class="selectDateP ${selectedMonth === monthBoundary[k] ? 'sel_ok' : ''}" onclick="clickMonth(${monthBoundary[k]})">${monthBoundary[k]}</p>`;
  }
  cs_month.innerHTML = monthOptions;

  const monthIndex = monthBoundary.indexOf(selectedMonth)
  if(monthIndex != -1){
    const movingY = ((monthIndex -1) * scrollingHeight)
    cs_month.scroll({
      top: movingY,
      left: 0,
      behavior: "smooth",
    })
  }
  // const initialSelectedElement = document.getElementById(`month-${selectedMonth}`)
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

  const dateIndex = dateBoundary.indexOf(selectedDate)
  if(dateIndex != -1){
    const movingY = ((dateIndex -1) * scrollingHeight)
    cs_date.scroll({
      top: movingY,
      left: 0,
      behavior: "smooth",
    })
  }
  // const initialSelectedElement = document.getElementById(`date-${selectedDate}`)
}

function clickYear(sel_year) {
  selectedYear = sel_year;
  if(!isSelected1){
    isSelected1 = true
  }
  selectDate();
}

function clickMonth(sel_month) {
  selectedMonth = sel_month;
  if(!isSelected1){
    isSelected1 = true
  }
  selectDate();
}

function clickDate(sel_date) {
  selectedDate = sel_date;
  if(!isSelected1){
    isSelected1 = true
  }
  selectDate();
}

selectDate();


