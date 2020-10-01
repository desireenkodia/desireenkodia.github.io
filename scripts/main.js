let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fruits.png') {
      myImage.setAttribute('src','images/cake.png');
    } else {
      myImage.setAttribute('src','images/fruits.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUsername();
    }else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Food is delicious ' + myName;    
    }
    
}



myButton.onclick = function(){
    setUsername();
}