﻿    

    function overBtn(x) {
        x.style.backgroundColor = "white";
        x.style.color = "black";
    }

    function outBtn(x) {
        x.style.backgroundColor = "#474e5d";
        x.style.color = "white";
}
    function overBtn1(x) {
        x.style.backgroundColor = "#474e5d";
        x.style.color = "white";
    }

    function outBtn1(x) {
        x.style.backgroundColor = "white";
        x.style.color = "black";
    }

   
    function SwapDivsWithClick(div1,div2)
{
        d1 = document.getElementById(div1);
        d2 = document.getElementById(div2);
   if( d2.style.display == "none" )
   {
        d1.style.display = "none";
        d2.style.display = "flex"
   }
   else
   {
        d1.style.display = "flex";
        d2.style.display = "none";
   }
}

    //function Redirect() {
    //    alert('You are being redirected');      
    //    }

    function Redirect(x) {
        var confirmButton = document.getElementById(x);
        var userResponse = confirm('You are about to leave this site. If you want to stay, please select cancel.');
        var displayContainer = document.getElementById('confirmResponse');
        var displayMessage = '';
        if (userResponse) {
            var win = window.open("https://www.tuscanyaccommodation.com/tuscany-villas/?gclid=EAIaIQobChMIlcqH3bzi2QIVDEwNCh1Xbg9DEAAYAyAAEgLW1vD_BwE", '_blank');
            win.focus();
        } 
        
    }
    
    function Greeting() {
        var x = document.getElementById("jumbomain");
        var userResponse = prompt('Welcome to Tuscany Villa. What is your name?');
        x.getElementsByTagName('h1')[0].innerText = 'Welcome to Tuscany Villa ' + userResponse;
      }

function GetVilla() {

    var villaArray = new Array(0);
     var userResponse = confirm('Would you like to check the availability of a Villa?');
     while(userResponse) {
        var villa = prompt('Please enter the name of a villa');
        userResponse = confirm('Would you like to add another Villa?');
        villaArray.push(villa);     
     } 
     var d = new Date();
     var m = d.getMonth();
     var x = document.getElementById("villaswap");

     if (m > 0 && m < 4) {

         x.getElementsByTagName('p')[1].innerText = villaArray[0];
     } else if (m > 3 && m < 7) {

         x.getElementsByTagName('p')[1].innerText = villaArray[1];
     } else if (m > 6 && m < 10) {

         x.getElementsByTagName('p')[1].innerText = villaArray[2];
     } else if (m > 9 && m < 13) {

         x.getElementsByTagName('p')[1].innerText = villaArray[3];
     } else {

         x.getElementsByTagName('p')[1].innerText = 'Sorry we have no villas available';

     }
    }

var rndArray = new Array(0);
function genRandom() {

    for (i = 0; i < 25; i++){

      var num = Math.floor(Math.random() * ((25 - 2) + 1) + 2);
      rndArray.push(num);
      
    }
    console.log(rndArray);

}

function luckyNum() {
    var guess = prompt("Please enter a number");
    
    if (guess in rndArray) {

        alert("exists" + rndArray);
    } else {
        alert("nope");
    }
}