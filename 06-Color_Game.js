//Variables
var numSquares = 6;
var colors = [];
var pickedColor;
//Selectors
var squares = document.querySelectorAll(".square");
var h1 = document.getElementsByTagName("h1")[0];
//Display
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay");
//Buttons
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
    
    for(var i = 0; i < squares.length; i++){
        //EventListeners:
        squares[i].addEventListener("click", function(){
            var clicked = this.style.backgroundColor;
            //Compare if the clicked color is the same as the pickedColor:
            if(clicked == pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clicked);
                resetButton.textContent = "Play again?";
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }

    reset();
}


resetButton.addEventListener("click", reset);

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function pickColor(){
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function generateRandomColors(difficult){
    //make an array
    var arr = []
    //add random colors to array
    for(var i = 0; i < difficult; i++){
        //get random color
        arr.push(randomColor());
    }
    //return the array
    return arr;
}


function randomColor(){
    //picked red 0-255
    var r = Math.floor(Math.random() * 256);
    //picked green 0-255
    var g = Math.floor(Math.random() * 256);
    //picked blue 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +  ")"; 
}

function reset(){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick new color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue"
    resetButton.textContent = "New colors";
    messageDisplay.textContent = "";
}