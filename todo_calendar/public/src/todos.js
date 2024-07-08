let todos = [...receiveTodos]

const todoList = document.querySelector("#todoList")

for (let i = 0; i < todos.length; i++) {
  todos[i]
  const todoDiv = document.createElement('div')
  
  const titleDiv = document.createElement('div')
  const colorDiv = document.createElement('div')
  colorDiv.classList.add("showColor")
  colorDiv.style.backgroundColor = `${todos[i].color}`
  // colorDiv.style.backgroundColor = todos[i].color || "transparent"  // 기본값을 추가하여 값이 없을 경우 투명하게 설정


  const contentDiv = document.createElement('div')
  const locationDiv = document.createElement('div')
  const statusDiv = document.createElement('div')
  const start_dateDiv = document.createElement('div')
  const start_timeDiv = document.createElement('div')
  const end_dateDiv = document.createElement('div')
  const end_timeDiv = document.createElement('div')
  const titleP = document.createElement('p')
  // const colorP = document.createElement('p')
  const contentP = document.createElement('p')
  const locationP = document.createElement('p')
  const statusP = document.createElement('p')
  const start_dateP = document.createElement('p')
  const start_timeP = document.createElement('p')
  const end_dateP = document.createElement('p')
  const end_timeP = document.createElement('p')
  
  // 데이터 설정
  titleP.innerText = todos[i].title
  contentP.innerText = todos[i].content || "내용 미입력"
  locationP.innerText = todos[i].location || "장소 미입력"

  const isStatusP = document.createElement('p')
  isStatusP.innerText = "진행 상태 : "
  statusP.innerText = todos[i].status
  
  const startP = document.createElement('p')
  startP.innerText = "시작일 : "
  start_dateP.innerText = `${todos[i].start_date.slice(0, 4)}년 ${todos[i].start_date.slice(5, 7)}월 ${todos[i].start_date.slice(8, 10)}일`
  start_timeP.innerText = `${todos[i].start_time.slice(0,2)}시 ${todos[i].start_time.slice(3,5)}분`
  
  const endP = document.createElement('p')
  endP.innerText = "종료일 : "
  end_dateP.innerText = `${todos[i].end_date.slice(0, 4)}년 ${todos[i].end_date.slice(5, 7)}월 ${todos[i].end_date.slice(8, 10)}일`
  end_timeP.innerText = `${todos[i].end_time.slice(0,2)}시 ${todos[i].end_time.slice(3,5)}분`

  // 요소 추가
  titleDiv.appendChild(titleP);
  contentDiv.appendChild(contentP);
  locationDiv.appendChild(locationP);

  statusDiv.appendChild(isStatusP);
  isStatusP.classList.add('m_r_1rem')
  statusDiv.appendChild(statusP);

  start_dateDiv.appendChild(start_dateP);
  start_timeDiv.appendChild(start_timeP);
  
  end_dateDiv.appendChild(end_dateP);
  end_timeDiv.appendChild(end_timeP);

  const title_colorDiv = document.createElement('div')
  title_colorDiv.appendChild(colorDiv);  
  colorDiv.classList.add('m_r_1rem')
  title_colorDiv.appendChild(titleDiv);
  title_colorDiv.classList.add('flex-row')
  // title_colorDiv.classList.add('center')
  todoDiv.appendChild(title_colorDiv);  

  todoDiv.appendChild(contentDiv);
  todoDiv.appendChild(locationDiv);
  
  statusDiv.classList.add('flex-row')
  todoDiv.appendChild(statusDiv);

  const startDateDiv = document.createElement('div')
  startDateDiv.appendChild(startP)
  startP.classList.add("m_r_1rem")
  startDateDiv.appendChild(start_dateDiv)
  start_dateDiv.classList.add("m_r_1rem")
  startDateDiv.appendChild(start_timeDiv)
  startDateDiv.classList.add('flex-row')
  // startDateDiv.classList.add('center')
  todoDiv.appendChild(startDateDiv)

  const endDateDiv = document.createElement('div')
  endDateDiv.appendChild(endP)
  endP.classList.add("m_r_1rem")
  endDateDiv.appendChild(end_dateDiv)
  end_dateDiv.classList.add("m_r_1rem")
  endDateDiv.appendChild(end_timeDiv)
  endDateDiv.classList.add('flex-row')
  // endDateDiv.classList.add('center')
  todoDiv.appendChild(endDateDiv)
  
  todoDiv.id = `todos-${todos[i].id}`
  todoDiv.classList.add("todoBorder")

  todoList.appendChild(todoDiv);
}