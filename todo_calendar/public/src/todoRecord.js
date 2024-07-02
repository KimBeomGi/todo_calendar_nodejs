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
const c_year = document.querySelector('#c_year');
const c_month = document.querySelector('#c_month');
const c_date = document.querySelector('#c_date');
const sel_start_date = document.querySelector('#sel_start_date');

// 년월일 선택 시에 실행되는 함수
function selectDate() {
  selectedDay = new Date(selectedYear, selectedMonth - 1, selectedDate).toLocaleDateString('ko-KR', { weekday: 'short' });
  sel_start_date.innerText = `${selectedYear}년 ${selectedMonth}월 ${selectedDate}일 (${selectedDay})`;

  updateYearOptions();
  updateMonthOptions();
  updateDateOptions();
}

function updateYearOptions() {
  let yearOptions = '';
  for (let j = 0; j < yearBoundary.length; j++) {
    yearOptions += `<p class="selectDateP ${selectedYear === yearBoundary[j] ? 'sel_ok' : ''}" onclick="clickYear(${yearBoundary[j]})">${yearBoundary[j]}</p>`;
  }
  c_year.innerHTML = yearOptions;
}

function updateMonthOptions() {
  let monthOptions = '';
  for (let k = 0; k < monthBoundary.length; k++) {
    monthOptions += `<p class="selectDateP ${selectedMonth === monthBoundary[k] ? 'sel_ok' : ''}" onclick="clickMonth(${monthBoundary[k]})">${monthBoundary[k]}</p>`;
  }
  c_month.innerHTML = monthOptions;
}

function updateDateOptions() {
  dateBoundary = [];
  const lastdate = new Date(selectedYear, selectedMonth, 0).getDate(); // 선택한 달의 마지막 날 확인
  for (let i = 1; i <= lastdate; i++) {
    dateBoundary.push(i);
  }

  let dateOptions = '';
  for (let l = 0; l < dateBoundary.length; l++) {
    dateOptions += `<p class="selectDateP ${selectedDate === dateBoundary[l] ? 'sel_ok' : ''}" onclick="clickDate(${dateBoundary[l]})">${dateBoundary[l]}</p>`;
  }
  c_date.innerHTML = dateOptions;
}

function clickYear(sel_year) {
  selectedYear = sel_year;
  selectDate();
}

function clickMonth(sel_month) {
  selectedMonth = sel_month;
  selectDate();
}

function clickDate(sel_date) {
  selectedDate = sel_date;
  selectDate();
}

selectDate();
