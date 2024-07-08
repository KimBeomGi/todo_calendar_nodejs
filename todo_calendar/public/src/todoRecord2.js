// 년월일, 요일 정의
let selectedYear2;
let selectedMonth2;
let selectedDate2;
let selectedDay2;

// 처음에는 오늘을 기입
// const today = new Date();
// const currentYear = today.getFullYear();
selectedYear2 = today.getFullYear();
selectedMonth2 = today.getMonth() + 1;  // 그냥 getMonth 하면 1월부터 12월까지 0~11임
selectedDate2 = today.getDate();
selectedDay2 = today.getDay();

// 각 년,월,일의 바운더리 제공
const yearBoundary2 = [];
for (let i = currentYear - 20; i <= currentYear + 50; i++) {
  yearBoundary2.push(i);
}

const monthBoundary2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let dateBoundary2; // 달마다 매번 달라짐

// 선택 Input을 생성하기 위해 가져옴
const year2 = document.querySelector('#year2');
const month2 = document.querySelector('#month2');
const date2 = document.querySelector('#date2');
const sel_date2 = document.querySelector('#sel_date2');

let isSelected2 = false

// 사이즈 변경될 때 이게 변경되야할 텐데...
// let scrollingHeight = 48 // 3rem

// 년월일 선택 시에 실행되는 함수
function selectDate2() {
  updateYearOptions2();
  updateMonthOptions2();
  updateDateOptions2();
  selectedDay2 = new Date(selectedYear2, selectedMonth2 - 1, selectedDate2).toLocaleDateString('ko-KR', { weekday: 'short' });
  sel_date2.innerText = `${selectedYear2}년 ${selectedMonth2}월 ${selectedDate2}일 (${selectedDay2})`;
  dateInput2.value = `${selectedYear2}-${selectedMonth2}-${selectedDate2}`
}

function updateYearOptions2() {
  let yearOptions = '';
  for (let j = 0; j < yearBoundary2.length; j++) {
    yearOptions += `<p id="year2-${yearBoundary2[j]}" class="selectDateP ${selectedYear2 === yearBoundary2[j] ? 'sel_ok' : ''}" onclick="clickYear2(${yearBoundary2[j]})">${yearBoundary2[j]}</p>`;
  }
  year2.innerHTML = yearOptions;
  const yearIndex = yearBoundary2.indexOf(selectedYear2)
  if(yearIndex != -1){
    const movingY = ((yearIndex -1) * scrollingHeight)
    year2.scroll({
      top: movingY,
      left: 0,
      behavior: "smooth",
    })
  }
  // const initialSelectedElement = document.getElementById(`year-${selectedYear2}`)
}

function updateMonthOptions2() {
  let monthOptions = '';
  for (let k = 0; k < monthBoundary2.length; k++) {
    monthOptions += `<p id="month2-${monthBoundary2[k]}" class="selectDateP ${selectedMonth2 === monthBoundary2[k] ? 'sel_ok' : ''}" onclick="clickMonth2(${monthBoundary2[k]})">${monthBoundary2[k]}</p>`;
  }
  month2.innerHTML = monthOptions;

  const monthIndex = monthBoundary2.indexOf(selectedMonth2)
  if(monthIndex != -1){
    const movingY = ((monthIndex -1) * scrollingHeight)
    month2.scroll({
      top: movingY,
      left: 0,
      behavior: "smooth",
    })
  }
  // const initialSelectedElement = document.getElementById(`month-${selectedMonth2}`)
}

function updateDateOptions2() {
  dateBoundary2 = [];
  const lastdate = new Date(selectedYear2, selectedMonth2, 0).getDate(); // 선택한 달의 마지막 날 확인
  for (let i = 1; i <= lastdate; i++) {
    dateBoundary2.push(i);
  }
  if(selectedDate2 > dateBoundary2.length){
    selectedDate2 = dateBoundary2.length
  }

  let dateOptions = '';
  for (let l = 0; l < dateBoundary2.length; l++) {
    dateOptions += `<p id="date2-${dateBoundary2[l]}" class="selectDateP ${selectedDate2 === dateBoundary2[l] ? 'sel_ok' : ''}" onclick="clickDate2(${dateBoundary2[l]})">${dateBoundary2[l]}</p>`;
  }
  date2.innerHTML = dateOptions;

  const dateIndex = dateBoundary2.indexOf(selectedDate2)
  if(dateIndex != -1){
    const movingY = ((dateIndex -1) * scrollingHeight)
    date2.scroll({
      top: movingY,
      left: 0,
      behavior: "smooth",
    })
  }
  // const initialSelectedElement = document.getElementById(`date-${selectedDate2}`)
}

function clickYear2(sel_year) {
  selectedYear2 = sel_year;
  if(!isSelected2){
    isSelected2 = true
  }
  selectDate2();
}

function clickMonth2(sel_month) {
  selectedMonth2 = sel_month;
  if(!isSelected2){
    isSelected2 = true
  }
  selectDate2();
}

function clickDate2(sel_date) {
  selectedDate2 = sel_date;
  if(!isSelected2){
    isSelected2 = true
  }
  selectDate2();
}

selectDate2();


