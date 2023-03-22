document.addEventListener("DOMContentLoaded", () =>{
let submit = document.getElementById('assign')
submit.addEventListener("click", (event) => {
    event.preventDefault();

    function assignAkanName() {
         //collect date input from html and convert into date format
    let dateInput = document.getElementById("birthdate").value
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
  let dateParts = dateOfBirth.split("-");
  let dayOfMonth = parseInt(dateOfBirth[0]);
  let month = parseInt(dateOfBirth[1]);
  let year = parseInt(dateOfBirth[2]);

    //split year into century digits and year digits
  let centuryDigits = Math.floor(year / 100);
  let yearDigits = year % 100;

   //find the day of the week
   let dayOfWeek = ( ( (centuryDigits / 4) - (2 * centuryDigits) - 1) + ((5 * yearDigits / 4) ) + ((26 * (month + 1) / 10)) + dayOfMonth ) % 7;

   let number = math.trunc(dayOfWeek)
 let day;
 
 if (number === 0) {
       day = "Sunday";
 } else if (number === 1) {
   day = "Monday";
 } else if (number === 2) {
   day = "Tuesday";
 } else if (number === 3) {
   day = "Wednesday";
 } else if (number === 4) {
   day = "Thursday";
 } else if (number === 5) {
   day = "Friday";
 } else if (number === 6) {
   day = "Saturday";
 }
 
  //collect gender input from html
  let gender = document.querySelector('input[name="gender"]:checked').value;

  // Check if gender is provided
  if (gender !== 'male' && gender !== 'female') {
    throw new Error('Invalid gender: ' + gender);
  }


    }
    
    
})


})