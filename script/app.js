
var age=14;
var userAge=prompt("PLEASE ENTER YOUR AGE!! YOU HAVE TO BE +14 ");
var left=0

function myfun (userAge) {
    var left=15-parseInt(userAge);
    document.getElementById("play").innerHTML = "OPPS !!!!You Can not play Right Now You Need   " +left+ " More years";
}

myfun(userAge)

if (userAge>age){
    console.log("YOU CAN PLAY");
    document.getElementById("play").innerHTML = "You Can play And Here Is Your Balls ";
    var num=prompt("How Many Balls Do You Want To Play With? ");
for (i = 1; i <= num; i++) {
    document.write(i,'<img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg" alt="balls">');}
    
    

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














 