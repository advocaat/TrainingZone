/**
 * Created by adam on 1/04/2015.
 */

var loginName = "";

(function(){


    var loggedIn = function(){
      if(loginName === ""){
          return false;
      }else{
          return true;
      }
    };

    var images = document.getElementsByTagName("img");
    var button1 = images[1];

var buttonOn = loggedIn();

function createButton(){
    console.log("runnnn");
    button1.src = "images/buttonoff.png";
    var section = document.getElementById("login");
    var loginarea = document.createElement("input");
    var loginbutton = document.createElement("input");
        loginarea.type = "text";
        loginbutton.type = "button";
        loginbutton.value = "Login";
        loginbutton.id  = "loginbutton";
        loginbutton.onclick = function () {
            console.log("hello");
            if (loginarea.textContent !== "") {//problem here
                loginName = loginarea.textContent;
		console.log("woot");
                section.removeChild(loginarea);
                section.removeChild(loginbutton);
            }
        };
    /*Gave up on trying to get the login button to become responsive here after some hours of wasted time*/

    button1.onclick = function(){
        if(!buttonOn) {
            button1.src = "images/buttonon.png";



            section.appendChild(loginarea);
            section.appendChild(loginbutton);

            buttonOn = true;

        }else{
            button1.src="images/buttonoff.png";
            section.removeChild(loginarea);
            section.removeChild(loginbutton);
            if(!loggedIn()) {
                buttonOn = false;
            }
            else{
                buttonOn = true;
            }
        }
    };
}
    createButton();
}());

