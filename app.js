

//console.log(localStorage)

// local storage always save string 

localStorage.setItem("email", "umair@.com")

var email = localStorage.getItem("email")

// console.log("email=>", email)

// // array ya object ko store karna

// var todos = ["Fajr Namaz" , "Tilawat" , "Araam"]

// var todosString = JSON.stringify(todos)

// localStorage.setItem("todos", JSON.stringify(todos))

// // get data from local storage

// var todos = localStorage.getItem("todos")

// todos = JSON.parse(todos)

// console.log("todos=>", todos)


var email = document.getElementById("email")
var password = document.getElementById("password")
var user_email = document.getElementById("user_email")
var login_container = document.getElementById("login_container")
var home_container = document.getElementById("home_container")
var note = document.getElementById("note")


function loginUser(){
    if( !email.value || !password.value ) 
        return alert("please add email and password.")

    localStorage.setItem("email", email.value);
    checkedUserLogin();
}

function checkedUserLogin(){
    var email = localStorage.setItem("email")
    if(email){
        login_container.style.display = "none"
        home_container.style.display = "block"
        user_email.innerHTML = email
    }else{
        login_container.style.display = "block"
        home_container.style.display = "none"
    }
}
checkedUserLogin();


function logout(){
    localStorage.removeItem("email")
    checkedUserLogin()
}

function submitNote(){
    var email = localStorage.getItem("email")

    var obj = {
        email : email ,
        note : note ,

    };

    saveValueToLocalStorage(obj);

    note.value = ""
}

function saveValueToLocalStorage(obj){
   var notes = localStorage.getItem("notes")

   if(notes){

    notes = JSON.parse(notes)
    notes.push(obj)
    localStorage.setItem("notes" , JSON.stringify(notes))

   }else{
    notes = [obj]

    localStorage.setItem("notes" , JSON.stringify(notes))
   }

   displayUserNotes()
}

function displayUserNotes(){
    var notes = localStorage.getItem("notes")
    var list = document.getElementById("list")

    if(notes){
        list.innerHTML = "";
        notes = JSON.parse(notes)
        notes.forEach(function (data, ind){
            var liElement = `<li class="border rounded p-2 my-2">
               ${data.note}
               <p>${data.email}</p>
               </li>`;
               list.innerHTML += liElement;
        })
    }
}

displayUserNotes()