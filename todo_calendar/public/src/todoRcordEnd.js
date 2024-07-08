// sel_sdate_div.addEventListener('click', selectDate())

const scheduleForm = document.querySelector("#scheduleForm")

scheduleForm.addEventListener('submit', function(event) {
  const titleInput = document.querySelector('#titleInput')
  const contentInput = document.querySelector('#contentInput')
  if (titleInput.value.trim() === '') {
    titleInput.value = '내 일정'
  }
  // if(contentInput.value.trim() === ''){
  //   alert('내용을 입력하세요.')
  //   event.preventDefault()
  // }
})