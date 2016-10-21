/*
**********************************************
Create :DIEGO CASALLAS
Date :20/10/2016

*/
//Variales
var dato;
const expressionData = /^\s+$/;
const expressionEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;

$(document).ready(function () {

    //validateStorage();
    //validateUrl(document.URL);

})


function ini() {

    dato = setTimeout('alert("si  esta")', 5000); // 5 segundos
}
function parar() {
    clearTimeout(dato);
    ini();

}
//Function validate Storage 
function validateStorage() {
    if (typeof (Storage) !== "undefined") {
      
        if (sessionStorage.getItem("session") === "TRUE") {
       
            //loadDataUser(localStorage.getItem('dataUser'));
            return true;
        } else {
            // GetStorage
            redirection();
           
        }
       
    } else {
        // Sorry! No Web Storage support..
        redirection();
    }
}
//Function redirection  
function redirection() {
    sessionStorage.removeItem("dataUser");
    window.location.assign("/Login/Index");
}
//Function Get data user 
function loadDataUser(dataUser) {

    var dataUserObject = JSON.parse(dataUser);
    console.log(dataUserObject);
   
}
//Function no back button 

function nobackbutton() {
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button" //chrome
    window.onhashchange = function () { window.location.hash = "no-back-button"; }

}
function validateSession(dataUrl) {
  
    let session = sessionStorage.getItem("session");
    
    if (dataUrl.search("Login") == -1 && session === "TRUE") {
        loadDataUser(sessionStorage.getItem("dataUser"));
        
    } else {
       redirection();
    }
    
  
}
