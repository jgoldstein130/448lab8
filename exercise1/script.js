function clicked(){
  let a = document.getElementById("pass1").value;
  let b = document.getElementById("pass2").value;
  if(a != b){
    alert("Your passwords do not match");
  }
  if(a.length < 8 || b.length < 8){
    alert("Your password needs to be at least 8 characters long.");
  }
}
