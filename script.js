let rollNo = 1;

function addStudent() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    let table = document.getElementById("studentTable");

    let row = table.insertRow();

    row.innerHTML = `
        <td>${rollNo++}</td>
        <td>${name}</td>
        <td class="status">Not Marked</td>
        <td>
            <button onclick="markPresent(this)">Present</button>
            <button onclick="markAbsent(this)">Absent</button>
            <button onclick="deleteStudent(this)">Delete</button>
        </td>
    `;

    document.getElementById("name").value = "";
}

function markPresent(btn) {
    let row = btn.parentElement.parentElement;
    let status = row.querySelector(".status");

    status.innerText = "Present";
    status.className = "status present";
}

function markAbsent(btn) {
    let row = btn.parentElement.parentElement;
    let status = row.querySelector(".status");

    status.innerText = "Absent";
    status.className = "status absent";
}

function deleteStudent(btn) {
    let row = btn.parentElement.parentElement;
    row.remove();
}
let index = 0;

function showSlide() {
    let slides = document.getElementById("slides");
    slides.style.transform = `translateX(${-index * 800}px)`;
}

function nextSlide() {
    index++;
    if (index > 2) {
        index = 0;
    }
    showSlide();
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = 2;
    }
    showSlide();
}

let captchaCode = "";
/* generate captcha */
function generateCaptcha(){
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    captchaCode = "";
    for(let i=0;i<5;i++){
        captchaCode += chars[Math.floor(Math.random()*chars.length)];
    }
    document.getElementById("captchaDisplay").innerHTML = captchaCode;
}
generateCaptcha();

function submitForm(){
  let name = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let captcha = document.getElementById("captchaInput").value.trim();
  let valid = true;

  document.getElementById("errName").innerHTML="";
  document.getElementById("errEmail").innerHTML="";
  document.getElementById("errMsg").innerHTML="";
  document.getElementById("errCaptcha").innerHTML="";

  if(name==""){document.getElementById("errName").innerHTML="Full name is required.";valid=false;}

  let emailPattern=/^[a-zA-Z0-9._]+@[a-z]+\.[a-z]+$/;
  if(email==""){document.getElementById("errEmail").innerHTML="Email is required.";valid=false;}
  else if(!emailPattern.test(email)){document.getElementById("errEmail").innerHTML="Enter valid email.";valid=false;}

  if(message==""){document.getElementById("errMsg").innerHTML="Message is required.";valid=false;}

  if(captcha!=captchaCode){document.getElementById("errCaptcha").innerHTML="Captcha is incorrect.";generateCaptcha();valid=false;}

  if(valid) alert("Form submitted successfully!");
  return valid;
}

function resetForm(){
document.querySelector("form").reset();
document.querySelectorAll(".err")
.forEach(function(e){
e.innerHTML="";
});
generateCaptcha();

}

/* Load CAPTCHA on page load */
window.onload = generateCaptcha;