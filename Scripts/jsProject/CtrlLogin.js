/*
**********************************************
Create :DIEGO CASALLAS
Date :20/10/2016


*/
//Variales

var user;
var password;

//Star page
$(document).ready(function () {
 
    $('.modal-trigger').leanModal();


});
//Send Login ajax C#
function sendLogin(model) {
    
    $.ajax({
        url: '/Login/LoginEmployee',
        cache: false,
        type: 'POST',
        data: model,
        dataType: "json",
        contentType: "application/json",
        success: function (result) {
            
            if (result.length > 0) {
               // console.log(result);
               
                let dataUser = {
                    iRol_id: result[0].iRol_id,
                    sRol_name: result[0].sRol_name,
                    iBra_buis_id: result[0].iBra_buis_id,
                    sEmp_document: result[0].sEmp_document,
                    sEmp_name: result[0].sEmp_name,
                    sEmp_surname: result[0].sEmp_surname,
                    sEmp_phone: result[0].sEmp_phone,
                    sEmp_phone2: result[0].sEmp_phone2,
                    sEmp_cell_phone: result[0].sEmp_cell_phone,
                    sEmp_cell_phone2: result[0].sEmp_cell_phone2,
                    sEmp_mail: result[0].sEmp_mail,
                    sEmp_mail2: result[0].sEmp_mail2,             

                }
                
                localStorageLogin(dataUser);
                //console.log(dataUser);
             
            }
            else {
                alert("Error usuario o contraseña son  incorrectos");
                clearTextBox();
            }

        },
        error: function (response) {
            alert(response.responseText);
            clearTextBox();

        }

    });

    return false;
}


//Send Reset password Login ajax C#
function sendResetPassword(model) {

    $.ajax({
        url: '/Login/ResetPasswordEmployee',
        cache: false,
        type: 'POST',
        data: model,
        dataType: "json",
        contentType: "application/json",
        success: function (result) {
   
            console.log(result);
            $('#textAnswerResetPassword').text(result);
            clearTextBox();
                

        },
        error: function (response) {
            debugger;
            alert(response.responseText);
            

        }

    });

    return false;
}
//Validate Text Login
function validateLogin(e) {

    let bValidate=true;
     user=$('#user').val();
     password = $('#password').val();

   
    if (!expressionEmail.test(user)) {
        bValidate = false;
    }
    if (expressionData.test(password)) {
        bValidate = false;
    }
    
    if (bValidate) {
        let dataJson = {
            sEmp_mail: user,
            sEmp_password: password,
        }
      
        sendLogin(JSON.stringify(dataJson));
    }
    else {
        alert("Verifique los datos ingresados ");
    }

    
    e.preventDefault();
}
//Validate Text Login
function validateResetLogin(e) {

    let bValidate = true;
    var userReset = $('#ResetPassword').val();
    var textAnswer = $('#textAnswerResetPassword').val();

  
    if (!expressionEmail.test(userReset)) {
        bValidate = false;
    }
  
 

    if (bValidate) {

        let dataJson = {
            sEmp_mail: userReset,

        }
        console.log(dataJson);


        sendResetPassword(JSON.stringify(dataJson));
    }

    else {
        alert("Verifique los datos ingresados ");
    }

    debugger;
    e.preventDefault();
}
function clearTextBox() {
    $('#user').val("");
    $('#password').val("");
    $('#ResetPassword').val("");
  
}
function localStorageLogin(data) {
    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        // Store
        sessionStorage.setItem("dataUser", JSON.stringify(data));
        sessionStorage.setItem("session", "TRUE");
        clearTextBox();
        window.location.assign("/Home/Index");
        
        
    } else {
        // Sorry! No Web Storage support..
    }
}


