document.addEventListener("DOMContentLoaded", () =>{
let submit = document.getElementById('assign')
submit.addEventListener("click", (event) => {
    event.preventDefault();

    function calculateDayOfWeek() {
         //collect input from html and convert into date format
    let dateInput = document.getElementById("birthDate").value
    let dateOfBirth = new Date(dateInput)

    //check whether user provided input
    if(dateInput==null || dateInput==''){
        document.getElementById("message").innerHTML= "Choose a date please";
        return false;
    }

    //execute if user selected date
    else {
        //extract the day,month and year
    }
  let dateParts = dateOfBirth.split("/");
  let dayOfMonth = parseInt(dateOfBirth[0]);
  let month = parseInt(dateOfBirth[1]);
  let year = parseInt(dateOfBirth[2]);

    }
    
    l
})


})