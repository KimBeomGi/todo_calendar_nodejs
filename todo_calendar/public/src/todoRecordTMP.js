document.addEventListener("DOMContentLoaded", function() {
  const yearDiv = document.getElementById("c_year");
  const monthDiv = document.getElementById("c_month");
  const dateDiv = document.getElementById("c_date");
  const hiddenDateInput = document.getElementById("c_dateInput");
  const selStartDate = document.getElementById("sel_start_date");

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDate = new Date().getDate();

  // 연도 설정
  for (let i = currentYear - 50; i <= currentYear + 50; i++) {
    const yearP = document.createElement("p");
    yearP.innerText = i;
    yearP.classList.add("selectDateP");
    yearP.addEventListener("click", function() {
      document.querySelectorAll("#c_year .selectDateP").forEach(p => p.classList.remove("sel_ok"));
      yearP.classList.add("sel_ok");
      updateHiddenInput();
    });
    yearDiv.appendChild(yearP);
  }

  // 월 설정
  for (let i = 1; i <= 12; i++) {
    const monthP = document.createElement("p");
    monthP.innerText = i;
    monthP.classList.add("selectDateP");
    monthP.addEventListener("click", function() {
      document.querySelectorAll("#c_month .selectDateP").forEach(p => p.classList.remove("sel_ok"));
      monthP.classList.add("sel_ok");
      updateHiddenInput();
    });
    monthDiv.appendChild(monthP);
  }

  // 날짜 설정
  function setDateOptions(year, month) {
    dateDiv.innerHTML = "";
    const daysInMonth = new Date(year, month, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      const dateP = document.createElement("p");
      dateP.innerText = i;
      dateP.classList.add("selectDateP");
      dateP.addEventListener("click", function() {
        document.querySelectorAll("#c_date .selectDateP").forEach(p => p.classList.remove("sel_ok"));
        dateP.classList.add("sel_ok");
        updateHiddenInput();
      });
      dateDiv.appendChild(dateP);
    }
  }

  function updateHiddenInput() {
    const selectedYear = document.querySelector("#c_year .sel_ok")?.innerText;
    const selectedMonth = document.querySelector("#c_month .sel_ok")?.innerText;
    const selectedDate = document.querySelector("#c_date .sel_ok")?.innerText;

    if (selectedYear && selectedMonth && selectedDate) {
      const formattedDate = `${selectedYear}-${selectedMonth.padStart(2, '0')}-${selectedDate.padStart(2, '0')}`;
      hiddenDateInput.value = formattedDate;
      const dayOfWeek = new Date(formattedDate).toLocaleDateString('ko-KR', { weekday: 'short' });
      selStartDate.innerText = `${selectedYear}년 ${selectedMonth}월 ${selectedDate}일 (${dayOfWeek})`;
    }
  }

  // 초기화
  setDateOptions(currentYear, currentMonth + 1);
});
