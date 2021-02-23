
var age=14;



var userAge=prompt("PLEASE ENTER YOUR AGE!! YOU HAVE TO BE +14 ");



if (userAge>age){
    console.log("YOU CAN PLAY");
    document.getElementById("play").innerHTML = "You Can play ";
}else {
    alert("OPPS! SORRY YOUR AGE DOES NOT QUALIFED YOU TO PLAY THE GAME");
    document.getElementById("play").innerHTML = "You Can not play ";
}


var userName=prompt("Plz enter yr name");

document.getElementById("name").innerHTML = "Your Name : "+userName;
document.getElementById("age").innerHTML = "Your Age : "+userAge;

confirm("THANK YOU FOR THE VISIT");











 