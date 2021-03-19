  function processFormSubmission() {
    var first_name = document.getElementById("fname").value;
    var last_name = document.getElementById("sname").value;
    var date_var = document.getElementById("date_var").value;
    var type_var = document.getElementById("type_var").value;
    var place_var = document.getElementById("location").value;
  
    document.getElementById("f").innerHTML = first_name;
    document.getElementById("s").innerHTML = last_name;
    document.getElementById("d").innerHTML = date_var;
    document.getElementById("t").innerHTML = type_var;
    document.getElementById("l").innerHTML = place_var;
  
  
    // do not submit the form
    return false;
  }