bDate.max = new Date().toISOString().split("T")[0];

function output() {
  let reurn1 = document.getElementById("age");
  var currentdate = document.getElementById("cDate").value;
  var currentdate = new Date(currentdate);
  // let currentdate=new Date(currentdate.getDate);

  let cDate = currentdate.getDate();

  let cMonth = currentdate.getMonth() + 1;

  let cYear = currentdate.getFullYear();

  var birthDate = document.getElementById("bDate").value;
  var birthDate = new Date(birthDate);

  let bDate = birthDate.getDate();

  let bMonth = birthDate.getMonth() + 1;

  let bYear = birthDate.getFullYear();

  if (bDate > cDate) {
    cDate = cDate + 30;
    cMonth = cMonth - 1;
    var days = cDate - bDate;
  } else {
    days = cDate - bDate;
  }

  if (bMonth > cMonth) {
    cMonth = cMonth + 12;
    cYear = cYear - 1;
    var month = cMonth - bMonth;
  } else {
    month = cMonth - bMonth;
  }
  if (cYear < bYear) {
    document.write("You can't enter future date in birth date***");
  } else {
    var year = cYear - bYear;
  }

  let curAge = `Year-${year} Month-${month} Days-${days}`;
  reurn1.innerText = curAge;
}
