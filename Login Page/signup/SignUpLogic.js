let userNameArray = [];
let emailArray = [];
let passwordArray = [];

function SubmitSignUp() {

  let username = document.getElementById("userNameInput").value;
  let email = document.getElementById("emailInput").value;
  let password = document.getElementById("passwordInput").value;

  userNameArray.push(username);
  emailArray.push(email);
  passwordArray.push(password);


  location.href = "../login/login.html";


alert("Succesfully Signed Up");

}


function onLogIn(){

  let email = document.getElementById("emailID");
  let password = document.getElementById("passwordID");


    console.log("Its right");


    location.href = "../../Seller Page/seller-page.html";

    alert("Succesfully Logged In");


  


}
