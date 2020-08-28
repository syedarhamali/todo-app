var table_input = document.getElementById('table-input');

function insertTodo(){
    //   get Input from User and insert it into table data tag
    var todo_input = document.getElementById('todo-input');
    if(todo_input.value === ""){
        alert("Please Write Something ....")
    }
    else{
        var table_item = document.createElement('td');
        table_item.setAttribute("class","table_data");
        var table_Text = document.createTextNode(todo_input.value);
        table_item.appendChild(table_Text);
    }
    
    // create delete button and insert it into table data tag
    var DeleteBtn = document.createElement("button");
    var DeleteBtnText = document.createTextNode("Delete");
    DeleteBtn.setAttribute("class","DeleteBtn")
    DeleteBtn.setAttribute("onclick","deleteItems(this)")
    DeleteBtn.appendChild(DeleteBtnText);
    var table_2 = document.createElement('td');
    table_2.appendChild(DeleteBtn);
    
        //  create edit button and insert it into table tag
    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
    editBtn.setAttribute("class","editBtn");
    editBtn.setAttribute("onclick","editItems(this)");
    editBtn.appendChild(editBtnText);
    var table_3 = document.createElement('td');
    table_3.appendChild(editBtn);

    //    make table row and insert user input , delete button and edit button in it 
    var table = document.createElement('tr');
    table.appendChild(table_item);
    table.appendChild(table_2);
    table.appendChild(table_3);

    // now add this table row and colomns to table 
    table_input.appendChild(table);
    todo_input.value = ""
}

//   remove all elements 
function deleteall(){
    table_input.innerHTML = ""
}
 
//    delete specific element 
function deleteItems(para){
    para.parentNode.parentNode.remove();
}
 
//   edit specific element 
function editItems(para){
    var modifiedValue = prompt("write your value",para.parentNode.parentNode.firstChild.firstChild.nodeValue);
    para.parentNode.parentNode.firstChild.firstChild.nodeValue = modifiedValue
}