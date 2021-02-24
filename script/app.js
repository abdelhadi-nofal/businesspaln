
var age=14;
var userAge=prompt("PLEASE ENTER YOUR AGE!! YOU HAVE TO BE +14 ");
var left=0

function myfun (userAge) {
    var left=15-parseInt(userAge);
    document.getElementById("play").innerHTML = "You Can not play Right Now You Need More  " +left+ "  years";
    
}



myfun(userAge)

if (userAge>age){
    console.log("YOU CAN PLAY");
    document.getElementById("play").innerHTML = "You Can play ";
}else {
    alert("OPPS! SORRY YOUR AGE DOES NOT QUALIFED YOU TO PLAY THE GAME");
    document.write('<img src="https://iapdworld.org/wp-content/uploads/2019/08/Children-6-10-years-of-age.png" alt="childPic">');
}

function render(){
var userName=prompt("Plz enter yr name");
document.getElementById("name").innerHTML = "Your Name : "+userName;
document.getElementById("age").innerHTML = "Your Age : "+userAge;

}

render();












 