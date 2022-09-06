var entry = document.getElementById("submit-btn");
entry.addEventListener("click", addinfo);

var row = 1;

var people = [
  {uname : 'Ada' , ufam : 'Lovelace' , uage : '19'}
];



console.log(people);
function addinfo() {


  var uname = document.getElementById("user-name").value;
  var ufam = document.getElementById("user-family").value;
  var uage = document.getElementById("user-age").value;

  if(!uname || !ufam || !uage){
    alert("Please fill all boxes!");
    return
  }

  let person = {uname , ufam , uage};
  people.push(person);

  var uTable = document.getElementById("uTable"); 

  var newRow = uTable.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML = uname;
  cell2.innerHTML = ufam;
  cell3.innerHTML = uage;

  console.log(people);
}