    function signin() {
        window.location.href = "signin.html"
    };
    function signup() {
        window.location.href = "signup.html"
    };
    function home(){
        window.location.href = "frontpage.html"
    };
var signinId
var signinPassword
var signupId
var signupPassword
var rePassword
$(document).on("click", "#submitSignin", function(){
    signinId = $('#signinId').val()
    signinPassword = $('#signinPassword').val()
    console.log(signinId, signinPassword)
    $('#signinId').val('')
     $('#signinPassword').val('')
});
$(document).on("click", "#submitSignup", function(){
     signupId = $('#signupId').val()
     signupPassword = $('#signupPassword').val()
     rePassword = $('#signupRePassword').val()
     console.log(signupId, signupPassword, rePassword)
     $('#signupId').val('')
     $('#signupPassword').val('')
     $('#signupRePassword').val('')
 });