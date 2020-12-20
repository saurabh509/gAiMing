var all_good=false;
var f1=false,f2=false,f3=false;

function validate1() {
  var x = document.getElementById('email');
  var y = document.getElementById("validation01");
  f1=false;
  var letters=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!x.value.match(letters)) {
    y.style.color = "red";
  }
  else{
    f1=true;
  }
  button_val();
}

function validate_1() {
  var y = document.getElementById("validation01");
  y.style.color = "transparent";
}

function validate2() {
  var x = document.getElementById('Name');
  var y = document.getElementById("validation02");
  var letters = /^[a-zA-Z\s]+$/;
  f2=false;
  if (!x.value.match(letters)) {
    y.style.color = "red";
  }
  else{
    f2=true;
  }
  button_val();
}

function validate_2() {
  var y = document.getElementById("validation02");
  y.style.color = "transparent";
}

function validate3() {
  var x = document.getElementById('comment');
  var y = document.getElementById("validation03");
  f3=false;
  var letters =  /^[a-zA-Z0-9\s]+$/;
  if (!x.value.match(letters)){
    y.style.color = "red";
  }
  else{
    f3=true;
  }
  button_val();
}

function validate_3() {
  var y = document.getElementById("validation03");
  y.style.color = "transparent";
}

function button_val() {

  if(f1 && f2 && f3){
    var y = document.getElementById("submit");
    y.style.backgroundColor="green";
    // y.classList.remove("disabled");
    //console.log("hi");
    y.disabled=false
  }
  else{
    var y = document.getElementById("submit");
    y.style.backgroundColor="red";
    // y.classList.add("disabled");
    y.disabled = true;
  }
}
