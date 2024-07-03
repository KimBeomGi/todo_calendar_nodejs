let isViewDate1 = false
let isViewDate2 = false

// 
const sel_sdate_div = document.querySelector('#sel_sdate_div')
const sel_edate_div = document.querySelector('#sel_edate_div')

const cs_dateDiv = document.querySelector('#cs_dateDiv')
const ce_dateDiv = document.querySelector('#ce_dateDiv')

// 초기에는 안보이게 하기
cs_dateDiv.classList.add('visibility_hidden')
ce_dateDiv.classList.add('visibility_hidden')

// 껐다켰다
function toggleVisibility(element, isVisible) {
  if(isVisible){
    element.classList.remove('visibility_hidden')
  }else{
    element.classList.add('visibility_hidden')
  }
}

function handleStateChange() {
  toggleVisibility(cs_dateDiv, isViewDate1);
  toggleVisibility(ce_dateDiv, isViewDate2);
}

sel_sdate_div.addEventListener('click', () => {
  isViewDate1 = !isViewDate1
  handleStateChange()
})
sel_edate_div.addEventListener('click', () => {
  isViewDate2 = !isViewDate2
  handleStateChange()
})

document.addEventListener('click', (event) => {
  if (!sel_sdate_div.contains(event.target) && !cs_dateDiv.contains(event.target)) {
      isViewDate1 = false;
  }
  if (!sel_edate_div.contains(event.target) && !ce_dateDiv.contains(event.target)) {
      isViewDate2 = false;
  }
  handleStateChange();
});
