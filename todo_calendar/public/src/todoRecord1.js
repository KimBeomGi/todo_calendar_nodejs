// 년월일, 요일 정의
let selectedYear1;
let selectedMonth1;
let selectedDate1;
let selectedDay1;

// 처음에는 오늘을 기입
const today = new Date();
const currentYear = today.getFullYear();
selectedYear1 = today.getFullYear();
selectedMonth1 = today.getMonth() + 1;  // 그냥 getMonth 하면 1월부터 12월까지 0~11임
selectedDate1 = today.getDate();
selectedDay1 = today.getDay();

// 각 년,월,일의 바운더리 제공
const yearBoundary1 = [];
for (let i = currentYear - 20; i <= currentYear + 50; i++) {
  yearBoundary1.push(i);
}

const monthBoundary1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let dateBoundary1; // 달마다 매번 달라짐

// 선택 Input을 생성하기 위해 가져옴
const year1 = document.querySelector('#year1');
const month1 = document.querySelector('#month1');
const date1 = document.querySelector('#date1');
const sel_date1 = document.querySelector('#sel_date1');

let isSelected1 = false

// 사이즈 변경될 때 이게 변경되야할 텐데...
let scrollingHeight = 48 // 3rem

// 년월일 선택 시에 실행되는 함수
function selectDate1() {
  updateYearOptions1();
  updateMonthOptions1();
  updateDateOptions1();
  selectedDay1 = new Date(selectedYear1, selectedMonth1 - 1, selectedDate1).toLocaleDateString('ko-KR', { weekday: 'short' });
  sel_date1.innerText = `${selectedYear1}년 ${selectedMonth1}월 ${selectedDate1}일 (${selectedDay1})`;
}

function updateYearOptions1() {
  let yearOptions = '';
  for (let j = 0; j < yearBoundary1.length; j++) {
    yearOptions += `<p id="year-${yearBoundary1[j]}" class="selectDateP ${selectedYear1 === yearBoundary1[j] ? 'sel_ok' : ''}" onclick="clickYear1(${yearBoundary1[j]})">${yearBoundary1[j]}</p>`;
  }
  year1.innerHTML = yearOptions;
  const yearIndex = yearBoundary1.indexOf(selectedYear1)
  if(yearIndex != -1){
    const movingY = ((yearIndex -1) * scrollingHeight)
    year1.scroll({
      top: movingY,
      left: 0,
      behavior: "smooth",
    })
  }
  // const initialSelectedElement = document.getElementById(`year-${selectedYear1}`)
}

function updateMonthOptions1() {
  let monthOptions = '';
  for (let k = 0; k < monthBoundary1.length; k++) {
    monthOptions += `<p id="month-${monthBoundary1[k]}" class="selectDateP ${selectedMonth1 === monthBoundary1[k] ? 'sel_ok' : ''}" onclick="clickMonth1(${monthBoundary1[k]})">${monthBoundary1[k]}</p>`;
  }
  month1.innerHTML = monthOptions;

  const monthIndex = monthBoundary1.indexOf(selectedMonth1)
  if(monthIndex != -1){
    const movingY = ((monthIndex -1) * scrollingHeight)
    month1.scroll({
      top: movingY,
      left: 0,
      behavior: "smooth",
    })
  }
  // const initialSelectedElement = document.getElementById(`month-${selectedMonth1}`)
}

function updateDateOptions1() {
  dateBoundary1 = [];
  const lastdate = new Date(selectedYear1, selectedMonth1, 0).getDate(); // 선택한 달의 마지막 날 확인
  for (let i = 1; i <= lastdate; i++) {
    dateBoundary1.push(i);
  }
  if(selectedDate1 > dateBoundary1.length){
    selectedDate1 = dateBoundary1.length
  }

  let dateOptions = '';
  for (let l = 0; l < dateBoundary1.length; l++) {
    dateOptions += `<p id="date-${dateBoundary1[l]}" class="selectDateP ${selectedDate1 === dateBoundary1[l] ? 'sel_ok' : ''}" onclick="clickDate1(${dateBoundary1[l]})">${dateBoundary1[l]}</p>`;
  }
  date1.innerHTML = dateOptions;

  const dateIndex = dateBoundary1.indexOf(selectedDate1)
  if(dateIndex != -1){
    const movingY = ((dateIndex -1) * scrollingHeight)
    date1.scroll({
      top: movingY,
      left: 0,
      behavior: "smooth",
    })
  }
  // const initialSelectedElement = document.getElementById(`date-${selectedDate1}`)
}

function clickYear1(sel_year) {
  selectedYear1 = sel_year;
  if(!isSelected1){
    isSelected1 = true
  }
  selectDate1();
}

function clickMonth1(sel_month) {
  selectedMonth1 = sel_month;
  if(!isSelected1){
    isSelected1 = true
  }
  selectDate1();
}

function clickDate1(sel_date) {
  selectedDate1 = sel_date;
  if(!isSelected1){
    isSelected1 = true
  }
  selectDate1();
}

selectDate1();


