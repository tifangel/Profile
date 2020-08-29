// For Typing text
const typedTextSpan = document.querySelector(".text-bio");
const cursorSpan = document.querySelector(".cursor");

// const textArray = ["Welcome to My Website", "Have a Nice Day", "Enjoy Your Life", "And Have Fun!!!"];
const textArray = ["You want to know"];
const typingDelay = 200;
const aresingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < textArray[textArrayIndex].length){
        // if(cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }else{
        // cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}
function erase(){
    if(charIndex > 0){
        // if(cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, aresingDelay);
    }else{
        // cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

var myStyleSheet = document.createElement('style');
myStyleSheet.type = "text/css";
document.head.appendChild(myStyleSheet);
function circularTextLeft(txt,radius,id){
    var text = txt.split("");
    var classIndex = document.getElementById(id);
    
    var deg = 360/txt.length, origin = 0, rotate = 360, char = 0;
    var style = "";
    text.forEach(element => {
        element = `<p class='char${id}${char}' style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%; animation: circular${id}${char} 20s infinite linear;'>${element}</p>`;
        classIndex.innerHTML += element;
        style += '@keyframes circular' + id + char + '{' +
            '0%{ transform: rotate(' + rotate + 'deg);}'
            + '100%{ transform: rotate(' + origin + 'deg);}}';
        origin += deg;
        char++;
        rotate = 360+origin;
    });
    myStyleSheet.innerHTML += style;
}
function circularTextRight(txt,radius,id){
    var text = txt.split("");
    var classIndex = document.getElementById(id);
    
    var deg = 360/txt.length, origin = 0, rotate = 360, char = 0;
    var style = "";
    text.forEach(element => {
        element = `<p class='char${id}${char}' style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%; animation: circularR${id}${char} 20s infinite linear;'>${element}</p>`;
        classIndex.innerHTML += element;
        style += '@keyframes circularR' + id + char + '{' +
            '0%{ transform: rotate(' + origin + 'deg);}'
            + '100%{ transform: rotate(' + rotate + 'deg);}}';
        origin += deg;
        char++;
        rotate = 360+origin;
    });
    myStyleSheet.innerHTML += style;
}
circularTextRight("You sleep to see your dreams. I stay awake and live mine. ",150,"circle-text-1");
circularTextLeft("Life is short, time is fast, no replay, no rewind, so enjoy every moment as it comes. ",200,"circle-text-2");

document.addEventListener("DOMContentLoaded", function(){
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});