// target table row 
var output = document.getElementById("table-output");

// get buttons
var btns = document.getElementsByTagName("button");

// save editable row
var editable_row;

// get input value 
var input = document.getElementById("todo-input");

function insertTodo() {
  //   get Input from User and insert it into table data tag

  if (input.value === "") { // check if input is empty
    alert("Please Write Something ....");
  } else {
    var table_item = document.createElement("td");
    table_item.setAttribute("class", "table_data");
    var table_Text = document.createTextNode(input.value);
    table_item.appendChild(table_Text);
  }

  // create delete button and insert it into table data tag
  var DeleteBtn = document.createElement("button");
  var DeleteBtnText = document.createTextNode("Delete");
  DeleteBtn.setAttribute("class", "DeleteBtn");
  DeleteBtn.setAttribute("onclick", "deleteItems(this)");
  DeleteBtn.appendChild(DeleteBtnText);
  var table_2 = document.createElement("td");
  table_2.appendChild(DeleteBtn);

  //  create edit button and insert it into table data tag
  var editBtn = document.createElement("button");
  var editBtnText = document.createTextNode("Edit");
  editBtn.setAttribute("class", "editBtn");
  editBtn.setAttribute("onclick", "editItems(this)");
  editBtn.appendChild(editBtnText);
  var table_3 = document.createElement("td");
  table_3.appendChild(editBtn);

  //    make table row and insert user input , delete button and edit button in it
  var table = document.createElement("tr");
  table.appendChild(table_item);
  table.appendChild(table_2);
  table.appendChild(table_3);

  // now add this table row and colomns to table
  output.appendChild(table);
  input.value = "";
}

//   remove all elements
function deleteall() {
  output.innerHTML = "";
}

//   delete specific element
function deleteItems(e) {
  e.parentElement.parentElement.remove();
}

//   edit specific element
function editItems(e) {
    //get target element 
  var get_row = e.parentElement.parentElement;
  // pass target element value to input
  input.value = get_row.firstChild.innerText;
  get_row.style.color = "red";

  // replace add button with update button
  btns[0].style.display = "none";
  btns[1].style.display = "inline";

  // save this row to modify
  editable_row = get_row;
}

function updateTodo() {
    // get row and insert input value 
  editable_row.firstChild.innerText = input.value;
  editable_row.style.color = "yellow";

  // replace update button with add button
  btns[0].style.display = "inline";
  btns[1].style.display = "none";

  // empty input
  input.value = "";
}
