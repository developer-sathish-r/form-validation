const splchar = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/;
const splchrstreet = /[`!@#$%^&*()_\-+={};':"\\|<>\/?~]/;
const spldoor = /[`!@#$%^&*()_\-+={};':"\\|<>?~]/;
const numregex = (/[^0-9]+$/);
const numregex1 = (/[0-9]+$/);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const pattern = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
const numcode = /^(\d{6})$/;



function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const street = document.getElementById("street").value;
    const doorNum = document.getElementById("doorNum").value;
    const city = document.getElementById("city").value;
    const postCode = document.getElementById("postCode").value;
    const country = document.getElementById("country").value;
    const arrive = document.getElementById("arrive").value;
    const depart = document.getElementById("depart").value;
    const people = document.getElementById("people").value;
    const room = document.getElementById("room").value;
    const bed = document.getElementById("bed").value;
    const comment = document.getElementById("comment").value;
    let valid=0;

  if(true){
    if (!name) {
        document.getElementById('name').style.borderColor = 'red';
        document.getElementById("errorName").innerHTML = "Name must be filled out";     
    }

    else if (splchar.test(name)) {
        document.getElementById('name').style.borderColor = 'red';
        document.getElementById("errorName").innerHTML = "Special(s) characters are not allowed";     
    }

    else if (!numregex.test(name)) {
        document.getElementById('name').style.borderColor = 'red';
        document.getElementById("errorName").innerHTML = "Number(s) are not allowed"; 
    }

    else {
        document.getElementById('name').style.borderColor = 'green';
        document.getElementById("errorName").innerHTML = "";
        valid++;
    }

    // //Email validation
     if (!email) {
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById("errorMail").innerHTML = "Email must be filled out";
    }

    else if (!emailRegex.test(email)) {
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById("errorMail").innerHTML = "Please enter a valid email address.";
    }

    else {
        document.getElementById('email').style.borderColor = 'green';
        document.getElementById("errorMail").innerHTML = "";
        valid++;
    }

    //phone
     if (!phone) {
        document.getElementById('phone').style.borderColor = 'red';
        document.getElementById("errorPhone").innerHTML = "Phone number must be filled out";
    }

    else if (!pattern.test(phone)) {
        document.getElementById('phone').style.borderColor = 'red';
        document.getElementById("errorPhone").innerHTML = "Please enter a valid phone number.";
    }

    else{
        document.getElementById('phone').style.borderColor = 'green';
        document.getElementById("errorPhone").innerHTML = "";
        valid++;
    }

    //street
     if (!street) {
        document.getElementById('street').style.borderColor = 'red';
        document.getElementById("errorStreet").innerHTML = "Please enter your street name"; 
    }

    else if (splchrstreet.test(street)) {
        document.getElementById('street').style.borderColor = 'red';
        document.getElementById("errorStreet").innerHTML = "Special(s) characters are not allowed";
    }
    
    else {
        document.getElementById('street').style.borderColor = 'green';
        document.getElementById("errorStreet").innerHTML = "";
        valid++;
    }

    //door-number
    if (!doorNum) {
        document.getElementById('doorNum').style.borderColor = 'red';
        document.getElementById("errorDoor").innerHTML = "Please enter your door number";
    }
    
    else if (spldoor.test(doorNum)) {
        document.getElementById('doorNum').style.borderColor = 'red';
        document.getElementById("errorDoor").innerHTML = "Special(s) characters are not allowed";
    }

     else {
        document.getElementById('doorNum').style.borderColor = 'green';
        document.getElementById("errorDoor").innerHTML = "";
        valid++;
    }

    //city
     if (!city) {
        document.getElementById('city').style.borderColor = 'red';
        document.getElementById("errorCity").innerHTML = "Please enter your city name";
    }

    else if (splchar.test(city)) {
        document.getElementById('city').style.borderColor = 'red';
        document.getElementById("errorCity").innerHTML = "Special(s) characters are not allowed";
    }

    else {
        document.getElementById('city').style.borderColor = 'green';
        document.getElementById("errorCity").innerHTML = "";
        valid++;
    }

    //post code
     if (!postCode) {
        document.getElementById('postCode').style.borderColor = 'red';
        document.getElementById("errorCode").innerHTML = "Please enter your post code";
    }

    else if (splchar.test(postCode)) {
        document.getElementById('postCode').style.borderColor = 'red';
        document.getElementById("errorCode").innerHTML = "Special(s) characters are not allowed";
    }

    else if(!numcode.test(postCode)){
        document.getElementById('postCode').style.borderColor = 'red';
        document.getElementById("errorCode").innerHTML = "Please enter 6 digits only";
    }

    else {
        document.getElementById('postCode').style.borderColor = 'green';
        document.getElementById("errorCode").innerHTML = " ";
        valid++;
    }

    //country
    if (!country) {
        document.getElementById('country').style.borderColor = 'red';
        document.getElementById("errorCountry").innerHTML = "Please enter your  country";
    }

    else if (splchar.test(country)) {
        document.getElementById('country').style.borderColor = 'red';
        document.getElementById("errorCountry").innerHTML = "Special(s) characters are not allowed";
    }

    else {
        document.getElementById('country').style.borderColor = 'green';
        document.getElementById("errorCountry").innerHTML = "";
        valid++;
    }
    //arrive
    if (!arrive) {
        document.getElementById('arrive').style.borderColor = 'red';
        document.getElementById("errorArrive").innerHTML = "Please  select your arrive date";
    }
    else{
        document.getElementById('arrive').style.borderColor = 'green';
        document.getElementById("errorArrive").innerHTML = "";
        valid++;
    }

    //depart
     if (!depart) {
        document.getElementById('depart').style.borderColor = 'red';
        document.getElementById("errorDepart").innerHTML = "Please  select your arrive date";
    }
    else{
        document.getElementById('depart').style.borderColor = 'green';
        document.getElementById("errorDepart").innerHTML = "";
        valid++;
    }

    //people
     if (!people) {
        document.getElementById('people').style.borderColor = 'red';
        document.getElementById("errorPeople").innerHTML = "Please select how many people";
    }
    else{
        document.getElementById('people').style.borderColor = 'green';
        document.getElementById("errorPeople").innerHTML = "";
        valid++;
    }

    //room
     if (!room) {
        document.getElementById('room').style.borderColor = 'red';
        document.getElementById("errorRoom").innerHTML = "Please select how many room you want?";
    }
    else{
        document.getElementById('room').style.borderColor = 'green';
        document.getElementById("errorRoom").innerHTML = "";
        valid++;
    }

    //bedding
     if (!bed) {
        document.getElementById('bed').style.borderColor = 'red';
        document.getElementById("errorBed").innerHTML = "Please select how many beds need?";
    }
    else{
        document.getElementById('bed').style.borderColor = 'green';
        document.getElementById("errorBed").innerHTML = "";
        valid++;
    }

    //command
     if (!comment) {
        document.getElementById('comment').style.borderColor = 'red';
        document.getElementById("errorComment").innerHTML = "Please tell  your suggestion";
    }
    else {
        document.getElementById('comment').style.borderColor = 'green';
        document.getElementById("errorComment").innerHTML = ""; 
        valid++;
        if(valid===14){
            alert("Your form sucessfully submitted")
        }
        // else{
        //     alert("Oops! Please  fill this  form correctly" )
        // }
    }
  }   
}
