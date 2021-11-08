// // var submitBtn = document.getElementById('submit');
// // var parentItem = document.getElementById("myList")
// // submitBtn.addEventListener("click", func);
// // function func() {
// //     var myValue =  document.getElementById('myText').value; //
// //      var entry = document.createElement('LI');
// //      entry.appendChild(document.createTextNode(myValue)) ;
// //      entry.classList.add('list-group-item', 'subjectName');


// //      var createnewButton = document.createElement('BUTTON');
// //      createnewButton.appendChild(document.createTextNode('Remove'));
// //      createnewButton.setAttribute("class", "btn btn-danger");

// //      entry.appendChild(createnewButton) ;
// //      //<button class="btn btn-danger">Remove</button>
// //       parentItem.appendChild(entry);
// //      document.getElementById('myText').value="";
// // }
 
// // var allSubjectName = document.querySelectorAll(".subjectName");

// // for (var index = 0; index <allSubjectName.length; index++){
// //     allSubjectName[index].addEventListener("click", function(){
// //         this.classList.toggle("active");
// //     });
// //     allSubjectName[index].querySelector("button").addEventListener("click",
// //     function(){
// //         this.closest(".subjectName").remove();
// //         this.closest(".list-group-item").remove();
// //     });
    
// // }
 



// function addItem(){
// 	var ul = document.getElementById("dynamic-list");
//   var candidate = document.getElementById("candidate");
//   var li = document.createElement("li");
//   li.setAttribute('id',candidate.value);
//   li.setAttribute("class", "list-group-item");
//   li.appendChild(document.createTextNode(candidate.value));
//   ul.appendChild(li);
// }

// function removeItem(){
// 	var ul = document.getElementById("dynamic-list");
//   var candidate = document.getElementById("candidate");

//   var item = document.getElementById(candidate.value);
//   ul.removeChild(item);
// }

// // FORMS VALIDATIONS 


// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   }
  
// function validateform(e){  
    
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var pass = document.getElementById("pass").value;
  
//     if (name==null || name==""){  
//         document.getElementById("nameerror").innerHTML="Name is Required ";
//         document.getElementById('nameerror').style.color = 'red' ; 
        
//     }
//     if (name){  
//         document.getElementById("nameerror").innerHTML="";
//         document.getElementById('nameerror').style.color = '' ; 
        
//     }


//     if (validateEmail(email)) {
//         document.getElementById("emailerror").innerHTML="Email is valid";;
//         document.getElementById('emailerror').style.color = 'green' ; 
//       } 

//     if(!validateEmail(email)) {
//         document.getElementById("emailerror").innerHTML="Email is invalid";;
//         document.getElementById('emailerror').style.color = 'red' ; 
//       }
//     if(pass.length<6){  
//         document.getElementById("passerror").innerHTML="Password must be at least 6 characters long.";  
//         document.getElementById('passerror').style.color = 'red' ; 

//       } 

//       if(pass.length>=6){  
//         document.getElementById("passerror").innerHTML="";  
//         document.getElementById('passerror').style.color = '' ; 

//       }  
// }  


// var id=4;
//  function increment(){
//   id++;
//  }
// var Todo = [
//     {id:1, name:"sunil",age:"24",place:"delhi"},
//     {id:2,name:"sujan",age:"22",place:"assam,"},
//     {id:3,name:"abishek",age:"26",place:"kolkata"},
//     {id:4,name:"chiranjeev",age:"20",place:"bangalore"},
// ]
// function myFunctionDetails(){ 
//     var boxvalue1 = document.getElementById('boxinput1').value;
//     var boxvalue2 = document.getElementById('boxinput2').value;
//     var boxvalue3 = document.getElementById('boxinput3').value;
 
//     increment();
//     Todo.push({id,name:boxvalue1,age:boxvalue2,place:boxvalue3}); 
//      console.log(Todo)
//      document.getElementById('boxinput1').value="";
//      document.getElementById('boxinput2').value="";
//      document.getElementById('boxinput3').value="";
 

//     document.getElementById('test1').innerHTML = Todo.map(user => 
//         `
//         <tr>
//           <th scope="row">${user.id}</th>
//           <td>${user.name}</td>
//           <td>${user.age}</td>
//           <td>${user.place}</td>
         
    
//         </tr> 
//      `
//     ).join('')
//    }



// const displayTodo =()=>{
//   document.getElementById('test1').innerHTML = Todo.map(user => 
//     `
//     <tr>
//       <th scope="row">${user.id}</th>
//       <td>${user.name}</td>
//       <td>${user.age}</td>
//       <td>${user.place}</td>
//       <td> <i class='fas fa-poo'></i> </td>

//     </tr> 
//  `
// ).join('')
  
// }
 
// document.getElementById('test1').innerHTML = Todo.map(user => 
//     `<tr>
//           <th scope="row">${user.id}</th>
//           <td>${user.name}</td>
//           <td>${user.age}</td>
//           <td>${user.place}</td>
//         <td> <i class='fas fa-poo'></i></td>
//      </tr>`
// ).join('')

