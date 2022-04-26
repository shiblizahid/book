document.write("<h2><u>Oxy's Loan Service<u/><h2/>");

var age = parseInt(prompt("Enter Age : "));
var gender = prompt("Kindly Enter Your Gender : ");
var assets = prompt("Enter Your Assets : ");

if ((age >= 16 && age <= 25) && (gender == "male") && (assets > 2000)) {
    document.write("You Are Eligible For Getting 100,000");
}
else if ((age >= 16 && age <= 22) && (gender == "female") && (assets > 2000)) {
    document.write("<h4>You Are Eligible For Getting 50,000<h4/>");
}
else if ((age >= 25 && age <= 30) && (gender == "male") && (assets > 5000)) {
    document.write("<h4>You Are Eligible For Getting 250,000<h4/>");
}
else if ((age >= 23 && age <= 30) && (gender == "female") && (assets > 4000)) {
    document.write("<h4>You Are Eligible For Getting 200,000<h4/>");
}
else{
    document.write("<h2 style='color: rgb(132, 10, 10);'>Your Not Eligible! Get Lost<h2/>");
}



var hardness = parseInt(prompt("Tell The Hardness oF Steel : "));
var carbon = parseFloat(prompt("Enter Carbon Of Steel : "));
var tensile = parseInt(prompt("Enter Tensile Of Steel : "));

if ((hardness > 50) && (carbon < 0.7) && (tensile > 5600)) {
    document.write("You Have Get <h1> A+ <h1/>")
}

else if ((hardness > 50) && (carbon < 0.7)) {
    document.write("You Have Get <h1> B <h1/>")
}

else if ((carbon < 0.7) && (tensile > 5600)) {
    document.write("You Have Get <h1> C <h1/>")
}
else{
    document.write("You Have Get <h1> D <h1/>");
}

var days = parseInt(prompt("Enter How Much Days Late : "));
if (days <= 5) {
    document.write("Charge Is 50 Paise");
}
else if ((days >= 6) && (days <= 10) ){
    document.write("Charge Is 1Rs");
}
else if ((days > 10) && (days <= 30)){
    document.write("Charge Is 5Rs");
}
else if (days > 30){
    document.write("Your Membership Is Cancelled");
}
else{
    document.write("Invalid")
}