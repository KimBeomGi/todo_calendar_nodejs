// 달력을 만들기 위한 script
const dayToStr = {
  '0' : '일', '1' : '월', '2' : '화', '3' : '수', '4' : '목', '5' : '금', '6' : '토',
}
let theDay = new Date()
const todayyear = theDay.getFullYear()
const todaymonth = theDay.getMonth()
const todaydate = theDay.getDate()
const todayday = theDay.getDay()

// 오늘 구하기
const today = document.getElementById("today")
const todaySpan = document.createElement('span')
todaySpan.innerText = `${todayyear}. ${todaymonth + 1}. ${todaydate}. (${dayToStr[todayday]})` 
today.appendChild(todaySpan)


let selectedDate = null;

// 달력보여주는 함수
const renderCalendar = () => {
  const viewYear = theDay.getFullYear()
  const viewMonth = theDay.getMonth()

  // 현재 연도와 월 표시
  document.querySelector('.year-month').innerText = `${viewYear}년 ${viewMonth + 1}월`

  // 지난달의 마지막날, 이번달의 마지막날
  const prevMonthLast = new Date(viewYear, viewMonth, 0)  // 지난달 마지막일
  // console.log(prevMonthLast)
  const thisMonthLast = new Date(viewYear, viewMonth + 1, 0)  // 이번달 마지막일
  // console.log(thisMonthLast)
  // const what1 = new Date(viewYear, viewMonth, 1)  // 이번달 시작일
  // const what2 = new Date(viewYear, viewMonth + 1, 1) // 다음달 시작일
  // console.log(what1)
  // console.log(what2)

  const PLDate = prevMonthLast.getDate()  // 지난달 마지막 날
  const PLDay =  prevMonthLast.getDay() // 지난달 마지막 요일

  const TLDate = thisMonthLast.getDate()  // 이번달 마지막 날
  const TLDay = thisMonthLast.getDay()  // 이번달 마지막 요일

  const prevDates = []
  const thisDates = [...Array(TLDate+1).keys()].slice(1)  // 날짜 수 + 1 만큼의 요소를 만들어서 인덱스는 0~32로 만들고 slice(1)로 값이 0 인 0인덱스를 잘라냄
  const nextDates = []

  // console.log(thisDates)

  // 달력 합치기
  if(PLDay !== 6){
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i) // 지난달 날짜들을 넣어줌
    }
  }
  for (let j = 1; j < 7 - TLDay; j++) {
    nextDates.push(j) // 다음달 날짜들을 넣어줌
  }
  const dates = prevDates.concat(thisDates, nextDates)  //지난달, 이번달, 다음달 합쳐주기

  const firstDateIndex = dates.indexOf(1) // 이번달 1일의 인덱스 찾기
  const lastDateIndex = dates.lastIndexOf(TLDate) //이번달 마지막 날의 인덱스 찾기

  dates.forEach((date, k) => {
    const condition = firstDateIndex <= k && k < lastDateIndex + 1 ? 'this' : 'other'
    let year = viewYear;
    let month = viewMonth + 1; // 월은 0부터 시작하므로 1을 더해줌
    let selectDate = date;
    
    if (condition === 'other') {
      if (k < firstDateIndex) {
        year = prevMonthLast.getFullYear();
        month = prevMonthLast.getMonth() + 1;
      } else {
        year = thisMonthLast.getFullYear();
        month = thisMonthLast.getMonth() + 2;
        if(month == 13){
          month = 1
        }
      }
    }

    let dateClass = 'date';
    if(k % 7 == 0){
      dateClass += ' sunday';
    }else if(k % 7 == 6){
      dateClass += ' saturday';
    }

    if (selectedDate && selectedDate.year === year && selectedDate.month === month && selectedDate.date === selectDate) {
      dateClass += ' selectedDate';
    }
    dates[k] = `<div class='${dateClass}' onclick="checkTODO(${year}, ${month}, ${selectDate}, ${k % 7})"><span class=${condition}>${date}</span></div>`;
    
    // if(k % 7 == 0){
    //   dates[k] = `<div class='date sunday' onclick="checkTODO(${year}, ${month}, ${selectDate})"><span class=${condition}>${date}</span></div>`
    // }else if(k % 7 == 6){
    //   dates[k] = `<div class='date saturday' onclick="checkTODO(${year}, ${month}, ${selectDate})"><span class=${condition}>${date}</span></div>`
    // }else{
    //   dates[k] = `<div class='date' onclick="checkTODO(${year}, ${month}, ${selectDate})"><span class=${condition}>${date}</span></div>`
    // }
  })
  console.log(selectedDate)
  document.querySelector('.dates').innerHTML = dates.join('')

  // 지금 보고있는 달력이 이번년 이번달 달력이면 this라는 클래스를 갖고있는 값을 돌려서,
  // date의 text가 오늘 날짜와 같으면 (string에 + 붙여줘서 type을 number로 바꿔줌)
  // today라는 클래스를 붙여준다
  const today = new Date()
  if(viewMonth === today.getMonth() && viewYear === today.getFullYear()){
    for(let date of document.querySelectorAll('.this')){
      if (Number(date.innerText) === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }
}

const prevMonth = () => {
  theDay.setMonth(theDay.getMonth() - 1)
  // console.log(theDay)
  const tmpYear = theDay.getFullYear()
  const tmpMonth = theDay.getMonth()
  // const tmpDate = theDay.getDate()
  const tmpDate = new Date(tmpYear, tmpMonth, 1).getDate()
  // const tmpDay = theDay.getDay()
  const tmpDay = new Date(tmpYear, tmpMonth, 1).getDay()
  // console.log('투데이', tmpDate, tmpDay)
  console.log(`오늘임 ${todayyear}. ${todaymonth + 1}. ${todaydate}. (${dayToStr[todayday]})` )
  if(tmpYear == todayyear && tmpMonth == todaymonth){
    selectedDate = { year : todayyear, month : todaymonth + 1, date: todaydate, day : todayday };
    // console.log('실행됨1')
  }else{
    selectedDate = { year : tmpYear, month : tmpMonth + 1, date: tmpDate, day : tmpDay };
  }
  // console.log(selectedDate)
  renderCalendar()
}

const nextMonth = () => {
  theDay.setMonth(theDay.getMonth() + 1)
  // console.log(theDay)
  const tmpYear = theDay.getFullYear()
  const tmpMonth = theDay.getMonth()
  // const tmpDate = theDay.getDate()
  const tmpDate = new Date(tmpYear, tmpMonth, 1).getDate()
  // const tmpDay = theDay.getDay()
  const tmpDay = new Date(tmpYear, tmpMonth, 1).getDay()
  // console.log('투데이', tmpDate, tmpDay)
  console.log(`오늘임 ${todayyear}. ${todaymonth + 1}. ${todaydate}. (${dayToStr[todayday]})` )
  if(tmpYear == todayyear && tmpMonth == todaymonth){
    selectedDate = { year : todayyear, month : todaymonth + 1, date: todaydate, day : todayday };
    // console.log('실행됨2')
  }else{
    selectedDate = { year : tmpYear, month : tmpMonth + 1, date: tmpDate, day : tmpDay };
  }
  // console.log(selectedDate)
  // selectedDate = null
  renderCalendar()
}

const goToday = () => {
  theDay = new Date()
  const tmpYear = theDay.getFullYear()
  const tmpMonth = theDay.getMonth()
  const tmpDate = theDay.getDate()
  const tmpDay = theDay.getDay()
  selectedDate = { year : tmpYear, month : tmpMonth + 1, date: tmpDate, day : tmpDay };
  // console.log(selectedDate)
  // selectedDate = null
  renderCalendar()
}

const checkTODO = (year, month, selectDate, day) => {
  // console.log(`${year}.${month}.${selectDate} (${dayToStr[day]})`);
  selectedDate = { year, month, date: selectDate, day };
  renderCalendar();
}

goToday()