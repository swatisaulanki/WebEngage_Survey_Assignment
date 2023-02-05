const InputMobile = document.querySelector("#mobiles");
const Input = window.intlTelInput(InputMobile, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
document.querySelector("form").addEventListener("submit", check);
var arrays = [];
function check() {
  event.preventDefault();
  var Email = document.querySelector("#email").value;
  var Mobile = document.querySelector("#mobiles").value;
  if (Email == "") {
    document.getElementById("emailsId").innerHTML = "Required field";
    document.getElementById("mobilesId").innerHTML = "Required field";
    return false;
  }
  if (Mobile == "") {
    document.getElementById("mobilesId").innerHTML = "Required field";
    return false;
  }
  if (Mobile.length > 10 || Mobile.length < 10) {
    document.getElementById("mobilesId").innerHTML =
      "You have entered an invalid Mobile number";
    return false;
  }

  var obje = {
    email: Email,
    mobiles: Mobile,
    codes: Input,
  };

  arrays.push(obje);
  console.log(arrays);
  localStorage.setItem("details", JSON.stringify(arrays));
  alert("Thank You For The Survey");
  window.location.href = "./servey.html";
}
