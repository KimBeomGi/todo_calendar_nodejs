// 날짜 visible
let isViewDate1 = false
let isViewDate2 = false

// 
const sel_date_div1 = document.querySelector('#sel_date_div1')
const sel_date_div2 = document.querySelector('#sel_date_div2')
// date1Div
const dateDiv1 = document.querySelector('#dateDiv1')
const dateDiv2 = document.querySelector('#dateDiv2')

// 초기에는 안보이게 하기
dateDiv1.classList.add('visibility_hidden')
dateDiv2.classList.add('visibility_hidden')

// 시간 visible

let isViewTime1 = false
let isViewTime2 = false

const sel_time_div1 = document.querySelector('#sel_time_div1')
const sel_time_div2 = document.querySelector('#sel_time_div2')
const timeDiv1 = document.querySelector('#timeDiv1')
const timeDiv2 = document.querySelector('#timeDiv2')

// 초기에는 안보이게 하기
timeDiv1.classList.add('visibility_hidden')
timeDiv2.classList.add('visibility_hidden')

//////////////////////////////////////////////////////////////////////
// 껐다켰다
function toggleVisibility(element, isVisible) {
  if(isVisible){
    element.classList.remove('visibility_hidden')
  }else{
    element.classList.add('visibility_hidden')
  }
}

// 전체 toggleVisibility
function handleStateChange() {
  toggleVisibility(dateDiv1, isViewDate1);
  toggleVisibility(dateDiv2, isViewDate2);
  toggleVisibility(timeDiv1, isViewTime1);
  toggleVisibility(timeDiv2, isViewTime2);
}


sel_date_div1.addEventListener('click', () => {
  isViewDate1 = !isViewDate1
  handleStateChange()
})
sel_date_div2.addEventListener('click', () => {
  isViewDate2 = !isViewDate2
  handleStateChange()
})

sel_time_div1.addEventListener('click', () => {
  isViewTime1 = !isViewTime1
  handleStateChange()
})
sel_time_div2.addEventListener('click', () => {
  isViewTime2 = !isViewTime2
  handleStateChange()
})

const dateInput1 = document.querySelector('#dateInput1')
const dateInput2 = document.querySelector('#dateInput2')
const timeInput1 = document.querySelector('#timeInput1')
const timeInput2 = document.querySelector('#timeInput2')