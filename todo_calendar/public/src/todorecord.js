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
}


sel_date_div1.addEventListener('click', () => {
  isViewDate1 = !isViewDate1
  handleStateChange()
})
sel_date_div2.addEventListener('click', () => {
  isViewDate2 = !isViewDate2
  handleStateChange()
})
