/*
**********************************************
Create :DIEGO CASALLAS
Date :20/10/2016

*/
//Variales
var dato;
const expressionData = /^\s+$/;
const expressionEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
const expressionPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

$(document).ready(function () {


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
    window.location.assign("/Login/Index");
    sessionStorage.removeItem("dataUser");
    sessionStorage.removeItem("session");
 
}

//Function no back button 
function nobackbutton() {
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button" //chrome
    window.onhashchange = function () { window.location.hash = "no-back-button"; }
}
//Function close Session
function closeSession() {

    if (confirm("Esta segur@ de cerrar sesión") == true) {
        redirection();
        location.reload();
    } 
    
}
function validateSession(dataUrl) {
  
    let session = sessionStorage.getItem("session");
    
    if (dataUrl.search("Login") == -1 && session === "TRUE") {
        loadDataUser(sessionStorage.getItem("dataUser"));
        
    } else {
       redirection();
    }
    
  
}
// get Url
function getUrl(data) {

    let search = data.indexOf("?");
    if (search == -1) {
         redirection();
    } else {

        return data.substring(search + 1, data.length).replace("data=", "");
    }
  
}
function StorageLogin(data) {
    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        // Store
        sessionStorage.setItem("dataUser", JSON.stringify(data));
        sessionStorage.setItem("session", "TRUE");
        clearTextBox();
        window.location.assign("/Home/Home");


    } else {
        // Sorry! No Web Storage support..
    }
}
