

function date() {
  var nowDate = new Date();
  var datex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var indDate = nowDate.getDay()
  var getDayx = datex[indDate];
  var getDatex = nowDate.getDate();
  var monthx = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  var indMonth = nowDate.getMonth()
  var getMonthx = monthx[indMonth];
  var getFullYearx = nowDate.getFullYear();
  var fullDate = (getDayx + ", " + getDatex + " " + getMonthx + " " + getFullYearx).toUpperCase()
  document.write(fullDate.fontsize("2px").fontcolor("black"))
}



// function greet() {
//   var username = document.getElementById("username")
//   if (username !== "" ){
//   usernamex = username.value
//   alert("Thanks " + usernamex + " for visiting in our website...");
 
// }}
// greet()



// function MAK() {
//     var company_name = "MAK".fontcolor("black");
//     // var slogan = "Display The Future Array".fontcolor("black");
//     document.write("<br/>" + "<br/>" + company_name+"<br/>")
// }
// MAK()

// function copyright() { 
//     var copyright = "Copyright ".fontcolor("black");
//     var year = "2019".fontcolor("black");
//     var copyright_year = copyright + year;
//     document.write("<br />" + copyright_year.fontsize("2px"))
// }


// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("myBtn").style.display = "block";
//   } else {
//     document.getElementById("myBtn").style.display = "none";
//   }
// }    

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }


function facebook_login() {

  var facebook_login = window.open("https://www.facebook.com/login/", "facebook_Login", "width=700,height=800,top=110,left=605")
  var spaces = "                                 "
  var change = document.getElementById("submit2-Button").value = `${spaces}LOADING...${spaces}`
  console.log(facebook_login.value)

  //facebook_login.window.close()
}

function map_popup() {

  var facebook_login = window.open("https://www.google.com/maps?ll=24.881302,67.050424&z=12&t=m&hl=en-US&gl=US&mapclient=embed&cid=7566410669036294863", "map_popup", "width=700,height=800,top=110,left=605")
  // var spaces = "                                 "
  // var change = document.getElementById("submit2-Button").value = `${spaces}LOADING...${spaces}`
  // console.log(facebook_login.value)

  //facebook_login.window.close()
}

/*Get Feedback*/

function getemail() {
  emptyArray = []
  var email_data = document.getElementById('email').value
  emptyArray.push(email_data)
  console.log(emptyArray)
}

function getusername() {
  emptyArray = []
  var username_data = document.getElementById('username').value
  emptyArray.push(username_data)
  console.log(emptyArray)
}

function getContactNum() {
  emptyArray = []
  var contNum_data = document.getElementById('contactnumber').value
  emptyArray.push(contNum_data)
  console.log(emptyArray)
}

function getfeedback() {
  emptyArray = []
  var feedback_data = document.getElementById('feedback').value
  emptyArray.push(feedback_data)
  console.log(emptyArray)
}



  

// function checkSpaces(){
//   var idObject = {
//   username_data : document.getElementById('username').value,
//   contNum_data : document.getElementById('contactnumber').value,
//   email_data :  document.getElementById('email').value,
//   feedback_data : document.getElementById('feedback').value
// }

//   if(idObject.email_data === "" || idObject.username_data === "" || idObject.contNum_data === "" || idObject.feedback_data === ""){
//     alert('Input Field Required');  
//   }
//   else if(idObject.email_data !== "" || idObject.username_data !== "" || idObject.contNum_data !== "" || idObject.feedback_data !== ""){

//     window.location.assign("../index.html") 
//   }
//     document.write('Loading...')
//   }



// function fullFeedback(){
// var fullFB  = {
//   username: getusername(),
//   email: getemail(),
//   contNumber: getContactNum(),
//   feedback:getfeedback()
// }}


// var username_data = document.getElementById('username').value
// var email_data = document.getElementById('email').value
// var contNum_data = document.getElementById('contactnumber').value
// var feedback_data = document.getElementById('feedback').value

//     function FeedbakObject(username, email, contNum, feedback) {
//   this.username_data = username;
//   this.email_data = email;
//   this.contNum_data = contNum;
//   this.feedback_data = feedback;
// }

// var azz  = new FeedbakObject(username_data,email_data,contNum_data,feedback_data)

