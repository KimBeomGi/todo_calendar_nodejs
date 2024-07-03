let isClick_sel_sdate = false

const sel_sdate_div = document.querySelector('#sel_sdate_div')
const cs_dateDiv = document.querySelector('#cs_dateDiv')
cs_dateDiv.classList.add('visibility_hidden')

sel_sdate_div.addEventListener('click', function(){
  if(cs_dateDiv.classList.contains('visibility_hidden')){
    cs_dateDiv.classList.remove('visibility_hidden');
    isClick_sel_sdate = !isClick_sel_sdate
  }else{
    cs_dateDiv.classList.add('visibility_hidden');
    isClick_sel_sdate = !isClick_sel_sdate
  };
});
