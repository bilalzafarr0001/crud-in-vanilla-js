var taskInput = document.getElementById("new-task"); //new-task
var searchInput = document.getElementById("search-task"); //new-task

var addButton = document.getElementsByTagName("button")[0]; //first button
var searchButton = document.getElementsByTagName("button")[1]; //first button

var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

var linebreak = document.createElement("br");
var exist= 0;
var myArray=["GYM", "Shopping", "JOB"]; // basic array 

//New Task List Item
var createNewTaskElement = function(taskString) {
  //Create List Item
  var tabletr = document.createElement("tr");
  var tabletd = document.createElement("td");
  var tabletd1 = document.createElement("td");
  //input (checkbox)
  var checkBox = document.createElement("input"); // checkbox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); // text
  //button.edit
  var editButton = document.createElement("button");
  //button.delete
  var deleteButton = document.createElement("button");

  //Each element needs modifying
  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  //editButton.classList.add('btn btn-secondary', 'edit');
  editButton.className = "btn btn-secondary edit ";
  deleteButton.innerText = "Delete";
  deleteButton.className = "btn btn-danger delete ";

  label.innerText = taskString;
  myArray.push(taskString);
  //console.log(myArray)
  //listItem.className="list-group-item";
  //Each element needs appending
  tabletd.appendChild(checkBox);
  tabletd.appendChild(label);
  tabletd.appendChild(editInput);
  tabletd1.appendChild(editButton);
  tabletd1.appendChild(deleteButton);
  tabletr.appendChild(tabletd);
  tabletr.appendChild(tabletd1);
console.log(tabletr)
    return tabletr;
}

//Add a new task
var addTask = function() {
  console.log("Adding task...");
  //Create a new list item with the text from #new-task:
  var tabletr = createNewTaskElement(taskInput.value);
  //Append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(tabletr);
  bindTaskEvents(tabletr, taskCompleted); 
  taskInput.value = "";
   
}


var searchTask = function() {
  console.log("Searching task...");
  var exists = (myArray.indexOf(searchInput.value) > -1);
  if(exists){
    for(i in myArray){
      if(myArray[i]==searchInput.value){
        alert(myArray[i]+' Item Exists !')
       }
    }
  }
  else {
    alert('Sorry No Such Item Exist!')
  }
}
 

//Edit an existing task
var editTask = function() {
  console.log("Edit task...");
  var tabletd = this.parentNode;
  //console.log(tabletd)
  var tabletd1= tabletd.previousElementSibling;

  console.log(tabletd)
  var editInput = tabletd1.querySelector("input[type=text]");
  var label = tabletd1.querySelector("label");
  var containsClass = tabletd.classList.contains("editMode");
  var editButton = tabletd.getElementsByTagName("button")[0];

  //If the class of the parent is .editMode
  if (containsClass) {
    //Switch from .editMode
    //label text become the input's value
    label.innerText = editInput.value;
    editButton.innerText = "Edit";
    //else
  } else {
    //Switch to .editMode
    //input value becomes the label's text
    editInput.value = label.innerText;
    editButton.innerText = "Save";
  }
  //Toggle .editMode on the parent
  tabletd.classList.toggle("editMode");
}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  var tabletd = this.parentNode;
  var tabletd1= tabletd.previousElementSibling;
  console.log('tabletddd',tabletd1)

   //console.log(listItem.children[1].innerText)

  console.log(myArray.indexOf(tabletd1.children[1].innerText));
   myArray.splice(myArray.indexOf(tabletd1.children[1].innerText),1 )

   console.log(myArray)
  var tbody = tabletd1.parentNode;
  console.log(tbody)
   //Remove the parent list item from the ul
   tbody.removeChild(tabletd);
   tbody.removeChild(tabletd1);
} 
//Mark a task as complete
var taskCompleted = function() {
  console.log("Task complete...");

  //When the Checkbox is checked
  //Append the task list item to the #completed-tasks
  var tabletd = this.parentNode; // inputs 
  var tabletd1 = tabletd.nextElementSibling; // buttons
  var tbody = tabletd.parentNode; // major tr side 
  tbody.appendChild(linebreak);
  completedTasksHolder.appendChild(tbody);
  bindTaskEvents(tbody, taskIncomplete);
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");

  //When the checkbox is unchecked
  //Append the task list item to the #incomplete-tasks
  var tabletd = this.parentNode; // inputs 
  var tabletd1 = tabletd.nextElementSibling; // buttons
  var tbody = tabletd.parentNode; // major tr side 
  tbody.appendChild(linebreak);
  incompleteTasksHolder.appendChild(tbody);
  bindTaskEvents(tbody, taskCompleted);
}
 
var bindTaskEvents = function(taskListItem, checkboxEventHandler) {
  console.log("Bind list item events");
  
  //Select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  //console.log('checkbox', checkBox)
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  //Bind editTask to edit button
  editButton.onclick = editTask;

  //Bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  //Bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkboxEventHandler;
}
 
//Set the click handler to the addTask function
//addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
searchButton.addEventListener("click", searchTask);
 
//Cycle over incompleteTasksHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //Bind events to item's children (taskCompleted)
//  console.log('  Incompleted',incompleteTasksHolder.children.length)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
//Cycle over completedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
  //console.log('completed',completedTasksHolder.children.length)
  //Bind events to item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}